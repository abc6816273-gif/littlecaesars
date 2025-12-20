'use client'

import { useEffect } from 'react'
import Image from 'next/image'

interface LCPBoosterProps {
  heroImageSrc: string
  heroImageAlt: string
  width?: number
  height?: number
}

export function LCPBooster({ 
  heroImageSrc, 
  heroImageAlt, 
  width = 1920, 
  height = 800 
}: LCPBoosterProps) {
  
  useEffect(() => {
    // Preload hero image immediately
    const preloadHeroImage = () => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.as = 'image'
      link.href = heroImageSrc
      link.fetchPriority = 'high'
      document.head.appendChild(link)
    }

    // Preload critical resources
    const preloadCriticalResources = () => {
      const resources = [
        { href: '/_next/static/css/app/layout.css', as: 'style' },
        { href: '/_next/static/chunks/main.js', as: 'script' },
        { href: '/_next/static/chunks/webpack.js', as: 'script' },
      ]

      resources.forEach(resource => {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = resource.as
        link.href = resource.href
        if (resource.as === 'style') {
          link.onload = () => {
            link.rel = 'stylesheet'
          }
        }
        document.head.appendChild(link)
      })
    }

    // Optimize font loading
    const optimizeFontLoading = () => {
      const fontLink = document.createElement('link')
      fontLink.rel = 'preload'
      fontLink.as = 'font'
      fontLink.href = '/fonts/slab-bold.woff2'
      fontLink.type = 'font/woff2'
      fontLink.crossOrigin = 'anonymous'
      document.head.appendChild(fontLink)
    }

    // Run optimizations immediately
    preloadHeroImage()
    preloadCriticalResources()
    optimizeFontLoading()

    // Mark LCP element for browser optimization
    const heroElement = document.querySelector('[data-lcp-element]')
    if (heroElement) {
      heroElement.setAttribute('fetchpriority', 'high')
    }

  }, [heroImageSrc])

  return (
    <div className="absolute inset-0" data-lcp-element>
      <Image
        src={heroImageSrc}
        alt={heroImageAlt}
        width={width}
        height={height}
        priority={true}
        quality={80}
        className="object-cover object-center w-full h-full"
        sizes="100vw"
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKGhMKJhYWCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRobHBwv/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8A0XGyvfGNAbbHI1dv6+x4BdvHa9V8Q=="
        onLoad={() => {
          // Mark LCP as complete
          if (typeof window !== 'undefined' && 'performance' in window) {
            performance.mark('lcp-image-loaded')
            console.log('🚀 LCP Hero image loaded')
          }
        }}
      />
    </div>
  )
}

// Performance monitoring hook
export function useLCPMonitoring() {
  useEffect(() => {
    if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('📊 LCP Time:', entry.startTime)
          
          // Report to analytics if available
          if (typeof window.gtag === 'function') {
            window.gtag('event', 'LCP', {
              event_category: 'Performance',
              event_label: 'Largest Contentful Paint',
              value: Math.round(entry.startTime)
            })
          }
        }
      })
    })

    observer.observe({ entryTypes: ['largest-contentful-paint'] })

    return () => observer.disconnect()
  }, [])
}
