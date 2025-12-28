import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Star, TrendingUp } from 'lucide-react'
import BlogCard from './BlogCard'

export const metadata: Metadata = {
  title: 'Important Blogs - Little Caesars Menu Guides & Pizza Tips',
  description: 'Essential guides for Little Caesars dining, menu updates, pizza tips, and money-saving strategies. Stay updated with the latest pizza news and deals.',
  keywords: [
    'Little Caesars blogs',
    'pizza guides',
    'menu updates',
    'pizza tips',
    'Little Caesars news',
    'pizza deals',
    'dining guides',
    'menu information'
  ],
  openGraph: {
    title: 'Important Blogs - Little Caesars Menu Guides',
    description: 'Essential guides for Little Caesars dining, menu updates, and pizza tips.',
    type: 'website',
    images: [
      {
        url: '/Little-Caesars-Menu-Logo.png',
        width: 1200,
        height: 630,
        alt: 'Little Caesars Important Blogs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Important Blogs - Little Caesars Menu Guides',
    description: 'Essential guides for Little Caesars dining and menu updates.',
    images: ['/Little-Caesars-Menu-Logo.png']
  },
  alternates: {
    canonical: 'https://littlecaesarsmenu.us/important-blogs'
  }
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://littlecaesarsmenu.us'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Important Blogs',
      item: 'https://littlecaesarsmenu.us/important-blogs'
    }
  ]
}

