import { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/layout'
import { CouponSection } from '@/components/coupons'
import { Button } from '@/components/ui'
import { getFormattedDate, getISODate, getStructuredDate } from '@/lib/date'
import { ConditionalYoastSEOHead } from '@/components/seo'
import { ModernHomepageMenuSection } from '@/components/seo/modern-homepage-sections'
import { generateUltimateSchema } from '../lib/seo/ultimate-schema'

// Enable ISR with 300-second (5 min) revalidation for better performance
export const revalidate = 300

// Generate metadata with SEO-friendly pagination links
export function generateMetadata(): Metadata {
  // Static metadata for ultra-fast loading
  const title = `Texas Roadhouse Menu with Prices 2025 | Updated ${getFormattedDate()}`
  const description = `Complete Texas Roadhouse menu guide with current prices, calories & nutrition info. Updated ${getFormattedDate()}. Find steaks, ribs, family meals, deals & coupons.`
  
  // Fast static metadata - no API dependencies
    return {
      title: `Texas Roadhouse Menu with Prices 2025 | Updated ${getFormattedDate()} - Texas Roadhouse Menu`,
      description: `Complete Texas Roadhouse menu guide with current prices, calories & nutrition info. Updated ${getFormattedDate()}. Find steaks, ribs, family meals, deals & coupons.`,
      keywords: [
        'Texas Roadhouse menu 2025',
        `Texas Roadhouse prices ${getFormattedDate()}`, 
        'Texas Roadhouse calories nutrition',
        'Texas Roadhouse family meals deals',
        'Texas Roadhouse coupons 2025',
        'Texas Roadhouse USA menu updated'
      ].join(', '),
      openGraph: {
        title: `Texas Roadhouse Menu with Prices 2025 | Complete Guide - Updated ${getFormattedDate()}`,
        description: `Latest Texas Roadhouse menu with prices, calories & nutrition. Updated ${getFormattedDate()}. Find steaks, ribs, family meals & exclusive deals.`,
        url: 'https://texasroadhouse-menus.us',
        siteName: 'Texas Roadhouse Menu',
        images: [
          {
            url: 'https://texasroadhouse-menus.us/images/texas-roadhouse-menu-2025.jpg',
            width: 1200,
            height: 630,
            alt: `Texas Roadhouse Menu with Prices 2025 - Complete Guide - Updated ${getFormattedDate()}`
          }
        ],
        locale: 'en_US',
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: `Texas Roadhouse Menu with Prices 2025 | Updated ${getFormattedDate()}`,
        description: `Complete Texas Roadhouse menu with current prices, calories & nutrition. Updated ${getFormattedDate()}. Find steaks, ribs, family meals & deals.`,
        images: ['https://texasroadhouse-menus.us/images/texas-roadhouse-menu-2025.jpg'],
      },
      alternates: {
        canonical: 'https://texasroadhouse-menus.us',
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
        'article:published_time': '2025-08-22T00:00:00Z',
        'article:modified_time': '2025-08-22T12:00:00Z',
      }
    }
}

// ULTIMATE SEO SCHEMA for #1 Google Ranking
const { 
  localBusinessSchema, 
  menuSchema, 
  websiteSchema, 
  breadcrumbSchema 
} = generateUltimateSchema()

// Lightning-fast static coupon data - no API calls needed
function getStaticCoupons() {
  return {
    coupons: [
      {
        code: "ROADHOUSE15",
        title: "15% Off Texas Roadhouse",
        discount: "15% Off",
        description: "Save 15% on your next Texas Roadhouse visit",
        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        terms: "Valid on dine-in orders. Cannot be combined with other offers.",
        type: "code" as const,
        verified: "Verified",
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        code: "STEAKDEAL",
        title: "$5 Off Steak Entrees",
        discount: "$5 Off",
        description: "$5 off any steak entree",
        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        terms: "Valid on steak entrees only. Minimum order required.",
        type: "deal" as const,
        verified: "Verified",
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      },
      {
        code: "FAMILYFEAST",
        title: "20% Off Family Meals",
        discount: "20% Off",
        description: "20% off family meal packages",
        expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString(),
        terms: "Valid on family packages for 4 or more people.",
        type: "discount" as const,
        verified: "Verified",
        validUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
      }
    ],
    metadata: {
      total_count: 3,
      last_updated: new Date().toISOString(),
      source: "Static Data",
      version: "1.0.0"
    }
  }
}

function FeaturedContent() {
  // Ultra-fast static content - no async operations
  const couponData = getStaticCoupons()

    return (
      <>
        {/* Official Texas Roadhouse Menu 2025 - FIRST AFTER HERO */}
        <section className="py-16 bg-gradient-to-br from-stone-50 via-white to-stone-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-slab text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
                Official Texas Roadhouse Menu 2025 - Complete Menu with Prices
              </h2>
              <p className="text-xl text-stone-600 max-w-4xl mx-auto leading-relaxed">
                Browse the complete Texas Roadhouse menu with actual photos, current pricing, and detailed nutritional information. Each menu section includes real images showing all available items, prices, and descriptions - exactly as you'll see in the restaurant.
              </p>
            </div>
            
            {/* Full Menu Images Grid - Mobile Responsive */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
              {/* Texas Roadhouse Appetizers & Starters Menu */}
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="bg-texas-red text-white px-3 py-1 rounded-lg font-bold text-xs sm:text-sm w-fit">POPULAR</div>
                    <h3 className="font-slab text-xl sm:text-2xl font-bold text-stone-900">Appetizers & Starters Menu</h3>
                  </div>
                  <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Start your Texas Roadhouse experience with our legendary appetizers. Our famous Cactus Blossom is a colossal fried onion served with our signature sauce, while our Fried Pickles offer a crispy, tangy kick. Every starter is made fresh and perfect for sharing or enjoying solo before your main course.
                  </p>
                </div>
                <div className="relative px-4 sm:px-0">
                  <img 
                    src="/Homepage-Menus-Images/imgi_2_Texas-Roadhouse-Starter-Menu-Prices.webp" 
                    alt="Texas Roadhouse Appetizers and Starters Menu 2025 - Complete menu with prices including Cactus Blossom $7.99, Fried Pickles $6.99, Awesome Blossom Petals, Cheese Fries, and more appetizers with detailed pricing"
                    className="w-full h-auto object-contain rounded-lg sm:rounded-none"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-stone-50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-texas-green font-bold text-base sm:text-lg">Price Range: $6.99 - $12.99</span>
                    <span className="bg-texas-yellow/20 text-texas-black px-3 py-2 rounded-full text-xs sm:text-sm font-medium w-fit">8+ Options Available</span>
                  </div>
                </div>
              </article>

              {/* Texas Roadhouse Hand-Cut Steaks Menu */}
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="bg-texas-yellow text-texas-black px-3 py-1 rounded-lg font-bold text-xs sm:text-sm w-fit">SIGNATURE</div>
                    <h3 className="font-slab text-xl sm:text-2xl font-bold text-stone-900">Hand-Cut Steaks Menu</h3>
                  </div>
                  <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Experience America's best hand-cut steaks, aged and seasoned to perfection. Our expert grill masters prepare each cut exactly to your preference. From the tender Filet to the flavorful Ribeye, every steak is served with your choice of two made-from-scratch sides and our legendary rolls with cinnamon butter.
                  </p>
                </div>
                <div className="relative px-4 sm:px-0">
                  <img 
                    src="/Homepage-Menus-Images/imgi_4_Texas-Roadhouse-Hand-Cut-Steaks-Menu-Prices.webp" 
                    alt="Texas Roadhouse Hand-Cut Steaks Menu 2025 - Premium steaks with prices including Ribeye $23.99, Dallas Filet $26.99, New York Strip $21.99, Porterhouse $28.99, and all steak cuts with detailed pricing and descriptions"
                    className="w-full h-auto object-contain rounded-lg sm:rounded-none"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-stone-50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-texas-green font-bold text-base sm:text-lg">Price Range: $16.99 - $32.99</span>
                    <span className="bg-texas-yellow/20 text-texas-black px-3 py-2 rounded-full text-xs sm:text-sm font-medium w-fit">12+ Premium Cuts</span>
                </div>
              </div>
              </article>

              {/* Texas Roadhouse Chicken Menu */}
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="bg-texas-green text-white px-3 py-1 rounded-lg font-bold text-xs sm:text-sm w-fit">BESTSELLER</div>
                    <h3 className="font-slab text-xl sm:text-2xl font-bold text-stone-900">Chicken Specialties Menu</h3>
                  </div>
                  <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Tender, juicy chicken prepared exactly how you like it. Our Country Fried Chicken features a crispy golden coating with creamy gravy, while our Grilled Chicken is seasoned with our signature spices. Every chicken dish comes with your choice of two sides and our famous warm rolls.
                  </p>
                </div>
                <div className="relative px-4 sm:px-0">
                  <img 
                    src="/Homepage-Menus-Images/imgi_7_Texas-Roadhouse-Chicken-Menu-Prices.webp" 
                    alt="Texas Roadhouse Chicken Menu 2025 - Chicken specialties with prices including Country Fried Chicken $14.99, Grilled Chicken $13.99, Chicken Tenders $12.99, and other chicken options with complete pricing details"
                    className="w-full h-auto object-contain rounded-lg sm:rounded-none"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-stone-50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-texas-green font-bold text-base sm:text-lg">Price Range: $12.99 - $17.99</span>
                    <span className="bg-texas-yellow/20 text-texas-black px-3 py-2 rounded-full text-xs sm:text-sm font-medium w-fit">6+ Chicken Options</span>
                  </div>
                </div>
              </article>

              {/* Texas Roadhouse Dockside Seafood Menu */}
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-xs sm:text-sm w-fit">FRESH CATCH</div>
                    <h3 className="font-slab text-xl sm:text-2xl font-bold text-stone-900">Dockside Favorites Menu</h3>
                  </div>
                  <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Fresh seafood prepared with Texas flair and served with coastal favorites. Our Grilled Salmon is perfectly seasoned and cooked to flaky perfection, while our Catfish offers a crispy Southern-style preparation. Each seafood dish is served with your choice of two sides for a complete meal.
                  </p>
                </div>
                <div className="relative px-4 sm:px-0">
                  <img 
                    src="/Homepage-Menus-Images/imgi_5_Texas-Roadhouse-Dockside-Menu-Prices.webp" 
                    alt="Texas Roadhouse Dockside Seafood Menu 2025 - Fresh seafood with prices including Grilled Salmon $18.99, Catfish $15.99, Shrimp options, and other coastal favorites with detailed pricing and descriptions"
                    className="w-full h-auto object-contain rounded-lg sm:rounded-none"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-stone-50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-texas-green font-bold text-base sm:text-lg">Price Range: $14.99 - $19.99</span>
                    <span className="bg-texas-yellow/20 text-texas-black px-3 py-2 rounded-full text-xs sm:text-sm font-medium w-fit">5+ Fresh Options</span>
                </div>
              </div>
              </article>

              {/* Texas Roadhouse Salads Menu */}
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="bg-green-600 text-white px-3 py-1 rounded-lg font-bold text-xs sm:text-sm w-fit">HEALTHY</div>
                    <h3 className="font-slab text-xl sm:text-2xl font-bold text-stone-900">Fresh Salads Menu</h3>
                  </div>
                  <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Fresh, crisp salads made with quality ingredients and served with your choice of house-made dressings. Our Steakhouse Salad features mixed greens topped with grilled steak, while our Caesar Salad offers a classic preparation with fresh romaine and parmesan. Add grilled chicken, steak, or salmon to any salad.
                  </p>
                </div>
                <div className="relative px-4 sm:px-0">
                  <img 
                    src="/Homepage-Menus-Images/imgi_3_Texas-Roadhouse-Salads-Menu-Prices.webp" 
                    alt="Texas Roadhouse Fresh Salads Menu 2025 - Healthy salad options with prices including Caesar Salad $8.99, House Salad $7.99, Steakhouse Salad $12.99, with protein additions and nutritional information"
                    className="w-full h-auto object-contain rounded-lg sm:rounded-none"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-stone-50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-texas-green font-bold text-base sm:text-lg">Price Range: $7.99 - $14.99</span>
                    <span className="bg-texas-yellow/20 text-texas-black px-3 py-2 rounded-full text-xs sm:text-sm font-medium w-fit">4+ Fresh Salads</span>
                  </div>
                </div>
              </article>

              {/* Texas Roadhouse Desserts Menu */}
              <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="bg-pink-600 text-white px-3 py-1 rounded-lg font-bold text-xs sm:text-sm w-fit">SWEET TREATS</div>
                    <h3 className="font-slab text-xl sm:text-2xl font-bold text-stone-900">Homestyle Desserts Menu</h3>
                  </div>
                  <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    End your meal on a sweet note with our homestyle desserts made fresh daily. Our signature Big Ol' Brownie is served warm with vanilla ice cream and hot fudge, while Granny's Apple Classic features cinnamon apples with a flaky crust. Perfect for sharing or treating yourself to something special.
                  </p>
                </div>
                <div className="relative px-4 sm:px-0">
                  <img 
                    src="/Homepage-Menus-Images/imgi_8_Texas-Roadhouse-Desserts-Menu-Prices.webp" 
                    alt="Texas Roadhouse Desserts Menu 2025 - Sweet treats with prices including Big Ol' Brownie $6.99, Granny's Apple Classic $5.99, Ice Cream $4.99, and other homestyle desserts with detailed descriptions"
                    className="w-full h-auto object-contain rounded-lg sm:rounded-none"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-stone-50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-texas-green font-bold text-base sm:text-lg">Price Range: $4.99 - $8.99</span>
                    <span className="bg-texas-yellow/20 text-texas-black px-3 py-2 rounded-full text-xs sm:text-sm font-medium w-fit">6+ Sweet Options</span>
                  </div>
                </div>
              </article>
            </div>

            {/* Beverages & Cocktails Section - Full Menu Images */}
            <div className="bg-gradient-to-r from-texas-yellow/10 to-texas-green/10 rounded-3xl p-8 mb-16">
              <div className="text-center mb-8">
                <h3 className="font-slab text-3xl font-bold text-stone-900 mb-4">Complete Beverages & Cocktails Menu</h3>
                <p className="text-lg text-stone-600 max-w-3xl mx-auto">
                  Quench your thirst with our legendary margaritas, signature cocktails, and refreshing non-alcoholic beverages. Every drink is crafted with premium ingredients and served perfectly chilled.
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Texas Roadhouse Margaritas Menu */}
                <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="bg-orange-600 text-white px-3 py-1 rounded-lg font-bold text-xs sm:text-sm w-fit">LEGENDARY</div>
                    <h4 className="font-slab text-xl sm:text-2xl font-bold text-stone-900">Margaritas Menu</h4>
                  </div>
                  <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Our legendary margaritas are handcrafted with premium tequila, fresh lime juice, and the finest ingredients. From our classic House Margarita to exotic flavors like Strawberry and Mango, each drink is perfectly balanced and served in our signature glasses with salt-rimmed edges.
                  </p>
                </div>
                <div className="relative px-4 sm:px-0">
                  <img 
                    src="/Homepage-Menus-Images/imgi_10_Texas-Roadhouse-Margaritas-Menu-Prices.webp" 
                    alt="Texas Roadhouse Legendary Margaritas Menu 2025 - Complete margarita selection with prices including House Margarita $7.99, Strawberry Margarita $8.99, Top Shelf varieties, and all margarita options with detailed pricing"
                    className="w-full h-auto object-contain rounded-lg sm:rounded-none"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-stone-50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-texas-green font-bold text-base sm:text-lg">Price Range: $7.99 - $12.99</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium w-fit">8+ Varieties</span>
                  </div>
                </div>
                </article>

                {/* Texas Roadhouse Cocktails Menu */}
                <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="bg-purple-600 text-white px-3 py-1 rounded-lg font-bold text-xs sm:text-sm w-fit">SIGNATURE</div>
                    <h4 className="font-slab text-xl sm:text-2xl font-bold text-stone-900">Cocktails Menu</h4>
                  </div>
                  <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Classic and signature cocktails crafted by our experienced bartenders using premium spirits and fresh mixers. From our famous Long Island Iced Tea to whiskey selections and mixed drinks, every cocktail is made to perfection and served in the proper glassware for the ultimate drinking experience.
                  </p>
                </div>
                <div className="relative px-4 sm:px-0">
                  <img 
                    src="/Homepage-Menus-Images/imgi_32_Texas-Roadhouse-Cocktails-Menu-Prices.webp" 
                    alt="Texas Roadhouse Signature Cocktails Menu 2025 - Premium cocktails with prices including Long Island Tea $9.99, Whiskey selections, mixed drinks, and all cocktail options with complete pricing details"
                    className="w-full h-auto object-contain rounded-lg sm:rounded-none"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-stone-50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-texas-green font-bold text-base sm:text-lg">Price Range: $6.99 - $13.99</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium w-fit">12+ Premium Options</span>
                  </div>
                </div>
                </article>

                {/* Texas Roadhouse Non-Alcoholic Drinks Menu */}
                <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-lg font-bold text-xs sm:text-sm w-fit">REFRESHING</div>
                    <h4 className="font-slab text-xl sm:text-2xl font-bold text-stone-900">Non-Alcoholic Beverages</h4>
                  </div>
                  <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Fresh sodas, teas, coffees, and specialty non-alcoholic beverages to complement your meal. From classic Coca-Cola products to our famous fresh-brewed iced tea and specialty lemonades, we have the perfect drink for every taste preference and age group.
                  </p>
                </div>
                <div className="relative px-4 sm:px-0">
                  <img 
                    src="/Homepage-Menus-Images/imgi_9_Texas-Roadhouse-Drinks-Menu-Prices.webp" 
                    alt="Texas Roadhouse Non-Alcoholic Drinks Menu 2025 - Refreshing beverages with prices including sodas, tea, coffee, lemonade, and specialty drinks with current pricing and options"
                    className="w-full h-auto object-contain rounded-lg sm:rounded-none"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-stone-50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-texas-green font-bold text-base sm:text-lg">Price Range: $2.99 - $4.99</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-2 rounded-full text-xs sm:text-sm font-medium w-fit">15+ Fresh Options</span>
                  </div>
                </div>
                </article>

                {/* Texas Roadhouse Combo Meals Menu */}
                <article className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-stone-100">
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-4">
                    <div className="bg-texas-red text-white px-3 py-1 rounded-lg font-bold text-xs sm:text-sm w-fit">VALUE</div>
                    <h4 className="font-slab text-xl sm:text-2xl font-bold text-stone-900">Texas Size Combos</h4>
                  </div>
                  <p className="text-stone-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    Get more bang for your buck with our Texas Size Combo meals featuring generous portions and great value. Each combo includes your choice of entree, two sides, and our famous warm rolls with cinnamon butter. Perfect for hearty appetites and families looking for satisfying meals at great prices.
                  </p>
                </div>
                <div className="relative px-4 sm:px-0">
                  <img 
                    src="/Homepage-Menus-Images/imgi_23_Texas-Roadhouse-Combo-Meals-Menu-Prices-200x300.webp" 
                    alt="Texas Roadhouse Texas Size Combo Meals Menu 2025 - Value combo meals with prices including steak combos, chicken combos, and family meal options with detailed pricing and descriptions"
                    className="w-full h-auto object-contain rounded-lg sm:rounded-none"
                  />
                </div>
                <div className="p-4 sm:p-6 bg-stone-50">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                    <span className="text-texas-green font-bold text-base sm:text-lg">Price Range: $18.99 - $24.99</span>
                    <span className="bg-texas-yellow/20 text-texas-black px-3 py-2 rounded-full text-xs sm:text-sm font-medium w-fit">6+ Combo Options</span>
                  </div>
                </div>
                </article>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <Link href="/menus-prices" className="inline-flex items-center bg-texas-red text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-texas-red/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 mr-4">
                View Complete Menu with Prices →
              </Link>
              <Link href="/store-locator" className="inline-flex items-center bg-texas-yellow text-texas-black px-10 py-4 rounded-xl font-bold text-lg hover:bg-texas-yellow/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Find Location Near Me →
              </Link>
            </div>
          </div>
        </section>

        {/* Coupons & Discount Codes Section - AFTER MENU */}
        <CouponSection 
          dynamicCoupons={couponData.coupons}
          lastUpdated={new Date(couponData.metadata.last_updated).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        />
      </>
    )
}
                <div className="relative h-20 w-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="/menu/Texas-Roadhouse-Dallas-Filet-1024x559.webp.bv.webp" 
                    alt="Hand-Cut Steaks"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-slab text-xl font-bold text-texas-yellow mb-2">Hand-Cut Steaks</h3>
                <p className="text-white/80 text-sm mb-4">Premium USDA Choice steaks, hand-cut fresh daily</p>
                <span className="text-texas-yellow font-semibold">12+ Premium Options</span>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 overflow-hidden">
                <div className="relative h-20 w-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="/menu/Texas-Roadhouse-12-Slab-Ribs-1024x559.webp.bv.webp" 
                    alt="Fall-Off-The-Bone Ribs"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-slab text-xl font-bold text-texas-yellow mb-2">Fall-Off-The-Bone Ribs</h3>
                <p className="text-white/80 text-sm mb-4">Slow-cooked St. Louis style ribs with signature sauce</p>
                <span className="text-texas-yellow font-semibold">8+ Delicious Styles</span>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 overflow-hidden">
                <div className="relative h-20 w-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="/menu/Texas-Roadhouse-Cactus-Blossom-1024x559.webp.bv.webp" 
                    alt="Appetizers & Starters"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-slab text-xl font-bold text-texas-yellow mb-2">Appetizers & Starters</h3>
                <p className="text-white/80 text-sm mb-4">Shareable appetizers to start your meal right</p>
                <span className="text-texas-yellow font-semibold">15+ Shareable Items</span>
              </div>
              
              <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 overflow-hidden">
                <div className="relative h-20 w-20 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src="/menu/Texas-Roadhouse-Cheese-Fries-1024x559.webp.bv.webp" 
                    alt="Sides & Salads"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-slab text-xl font-bold text-texas-yellow mb-2">Sides & Salads</h3>
                <p className="text-white/80 text-sm mb-4">Fresh, hearty sides and crisp salads</p>
                <span className="text-texas-yellow font-semibold">20+ Fresh Options</span>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Link href="/menus-prices" className="inline-flex items-center bg-texas-yellow text-texas-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-texas-yellow/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Complete Menu →
              </Link>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 bg-gradient-to-br from-texas-yellow/10 via-white to-texas-green/10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-slab text-4xl sm:text-5xl font-bold text-stone-900 mb-6">
                Quick Access
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto">
                Everything you need for your Texas Roadhouse experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Link href="/menus-prices" className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-texas-yellow/20 to-texas-green/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 text-center">
                  <div className="text-5xl mb-4">📋</div>
                  <h3 className="font-slab font-bold text-2xl text-stone-900 mb-4 group-hover:text-texas-green transition-colors">
                    Full Menu & Prices
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    Browse all 95+ menu items with high-quality photos, current prices, detailed nutrition info, and allergen information
                  </p>
                  <div className="bg-texas-green text-white px-6 py-3 rounded-lg font-bold group-hover:bg-texas-green/90 transition-colors">
                    View Menu →
                  </div>
                </div>
              </Link>
              
              <Link href="/coupons" className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-texas-red/20 to-texas-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 text-center">
                  <div className="text-5xl mb-4">🎟️</div>
                  <h3 className="font-slab font-bold text-2xl text-stone-900 mb-4 group-hover:text-texas-red transition-colors">
                    Current Deals & Coupons
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    Get the latest verified discount codes, seasonal promotions, and exclusive deals to save on your meal
                  </p>
                  <div className="bg-texas-red text-white px-6 py-3 rounded-lg font-bold group-hover:bg-texas-red/90 transition-colors">
                    See Deals →
                  </div>
                </div>
              </Link>
              
              <Link href="/gift-cards" className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-texas-green/20 to-texas-yellow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 text-center">
                  <div className="text-5xl mb-4">🎁</div>
                  <h3 className="font-slab font-bold text-2xl text-stone-900 mb-4 group-hover:text-texas-yellow transition-colors">
                    Gift Cards
                  </h3>
                  <p className="text-stone-600 mb-6 leading-relaxed">
                    Perfect gifts for Texas Roadhouse lovers - available in multiple denominations with convenient delivery options
                  </p>
                  <div className="bg-texas-yellow text-texas-black px-6 py-3 rounded-lg font-bold group-hover:bg-texas-yellow/90 transition-colors">
                    Buy Cards →
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-texas-black text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-slab font-slab-extra text-3xl sm:text-4xl mb-4 text-texas-yellow">
              Explore Our Complete Menu
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              From legendary steaks to fresh salads, discover all the flavors that make every meal memorable
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/menus-prices">
                <Button variant="secondary" size="lg" className="bg-texas-green hover:bg-texas-green/90 text-white">
                  Browse Menus
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" size="lg" className="border-texas-yellow text-texas-yellow hover:bg-texas-yellow hover:text-texas-black">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </>
    )
}

