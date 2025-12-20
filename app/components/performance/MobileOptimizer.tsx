'use client'

import { useEffect } from 'react'

interface MobileOptimizerProps {
  children: React.ReactNode
}

export function MobileOptimizer({ children }: MobileOptimizerProps) {
  useEffect(() => {
    // Mobile performance optimizations
    const isMobile = window.innerWidth <= 768
    
    if (isMobile) {
      // Disable smooth scrolling on mobile for better performance
      document.documentElement.style.scrollBehavior = 'auto'
      
      // Optimize viewport for mobile
      const viewport = document.querySelector('meta[name="viewport"]')
      if (viewport) {
        viewport.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover')
      }
      
      // Reduce animation duration on mobile
      const style = document.createElement('style')
      style.textContent = `
        @media (max-width: 768px) {
          *, *::before, *::after {
            animation-duration: 0.1s !important;
            transition-duration: 0.1s !important;
          }
          
          /* Optimize touch targets */
          button, a, [role="button"] {
            min-height: 44px;
            min-width: 44px;
          }
          
          /* Improve scroll performance */
          * {
            -webkit-overflow-scrolling: touch;
          }
          
          /* Optimize images for mobile */
          img {
            image-rendering: optimizeSpeed;
            transform: translateZ(0);
          }
          
          /* Hardware acceleration for better performance */
          .animate-spin, .animate-pulse, .animate-bounce {
            transform: translateZ(0);
            will-change: transform;
          }
        }
      `
      document.head.appendChild(style)
      
      // Preconnect to critical resources
      const preconnects = [
        'https://unpkg.com',
        'https://nominatim.openstreetmap.org',
        'https://cdn.onesignal.com'
      ]
      
      preconnects.forEach(url => {
        const link = document.createElement('link')
        link.rel = 'preconnect'
        link.href = url
        document.head.appendChild(link)
      })
      
      // Optimize touch events
      document.addEventListener('touchstart', () => {}, { passive: true })
      document.addEventListener('touchmove', () => {}, { passive: true })
      
      // Lazy load non-critical resources
      const lazyLoadObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement
            
            // Load background images
            const bgImage = element.dataset.bgImage
            if (bgImage) {
              element.style.backgroundImage = `url(${bgImage})`
              element.removeAttribute('data-bg-image')
            }
            
            // Load iframe content
            const dataSrc = element.getAttribute('data-src')
            if (dataSrc && element.tagName === 'IFRAME') {
              element.setAttribute('src', dataSrc)
              element.removeAttribute('data-src')
            }
            
            lazyLoadObserver.unobserve(element)
          }
        })
      }, {
        rootMargin: '50px'
      })
      
      // Observe lazy load elements
      document.querySelectorAll('[data-bg-image], iframe[data-src]').forEach(el => {
        lazyLoadObserver.observe(el)
      })
      
      // Memory cleanup on page unload
      window.addEventListener('beforeunload', () => {
        lazyLoadObserver.disconnect()
      })
    }
    
    // Let OneSignal handle its own styling without interference
  }, [])
  
  return <>{children}</>
}

// Mobile-specific performance hook
export function useMobileOptimization() {
  useEffect(() => {
    const isMobile = window.innerWidth <= 768
    
    if (isMobile) {
      // Optimize scroll performance
      let ticking = false
      
      function updateScroll() {
        // Throttled scroll handler for better performance
        ticking = false
      }
      
      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateScroll)
          ticking = true
        }
      }
      
      window.addEventListener('scroll', requestTick, { passive: true })
      
      return () => {
        window.removeEventListener('scroll', requestTick)
      }
    }
  }, [])
}
