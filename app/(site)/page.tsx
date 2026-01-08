import { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/layout'
import { CouponSection } from '@/components/coupons'
import { Button } from '@/components/ui'
import { getFormattedDate, getISODate, getStructuredDate } from '@/lib/date'
import { ConditionalYoastSEOHead } from '@/components/seo'
import { InternalLinks } from '@/components/seo'
import { ModernHomepageMenuSection } from '@/components/seo/modern-homepage-sections'
import { DetailedMenuSections } from '@/components/menu/DetailedMenuSections'
import { generateUltimateSchema } from '../lib/seo/ultimate-schema'

// Enable ISR with 300-second (5 min) revalidation for better performance
export const revalidate = 300

// Generate metadata with SEO-friendly pagination links
export function generateMetadata(): Metadata {
  // Ultra SEO-optimized metadata
  const title = `Little Caesars Menu Prices and Pictures [${getFormattedDate()}]`
  const description = `Complete Little Caesars menu guide with current prices, pictures, calories & nutrition info. Hot-N-Ready pizzas, Crazy Bread, wings, and exclusive deals. Updated ${getFormattedDate()}.`

  // Fast static metadata - no API dependencies
  return {
    title,
    description,
    keywords: [
      'Little Caesars menu 2026',
      `Little Caesars prices ${getFormattedDate()}`,
      'Little Caesars calories nutrition',
      'Little Caesars Hot-N-Ready pizza deals',
      'Little Caesars coupons 2026',
      'Little Caesars USA menu updated'
    ].join(', '),
    openGraph: {
      title: `Little Caesars Menu with Prices 2026 | Complete Guide - Updated ${getFormattedDate()}`,
      description: `Latest Little Caesars menu with prices, calories & nutrition. Updated ${getFormattedDate()}. Find pizza, breadsticks, wings & exclusive Hot-N-Ready deals.`,
      url: 'https://littlecaesarsmenu.us',
      siteName: 'Little Caesars Menu',
      images: [
        {
          url: 'https://littlecaesarsmenu.us/menu/Little%20Caesars%20Menu/little-caesars-menu.jpg',
          width: 1200,
          height: 630,
          alt: `Little Caesars Menu with Prices 2026 - Complete Guide - Updated ${getFormattedDate()}`
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Little Caesars Menu with Prices 2026 | Updated ${getFormattedDate()}`,
      description: `Complete Little Caesars menu with current prices, calories & nutrition. Updated ${getFormattedDate()}. Find pizza, breadsticks, wings & Hot-N-Ready deals.`,
      images: ['https://littlecaesarsmenu.us/menu/Little%20Caesars%20Menu/little-caesars-menu.jpg'],
    },
    alternates: {
      canonical: 'https://littlecaesarsmenu.us',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    other: {
      'article:published_time': '2026-08-22T00:00:00Z',
      'article:modified_time': '2026-08-22T12:00:00Z',
    }
  }
}

// Enhanced Menu Schema with new images
const enhancedMenuSchema = {
  "@context": "https://schema.org",
  "@type": "Menu",
  "name": "Little Caesars Menu 2026",
  "description": "Complete Little Caesars menu featuring Hot-N-Ready pizzas, Crazy Bread, wings, specialty pizzas, family combos and beverages with current 2026 pricing.",
  "url": "https://littlecaesarsmenu.us",
  "image": [
    "https://littlecaesarsmenu.us/menu/IMG-20250920-WA0001.jpg",
    "https://littlecaesarsmenu.us/menu/IMG-20250920-WA0002.jpg",
    "https://littlecaesarsmenu.us/menu/IMG-20250920-WA0003.jpg",
    "https://littlecaesarsmenu.us/menu/IMG-20250920-WA0004.jpg",
    "https://littlecaesarsmenu.us/menu/IMG-20250920-WA0005.jpg",
    "https://littlecaesarsmenu.us/menu/IMG-20250920-WA0006.jpg"
  ],
  "inLanguage": "en-US",
  "dateModified": new Date().toISOString(),
  "provider": {
    "@type": "Restaurant",
    "name": "Little Caesars",
    "url": "https://www.littlecaesars.com"
  },
  "menuSection": [
    {
      "@type": "MenuSection",
      "name": "Hot-N-Ready Pizza",
      "description": "Fresh, hot pizza ready when you are with classic pepperoni and cheese"
    },
    {
      "@type": "MenuSection",
      "name": "Specialty Pizza",
      "description": "Premium specialty pizzas including Meat Lovers, Supreme, and Deep Deep Dish"
    },
    {
      "@type": "MenuSection",
      "name": "Crazy Bread & Sides",
      "description": "Famous Crazy Bread, Italian Cheese Bread, and delicious sides"
    },
    {
      "@type": "MenuSection",
      "name": "Wings & Chicken",
      "description": "Buffalo wings, boneless wings, and crispy chicken tenders"
    },
    {
      "@type": "MenuSection",
      "name": "Family Combos",
      "description": "Great value family combos with pizza, bread, and drinks"
    },
    {
      "@type": "MenuSection",
      "name": "Beverages & Desserts",
      "description": "Refreshing drinks and sweet treats to complete your meal"
    }
  ]
}

// ULTIMATE SEO SCHEMA for #1 Google Ranking
const {
  localBusinessSchema,
  menuSchema,
  websiteSchema,
  breadcrumbSchema
} = generateUltimateSchema()

// Real-time coupons now handled by CouponSection component via Gemini API

function FeaturedContent() {
  // Ultra SEO-optimized content structure mimicking competitor's success

  const menuHighlights = [
    { name: "Hot-N-Ready Pepperoni", price: "$5.55", category: "Large Round Pizzas" },
    { name: "Hot-N-Ready Cheese", price: "$5.55", category: "Large Round Pizzas" },
    { name: "ExtraMostBest Pepperoni", price: "$6.00", category: "Large Round Pizzas" },
    { name: "Deep Deep Dish Pepperoni", price: "$8.49", category: "Detroit-Style Deep Dish" },
    { name: "Crazy Bread 8-piece", price: "$3.49", category: "Sides" },
    { name: "Buffalo Wings 8-piece", price: "$8.49", category: "Wings & Chicken" }
  ]

  const menuCategories = [
    {
      title: 'Hot N Ready',
      description: 'Fresh, hot pizzas available for immediate pickup with no waiting required. Our signature pepperoni and cheese pizzas are made with premium ingredients and ready when you walk in.',
      icon: '🔥',
      href: '/menus-prices#hot-n-ready',
      items: ['Pepperoni Pizza - $5.55', 'Cheese Pizza - $5.55', 'Sausage Pizza - $6.00']
    },
    {
      title: 'Large Round Pizzas',
      description: 'Classic round pizzas in large size perfect for families and groups. Choose from pepperoni, cheese, sausage, and specialty combinations with fresh toppings.',
      icon: '🍕',
      href: '/menus-prices#large-round',
      items: ['Classic Pepperoni - $7.99', 'Supreme Pizza - $9.49', '3 Meat Treat - $9.99']
    },
    {
      title: 'Detroit-Style Deep Dish Pizzas',
      description: 'Our signature Deep Deep Dish pizzas with thick, buttery crust and cheese baked to perfection. A Detroit original that delivers incredible flavor and value.',
      icon: '🍰',
      href: '/menus-prices#deep-dish',
      items: ['Deep Deep Dish Pepperoni - $8.49', 'Deep Deep Dish Combo - $10.99']
    },
    {
      title: 'Sides',
      description: 'Famous Crazy Bread with garlic butter, Italian Cheese Bread, Caesar Wings, and other delicious sides that perfectly complement your pizza experience.',
      icon: '🥖',
      href: '/menus-prices#sides',
      items: ['Crazy Bread 8-piece - $3.49', 'Italian Cheese Bread - $4.49', 'Caesar Dips - $0.59']
    },
    {
      title: 'Lunch Combo',
      description: 'Perfect midday meals combining pizza slices with sides and drinks. Great value combos designed for quick, satisfying lunches.',
      icon: '🍽️',
      href: '/menus-prices#lunch',
      items: ['Personal Pizza + Drink - $5.99', 'Slice + Crazy Bread - $6.99']
    },
    {
      title: 'Little Caesars App',
      description: 'Order ahead, skip the line, and access exclusive app-only deals. Download the Little Caesars app for the fastest ordering experience.',
      icon: '📱',
      href: '/menus-prices#app',
      items: ['Mobile Ordering', 'Exclusive App Deals', 'Pizza Portal Pickup']
    }
  ]

  return (
    <>
      {/* Little Caesars Menu With Prices [2026] - Main Section */}
      <section id="little-caesars-menu" className="py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-white via-orange-50/30 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-slab text-4xl sm:text-5xl lg:text-6xl font-bold text-little-caesars-black mb-6">
              Little Caesars Menu With Prices [2026]
            </h2>
            <div className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-8">
              <p className="text-lg sm:text-xl">
                Discover the complete <strong>Little Caesars menu</strong> featuring <strong>Hot-N-Ready® pizzas</strong>, famous <strong>Crazy Bread®</strong>, and unbeatable value. Our <strong>Little Caesars prices</strong> deliver the best value in pizza with fresh, hot food ready when you are. From our signature <strong>pepperoni pizza</strong> to specialty <strong>Deep!Deep!™ Dish</strong>, every item is made with quality ingredients.
              </p>
            </div>

            {/* Value Proposition */}
            <div className="inline-flex items-center px-8 py-4 bg-little-caesars-orange text-white rounded-full text-lg font-bold mb-8 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              🔥 HOT-N-READY® AVAILABLE ALL DAY!
            </div>
          </div>

          {/* Detailed Menu Sections - Little Caesars Style */}
          <DetailedMenuSections />

          {/* Quick Navigation */}
          <div className="bg-little-caesars-orange rounded-3xl p-6 mb-12 text-white">
            <div className="text-center mb-6">
              <h2 className="font-slab text-2xl font-bold mb-3">Explore Our Complete Menu</h2>
              <p className="text-lg text-orange-100 max-w-2xl mx-auto">
                Browse specific menu categories for detailed information and current pricing on all your <strong>Little Caesars favorites</strong>.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/menus-prices#pizza" className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-200 border border-white/30">
                <span className="font-bold text-white">🍕 Pizza</span>
              </Link>
              <Link href="/menus-prices#sides" className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-200 border border-white/30">
                <span className="font-bold text-white">🥖 Sides</span>
              </Link>
              <Link href="/menus-prices#wings" className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-200 border border-white/30">
                <span className="font-bold text-white">🍗 Wings</span>
              </Link>
              <Link href="/menus-prices#drinks" className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-200 border border-white/30">
                <span className="font-bold text-white">🥤 Drinks</span>
              </Link>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/menus-prices" className="w-full sm:w-auto inline-flex items-center justify-center bg-little-caesars-orange text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-orange-600 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="text-center">🍕 View Complete Menu with Prices →</span>
            </Link>
            <Link href="/store-locator" className="w-full sm:w-auto inline-flex items-center justify-center bg-little-caesars-black text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="text-center">📍 Find Location Near Me →</span>
            </Link>
          </div>

          {/* Official Reference */}
          <div className="mt-12 text-center">
            <p className="text-sm text-gray-500">
              For the official Little Caesars Menu, visit the <a href="https://www.littlecaesars.com/menu" target="_blank" rel="noopener noreferrer" className="text-little-caesars-orange hover:underline font-semibold">Little Caesars website</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default function HomePage() {
  // Real-time coupons now loaded client-side via CouponSection component

  // Skip SEO fetching for ultra-fast loading
  const homePageSEO = { hasYoastSEO: false, seoData: null }

  return (
    <>
      {/* Yoast SEO Integration */}
      <ConditionalYoastSEOHead
        seoData={homePageSEO.seoData}
        fallbackSchema={JSON.stringify(websiteSchema)}
      />

      {/* Fallback JSON-LD Schemas for Rich Snippets (when no Yoast) */}
      {!homePageSEO.hasYoastSEO && (
        <>
          {/* ULTIMATE SEO SCHEMA for #1 Google Ranking */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(enhancedMenuSchema) }}
          />
          {/* FAQ Schema removed to prevent duplicates - handled by WordPress/Yoast */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
          />
        </>
      )}

      {/* Hero Section */}
      <Hero
        title={`🍕 Little Caesars Menu Prices and Pictures [${getFormattedDate()}]`}
        subtitle="Your complete guide to Hot-N-Ready pizzas, Crazy Bread, wings & more with current prices, pictures, and nutritional information"
        primaryCta={{
          text: "🍕 Browse Complete Menu",
          href: "/menus-prices"
        }}
        secondaryCta={{
          text: "🎉 View Current Deals",
          href: "/coupons"
        }}
      />

      {/* Featured Content - Main Menu Section RIGHT AFTER HERO */}
      <FeaturedContent />

      {/* Latest Blogs Section - SEO Internal Linking */}
      <section className="py-12 bg-gradient-to-br from-red-50 via-white to-green-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-slab text-3xl sm:text-4xl font-bold text-little-caesars-black mb-4">
              📰 Latest Blog Posts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest Little Caesars news, deals, and holiday specials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Coupons January 2026 Card - HOT DEALS */}
            <Link
              href="/little-caesars-coupons-january-2026"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-little-caesars-orange"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp"
                  alt="Little Caesars Coupons January 2026 - 50% Off Promo Codes"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  🔥 HOT DEALS
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-little-caesars-orange uppercase tracking-wide">Coupons & Deals</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-little-caesars-orange transition-colors">
                  Coupons January 2026 - 50% OFF Codes
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  15 verified promo codes for January 2026! Save up to 50% on pizza, Crazy Bread, wings & more.
                </p>
                <div className="mt-4 text-little-caesars-orange font-semibold text-sm flex items-center">
                  Get Coupons →
                </div>
              </div>
            </Link>

            {/* Crazy Puffs Card - TRENDING */}
            <Link
              href="/crazy-puffs"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-little-caesars-orange"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/menu/Homepage-menus/4-Cheese-Crazy-Puffs-Little-Caesars-Menu.webp"
                  alt="Little Caesars Crazy Puffs - Viral Menu Item 2026"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-yellow-400 text-red-800 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                  🚀 TRENDING
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-little-caesars-orange uppercase tracking-wide">Viral Menu Item</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-little-caesars-orange transition-colors">
                  Crazy Puffs - Complete Guide, Flavors & Prices
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Everything about Little Caesars viral Crazy Puffs! All 5 flavors, prices from $3.99, calories & reviews.
                </p>
                <div className="mt-4 text-little-caesars-orange font-semibold text-sm flex items-center">
                  Read More →
                </div>
              </div>
            </Link>

            {/* New Items 2026 Card */}
            <Link
              href="/little-caesars-new-items-2026"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-little-caesars-orange"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/menu/Homepage-menus/Stuffed-Crust-Pepperoni-Little-Caesars-Menu.webp"
                  alt="Little Caesars New Menu Items 2026 - Stuffed Crust Pizza"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-yellow-400 text-red-800 px-3 py-1 rounded-full text-xs font-bold">
                  🆕 NEW
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-little-caesars-orange uppercase tracking-wide">New Menu</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-little-caesars-orange transition-colors">
                  Little Caesars New Items 2026 - All 10 Items
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  All 10 NEW menu items for 2026! Stuffed Crust, Pretzel Crust, new pizzas, sides & exclusive deals.
                </p>
                <div className="mt-4 text-little-caesars-orange font-semibold text-sm flex items-center">
                  Read More →
                </div>
              </div>
            </Link>

            {/* Nutrition Guide Card */}
            <Link
              href="/little-caesars-nutrition-calories"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-little-caesars-orange"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp"
                  alt="Little Caesars Nutrition & Calories Guide 2026"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-little-caesars-orange text-white px-3 py-1 rounded-full text-xs font-bold">
                  📊 GUIDE
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-little-caesars-orange uppercase tracking-wide">Health Guide</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-little-caesars-orange transition-colors">
                  Nutrition & Calories Guide 2026
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Complete nutrition facts for every menu item. Find healthiest options & make informed diet choices.
                </p>
                <div className="mt-4 text-little-caesars-orange font-semibold text-sm flex items-center">
                  Read More →
                </div>
              </div>
            </Link>

            {/* Christmas Blog Card */}
            <Link
              href="/happy-christmas-2026"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-little-caesars-orange"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/menu/Homepage-menus/Ultimate-Supreme-Pizza-Little-Caesars-Menu.webp"
                  alt="Happy Christmas 2026 - Little Caesars Holiday Pizza Celebration"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  🎄 HOLIDAY
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-little-caesars-orange uppercase tracking-wide">Holiday Special</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-little-caesars-orange transition-colors">
                  Happy Christmas 2026 - Holiday Deals & Party Ideas
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Celebrate Christmas with Little Caesars! Exclusive holiday deals, party planning tips, and festive pizza ideas.
                </p>
                <div className="mt-4 text-little-caesars-orange font-semibold text-sm flex items-center">
                  Read More →
                </div>
              </div>
            </Link>

            {/* Menu Guide Card */}
            <Link
              href="/little-caesars-menu"
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-little-caesars-orange"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/menu/Homepage-menus/Classic-Pepperoni-Pizza-Little-Caesars-Menu.webp"
                  alt="Little Caesars Menu Prices & Calories Guide 2026"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  📋 GUIDE
                </div>
              </div>
              <div className="p-6">
                <span className="text-xs font-bold text-little-caesars-orange uppercase tracking-wide">Complete Guide</span>
                <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-little-caesars-orange transition-colors">
                  Little Caesars Menu Prices & Calories 2026
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Your ultimate guide to Little Caesars menu with prices, calories, nutrition info, and money-saving tips.
                </p>
                <div className="mt-4 text-little-caesars-orange font-semibold text-sm flex items-center">
                  Read More →
                </div>
              </div>
            </Link>

            {/* ==================== */}
            {/* QUICK TOOLS SECTION - HIGH-TRAFFIC UTILITY PAGES */}
            {/* ==================== */}
            <section className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  🔥 Quick Tools & Info
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Fast access to the most searched information about Little Caesars
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Near Me Tool */}
                <Link
                  href="/little-caesars-near-me"
                  className="group bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] border-2 border-blue-200 hover:border-blue-400">
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 bg-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg">
                      📍
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      Find Locations Near You
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Search by city or zip code to find the closest Little Caesars. Get directions, hours, and contact info.
                    </p>
                    <div className="text-blue-600 font-bold flex items-center justify-center gap-2">
                      Search Now →
                    </div>
                  </div>
                </Link>

                {/* Store Hours */}
                <Link
                  href="/little-caesars-hours"
                  className="group bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] border-2 border-orange-200 hover:border-orange-400">
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 bg-orange-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg">
                      🕐
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                      Store Hours & Schedule
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Check opening and closing times for your local store. View holiday hours and special schedules.
                    </p>
                    <div className="text-orange-600 font-bold flex items-center justify-center gap-2">
                      View Hours →
                    </div>
                  </div>
                </Link>

                {/* Today's Deals */}
                <Link
                  href="/little-caesars-deals-today"
                  className="group bg-gradient-to-br from-red-50 to-red-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.03] border-2 border-red-200 hover:border-red-400">
                  <div className="p-8 text-center">
                    <div className="w-20 h-20 bg-red-500 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl shadow-lg animate-pulse">
                      🎁
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                      Today's Hot Deals
                    </h3>
                    <p className="text-gray-700 mb-4">
                      Discover today's best offers, promotions, and exclusive app deals. Save money on your order!
                    </p>
                    <div className="text-red-600 font-bold flex items-center justify-center gap-2">
                      See Deals →
                    </div>
                  </div>
                </Link>
              </div >
            </section>

            {/* ==================== */}
            {/* IMPORTANT BLOG POSTS */}
            {/* ==================== */}
            <section className="mb-16">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  📰 Essential Guides & Reviews
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Expert guides, reviews, and tips to get the most out of your Little Caesars experience
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Calorie Calculator Card - NEW */}
                <Link
                  href="/little-caesars-calorie-calculator"
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-emerald-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/menu/Homepage-menus/Lunch-Combo-Little-Caesars-Menu.webp"
                      alt="Little Caesars Calorie Calculator - Track Nutrition 2026"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      🧮 CALCULATOR
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-emerald-600 uppercase tracking-wide">Health Tool</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-emerald-600 transition-colors">
                      Little Caesars Calorie Calculator 2026
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      FREE interactive tool to track calories, fat, protein & carbs for your entire order!
                    </p>
                    <div className="mt-4 text-emerald-600 font-semibold text-sm flex items-center">
                      Try Calculator →
                    </div>
                  </div>
                </Link>

                {/* Secret Menu Card - NEW */}
                <Link
                  href="/little-caesars-secret-menu"
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-purple-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/menu/Homepage-menus/3-Meat-Treat-Pizza-Little-Caesars-Menu.webp"
                      alt="Little Caesars Secret Menu 2026 - Hidden Items Revealed"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      🤫 SECRET
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-purple-600 uppercase tracking-wide">Hidden Hacks</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-purple-600 transition-colors">
                      Secret Menu 2026 - Hidden Items Revealed!
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Discover 8 secret menu items & ordering hacks that most customers don't know about!
                    </p>
                    <div className="mt-4 text-purple-600 font-semibold text-sm flex items-center">
                      Unlock Secrets →
                    </div>
                  </div>
                </Link>

                {/* Pizza Ranking Card - NEW */}
                <Link
                  href="/best-little-caesars-pizza-ranked"
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-yellow-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp"
                      alt="Best Pizza at Little Caesars Ranked #1 2026"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-xs font-bold">
                      🏆 RANKED
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-yellow-600 uppercase tracking-wide">Best Pizza</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-yellow-600 transition-colors">
                      Best Pizza at Little Caesars - All Ranked!
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Complete ranking of all 12 pizzas from #1 to worst. ExtraMostBestest wins!
                    </p>
                    <div className="mt-4 text-yellow-600 font-semibold text-sm flex items-center">
                      See Rankings →
                    </div>
                  </div>
                </Link>

                {/* Delivery Guide Card - NEW */}
                <Link
                  href="/little-caesars-delivery"
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-blue-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/menu/Homepage-menus/Ultimate-Supreme-Pizza-Little-Caesars-Menu.webp"
                      alt="Little Caesars Delivery Guide 2026"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      🚚 DELIVERY
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Delivery Guide</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                      Delivery Guide 2026 - Fees, Hours & Tips
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      $3.99 delivery fee, $12 minimum, 25-45 min wait. Complete delivery guide!
                    </p>
                    <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center">
                      Order Delivery →
                    </div>
                  </div>
                </Link>

                {/* LC vs Dominos Card - NEW */}
                <Link
                  href="/little-caesars-vs-dominos"
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-blue-600"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/menu/Homepage-menus/Classic-Pepperoni-Pizza-Little-Caesars-Menu.webp"
                      alt="Little Caesars vs Dominos Comparison 2026"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      🆚 VS DOMINOS
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Comparison</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-blue-600 transition-colors">
                      Little Caesars vs Dominos 2026 - Price War
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Little Caesars is 47% cheaper than Dominos! Compare prices, quality, and nutrition facts.
                    </p>
                    <div className="mt-4 text-blue-600 font-semibold text-sm flex items-center">
                      See Comparison →
                    </div>
                  </div>
                </Link>

                {/* LC vs Pizza Hut Card - NEW */}
                <Link
                  href="/little-caesars-vs-pizza-hut"
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-red-600"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/menu/Homepage-menus/Detroit-Style-Deep-Dish-Cheese-Little-Caesars-Menu.webp"
                      alt="Little Caesars vs Pizza Hut Comparison 2026"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      🆚 VS PIZZA HUT
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-red-600 uppercase tracking-wide">Comparison</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-red-600 transition-colors">
                      Little Caesars vs Pizza Hut 2026 - Value Showdown
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      See why LC wins for value! 53% price difference compared to Pizza Hut's premium menu.
                    </p>
                    <div className="mt-4 text-red-600 font-semibold text-sm flex items-center">
                      See Comparison →
                    </div>
                  </div>
                </Link>

                {/* Menu 2026 Card - NEW & FEATURED */}
                <Link
                  href="/little-caesars-menu-2026"
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border-2 border-transparent hover:border-green-500"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/menu/Homepage-menus/Detroit-Style-Deep-Dish-Pepperoni-Little-Caesars-Menu.webp"
                      alt="Little Caesars Menu 2026 - Complete Price List"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                      🔥 2026 MENU
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-bold text-green-600 uppercase tracking-wide">Complete Menu</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2 group-hover:text-green-600 transition-colors">
                      Little Caesars Menu 2026 - Full Price Guide
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm">
                      Complete 2026 menu with all prices, new items, combos & money-saving tips!
                    </p>
                    <div className="mt-4 text-green-600 font-semibold text-sm flex items-center">
                      View Full Menu →
                    </div>
                  </div>
                </Link>
              </div>

              {/* View All Blogs Link */}
              <div className="text-center mt-8">
                <Link
                  href="/important-blogs"
                  className="inline-flex items-center px-6 py-3 bg-little-caesars-orange text-white rounded-full font-bold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
                >
                  View All Blogs →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Real-Time Coupons Section (Gemini AI integration) */}
      <CouponSection />

      {/* Internal Linking Section for SEO */}
      <InternalLinks currentPage="/" showExternal={true} variant="full" />
    </>
  )
}
