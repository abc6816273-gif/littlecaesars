'use client'

import { useEffect } from 'react'

export function CriticalCSS() {
  useEffect(() => {
    // Load non-critical CSS after page load
    const loadNonCriticalCSS = () => {
      const nonCriticalStyles = `
        /* Font Face Declarations - Non-Critical */
        @font-face {
          font-family: 'Slab';
          src: url('/fonts/slab-regular.woff2') format('woff2');
          font-weight: 400;
          font-display: swap;
        }

        @font-face {
          font-family: 'Slab';
          src: url('/fonts/slab-bold.woff2') format('woff2');
          font-weight: 700;
          font-display: swap;
        }

        /* Animation Classes - Non-Critical */
        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        /* Transition Effects - Non-Critical */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }

        .transition-transform {
          transition-property: transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 150ms;
        }

        .duration-200 {
          transition-duration: 200ms;
        }

        .duration-300 {
          transition-duration: 300ms;
        }

        /* Box Shadows - Non-Critical */
        .shadow-lg {
          --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }

        .shadow-xl {
          --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }

        .shadow-2xl {
          --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        }
      `

      const style = document.createElement('style')
      style.textContent = nonCriticalStyles
      document.head.appendChild(style)
    }

    // Load after first paint
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', loadNonCriticalCSS)
    } else {
      requestIdleCallback ? requestIdleCallback(loadNonCriticalCSS) : setTimeout(loadNonCriticalCSS, 0)
    }
  }, [])

  return null
}