'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import MenuCard from '@/components/ui/MenuCard'
import { Search, Filter, Star, Clock, Users, Award, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { PageHero } from '@/components/layout'
import { generateMenuPageSchema } from '@/lib/seo/menu-schema'

interface MenuItem {
  id: number
  name: string
  price: number
  description: string
  category: string
  calories: number
  isPopular: boolean
  image?: string
}

interface MenusPricesContentProps {
  menuItems: MenuItem[]
}

const categories = [
  'All Items',
  'Hot-N-Ready', 
  'Large Round Pizzas', 
  'Deep Dish Pizza', 
  'Wings', 
  'Sides & Bread', 
  'Beverages',
  'Family Combos',
  'Desserts'
]

const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $5', value: 'under-5' },
  { label: '$5 - $10', value: '5-10' },
  { label: '$10 - $15', value: '10-15' },
  { label: '$15 - $20', value: '15-20' },
  { label: 'Over $20', value: 'over-20' }
]

// PRICE FILTER LOGIC FIX: ${new Date().toISOString()}
export default function MenusPricesContent({ menuItems }: MenusPricesContentProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Items')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('popularity')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  // Advanced filtering and sorting - PRICE FILTER DEBUG
  const filteredAndSortedItems = useMemo(() => {
    console.log('🔍 Price Filter Debug:', { selectedPriceRange, totalItems: menuItems.length })
    
    const filtered = menuItems.filter(item => {
      // Search filter
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase())
      
      // Category filter
      const matchesCategory = selectedCategory === 'All Items' || item.category === selectedCategory
      
      // Price range filter - FIXED LOGIC
      const matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'under-5' && item.price < 5) ||
                          (selectedPriceRange === '5-10' && item.price >= 5 && item.price <= 10) ||
                          (selectedPriceRange === '10-15' && item.price >= 10 && item.price <= 15) ||
                          (selectedPriceRange === '15-20' && item.price >= 15 && item.price <= 20) ||
                          (selectedPriceRange === 'over-20' && item.price > 20)
      
      return matchesSearch && matchesCategory && matchesPrice
    })

    // Sort results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          if (a.isPopular && !b.isPopular) return -1
          if (!a.isPopular && b.isPopular) return 1
          return a.name.localeCompare(b.name)
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'name':
          return a.name.localeCompare(b.name)
        case 'calories':
          return a.calories - b.calories
        default:
          return 0
      }
    })

    console.log('✅ Filtered Results:', { 
      filteredCount: filtered.length, 
      selectedPriceRange,
      samplePrices: filtered.slice(0, 3).map(item => ({ name: item.name, price: item.price }))
    })

    return filtered
  }, [menuItems, searchTerm, selectedCategory, selectedPriceRange, sortBy])

  // Group items by category for display
  const groupedItems = useMemo(() => {
    const grouped: { [key: string]: MenuItem[] } = {}
    
    categories.slice(1).forEach(category => { // Skip 'All Items'
      grouped[category] = filteredAndSortedItems.filter(item => item.category === category)
    })
    
    return grouped
  }, [filteredAndSortedItems])

  const faqData = [
    {
      question: "What are the current Little Caesars menu prices for 2026?",
      answer: "Little Caesars menu prices for 2026 range from $1.99 for beverages to $10.99 for large specialty pizzas. Hot-N-Ready pizzas start at $5.55, wings are $8.49, and Crazy Bread is $3.49. Prices may vary by location."
    },
    {
      question: "Does Little Caesars offer family meal deals or combos?",
      answer: "Yes! Little Caesars offers family combos that include multiple pizzas, Crazy Bread, and drinks. These combo meals provide great value for families and groups, with options starting around $15-20."
    },
    {
      question: "Are Little Caesars menu prices the same at all locations?",
      answer: "Menu prices may vary slightly by location due to local market conditions, but the prices listed here reflect the standard pricing across most Little Caesars locations in the USA as of 2026."
    },
    {
      question: "What comes with Little Caesars pizza orders?",
      answer: "Little Caesars pizzas come ready to eat! Hot-N-Ready pizzas are available all day with no waiting. You can add sides like Crazy Bread, wings, or drinks to make it a complete meal for your family."
    },
    {
      question: "Does Little Caesars have vegetarian options on their menu?",
      answer: "Yes, Little Caesars offers vegetarian options including cheese pizza, veggie pizza with peppers and onions, Crazy Bread, Italian Cheese Bread, and various beverages. Many menu items can be customized for vegetarian preferences."
    }
  ]

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(category.toLowerCase().replace(/\s+/g, '-'))
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen bg-stone-50">
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateMenuPageSchema(menuItems))
        }}
      />
      
      {/* Hero Section using PageHero component like other pages */}
      <PageHero
        title="Little Caesars Menu Prices 2026 | Complete Menu with Photos"
        subtitle="🍕 Complete Little Caesars Menu with Latest Prices! ✅ Hot-N-Ready Pizza ✅ Crazy Bread ✅ Deep Dish Pizza ✅ Real Food Photos ✅ Updated Daily ✅ All Menu Items with Prices & Photos"
      />

      {/* Feature badges section - Hidden on mobile for better UX */}
      <section className="hidden md:block py-8 bg-white border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-little-caesars-orange/10 rounded-full px-4 py-2 border border-little-caesars-orange/20">
              <Star className="h-5 w-5 text-little-caesars-orange" />
              <span className="text-stone-700 font-medium">Hand-Cut Daily</span>
            </div>
            <div className="flex items-center gap-2 bg-green-100 rounded-full px-4 py-2 border border-green-200">
              <Clock className="h-5 w-5 text-green-600" />
              <span className="text-stone-700 font-medium">Updated Prices</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 border border-blue-200">
              <Users className="h-5 w-5 text-blue-600" />
              <span className="text-stone-700 font-medium">Family Friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-purple-100 rounded-full px-4 py-2 border border-purple-200">
              <Award className="h-5 w-5 text-purple-600" />
              <span className="text-stone-700 font-medium">Premium Quality</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link 
              href="/coupons"
              className="group inline-flex items-center bg-texas-yellow text-texas-black px-8 py-4 rounded-lg font-bold hover:bg-texas-yellow/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Latest Coupons
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about"
              className="group inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-texas-yellow transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{backgroundColor: '#110302'}}
            >
              About Little Caesars
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile-optimized CTA Section - Compact and focused */}
      <section className="md:hidden py-6 bg-texas-yellow">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <Link 
              href="/coupons"
              className="inline-flex items-center justify-center w-full bg-texas-black text-white px-6 py-3 rounded-lg font-bold hover:bg-texas-black/90 transition-all duration-200 shadow-lg"
            >
              View Latest Coupons
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Search & Filters Section - Tablet optimized */}
      <section className="py-6 md:py-8 bg-white border-b border-stone-200 md:sticky md:top-0 z-50 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row lg:flex-row gap-3 md:gap-4 items-center">
            {/* Search Bar - Tablet optimized */}
            <div className="relative flex-1 w-full md:max-w-md lg:max-w-lg">
              <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-stone-400" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 md:pl-12 pr-4 py-2.5 md:py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-texas-yellow focus:border-transparent text-stone-700 placeholder-stone-400 text-sm md:text-base"
              />
            </div>

            {/* Category Filter - Tablet optimized */}
            <div className="relative w-full md:w-auto">
              <Filter className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 h-4 md:h-5 w-4 md:w-5 text-stone-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto pl-10 md:pl-12 pr-8 py-2.5 md:py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-texas-yellow focus:border-transparent bg-white text-stone-700 min-w-[160px] md:min-w-[180px] text-sm md:text-base"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter - Tablet optimized */}
            <div className="relative w-full md:w-auto">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full md:w-auto px-3 md:px-4 py-2.5 md:py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-texas-yellow focus:border-transparent bg-white text-stone-700 min-w-[120px] md:min-w-[140px] text-sm md:text-base"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>

            {/* Sort Options - Tablet optimized */}
            <div className="relative w-full md:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-auto px-3 md:px-4 py-2.5 md:py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-texas-yellow focus:border-transparent bg-white text-stone-700 min-w-[140px] md:min-w-[160px] text-sm md:text-base"
              >
                <option value="popularity">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
                <option value="calories">Calories</option>
              </select>
            </div>

            {/* Results Count - Tablet optimized */}
            <div className="text-xs md:text-sm text-stone-600 font-medium whitespace-nowrap">
              {filteredAndSortedItems.length} items found
            </div>
          </div>
        </div>
      </section>

      {/* Mobile SEO-Optimized Quick Info */}
      <section className="md:hidden py-6 bg-gradient-to-r from-texas-yellow/10 to-orange/10 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h2 className="text-lg font-bold text-texas-black mb-3">
              Little Caesars Menu 2026 📱
            </h2>
            <div className="flex justify-center space-x-6 text-sm text-stone-600">
              <div className="flex items-center">
                <Star className="h-4 w-4 text-texas-yellow mr-1" />
                <span>74 Items</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 text-green-600 mr-1" />
                <span>Updated Daily</span>
              </div>
              <div className="flex items-center">
                <Award className="h-4 w-4 text-orange mr-1" />
                <span>Real Photos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories Navigation - Tablet optimized */}
      <section className="py-4 md:py-6 bg-stone-50 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {categories.slice(1).map(category => {
              const count = groupedItems[category]?.length || 0
              return (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className="group px-3 md:px-4 py-1.5 md:py-2 bg-white hover:bg-texas-yellow/10 border border-stone-200 hover:border-texas-yellow/30 rounded-full text-xs md:text-sm font-medium text-stone-700 hover:text-texas-yellow transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  {category} ({count})
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Menu Items Display */}
      <main className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {selectedCategory === 'All Items' ? (
            // Show all categories
            categories.slice(1).map(category => {
              const categoryItems = groupedItems[category] || []
              
              if (categoryItems.length === 0) return null

              return (
                <section key={category} id={category.toLowerCase().replace(/\s+/g, '-')} className="mb-16">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-stone-900 mb-2">{category}</h2>
                    <div className="w-24 h-1 bg-texas-yellow mx-auto rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {categoryItems.map(item => (
                      <MenuCard
                        key={item.id}
                        name={item.name}
                        imageUrl={item.image || '/menu/fallback-image.webp'}
                        price={item.price.toString()}
                        calories={item.calories.toString()}
                        category={item.category}
                        description={item.description}
                        tag={item.isPopular ? 'POPULAR' : undefined}
                      />
                    ))}
                  </div>
                </section>
              )
            })
          ) : (
            // Show single category - Tablet optimized
            <section>
              <div className="text-center mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-2">{selectedCategory}</h2>
                <div className="w-20 md:w-24 h-1 bg-texas-yellow mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedItems.map(item => (
                  <article key={item.id} className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-stone-100 h-full">
                    {/* YouTube Thumbnail Aspect Ratio - 16:9 */}
                    <div className="relative w-full aspect-video overflow-hidden">
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt={`${item.name} - Little Caesars Menu ${item.category} - $${item.price.toFixed(2)}`}
                          width={400}
                          height={300}
                          className="menu-card-image object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                          priority={item.isPopular}
                          quality={75}
                          placeholder="blur"
                          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAABBQEBAQEBAQAAAAAAAAAEAQIDBQAGByERCRIi/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAhEQACAQIEBwAAAAAAAAAAAAABAgMABAUGEiEiFDFRkaGx/9oADAMBAAIRAxEAPwCdABGzRhhtgwdN"
                          loading={item.isPopular ? "eager" : "lazy"}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center border-2 border-dashed border-amber-200">
                          <div className="text-center p-6">
                            <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-texas-yellow to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                              <Star className="h-8 w-8 text-white" />
                            </div>
                            <p className="text-sm text-stone-700 font-semibold">{item.name}</p>
                            <p className="text-xs text-stone-500 mt-1">Photo coming soon</p>
                          </div>
                        </div>
                      )}
                      
                      {item.isPopular && (
                        <div className="absolute top-3 left-3 z-10">
                          <span className="bg-texas-yellow text-texas-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-lg">
                            <Star className="h-3 w-3 fill-current" />
                            Popular
                          </span>
                        </div>
                      )}
                      <div className="absolute bottom-3 right-3 z-10">
                        <span className="bg-texas-yellow text-texas-black font-bold text-xl px-4 py-2 rounded-full shadow-xl border-2 border-white">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    <div className="p-4 flex-1 flex flex-col">
                      <h3 className="font-bold text-base text-stone-900 mb-2 group-hover:text-texas-yellow transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-stone-600 text-sm mb-3 line-clamp-2 leading-relaxed flex-1">
                        {item.description}
                      </p>
                      
                      <div className="flex justify-between items-center pt-2 border-t border-stone-100 mt-auto">
                        <span className="text-xs text-stone-500 font-medium">{item.calories} cal</span>
                        <span className="font-bold text-lg text-texas-yellow bg-texas-yellow/10 px-2 py-1 rounded-lg">${item.price.toFixed(2)}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {/* SEO Content Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">Little Caesars Menu 2026: Complete Price Guide</h2>
            <div className="max-w-4xl mx-auto text-lg text-stone-600 leading-relaxed space-y-4">
              <p>
                <strong>Little Caesars menu prices 2026</strong> feature delicious <strong>pizza and sides</strong> with real photos and up-to-date pricing. 
                Our comprehensive menu includes famous <strong>Hot-N-Ready pizzas</strong>, <strong>Crazy Bread</strong>, 
                signature <strong>Deep Dish pizza</strong>, and <strong>buffalo wings</strong>.
              </p>
              <p>
                Popular items include the <strong>Hot-N-Ready Pepperoni ($5.55)</strong>, <strong>ExtraMostBest Pizza ($6.00)</strong>, 
                <strong>Crazy Bread 8-piece ($3.49)</strong>, and <strong>Buffalo Wings ($8.49)</strong>. 
                Every menu item includes prices and real food photography.
              </p>
              <p>
                From <strong>$1.99 beverages</strong> to <strong>$25.99 family combos</strong>, Little Caesars offers 
                something for every appetite and budget. Our menu features <strong>Hot-N-Ready pizza</strong>, <strong>Deep Dish pizza</strong>, 
                <strong>wings</strong>, <strong>Crazy Bread</strong>, <strong>sides</strong>, <strong>desserts</strong>, 
                and <strong>family combos</strong>.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-stone-50 rounded-xl">
              <h3 className="text-2xl font-bold text-texas-yellow mb-3">74 Menu Items</h3>
              <p className="text-stone-600">Complete menu with real photos and latest prices for every item</p>
            </div>
            <div className="text-center p-6 bg-stone-50 rounded-xl">
              <h3 className="text-2xl font-bold text-texas-yellow mb-3">Updated Daily</h3>
              <p className="text-stone-600">Latest 2026 prices verified and updated to ensure accuracy</p>
            </div>
            <div className="text-center p-6 bg-stone-50 rounded-xl">
              <h3 className="text-2xl font-bold text-texas-yellow mb-3">Real Photos</h3>
              <p className="text-stone-600">Authentic food photography for every menu item</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Little Caesars Menu Prices FAQ</h2>
            <p className="text-stone-600 text-lg">Everything you need to know about Little Caesars menu prices 2026</p>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                  className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-stone-50 transition-colors group"
                >
                  <h3 className="font-semibold text-stone-900 text-lg pr-4 group-hover:text-texas-yellow transition-colors">
                    {faq.question}
                  </h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-stone-500 group-hover:text-texas-yellow transition-colors flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-stone-500 group-hover:text-texas-yellow transition-colors flex-shrink-0" />
                  )}
                </button>
                {openFaqIndex === index && (
                  <div className="px-6 pb-6 border-t border-stone-100">
                    <p className="text-stone-600 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section with SEO Text */}
      <footer className="py-16 text-white" style={{backgroundColor: '#110302'}}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-bold mb-4 text-texas-yellow">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/coupons" className="hover:text-texas-yellow transition-colors">Coupons & Deals</Link></li>
                <li><Link href="/about" className="hover:text-little-caesars-orange transition-colors">About Little Caesars</Link></li>
                <li><Link href="/contact" className="hover:text-texas-yellow transition-colors">Contact Us</Link></li>
                <li><Link href="/posts" className="hover:text-texas-yellow transition-colors">Blog & News</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-texas-yellow">Menu Categories</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToCategory('Hand-Cut Steaks')} className="hover:text-texas-yellow transition-colors text-left">Hand-Cut Steaks</button></li>
                <li><button onClick={() => scrollToCategory('Ribs')} className="hover:text-texas-yellow transition-colors text-left">Fall-Off-The-Bone Ribs</button></li>
                <li><button onClick={() => scrollToCategory('Starters')} className="hover:text-texas-yellow transition-colors text-left">Starters & Appetizers</button></li>
                <li><button onClick={() => scrollToCategory('Kids')} className="hover:text-texas-yellow transition-colors text-left">Kids & Ranger Meals</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-texas-yellow">Popular Items</h3>
              <ul className="space-y-2">
                <li className="text-stone-300">USDA Choice Sirloin - $10.99</li>
                <li className="text-stone-300">Cactus Blossom - $7.99</li>
                <li className="text-stone-300">Full Rack Ribs - $21.99</li>
                <li className="text-stone-300">Big Ol' Brownie - $6.99</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-4 text-texas-yellow">Price Ranges</h3>
              <ul className="space-y-2">
                <li className="text-stone-300">Appetizers: $7.99 - $10.99</li>
                <li className="text-stone-300">Steaks: $10.99 - $24.99</li>
                <li className="text-stone-300">Ribs: $14.99 - $21.99</li>
                <li className="text-stone-300">Kids Meals: $5.99 - $7.99</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-stone-700 pt-8">
            <div className="text-center mb-6">
              <p className="text-stone-300 leading-relaxed max-w-4xl mx-auto">
                <strong className="text-white">Little Caesars menu prices 2026 updated daily.</strong> Verified deals & accurate prices for pizza, wings, crazy bread, sides & desserts. 
                Our comprehensive menu guide features Hot-N-Ready pizza, Deep Dish pizza, buffalo wings, Crazy Bread, beverages, and desserts with current pricing. 
                Find the best value meals and save with our latest coupons and promotional offers. All prices are verified and updated regularly to ensure accuracy.
              </p>
            </div>
            
            <div className="text-center text-stone-400 text-sm">
              <p>&copy; 2026 Little Caesars Menu Guide. All rights reserved. Prices may vary by location.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
