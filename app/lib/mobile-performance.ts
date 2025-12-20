// Mobile-specific performance optimizations
export const MOBILE_PERFORMANCE_CONFIG = {
  // Core Web Vitals targets for mobile
  TARGETS: {
    FCP: 1800, // First Contentful Paint < 1.8s
    LCP: 2500, // Largest Contentful Paint < 2.5s
    CLS: 0.1,  // Cumulative Layout Shift < 0.1
    FID: 100,  // First Input Delay < 100ms
    TTI: 3800, // Time to Interactive < 3.8s
  },
  
  // Mobile-specific image optimization
  MOBILE_IMAGES: {
    QUALITY: 75,           // Lower quality for mobile to save bandwidth
    MAX_WIDTH: 800,        // Max width for mobile images
    LAZY_THRESHOLD: '50px', // Intersection observer threshold
    PLACEHOLDER_QUALITY: 20, // Very low quality placeholder
  },
  
  // Mobile script loading strategy
  SCRIPT_LOADING: {
    CRITICAL_SCRIPTS: ['onesignal'], // Scripts that must load first
    DEFER_SCRIPTS: ['analytics', 'tracking'], // Scripts that can wait
    MOBILE_TIMEOUT: 8000, // Shorter timeout on mobile
  },
  
  // Mobile touch optimizations
  TOUCH_OPTIMIZATION: {
    MIN_TOUCH_TARGET: 44,  // Minimum touch target size (44px)
    TOUCH_DELAY: 0,        // Remove 300ms touch delay
    SCROLL_BEHAVIOR: 'auto', // Disable smooth scrolling on mobile
  },
  
  // Mobile network optimization
  NETWORK: {
    PRECONNECT_DOMAINS: [
      'https://unpkg.com',
      'https://nominatim.openstreetmap.org',
      'https://cdn.onesignal.com',
    ],
    DNS_PREFETCH_DOMAINS: [
      'https://tile.openstreetmap.org',
      'https://www.googletagmanager.com',
    ],
  },
  
  // Mobile animation preferences
  ANIMATIONS: {
    REDUCE_MOTION: true,     // Respect prefers-reduced-motion
    DURATION_MULTIPLIER: 0.5, // 50% faster animations on mobile
    DISABLE_PARALLAX: true,   // Disable parallax effects on mobile
  }
}

// Mobile detection utility
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false
  
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth <= 768
}

// Mobile performance monitoring
export function trackMobilePerformance() {
  if (typeof window === 'undefined') return
  
  // Track Core Web Vitals on mobile
  if ('web-vitals' in window) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log)
      getFID(console.log)
      getFCP(console.log)
      getLCP(console.log)
      getTTFB(console.log)
    })
  }
  
  // Track mobile-specific metrics
  const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
  if (connection) {
    console.log('Mobile connection:', {
      effectiveType: connection.effectiveType,
      downlink: connection.downlink,
      rtt: connection.rtt,
      saveData: connection.saveData
    })
  }
}

// Mobile-specific resource hints
export function getMobileResourceHints() {
  const hints = []
  
  if (isMobileDevice()) {
    // Preconnect to critical mobile resources
    MOBILE_PERFORMANCE_CONFIG.NETWORK.PRECONNECT_DOMAINS.forEach(domain => {
      hints.push(`<link rel="preconnect" href="${domain}">`)
    })
    
    // DNS prefetch for secondary resources
    MOBILE_PERFORMANCE_CONFIG.NETWORK.DNS_PREFETCH_DOMAINS.forEach(domain => {
      hints.push(`<link rel="dns-prefetch" href="${domain}">`)
    })
  }
  
  return hints
}

// Mobile viewport optimization
export function getMobileViewport() {
  return {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: 'yes',
    viewportFit: 'cover',
    shrinkToFit: 'no'
  }
}

// Mobile CSS optimizations
export function getMobileCSSOptimizations() {
  return `
    /* Mobile Performance CSS */
    @media (max-width: 768px) {
      /* Disable expensive effects on mobile */
      *, *::before, *::after {
        animation-duration: 0.1s !important;
        transition-duration: 0.1s !important;
      }
      
      /* Optimize scrolling */
      html {
        scroll-behavior: auto !important;
        -webkit-overflow-scrolling: touch;
      }
      
      /* Optimize touch targets */
      button, a, [role="button"], input, select, textarea {
        min-height: 44px;
        min-width: 44px;
      }
      
      /* Remove hover effects on mobile */
      .hover\\:scale-105:hover {
        transform: none !important;
      }
      
      /* Optimize images */
      img {
        image-rendering: optimizeSpeed;
        transform: translateZ(0);
      }
      
      /* Hardware acceleration for critical elements */
      .animate-spin, .animate-pulse, .animate-bounce {
        transform: translateZ(0);
        will-change: transform;
      }
      
      /* Reduce backdrop blur on mobile */
      .backdrop-blur-sm {
        backdrop-filter: none !important;
        background-color: rgba(255, 255, 255, 0.95) !important;
      }
    }
    
    /* Respect user's motion preferences */
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
      }
    }
  `
}
