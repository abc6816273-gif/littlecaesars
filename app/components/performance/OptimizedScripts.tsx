'use client'

import Script from 'next/script'
import { useEffect, useState } from 'react'

export function OptimizedScripts() {
  const [isInteractive, setIsInteractive] = useState(false)
  const [loadedScripts, setLoadedScripts] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Much longer delay - only load after significant user engagement
    const timer = setTimeout(() => setIsInteractive(true), 8000)
    
    const handleUserInteraction = () => {
      // Only load after multiple interactions to ensure user is engaged
      const existingInteractions = parseInt(sessionStorage.getItem('userInteractions') || '0')
      sessionStorage.setItem('userInteractions', String(existingInteractions + 1))
      
      if (existingInteractions >= 2) {
        setIsInteractive(true)
        clearTimeout(timer)
      }
    }

    // Listen for meaningful user interactions only
    const events = ['click', 'scroll', 'keydown']
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { passive: true })
    })

    return () => {
      clearTimeout(timer)
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction)
      })
    }
  }, [])

  const loadScript = (scriptName: string, callback: () => void) => {
    if (!loadedScripts.has(scriptName)) {
      setLoadedScripts(prev => new Set([...prev, scriptName]))
      // Use requestIdleCallback for even better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(callback, { timeout: 2000 })
      } else {
        setTimeout(callback, 100)
      }
    }
  }

  if (!isInteractive) return null

  return (
    <>
      {/* Google Analytics - Ultra-deferred with idle callback */}
      {!loadedScripts.has('gtag') && (
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-F2E25YCMBK"
          strategy="lazyOnload"
          onLoad={() => loadScript('gtag', () => {
            // @ts-ignore
            window.dataLayer = window.dataLayer || []
            // @ts-ignore
            function gtag(){dataLayer.push(arguments)}
            // @ts-ignore
            gtag('js', new Date())
            // @ts-ignore
            gtag('config', 'G-F2E25YCMBK', {
              page_title: document.title,
              custom_map: {'metric1': 'performance_score'}
            })
          })}
        />
      )}

      {/* OneSignal - Ultra-deferred with minimal config */}
      {!loadedScripts.has('onesignal') && (
        <Script
          src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
          strategy="lazyOnload"
          onLoad={() => loadScript('onesignal', () => {
            // @ts-ignore
            window.OneSignalDeferred = window.OneSignalDeferred || []
            // @ts-ignore
            OneSignalDeferred.push(async function(OneSignal) {
              try {
                await OneSignal.init({
                  appId: "7629b842-fb4e-4821-a9dd-e60ca450a208",
                  allowLocalhostAsSecureOrigin: true,
                  notifyButton: { enable: false }, // Disable button for better performance
                })
              } catch (error) {
                // Silent fail for performance
              }
            })
          })}
        />
      )}
    </>
  )
}