function FeaturedContentSkeleton() {
  return (
    <>
      {/* Ultra-lightweight skeleton for instant loading */}
      <section className="py-8 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-block h-6 w-32 bg-texas-yellow/20 rounded-full animate-pulse mb-3"></div>
            <div className="h-4 w-48 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
          
          {/* Minimal placeholder */}
          <div className="text-center">
            <div className="h-8 w-24 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  )
}

export default function HomePage() {
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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
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
        title="🥩 Texas Roadhouse Menu & Prices 2025"
        subtitle={`Your complete guide to 95+ menu items • Detailed nutrition info, calories & current prices • Updated ${getFormattedDate()}`}
        primaryCta={{
          text: "🍽️ Browse Complete Menu",
          href: "/menus-prices"
        }}
        secondaryCta={{
          text: "🎟️ View Current Deals", 
          href: "/coupons"
        }}
      />

             {/* SEO Freshness Indicator */}
       <section className="py-12 bg-gradient-to-r from-texas-yellow via-texas-yellow to-texas-yellow/90">
         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center">
             <div className="inline-flex items-center px-6 py-3 rounded-full bg-texas-red text-white text-lg font-bold mb-6 shadow-lg">
               ⚡ FRESHLY UPDATED {getFormattedDate().toUpperCase()}
             </div>
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-slab font-bold text-texas-black mb-6">
               ✅ Verified Menu Information
             </h2>
             <p className="text-lg text-texas-black max-w-4xl mx-auto leading-relaxed">
               All prices, calories, and nutrition data verified across multiple Texas Roadhouse locations nationwide. 
               We ensure accuracy with real-time updates and comprehensive fact-checking.
               <br />
               <span className="inline-block mt-3 text-xl font-semibold">
                 Last verified: <time dateTime={getStructuredDate()} className="text-texas-red bg-white px-3 py-1 rounded-md shadow-sm">{getFormattedDate()}</time>
               </span>
             </p>
           </div>
         </div>
       </section>

      {/* SEO-Optimized Menu Section - MODERN RESPONSIVE: ${Date.now()} */}
      <ModernHomepageMenuSection />

      {/* Featured Content - No Suspense needed for static content */}
        <FeaturedContent />
    </>
  )
}
