'use client'

import { useState, useEffect } from 'react'

interface StickyHeaderProps {
  children: React.ReactNode
  className?: string
}

export function StickyHeader({ children, className = '' }: StickyHeaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    // Defer scroll listener to avoid blocking main thread
    const initScrollListener = () => {
      let ticking = false

      const updateScrollDir = () => {
        const scrollY = window.pageYOffset

        if (Math.abs(scrollY - lastScrollY) < 15) {
          ticking = false
          return
        }

        // Check if we're at the top
        setIsAtTop(scrollY <= 10)

        // Only apply mobile sticky behavior on mobile devices
        if (window.innerWidth < 768) { // Mobile only
          if (scrollY > lastScrollY && scrollY > 120) {
            // Scrolling down & not at top
            setIsVisible(false)
          } else if (scrollY < lastScrollY) {
            // Scrolling up
            setIsVisible(true)
          }
        } else {
          // Desktop - always visible and sticky
          setIsVisible(true)
        }

        setLastScrollY(scrollY > 0 ? scrollY : 0)
        ticking = false
      }

      const requestTick = () => {
        if (!ticking) {
          ticking = true
          requestAnimationFrame(updateScrollDir)
        }
      }

      const handleScroll = () => requestTick()

      // Handle resize to update behavior when switching between mobile/desktop
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsVisible(true) // Always visible on desktop
        }
      }

      window.addEventListener('scroll', handleScroll, { passive: true })
      window.addEventListener('resize', handleResize, { passive: true })

      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleResize)
      }
    }

    // Delay initialization to after page load
    if (document.readyState === 'complete') {
      requestIdleCallback ? requestIdleCallback(initScrollListener, { timeout: 1000 }) : setTimeout(initScrollListener, 100)
    } else {
      window.addEventListener('load', () => {
        requestIdleCallback ? requestIdleCallback(initScrollListener, { timeout: 1000 }) : setTimeout(initScrollListener, 100)
      }, { once: true })
    }
  }, [lastScrollY])

  // Dynamic classes based on device and scroll state
  const getHeaderClasses = () => {
    const baseClasses = 'smart-header smart-header-transition z-50 w-full bg-white'
    
    // Desktop: Always sticky at top with consistent white background
    const desktopClasses = 'md:sticky md:top-0 md:shadow-sm'
    
    // Mobile: Smart sticky behavior with proper visibility - ALWAYS white background
    const mobileClasses = `
      ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      ${!isAtTop ? 'shadow-lg backdrop-blur-sm' : ''}
      transition-all duration-300 ease-in-out
    `
    
    return `${baseClasses} ${desktopClasses} ${mobileClasses} ${className}`.trim().replace(/\s+/g, ' ')
  }

  return (
    <header 
      className={getHeaderClasses()}
      style={{
        backgroundColor: '#FFFFFF' // Always use consistent white background
      }}
    >
      {/* Header content - no extra overlay needed */}
      <div className="relative w-full">
        {children}
      </div>
    </header>
  )
}

// Hook for components that need to know header visibility state
export function useHeaderVisibility() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [isAtTop, setIsAtTop] = useState(true)

  useEffect(() => {
    let ticking = false
    let lastScrollY = 0

    const updateHeaderVisibility = () => {
      const scrollY = window.pageYOffset
      
      if (Math.abs(scrollY - lastScrollY) < 10) {
        ticking = false
        return
      }

      setIsAtTop(scrollY <= 10)

      if (window.innerWidth < 768) { // Mobile only
        if (scrollY > lastScrollY && scrollY > 100) {
          setIsHeaderVisible(false)
        } else if (scrollY < lastScrollY) {
          setIsHeaderVisible(true)
        }
      } else {
        setIsHeaderVisible(true)
      }

      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateHeaderVisibility)
        ticking = true
      }
    }

    const handleScroll = () => requestTick()

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { isHeaderVisible, isAtTop }
}
