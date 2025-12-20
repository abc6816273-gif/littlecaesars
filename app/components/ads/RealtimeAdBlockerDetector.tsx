'use client'

import { useState, useEffect, useCallback } from 'react'

interface AdBlockerState {
  isBlocked: boolean
  isChecking: boolean
  confidence: number
  detectionMethod: string
}

export function RealtimeAdBlockerDetector() {
  const [adState, setAdState] = useState<AdBlockerState>({
    isBlocked: false,
    isChecking: true,
    confidence: 0,
    detectionMethod: 'none'
  })
  const [showPopup, setShowPopup] = useState(false)
  
  // FORCE VERCEL REBUILD - TIMESTAMP: ${new Date().toISOString()}

  // Realtime detection function
  const detectAdBlocker = useCallback(async () => {
    console.log('🔍 Realtime AdBlocker detection started...', new Date().toISOString())
    console.log('🌐 Environment:', process.env.NODE_ENV, 'URL:', window.location.href)
    
    let detectionScore = 0
    const detectionMethods: string[] = []

    try {
      // Method 1: Test element detection (most reliable)
      const testElement = document.createElement('div')
      testElement.className = 'adsbygoogle ad advertisement ads adsbox doubleclick'
      testElement.style.cssText = `
        position: absolute !important;
        left: -9999px !important;
        width: 1px !important;
        height: 1px !important;
        background: transparent !important;
      `
      
      document.body.appendChild(testElement)
      
      // Wait for potential blocking
      await new Promise(resolve => setTimeout(resolve, 100))
      
      const isElementBlocked = testElement.offsetHeight === 0 || 
                              testElement.offsetWidth === 0 ||
                              testElement.style.display === 'none' ||
                              testElement.style.visibility === 'hidden'
      
      if (isElementBlocked) {
        detectionScore += 40
        detectionMethods.push('element-blocking')
      }
      
      document.body.removeChild(testElement)

      // Method 2: Check for common ad blocker extensions
      const extensionChecks = [
        () => !!(window as any).uBlock,
        () => !!(window as any).uBlockOrigin, 
        () => !!(window as any).AdBlock,
        () => !!(window as any).adblockActive,
        () => !!(window as any).adGuard,
        () => navigator.userAgent.includes('AdBlock')
      ]

      extensionChecks.forEach((check, index) => {
        try {
          if (check()) {
            detectionScore += 15
            detectionMethods.push(`extension-${index}`)
          }
        } catch (e) {
          // Silent fail
        }
      })

      // Method 3: Network request test
      try {
        const testRequest = fetch('/ads.txt', { 
          method: 'HEAD',
          cache: 'no-cache'
        }).catch(() => {
          detectionScore += 10
          detectionMethods.push('network-blocking')
        })
      } catch (e) {
        detectionScore += 10
        detectionMethods.push('network-error')
      }

      // Method 4: CSS detection
      try {
        const style = window.getComputedStyle(document.body)
        if (style.getPropertyValue('--adblock-detected') === 'true') {
          detectionScore += 20
          detectionMethods.push('css-detection')
        }
      } catch (e) {
        // Silent fail
      }

      // Calculate confidence and final result
      const confidence = Math.min(detectionScore, 100)
      const isBlocked = confidence >= 30 // Normal detection threshold
      
      console.log('🔍 Detection Results:', {
        score: detectionScore,
        confidence,
        isBlocked,
        methods: detectionMethods
      })

      setAdState({
        isBlocked,
        isChecking: false,
        confidence,
        detectionMethod: detectionMethods.join(', ') || 'none'
      })

      // Show popup with proper confidence check
      if (isBlocked && confidence >= 30) {
        console.log('🚨 SHOWING POPUP - Confidence:', confidence, 'Methods:', detectionMethods)
        setShowPopup(true)
      } else {
        console.log('✅ NO AD BLOCKER - Confidence:', confidence, 'IsBlocked:', isBlocked)
        setShowPopup(false)
      }

    } catch (error) {
      console.error('❌ AdBlocker detection error:', error)
      setAdState({
        isBlocked: false,
        isChecking: false,
        confidence: 0,
        detectionMethod: 'error'
      })
    }
  }, [])

  // Realtime monitoring effect
  useEffect(() => {
    // Skip on mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    if (isMobile) {
      setAdState(prev => ({ ...prev, isChecking: false }))
      return
    }

    // Initial detection after page load
    const initialTimer = setTimeout(detectAdBlocker, 1000)

    // Periodic re-detection for realtime updates
    const realtimeInterval = setInterval(detectAdBlocker, 15000) // Every 15 seconds

    // Cleanup
    return () => {
      clearTimeout(initialTimer)
      clearInterval(realtimeInterval)
    }
  }, [detectAdBlocker])

  // Handle user actions
  const handleDisableAdBlocker = useCallback(() => {
    setShowPopup(false)
    // Re-check after user claims to disable
    setTimeout(detectAdBlocker, 2000)
  }, [detectAdBlocker])

  const handleReload = useCallback(() => {
    window.location.reload()
  }, [])

  // Don't render popup if not detected or checking
  if (!showPopup || adState.isChecking) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-texas-red to-red-600 text-white p-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">🛡️</span>
            </div>
            <div>
              <h3 className="text-xl font-bold">Ad Blocker Detected</h3>
              <p className="text-red-100 text-sm">
                Confidence: {adState.confidence}% | Method: {adState.detectionMethod}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">❤️</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">
              Support Our Texas Roadhouse Community
            </h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We provide <strong>free menu information</strong>, prices, and updates to help you enjoy Texas Roadhouse. 
              Our ads help keep this service <strong>completely free</strong> for everyone.
            </p>
          </div>

          {/* Benefits */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
              <span>✨</span> Why Allow Ads?
            </h5>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Keep our menu prices <strong>always updated</strong></li>
              <li>• Support <strong>free access</strong> for everyone</li>
              <li>• Help us add <strong>new features</strong></li>
              <li>• Maintain our <strong>fast, reliable</strong> service</li>
            </ul>
          </div>

          {/* Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <h5 className="font-semibold text-blue-800 mb-2">Quick Fix:</h5>
            <ol className="text-sm text-blue-700 space-y-1">
              <li><strong>1.</strong> Click your ad blocker icon (usually top-right)</li>
              <li><strong>2.</strong> Select "Disable on this site" or "Whitelist"</li>
              <li><strong>3.</strong> Refresh the page to continue</li>
            </ol>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleDisableAdBlocker}
              className="flex-1 bg-texas-red text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              ✅ I've Disabled It
            </button>
            <button
              onClick={handleReload}
              className="flex-1 bg-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
            >
              🔄 Reload Page
            </button>
          </div>

          {/* Footer */}
          <p className="text-xs text-gray-500 text-center mt-4">
            We respect your privacy and show only relevant, non-intrusive ads
          </p>
        </div>
      </div>
    </div>
  )
}

// Hook for components that need ad blocker status
export function useAdBlockerStatus() {
  const [status, setStatus] = useState<AdBlockerState>({
    isBlocked: false,
    isChecking: true,
    confidence: 0,
    detectionMethod: 'none'
  })

  useEffect(() => {
    // Quick detection for components
    const quickDetect = () => {
      const testElement = document.createElement('div')
      testElement.className = 'adsbygoogle'
      testElement.style.cssText = 'width:1px;height:1px;position:absolute;left:-9999px;'
      
      document.body.appendChild(testElement)
      
      setTimeout(() => {
        const isBlocked = testElement.offsetHeight === 0
        setStatus({
          isBlocked,
          isChecking: false,
          confidence: isBlocked ? 80 : 20,
          detectionMethod: 'quick-test'
        })
        
        try {
          document.body.removeChild(testElement)
        } catch (e) {
          // Silent fail
        }
      }, 100)
    }

    quickDetect()
  }, [])

  return status
}
