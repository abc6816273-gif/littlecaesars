'use client'

import { useEffect } from 'react'

export function CriticalLCP() {
  useEffect(() => {
    // EMERGENCY LCP optimization
    const optimizeLCP = () => {
      // Preload hero image IMMEDIATELY
      const preloadHeroImage = () => {
        // Multiple format preloading for better compatibility
        const formats = [
          { href: '/yellowcedar-tile.webp', type: 'image/webp' },
          { href: '/yellowcedar-tile.jpg', type: 'image/jpeg' }
        ]
        
        formats.forEach(format => {
          const link = document.createElement('link')
          link.rel = 'preload'
          link.as = 'image'
          link.href = format.href
          link.fetchPriority = 'high'
          link.type = format.type
          document.head.appendChild(link)
        })
      }

      // Preload critical fonts with highest priority
      const preloadCriticalFonts = () => {
        const fonts = [
          '/fonts/slab-bold.woff2',
          '/fonts/slab-regular.woff2'
        ]
        
        fonts.forEach(font => {
          const link = document.createElement('link')
          link.rel = 'preload'
          link.as = 'font'
          link.href = font
          link.type = 'font/woff2'
          link.crossOrigin = 'anonymous'
          link.fetchPriority = 'high'
          document.head.appendChild(link)
        })
      }

      // Optimize CSS delivery
      const optimizeCSSDelivery = () => {
        // Mark existing stylesheets as critical
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
        stylesheets.forEach((stylesheet: any) => {
          if (stylesheet.href.includes('app/layout') || stylesheet.href.includes('app/globals')) {
            stylesheet.fetchPriority = 'high'
            stylesheet.media = 'all'
          } else {
            stylesheet.fetchPriority = 'low'
            stylesheet.media = 'print'
            stylesheet.onload = () => {
              stylesheet.media = 'all'
            }
          }
        })
      }

      // AGGRESSIVE render-blocking removal
      const removeRenderBlocking = () => {
        // Defer ALL non-critical scripts
        const scripts = document.querySelectorAll('script:not([async]):not([defer])')
        scripts.forEach((script: any) => {
          if (!script.src.includes('polyfills') && !script.src.includes('webpack') && !script.src.includes('main')) {
            script.defer = true
            script.loading = 'lazy'
          }
        })
        
        // Remove unused CSS immediately
        const stylesheets = document.querySelectorAll('link[rel="stylesheet"]')
        stylesheets.forEach((stylesheet: any) => {
          if (stylesheet.href.includes('_next/static/css') && !stylesheet.href.includes('app/layout')) {
            stylesheet.media = 'print'
            stylesheet.onload = () => {
              stylesheet.media = 'all'
            }
          }
        })
      }

      // Execute optimizations
      preloadHeroImage()
      preloadCriticalFonts()
      optimizeCSSDelivery()
      removeRenderBlocking()

      // Mark LCP optimization complete
      performance.mark('lcp-optimization-complete')
    }

    // Run immediately if document is ready, otherwise wait
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeLCP, { once: true })
    } else {
      optimizeLCP()
    }

    // Monitor LCP and report
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        
        if (lastEntry) {
          console.log('🎯 LCP Time:', lastEntry.startTime)
          
          // If LCP is too slow, try emergency optimization
          if (lastEntry.startTime > 4000) {
            console.warn('🚨 LCP too slow, applying emergency optimization')
            
            // Emergency: Hide non-critical content until LCP completes
            const nonCritical = document.querySelectorAll('.animate-pulse, .transition-all, .backdrop-blur')
            nonCritical.forEach((el: any) => {
              el.style.transition = 'none'
              el.style.animation = 'none'
              el.style.filter = 'none'
            })
          }
        }
      })
      
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })
    }

  }, [])

  return null
}

// Critical CSS for immediate rendering
export const criticalCSS = `
  /* Ultra-critical styles only */
  body { 
    margin: 0; 
    font-family: system-ui, -apple-system, sans-serif; 
    background: #fef7ed; 
    color: #292524; 
  }
  
  .hero-section {
    position: relative;
    height: 100vh;
    overflow: hidden;
    background: #292524;
  }
  
  .hero-image {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
  
  .hero-content {
    position: relative;
    z-index: 10;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
  }
  
  /* Remove all animations during initial load */
  *, *::before, *::after {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
  }
`
