import { Metadata } from 'next'
import { generatePageSEO } from '@/lib/seo-config'
import { PageHero } from '@/components/layout'
import { CouponsSEOSection } from '@/components/seo/coupons-seo-section'
import { CouponSection } from '@/components/coupons'

export const revalidate = 3600 // ISR for SEO

export async function generateMetadata(): Promise<Metadata> {
  return generatePageSEO({
    title: "Little Caesars Coupons & Deals 2025 - Save Big on Pizza & More",
    description: "Get the latest Little Caesars coupons and deals for 2025. Save on Hot-N-Ready pizza, Crazy Bread, family combos, and more. Verified discounts up to 30% off.",
    path: "/coupons",
    keywords: [
      "Little Caesars coupons 2025", "Little Caesars deals", "pizza discounts",
      "restaurant coupons USA", "pizza coupons", "Hot-N-Ready deals", "family combo discounts"
    ]
  })
}

export default function CouponsPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <PageHero
        title="Little Caesars Coupons & Deals 2025"
        subtitle="Save big on Hot-N-Ready pizza, famous Crazy Bread, and family combos with our verified coupons and exclusive deals."
      />

      {/* Real-Time Coupons Section - Same as Homepage */}
      <CouponSection />

      {/* SEO-Optimized Coupons Content Section - AFTER COUPONS */}
      <CouponsSEOSection />
    </div>
  )
}
