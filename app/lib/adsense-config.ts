/**
 * 🎯 Google AdSense Configuration
 * Little Caesars Menu Site - Ad Strategy
 */

export const ADS_CONFIG = {
  // 🔧 AdSense Settings
  enabled: process.env.NODE_ENV === 'production',
  publisherId: process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_ID || '',

  // 📊 Ad Slots (Replace with your actual slots from AdSense)
  adSlots: {
    headerBanner: '1234567890',     // 728x90 desktop, 320x50 mobile
    inContent: '2345678901',        // 336x280 rectangle
    sidebar: '3456789012',          // 300x600 skyscraper
    footerBanner: '4567890123',     // 728x90 banner
    mobileBanner: '5678901234',     // 320x50 mobile banner
  },

  // 🎨 Ad Styling
  styles: {
    container: {
      margin: '20px 0',
      padding: '10px',
      textAlign: 'center' as const,
      backgroundColor: '#f8f9fa',
      borderRadius: '8px',
      border: '1px solid #e9ecef'
    },
    label: {
      fontSize: '11px',
      color: '#6c757d',
      textTransform: 'uppercase' as const,
      letterSpacing: '0.5px',
      marginBottom: '8px'
    }
  },

  // 📱 Responsive Breakpoints
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200
  },

  // 🎯 Revenue Optimization
  settings: {
    autoAds: true,              // Enable Google Auto Ads
    lazyLoading: true,          // Load ads when visible
    refreshRate: 30000,         // Refresh ads every 30 seconds
    viewabilityThreshold: 50,   // 50% visibility required
  }
}

// 🔧 AdSense Script Loader
export function loadAdSenseScript() {
  if (typeof window === 'undefined' || !ADS_CONFIG.enabled) return

  // Check if script already loaded
  if (document.querySelector('script[src*="adsbygoogle.js"]')) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADS_CONFIG.publisherId}`
  script.crossOrigin = 'anonymous'

  // Add error handling
  script.onerror = () => {
    console.warn('Failed to load Google AdSense script')
  }

  document.head.appendChild(script)
}

// 📊 Ad Performance Tracking
export function trackAdPerformance(adSlot: string, event: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'ad_interaction', {
      event_category: 'advertising',
      event_label: adSlot,
      custom_parameter: event
    })
  }
}

// 🎯 Revenue Estimation Calculator
export function estimateRevenue(dailyPageViews: number, cpm: number = 5) {
  const adsPerPage = 3 // Average ads per page
  const impressions = dailyPageViews * adsPerPage
  const dailyRevenue = (impressions / 1000) * cpm

  return {
    daily: dailyRevenue,
    monthly: dailyRevenue * 30,
    yearly: dailyRevenue * 365
  }
}

// Example usage:
// Daily visitors: 1000
// Estimated revenue: $15/day, $450/month, $5,475/year
