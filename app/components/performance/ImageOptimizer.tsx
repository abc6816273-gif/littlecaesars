'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'

interface SmartImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  sizes?: string
  fill?: boolean
}

export function SmartImage({
  src,
  alt,
  width = 400,
  height = 300,
  className = '',
  priority = false,
  quality = 75,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  fill = false
}: SmartImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [currentSrc, setCurrentSrc] = useState<string>('')
  const imgRef = useRef<HTMLDivElement>(null)

  // Calculate optimal dimensions based on viewport
  const getOptimalDimensions = () => {
    if (typeof window === 'undefined') return { width, height }
    
    const vw = window.innerWidth
    let optimalWidth = width
    let optimalHeight = height
    
    if (vw <= 640) {
      optimalWidth = Math.min(width, 640)
      optimalHeight = Math.round((optimalWidth * height) / width)
    } else if (vw <= 1024) {
      optimalWidth = Math.min(width, 512)
      optimalHeight = Math.round((optimalWidth * height) / width)
    }
    
    return { width: optimalWidth, height: optimalHeight }
  }

  const { width: optimalWidth, height: optimalHeight } = getOptimalDimensions()

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || isInView) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { 
        rootMargin: '50px',
        threshold: 0.1 
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [priority, isInView])

  // Progressive loading: WebP with JPEG fallback
  useEffect(() => {
    if (!isInView) return

    const checkWebPSupport = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
    }

    const supportsWebP = checkWebPSupport()
    
    // Try to convert to WebP if supported and not already WebP
    if (supportsWebP && !src.includes('.webp')) {
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
      
      // Test if WebP version exists
      const img = new window.Image()
      img.onload = () => setCurrentSrc(webpSrc)
      img.onerror = () => setCurrentSrc(src)
      img.src = webpSrc
    } else {
      setCurrentSrc(src)
    }
  }, [isInView, src])

  if (!isInView) {
    return (
      <div 
        ref={imgRef}
        className={`bg-stone-200 animate-pulse ${className}`}
        style={{ 
          width: fill ? '100%' : optimalWidth, 
          height: fill ? '100%' : optimalHeight 
        }}
      />
    )
  }

  if (!currentSrc) {
    return (
      <div 
        className={`bg-stone-200 animate-pulse ${className}`}
        style={{ 
          width: fill ? '100%' : optimalWidth, 
          height: fill ? '100%' : optimalHeight 
        }}
      />
    )
  }

  const imageProps = {
    src: currentSrc,
    alt,
    className: `${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300 ${className}`,
    priority,
    quality,
    sizes,
    onLoad: () => setIsLoaded(true),
    placeholder: 'blur' as const,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKGhMKJhYWCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRobHBwv/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8A0XGyvfGNAbbHI1dv6+x4BdvHa9V8Q="
  }

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-stone-200 animate-pulse"
          style={{ 
            width: fill ? '100%' : optimalWidth, 
            height: fill ? '100%' : optimalHeight 
          }}
        />
      )}
      {fill ? (
        <Image {...imageProps} fill />
      ) : (
        <Image {...imageProps} width={optimalWidth} height={optimalHeight} />
      )}
    </div>
  )
}

// Batch preload critical images
export function preloadCriticalImages(imageSrcs: string[]) {
  if (typeof window === 'undefined') return

  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = 'image'
  link.type = 'image/webp'
  
  imageSrcs.slice(0, 3).forEach(src => {
    const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp')
    const preloadLink = link.cloneNode() as HTMLLinkElement
    preloadLink.href = webpSrc
    document.head.appendChild(preloadLink)
  })
}
