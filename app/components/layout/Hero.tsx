'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui'
import { LCPBooster, useLCPMonitoring } from '@/components/performance/LCPBooster'

interface HeroProps {
  title: string
  subtitle: string
  primaryCta: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  className?: string
}

export function Hero({ title, subtitle, primaryCta, secondaryCta, className = '' }: HeroProps) {
  const router = useRouter()
  useLCPMonitoring() // Monitor LCP performance
  
  return (
    <section className={`relative overflow-hidden ${className}`}>
      {/* Little Caesars Orange Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/orange-background-6859059_1280.webp"
          alt="Orange background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-little-caesars-orange/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
        <div className="text-center lg:text-left lg:max-w-2xl">
          <h1 className="font-slab font-slab-extra text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white mb-4 sm:mb-6 text-balance leading-tight font-black"
              style={{
                textShadow: '2px 2px 8px rgba(0,0,0,0.5), 0 0 20px rgba(0,0,0,0.3)'
              }}>
            {title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 text-balance max-w-2xl mx-auto lg:mx-0 font-medium"
             style={{
               textShadow: '1px 1px 4px rgba(0,0,0,0.5), 0 0 10px rgba(0,0,0,0.3)'
             }}>
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start max-w-md sm:max-w-none mx-auto lg:mx-0 relative z-10">
            <button 
              onClick={() => {
                console.log('Primary button clicked, navigating to:', primaryCta.href);
                router.push(primaryCta.href as any);
              }}
              className="inline-flex items-center justify-center w-full sm:w-auto min-w-[140px] px-8 py-4 text-lg font-bold rounded-lg touch-manipulation transition-all duration-200 bg-white hover:bg-gray-100 text-little-caesars-orange shadow-xl hover:shadow-2xl transform hover:scale-105 cursor-pointer pointer-events-auto"
            >
              {primaryCta.text}
            </button>
            
            {secondaryCta && (
              <button 
                onClick={() => {
                  console.log('Secondary button clicked, navigating to:', secondaryCta.href);
                  router.push(secondaryCta.href as any);
                }}
                className="inline-flex items-center justify-center w-full sm:w-auto min-w-[140px] px-8 py-4 text-lg font-bold rounded-lg touch-manipulation transition-all duration-200 border-2 border-white text-white hover:bg-white hover:text-little-caesars-orange shadow-xl hover:shadow-2xl transform hover:scale-105 cursor-pointer pointer-events-auto"
              >
                {secondaryCta.text}
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Little Caesars themed decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-15 hidden md:block">
        <div className="absolute top-20 right-20 w-24 md:w-32 h-24 md:h-32 rounded-full bg-gradient-to-br from-white/30 to-yellow-300/20 backdrop-blur-sm"></div>
        <div className="absolute bottom-32 right-32 w-16 md:w-24 h-16 md:h-24 rounded-full bg-gradient-to-br from-little-caesars-yellow/30 to-white/10 backdrop-blur-sm"></div>
        <div className="absolute top-1/2 right-8 w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-to-br from-white/25 to-little-caesars-yellow/15 backdrop-blur-sm"></div>
      </div>
      
      {/* Pizza slice decorative element */}
      <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10 hidden lg:block">
        <div className="text-white text-6xl transform rotate-12">🍕</div>
      </div>
    </section>
  )
}

export function PageHero({ 
  title, 
  subtitle, 
  breadcrumbs,
  backgroundImage,
  className = ''
}: { 
  title: string
  subtitle?: string
  breadcrumbs?: React.ReactNode
  backgroundImage?: string
  className?: string
}) {
  return (
    <section className={`relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 overflow-hidden min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] ${className}`}>
      {/* Little Caesars Orange Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage || "/orange-background-6859059_1280.webp"}
          alt="Orange background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-little-caesars-orange/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/20"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        {breadcrumbs && (
          <div className="mb-3 sm:mb-4 md:mb-6 text-white text-xs sm:text-sm md:text-base font-medium" style={{textShadow: '1px 1px 3px rgba(0,0,0,0.8)'}}>
            {breadcrumbs}
          </div>
        )}
        
        <div className="text-center">
          {/* Responsive title with clamp() for fluid scaling */}
          <h1 className="font-slab font-slab-extra mb-4 sm:mb-6 md:mb-8 text-white leading-tight px-3 sm:px-4 md:px-6 font-black" 
              style={{
                fontSize: 'clamp(1.75rem, 6vw, 3.5rem)', // Increased from 1.5rem to 1.75rem min, 3rem to 3.5rem max
                lineHeight: 'clamp(1.1, 1.2, 1.3)', // Tighter line height for better appearance
                wordBreak: 'break-word',
                hyphens: 'auto',
                textShadow: '3px 3px 12px rgba(0,0,0,0.9), 0 0 25px rgba(0,0,0,0.7)' // Enhanced shadow
              }}>
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-white max-w-4xl mx-auto px-3 sm:px-4 md:px-6 leading-relaxed font-medium"
               style={{
                 fontSize: 'clamp(1rem, 3.5vw, 1.375rem)', // Increased from 0.875rem to 1rem min, 1.25rem to 1.375rem max
                 lineHeight: 'clamp(1.5, 1.7, 1.9)', // Better line height
                 textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.6)' // Enhanced shadow
               }}>
              {subtitle}
            </p>
          )}
        </div>
      </div>
      
      {/* Subtle decorative elements for page headers */}
      <div className="absolute top-0 right-0 w-1/4 h-full opacity-15 hidden md:block">
        <div className="absolute top-8 right-8 w-16 md:w-20 h-16 md:h-20 rounded-full bg-gradient-to-br from-school-bus-yellow/40 to-reseda-green/20 backdrop-blur-sm"></div>
        <div className="absolute bottom-8 right-16 w-12 md:w-16 h-12 md:h-16 rounded-full bg-gradient-to-br from-white/30 to-school-bus-yellow/20 backdrop-blur-sm"></div>
      </div>
      
      {/* Wood grain enhancement effect for page headers */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-school-bus-yellow/3 to-reseda-green/3 mix-blend-overlay hidden md:block"></div>
    </section>
  )
}
