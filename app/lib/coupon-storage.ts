import { GeneratedCoupon, CouponGenerationResponse } from './gemini-coupons';

// Use environment variable or in-memory storage for Vercel compatibility
const isVercel = process.env.VERCEL === '1' || process.env.VERCEL_ENV || process.env.NODE_ENV === 'production';
console.log('🌍 Environment check:', {
  VERCEL: process.env.VERCEL,
  VERCEL_ENV: process.env.VERCEL_ENV,
  NODE_ENV: process.env.NODE_ENV,
  isVercel: isVercel
});

export interface StoredCoupons {
  coupons: GeneratedCoupon[];
  metadata: {
    total_count: number;
    last_updated: string;
    source: string;
    version: string;
  };
}

// In-memory storage for Vercel compatibility
let memoryCache: StoredCoupons | null = null;
const CACHE_DURATION = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

/**
 * Save coupons to memory cache (Vercel compatible)
 */
export async function saveCoupons(couponResponse: CouponGenerationResponse): Promise<void> {
  try {
    const storedData: StoredCoupons = {
      coupons: couponResponse.coupons,
      metadata: {
        total_count: couponResponse.coupons.length,
        last_updated: new Date().toISOString(),
        source: 'Live Data',
        version: '1.0.0'
      }
    };

    // Store in memory cache
    memoryCache = storedData;
    console.log('✅ Coupons saved to memory cache successfully');
    
    // Also try to save to file system if not on Vercel (for local development)
    if (!isVercel) {
      try {
        const fs = await import('fs/promises');
        const path = await import('path');
        const filePath = path.join(process.cwd(), 'public', 'data', 'coupons.json');
        const dataDir = path.dirname(filePath);
        
        try {
          await fs.access(dataDir);
        } catch {
          await fs.mkdir(dataDir, { recursive: true });
        }
        
        await fs.writeFile(filePath, JSON.stringify(storedData, null, 2));
        console.log('✅ Coupons also saved to file system for local development');
      } catch (fileError) {
        console.log('⚠️ Could not save to file system (expected on Vercel):', fileError.message);
      }
    }
  } catch (error) {
    console.error('❌ Error saving coupons:', error);
    throw error;
  }
}

/**
 * Load coupons from memory cache or fallback file
 */
export async function loadCoupons(): Promise<StoredCoupons | null> {
  console.log(`🔍 Loading coupons - isVercel: ${isVercel}, hasMemoryCache: ${!!memoryCache}`);
  
  // On Vercel, always generate fresh (no persistent storage)
  if (isVercel) {
    console.log('🔄 On Vercel - generating fresh coupons each time for real-time updates');
    return null; // Force regeneration
  }
  
  // First check memory cache for local development
  if (memoryCache) {
    console.log('✅ Loading coupons from memory cache');
    return memoryCache;
  }
  
  // Fallback to file system for local development
  try {
    const fs = await import('fs/promises');
    const path = await import('path');
    const filePath = path.join(process.cwd(), 'public', 'data', 'coupons.json');
    const data = await fs.readFile(filePath, 'utf-8');
    const storedData: StoredCoupons = JSON.parse(data);
    
    // Validate the data structure
    if (!storedData.coupons || !Array.isArray(storedData.coupons)) {
      console.warn('⚠️ Invalid coupon data structure, returning null');
      return null;
    }
    
    console.log('✅ Loading coupons from file system (local development)');
    return storedData;
  } catch (error) {
    console.log('📝 No existing coupon data found, will generate new ones');
    return null;
  }
}

/**
 * Check if coupons need to be updated (more aggressive for real-time updates)
 */
export function shouldUpdateCoupons(lastUpdated: string): boolean {
  const lastUpdate = new Date(lastUpdated);
  const now = new Date();
  const hoursSinceUpdate = (now.getTime() - lastUpdate.getTime()) / (1000 * 60 * 60);
  
  // On Vercel (production), be more aggressive with updates since we use memory cache
  if (isVercel) {
    // Update if more than 2 hours since last update (for real-time freshness)
    return hoursSinceUpdate >= 2;
  }
  
  // For local development, check if it's a new day
  const lastUpdateDate = new Date(lastUpdate.getFullYear(), lastUpdate.getMonth(), lastUpdate.getDate());
  const currentDate = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
  // Update if:
  // 1. More than 6 hours since last update (allows multiple updates per day)
  // 2. It's a different calendar day
  // 3. More than 24 hours (failsafe)
  return hoursSinceUpdate >= 6 || 
         lastUpdateDate.getTime() !== currentDate.getTime() || 
         hoursSinceUpdate >= 24;
}

/**
 * Get coupons with automatic update check (Vercel compatible)
 */
export async function getCouponsWithUpdateCheck(): Promise<StoredCoupons> {
  const storedData = await loadCoupons();
  
  if (!storedData) {
    // No stored data, generate new coupons
    console.log('🆕 No cached coupons found, generating fresh ones...');
    const { generateCoupons } = await import('./gemini-coupons');
    const newCoupons = await generateCoupons();
    await saveCoupons(newCoupons);
    
    return {
      coupons: newCoupons.coupons,
      metadata: {
        total_count: newCoupons.coupons.length,
        last_updated: new Date().toISOString(),
        source: 'Live Data',
        version: '1.0.0'
      }
    };
  }
  
  // Check if we need to update
  if (shouldUpdateCoupons(storedData.metadata.last_updated)) {
    console.log('🔄 Coupons are stale, generating fresh ones...');
    console.log(`⏰ Last updated: ${storedData.metadata.last_updated}`);
    console.log(`🌍 Environment: ${isVercel ? 'Vercel (Production)' : 'Local Development'}`);
    
    const { generateCoupons } = await import('./gemini-coupons');
    const newCoupons = await generateCoupons();
    await saveCoupons(newCoupons);
    
    return {
      coupons: newCoupons.coupons,
      metadata: {
        total_count: newCoupons.coupons.length,
        last_updated: new Date().toISOString(),
        source: 'Live Data',
        version: '1.0.0'
      }
    };
  }
  
  console.log('✅ Using existing cached coupons (still fresh)');
  return storedData;
}

/**
 * Force update coupons (for manual refresh)
 */
export async function forceUpdateCoupons(): Promise<StoredCoupons> {
  const { generateCoupons } = await import('./gemini-coupons');
  const newCoupons = await generateCoupons();
  await saveCoupons(newCoupons);
  
  return {
    coupons: newCoupons.coupons,
    metadata: {
      total_count: newCoupons.coupons.length,
      last_updated: new Date().toISOString(),
      source: 'Gemini AI',
      version: '1.0.0'
    }
  };
}
