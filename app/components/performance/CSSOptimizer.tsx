'use client'

import { useEffect } from 'react'

export function CSSOptimizer() {
  useEffect(() => {
    // Remove unused CSS after page load
    const removeUnusedCSS = () => {
      // Remove unused Tailwind classes that aren't being used
      const unusedSelectors = [
        '.backdrop-blur-sm',
        '.backdrop-blur-md', 
        '.backdrop-blur-lg',
        '.animate-bounce',
        '.animate-ping',
        '.transform-gpu',
        '.will-change-transform',
        '.perspective-1000',
        '.rotate-45',
        '.rotate-90',
        '.rotate-180',
        '.skew-x-12',
        '.skew-y-12'
      ]

      // Create a style element to override unused styles
      const style = document.createElement('style')
      style.textContent = unusedSelectors.map(selector => 
        `${selector} { display: contents !important; }`
      ).join('\n')
      
      document.head.appendChild(style)
    }

    // Load non-critical CSS after page is interactive
    const loadNonCriticalCSS = () => {
      const nonCriticalCSS = `
        /* Animations - Non-Critical */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideIn {
          animation: slideIn 0.4s ease-out;
        }

        /* Advanced Hover Effects - Non-Critical */
        .hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        /* Advanced Gradients - Non-Critical */
        .gradient-texas {
          background: linear-gradient(135deg, #dc2626 0%, #f59e0b 100%);
        }
        
        .gradient-wood {
          background: linear-gradient(135deg, #8b4513 0%, #daa520 50%, #cd853f 100%);
        }

        /* Print Styles - Non-Critical */
        @media print {
          .no-print { display: none !important; }
          .print-only { display: block !important; }
        }
      `

      const style = document.createElement('style')
      style.textContent = nonCriticalCSS
      style.media = 'all'
      document.head.appendChild(style)
    }

    // Optimize existing stylesheets
    const optimizeExistingCSS = () => {
      const stylesheets = Array.from(document.styleSheets)
      
      stylesheets.forEach((stylesheet) => {
        try {
          if (stylesheet.href && stylesheet.href.includes('_next/static/css')) {
            // Mark as low priority after initial load
            const link = document.querySelector(`link[href="${stylesheet.href}"]`)
            if (link) {
              link.setAttribute('importance', 'low')
            }
          }
        } catch (e) {
          // Cross-origin stylesheets might throw errors
        }
      })
    }

    // Run optimizations
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        requestIdleCallback ? 
          requestIdleCallback(() => {
            removeUnusedCSS()
            loadNonCriticalCSS()
            optimizeExistingCSS()
          }, { timeout: 1000 }) :
          setTimeout(() => {
            removeUnusedCSS()
            loadNonCriticalCSS()
            optimizeExistingCSS()
          }, 100)
      })
    } else {
      requestIdleCallback ? 
        requestIdleCallback(() => {
          removeUnusedCSS()
          loadNonCriticalCSS()
          optimizeExistingCSS()
        }, { timeout: 1000 }) :
        setTimeout(() => {
          removeUnusedCSS()
          loadNonCriticalCSS()
          optimizeExistingCSS()
        }, 100)
    }

  }, [])

  return null
}
