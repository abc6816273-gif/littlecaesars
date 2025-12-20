'use client'

import { lazy, Suspense } from 'react'
import dynamic from 'next/dynamic'

// Lazy load heavy components only when needed
export const LazyMealPlanner = dynamic(
  () => import('@/app/(site)/meal-planner/MealPlannerApp').then(mod => ({ default: mod.default })),
  {
    loading: () => (
      <div className="animate-pulse bg-stone-200 rounded-lg h-96 w-full flex items-center justify-center">
        <div className="text-stone-500">Loading Meal Planner...</div>
      </div>
    ),
    ssr: false, // Don't render on server for better performance
  }
)

export const LazyStoreLocator = dynamic(
  () => import('@/app/(site)/store-locator/OptimizedStoreLocator'),
  {
    loading: () => (
      <div className="animate-pulse bg-stone-200 rounded-lg h-96 w-full flex items-center justify-center">
        <div className="text-stone-500">Loading Store Locator...</div>
      </div>
    ),
    ssr: false,
  }
)

export const LazyTomTomMap = dynamic(
  () => import('@/app/(site)/store-locator/TomTomStoreLocator'),
  {
    loading: () => (
      <div className="animate-pulse bg-stone-200 rounded-lg h-96 w-full flex items-center justify-center">
        <div className="text-stone-500">Loading Map...</div>
      </div>
    ),
    ssr: false,
  }
)

// Lazy load Lucide icons to reduce initial bundle
export const LazyIcons = {
  Star: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Star })), { ssr: false }),
  Clock: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Clock })), { ssr: false }),
  MapPin: dynamic(() => import('lucide-react').then(mod => ({ default: mod.MapPin })), { ssr: false }),
  Phone: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Phone })), { ssr: false }),
  Mail: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Mail })), { ssr: false }),
  Search: dynamic(() => import('lucide-react').then(mod => ({ default: mod.Search })), { ssr: false }),
}

// Component wrapper for lazy loading with intersection observer
export function LazyComponent({ 
  children, 
  fallback = <div className="animate-pulse bg-stone-200 rounded h-32" />,
  rootMargin = '100px' 
}: {
  children: React.ReactNode
  fallback?: React.ReactNode
  rootMargin?: string
}) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}
