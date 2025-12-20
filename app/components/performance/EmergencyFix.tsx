'use client'

import { useEffect } from 'react'

export function EmergencyFix() {
  useEffect(() => {
    // EMERGENCY: Remove all animations during initial load
    const removeAnimations = () => {
      const style = document.createElement('style')
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0s !important;
          animation-delay: 0s !important;
          transition-duration: 0s !important;
          transition-delay: 0s !important;
        }
        
        .animate-pulse,
        .animate-spin,
        .animate-bounce {
          animation: none !important;
        }
        
        .backdrop-blur-sm,
        .backdrop-blur-md {
          backdrop-filter: none !important;
        }
        
        .transition-all,
        .transition-colors,
        .transition-transform {
          transition: none !important;
        }
      `
      document.head.appendChild(style)
      
      // Re-enable after LCP
      setTimeout(() => {
        style.remove()
      }, 3000)
    }

    // EMERGENCY: Preload critical resources IMMEDIATELY
    const emergencyPreload = () => {
      const criticalResources = [
        { href: '/yellowcedar-tile.webp', as: 'image', type: 'image/webp' },
        { href: '/yellowcedar-tile.jpg', as: 'image', type: 'image/jpeg' },
        { href: '/Our Own Logo.png', as: 'image', type: 'image/png' }
      ]
      
      criticalResources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = resource.as
        link.href = resource.href
        link.type = resource.type
        link.fetchPriority = 'high'
        document.head.appendChild(link)
      })
    }

    // EMERGENCY: Reduce JavaScript blocking
    const reduceJSBlocking = () => {
      // Mark all scripts as low priority except critical ones
      const scripts = document.querySelectorAll('script[src]')
      scripts.forEach((script: any) => {
        if (!script.src.includes('polyfills') && 
            !script.src.includes('webpack') && 
            !script.src.includes('main') &&
            !script.src.includes('framework')) {
          script.loading = 'lazy'
          script.fetchPriority = 'low'
        }
      })
    }

    // Execute immediately
    removeAnimations()
    emergencyPreload()
    reduceJSBlocking()

    // Force LCP element optimization
    const heroElement = document.querySelector('[data-lcp-element]') as HTMLElement
    if (heroElement) {
      heroElement.style.willChange = 'transform'
      heroElement.style.transform = 'translateZ(0)'
    }

  }, [])

  return null
}

