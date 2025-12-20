'use client'

import { useEffect } from 'react'

export function AutoCacheCleaner() {
  useEffect(() => {
    // Skip cache cleaning in development mode
    if (process.env.NODE_ENV === 'development') {
      console.log('🚫 AutoCacheCleaner disabled in development mode')
      return
    }

    let cleanupInterval: NodeJS.Timeout

    const clearCaches = async () => {
      try {
        // Clear browser caches
        if ('caches' in window) {
          const cacheNames = await caches.keys()
          await Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
          )
          console.log('✅ Browser caches cleared')
        }

        // Clear service worker cache
        if ('serviceWorker' in navigator) {
          const registrations = await navigator.serviceWorker.getRegistrations()
          await Promise.all(
            registrations.map(registration => registration.update())
          )
          console.log('✅ Service worker caches updated')
        }

        // Clear localStorage items older than 30 seconds
        const now = Date.now()
        const keysToRemove: string[] = []
        
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i)
          if (key && key.startsWith('cache_')) {
            const item = localStorage.getItem(key)
            if (item) {
              try {
                const data = JSON.parse(item)
                if (data.timestamp && (now - data.timestamp) > 30000) {
                  keysToRemove.push(key)
                }
              } catch (e) {
                keysToRemove.push(key)
              }
            }
          }
        }
        
        keysToRemove.forEach(key => localStorage.removeItem(key))
        if (keysToRemove.length > 0) {
          console.log(`✅ Cleared ${keysToRemove.length} old cache items`)
        }

        // Clear sessionStorage cache items
        const sessionKeysToRemove: string[] = []
        for (let i = 0; i < sessionStorage.length; i++) {
          const key = sessionStorage.key(i)
          if (key && key.startsWith('temp_cache_')) {
            sessionKeysToRemove.push(key)
          }
        }
        
        sessionKeysToRemove.forEach(key => sessionStorage.removeItem(key))
        if (sessionKeysToRemove.length > 0) {
          console.log(`✅ Cleared ${sessionKeysToRemove.length} session cache items`)
        }

        // Force reload of OneSignal if needed
        if (typeof window !== 'undefined' && (window as any).OneSignal) {
          try {
            // Clear OneSignal cache
            if ((window as any).OneSignal.clearCache) {
              (window as any).OneSignal.clearCache()
              console.log('✅ OneSignal cache cleared')
            }
          } catch (e) {
            console.log('OneSignal cache clear skipped')
          }
        }

        // Performance optimization - clear unused DOM elements
        const unusedElements = document.querySelectorAll('[data-cache-clear="true"]')
        unusedElements.forEach(el => el.remove())

      } catch (error) {
        console.log('Cache cleanup error (non-critical):', error)
      }
    }

    // Initial cleanup after 2 seconds
    const initialTimeout = setTimeout(clearCaches, 2000)

    // Set up interval for every 30 seconds
    cleanupInterval = setInterval(clearCaches, 30000)

    // Cleanup on unmount
    return () => {
      clearTimeout(initialTimeout)
      clearInterval(cleanupInterval)
    }
  }, [])

  return null // This component doesn't render anything
}

// Utility function to cache data with timestamp
export function cacheWithTimestamp(key: string, data: any) {
  try {
    const cacheData = {
      data,
      timestamp: Date.now()
    }
    localStorage.setItem(`cache_${key}`, JSON.stringify(cacheData))
  } catch (error) {
    console.log('Cache storage failed:', error)
  }
}

// Utility function to get cached data if not expired
export function getCachedData(key: string, maxAge: number = 30000) {
  try {
    const cached = localStorage.getItem(`cache_${key}`)
    if (cached) {
      const cacheData = JSON.parse(cached)
      if (Date.now() - cacheData.timestamp < maxAge) {
        return cacheData.data
      }
    }
  } catch (error) {
    console.log('Cache retrieval failed:', error)
  }
  return null
}

export default AutoCacheCleaner