// Featured blog posts - real content only  
const featuredBlogs = [
  {
    id: 'calorie-calculator',
    category: 'Health Tool',
    title: 'Little Caesars Calorie Calculator 2025 - Count Calories for Your Order',
    excerpt: 'FREE interactive calorie calculator for Little Caesars! Track calories, fat, protein, carbs for pizzas, wings, Crazy Bread & more. Plan your meal and make healthier choices with real-time nutrition tracking.',
    image: '/menu/Homepage-menus/calorie-calculator-tool.png',
    imageAlt: 'Little Caesars Calorie Calculator - Track Nutrition for Pizza and Sides',
    date: 'December 28, 2025',
    readTime: '3 min read',
    slug: 'little-caesars-calorie-calculator',
    isNew: true,
    featured: true
  },
  {
    id: 'coupons-january-2025',
    category: 'Coupons & Deals',
    title: 'Little Caesars Coupons January 2025 - 50% Off Promo Codes & Deals',
    excerpt: 'Get 15 verified Little Caesars coupons for January 2025! Exclusive promo codes: 50% off, FREE Crazy Bread, $5.99 pizzas, BOGO deals. Save up to $20 on your next order!',
    image: '/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp',
    imageAlt: 'Little Caesars Coupons January 2025 - Save 50% with Promo Codes',
    date: 'January 1, 2025',
    readTime: '5 min read',
    slug: 'little-caesars-coupons-january-2025',
    isNew: true,
    featured: true
  },
  {
    id: 'crazy-puffs-guide',
    category: 'Trending',
    title: 'Crazy Puffs Little Caesars 2025 - Complete Guide, Flavors, Price & Calories',
    excerpt: 'Everything you need to know about Little Caesars viral Crazy Puffs! All 5 flavors, prices starting at $3.99, calories, nutrition facts, and honest reviews. The #1 trending menu item of 2024-2025!',
    image: '/menu/Homepage-menus/4-Cheese-Crazy-Puffs-Little-Caesars-Menu.webp',
    imageAlt: 'Little Caesars Crazy Puffs - All 5 Flavors with Prices and Calories',
    date: 'December 26, 2025',
    readTime: '10 min read',
    slug: 'crazy-puffs',
    isNew: true,
    featured: true
  },
  {
    id: 'new-items-2025',
    category: 'New Menu',
    title: 'Little Caesars New Items 2025 - Complete Guide to All New Menu Items',
    excerpt: 'Discover all 10 NEW Little Caesars menu items for 2025! Stuffed Crust, Pretzel Crust, new pizzas, sides, drinks, and exclusive deals. Everything launching this year with prices and availability.',
    image: '/menu/Homepage-menus/Stuffed-Crust-Pepperoni-Little-Caesars-Menu.webp',
    imageAlt: 'Little Caesars New Menu Items 2025 - All New Pizzas, Sides, and Deals',
    date: 'December 26, 2025',
    readTime: '12 min read',
    slug: 'little-caesars-new-items-2025',
    isNew: true,
    featured: true
  },
  {
    id: 'nutrition-calories-guide',
    category: 'Health Guide',
    title: 'Little Caesars Nutrition & Calories Guide 2025 - Complete Health Facts',
    excerpt: 'Complete nutrition and calorie information for every Little Caesars menu item. Find the healthiest options, compare calories, and make informed choices for your diet goals.',
    image: '/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp',
    imageAlt: 'Little Caesars Nutrition Facts and Calorie Guide 2025',
    date: 'December 26, 2025',
    readTime: '8 min read',
    slug: 'little-caesars-nutrition-calories',
    isNew: true,
    featured: true
  },
  {
    id: 'happy-christmas-2025',
    category: 'Holiday Special',
    title: 'Happy Christmas 2025 - Little Caesars Holiday Deals & Festive Pizza Guide',
    excerpt: 'Celebrate Christmas 2025 with Little Caesars! Discover exclusive holiday pizza deals, Christmas party planning tips, festive menu ideas, family meal combos, and make your holiday celebration delicious and stress-free.',
    image: '/menu/Homepage-menus/Ultimate-Supreme-Pizza-Little-Caesars-Menu.webp',
    imageAlt: 'Happy Christmas 2025 - Little Caesars Holiday Pizza Celebration with festive decorations',
    date: 'December 20, 2025',
    readTime: '8 min read',
    slug: 'happy-christmas-2025',
    isNew: false,
    featured: true
  },
  {
    id: 'menu-prices-calories-guide',
    category: 'Menu Guide',
    title: 'Little Caesars Menu Prices & Calories Guide 2025 - Complete Pizza Menu',
    excerpt: 'Your ultimate comprehensive guide to Little Caesars menu with prices, calories, money-saving tips, nutrition information, and everything you need to know. From Hot-N-Ready pizzas to Crazy Bread, this complete guide covers menu items, deals, ordering tips, and much more.',
    image: '/menu/Homepage-menus/Classic-Pepperoni-Pizza-Little-Caesars-Menu.webp',
    imageAlt: 'Little Caesars Hot-N-Ready Pepperoni Pizza with prices and calories - complete menu guide',
    date: 'January 20, 2025',
    readTime: '12 min read',
    slug: 'little-caesars-menu',
    isNew: false,
    featured: true
  },
  {
    id: 'secret-menu-2025',
    category: 'Hidden Hacks',
    title: 'Little Caesars Secret Menu 2025 - Hidden Items & Ordering Hacks Revealed!',
    excerpt: 'Discover the Little Caesars SECRET MENU! 8 hidden items, 5 ordering hacks, insider tips & tricks that most customers don\'t know about. Unlock exclusive customizations!',
    image: '/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp',
    imageAlt: 'Little Caesars Secret Menu 2025 - Hidden Items and Ordering Hacks',
    date: 'December 27, 2025',
    readTime: '8 min read',
    slug: 'little-caesars-secret-menu',
    isNew: true,
    featured: true
  },
  {
    id: 'pizza-ranking-2025',
    category: 'Best Pizza',
    title: 'Best Pizza at Little Caesars 2025 - All 12 Pizzas Ranked from #1 to Worst',
    excerpt: 'Which Little Caesars pizza is the best? We ranked ALL 12 pizzas! ExtraMostBestest, Detroit Deep Dish, Stuffed Crust compared with pros, cons, and verdicts.',
    image: '/menu/Homepage-menus/Classic-Pepperoni-Pizza-Little-Caesars-Menu.webp',
    imageAlt: 'Best Pizza at Little Caesars - All Pizzas Ranked 2025',
    date: 'December 27, 2025',
    readTime: '10 min read',
    slug: 'best-little-caesars-pizza-ranked',
    isNew: true,
    featured: true
  },
  {
    id: 'delivery-guide-2025',
    category: 'Delivery Guide',
    title: 'Little Caesars Delivery 2025 - Complete Guide: Fees, Hours, Areas & Tips',
    excerpt: 'Everything about Little Caesars delivery! $3.99 fee, $12 minimum, 25-45 min wait, delivery partners compared, ordering steps, and money-saving tips.',
    image: '/menu/Homepage-menus/Ultimate-Supreme-Pizza-Little-Caesars-Menu.webp',
    imageAlt: 'Little Caesars Delivery Guide 2025 - Fees, Hours, Tips',
    date: 'December 27, 2025',
    readTime: '7 min read',
    slug: 'little-caesars-delivery',
    isNew: true,
    featured: true
  }
]

