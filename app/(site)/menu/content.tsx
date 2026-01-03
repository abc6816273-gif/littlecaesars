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

interface LittleCaesarsMenuContentProps {
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
  'Lunch Combo',
  'Desserts'
]

const priceRanges = [
  { label: 'All Prices', value: 'all' },
  { label: 'Under $3', value: 'under-3' },
  { label: '$3 - $6', value: '3-6' },
  { label: '$6 - $9', value: '6-9' },
  { label: '$9 - $12', value: '9-12' },
  { label: 'Over $12', value: 'over-12' }
]

export default function LittleCaesarsMenuContent({ menuItems }: LittleCaesarsMenuContentProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Items')
  const [selectedPriceRange, setSelectedPriceRange] = useState('all')
  const [sortBy, setSortBy] = useState('popularity')
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  // Advanced filtering and sorting
  const filteredAndSortedItems = useMemo(() => {
    const filtered = menuItems.filter(item => {
      // Search filter
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.category.toLowerCase().includes(searchTerm.toLowerCase())
      
      // Category filter
      const matchesCategory = selectedCategory === 'All Items' || item.category === selectedCategory
      
      // Price range filter
      const matchesPrice = selectedPriceRange === 'all' || 
                          (selectedPriceRange === 'under-3' && item.price < 3) ||
                          (selectedPriceRange === '3-6' && item.price >= 3 && item.price <= 6) ||
                          (selectedPriceRange === '6-9' && item.price >= 6 && item.price <= 9) ||
                          (selectedPriceRange === '9-12' && item.price >= 9 && item.price <= 12) ||
                          (selectedPriceRange === 'over-12' && item.price > 12)
      
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
      answer: "Little Caesars menu prices for 2026 range from $1.99 for beverages to $10.99 for specialty pizzas. Hot-N-Ready pizzas start at $5.55, wings are $8.49, and Crazy Bread is $3.49. Prices may vary by location."
    },
    {
      question: "What is Hot-N-Ready pizza at Little Caesars?",
      answer: "Hot-N-Ready pizzas are fresh, hot pizzas available for immediate pickup with no waiting required. Popular options include pepperoni ($5.55) and cheese ($5.55) pizzas made with signature sauce and 100% mozzarella cheese."
    },
    {
      question: "Does Little Caesars have deep dish pizza?",
      answer: "Yes! Little Caesars offers Detroit-Style Deep Dish pizza with thick, buttery crust and crispy edges. Options include pepperoni ($8.49), cheese ($8.49), and specialty combinations starting at $8.99."
    },
    {
      question: "What comes with Crazy Bread at Little Caesars?",
      answer: "Crazy Bread comes as an 8-piece order of freshly baked bread sticks brushed with garlic butter and sprinkled with parmesan cheese. It's served with Crazy Sauce for dipping and costs $3.49."
    },
    {
      question: "Does Little Caesars offer lunch combos?",
      answer: "Yes, Little Caesars offers lunch combos starting at $5.99 including four slices of Hot-N-Ready pizza with a drink. Perfect for quick, affordable lunch meals."
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

      {/* Feature badges section */}
      <section className="py-8 bg-white border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-little-caesars-orange/10 rounded-full px-4 py-2 border border-little-caesars-orange/20">
              <Star className="h-5 w-5 text-little-caesars-orange" />
              <span className="text-stone-700 font-medium">Fresh Daily</span>
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
              <span className="text-stone-700 font-medium">Best Value</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Link 
              href="/coupons"
              className="group inline-flex items-center bg-little-caesars-orange text-white px-8 py-4 rounded-lg font-bold hover:bg-little-caesars-orange/90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              View Latest Coupons
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/about"
              className="group inline-flex items-center border-2 border-little-caesars-orange text-little-caesars-orange px-8 py-4 rounded-lg font-bold hover:bg-little-caesars-orange hover:text-white transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              About Little Caesars
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Search & Filters Section */}
      <section className="py-8 bg-white border-b border-stone-200 sticky top-0 z-50 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
              <input
                type="text"
                placeholder="Search menu items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-little-caesars-orange focus:border-transparent text-stone-700 placeholder-stone-400"
              />
            </div>

            {/* Category Filter */}
            <div className="relative w-full md:w-auto">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-stone-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full md:w-auto pl-12 pr-8 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-little-caesars-orange focus:border-transparent bg-white text-stone-700 min-w-[180px]"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div className="relative w-full md:w-auto">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full md:w-auto px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-little-caesars-orange focus:border-transparent bg-white text-stone-700 min-w-[140px]"
              >
                {priceRanges.map(range => (
                  <option key={range.value} value={range.value}>{range.label}</option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="relative w-full md:w-auto">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-auto px-4 py-3 border border-stone-300 rounded-xl focus:ring-2 focus:ring-little-caesars-orange focus:border-transparent bg-white text-stone-700 min-w-[160px]"
              >
                <option value="popularity">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name A-Z</option>
                <option value="calories">Calories</option>
              </select>
            </div>

            {/* Results Count */}
            <div className="text-sm text-stone-600 font-medium whitespace-nowrap">
              {filteredAndSortedItems.length} items found
            </div>
          </div>
        </div>
      </section>

      {/* Menu Categories Navigation */}
      <section className="py-6 bg-stone-50 border-b border-stone-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.slice(1).map(category => {
              const count = groupedItems[category]?.length || 0
              return (
                <button
                  key={category}
                  onClick={() => scrollToCategory(category)}
                  className="group px-4 py-2 bg-white hover:bg-little-caesars-orange/10 border border-stone-200 hover:border-little-caesars-orange/30 rounded-full text-sm font-medium text-stone-700 hover:text-little-caesars-orange transition-all duration-200 shadow-sm hover:shadow-md"
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
                    <div className="w-24 h-1 bg-little-caesars-orange mx-auto rounded-full"></div>
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
            // Show single category
            <section>
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-stone-900 mb-2">{selectedCategory}</h2>
                <div className="w-24 h-1 bg-little-caesars-orange mx-auto rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredAndSortedItems.map(item => (
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
                <strong>Little Caesars menu prices 2026</strong> feature America's best value pizza with <strong>Hot-N-Ready pizzas</strong> starting at just <strong>$5.55</strong>. Our comprehensive menu includes famous <strong>Hot-N-Ready pepperoni pizza</strong>, <strong>Crazy Bread</strong>, signature <strong>Detroit-Style Deep Dish pizza</strong>, and <strong>Caesar Wings</strong>.
              </p>
              <p>
                Popular items include the <strong>Hot-N-Ready Pepperoni Pizza ($5.55)</strong>, <strong>ExtraMostBestest Pizza ($6.00)</strong>, <strong>Crazy Bread 8-piece ($3.49)</strong>, and <strong>Caesar Wings ($8.49)</strong>. Every menu item includes current prices and real food photography for the best ordering experience.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-stone-50 rounded-xl">
              <h3 className="text-2xl font-bold text-little-caesars-orange mb-3">24 Menu Items</h3>
              <p className="text-stone-600">Complete menu with real photos and latest prices for every item</p>
            </div>
            <div className="text-center p-6 bg-stone-50 rounded-xl">
              <h3 className="text-2xl font-bold text-little-caesars-orange mb-3">Updated Daily</h3>
              <p className="text-stone-600">Latest 2026 prices verified and updated to ensure accuracy</p>
            </div>
            <div className="text-center p-6 bg-stone-50 rounded-xl">
              <h3 className="text-2xl font-bold text-little-caesars-orange mb-3">Real Photos</h3>
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
                  <h3 className="font-semibold text-stone-900 text-lg pr-4 group-hover:text-little-caesars-orange transition-colors">
                    {faq.question}
                  </h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="h-6 w-6 text-stone-500 group-hover:text-little-caesars-orange transition-colors flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-6 w-6 text-stone-500 group-hover:text-little-caesars-orange transition-colors flex-shrink-0" />
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
    </div>
  )
}