// Category blogs - will be populated when you create new blog posts
const categoryBlogs = {
  'Menu Updates': [],
  'Pizza Tips': [],
  'Deals & Coupons': []
}

const blogPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Important Little Caesars Blogs',
  description: 'Essential guides for Little Caesars dining, menu updates, pizza tips, and money-saving strategies.',
  url: 'https://littlecaesarsmenu.us/important-blogs',
  publisher: {
    '@type': 'Organization',
    name: 'Little Caesars Menu',
    logo: {
      '@type': 'ImageObject',
      url: 'https://littlecaesarsmenu.us/Little-Caesars-Menu-Logo.png'
    }
  },
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 1,
    itemListElement: featuredBlogs.map((blog, index) => ({
      '@type': 'BlogPosting',
      position: index + 1,
      headline: blog.title,
      description: blog.excerpt,
      image: `https://littlecaesarsmenu.us${blog.image}`,
      datePublished: '2025-01-20',
      dateModified: '2025-01-20',
      author: {
        '@type': 'Organization',
        name: 'Little Caesars Menu Team'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Little Caesars Menu',
        logo: {
          '@type': 'ImageObject',
          url: 'https://littlecaesarsmenu.us/Little-Caesars-Menu-Logo.png'
        }
      },
      url: `https://littlecaesarsmenu.us/${blog.slug}`,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://littlecaesarsmenu.us/${blog.slug}`
      }
    }))
  }
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Little Caesars Menu',
  url: 'https://littlecaesarsmenu.us',
  logo: 'https://littlecaesarsmenu.us/Little-Caesars-Menu-Logo.png',
  description: 'Your ultimate source for Little Caesars menu information, prices, calories, deals, and dining guides.',
  sameAs: [
    'https://www.facebook.com/LittleCaesars',
    'https://twitter.com/LittleCaesars',
    'https://www.instagram.com/littlecaesars'
  ]
}

export default function ImportantBlogs() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 py-4 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-little-caesars-orange transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Important Blogs</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <header className="relative text-white py-16 lg:py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/orange-background-6859059_1280.webp"
              alt="Little Caesars Important Blogs Background"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6">
              <Star className="w-10 h-10 mr-3" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Important Blogs
              </h1>
            </div>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              Essential guides for Little Caesars dining and pizza expertise
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                Updated Weekly
              </div>
              <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                <TrendingUp className="w-4 h-4 mr-2" />
                Expert Tips
              </div>
              <div className="flex items-center bg-white/20 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                Quick Reads
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

          {/* Featured Blogs Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Guides
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our most popular and comprehensive guides to help you get the most out of your Little Caesars experience
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {featuredBlogs.map((blog, index) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  featured={true}
                  priority={index === 0}
                />
              ))}
            </div>
          </section>

          {/* Category Sections - Only show if blogs exist */}
          {Object.entries(categoryBlogs).map(([category, blogs]) =>
            blogs.length > 0 ? (
              <section key={category} className="mb-12">
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center">
                      <div className="w-2 h-8 bg-little-caesars-orange rounded-full mr-4"></div>
                      {category}
                    </h2>
                    <Link
                      href="/posts"
                      className="text-little-caesars-orange hover:text-red-600 font-semibold flex items-center group"
                    >
                      View All
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {blogs.map((blog) => (
                      <div key={blog.id} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-little-caesars-orange transition-colors">
                          <Link href="/little-caesars-menu">
                            {blog.title}
                          </Link>
                        </h3>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {blog.date}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            {blog.readTime}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            ) : null
          )}

          {/* Newsletter Signup */}
          <section className="bg-gradient-to-r from-little-caesars-orange to-red-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated with Pizza News
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Get the latest Little Caesars menu updates, deals, and pizza tips delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-little-caesars-orange px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </section>

          {/* Quick Links */}
          <section className="mt-12 grid md:grid-cols-3 gap-6">
            <Link
              href="/menu"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 bg-little-caesars-orange rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Full Menu</h3>
              <p className="text-gray-600">Explore our complete menu with prices and calories</p>
            </Link>

            <Link
              href="/coupons"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Latest Deals</h3>
              <p className="text-gray-600">Find current coupons and special offers</p>
            </Link>

            <Link
              href="/store-locator"
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow group"
            >
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Find Location</h3>
              <p className="text-gray-600">Locate the nearest Little Caesars restaurant</p>
            </Link>
          </section>
        </main>
      </div>
    </>
  )
}
