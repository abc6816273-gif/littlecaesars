import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, ArrowRight, TrendingUp, Star, Flame, Tag, Calendar, Eye } from 'lucide-react'

// All Blog Posts Data - SEO Optimized
const blogPosts = [
  {
    id: 1,
    title: "Little Caesars Coupons January 2026 - 50% OFF Promo Codes",
    slug: "/little-caesars-coupons-january-2026",
    excerpt: "Get 15 verified Little Caesars coupons for January 2026. Exclusive promo codes with 50% off, FREE Crazy Bread, $5.99 pizzas, and BOGO deals. Updated daily!",
    image: "/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp",
    category: "Coupons",
    readTime: "5 min",
    date: "January 2026",
    featured: true,
    hot: true,
    views: "85K+"
  },
  {
    id: 2,
    title: "Little Caesars Crazy Puffs - Complete Guide & Review 2026",
    slug: "/crazy-puffs",
    excerpt: "Everything about Little Caesars Crazy Puffs! 4-Cheese filling, prices ($4.99), calories (720), preparation tips, and honest reviews. New menu item guide!",
    image: "/menu/Homepage-menus/4-Cheese-Crazy-Puffs-Little-Caesars-Menu.webp",
    category: "Menu Guide",
    readTime: "7 min",
    date: "December 2024",
    featured: true,
    hot: true,
    views: "45K+"
  },
  {
    id: 3,
    title: "Little Caesars New Items 2026 - Complete Menu Updates",
    slug: "/little-caesars-new-items-2026",
    excerpt: "Discover all new Little Caesars menu items for 2026! Crazy Puffs, new pizza flavors, limited-time offers, and upcoming releases. Full guide with prices.",
    image: "/menu/Homepage-menus/Detroit-Style-Deep-Dish-Pepperoni-Little-Caesars-Menu.webp",
    category: "Menu Updates",
    readTime: "8 min",
    date: "January 2026",
    featured: true,
    hot: false,
    views: "32K+"
  },
  {
    id: 4,
    title: "Little Caesars Nutrition & Calories Guide 2026",
    slug: "/little-caesars-nutrition-calories",
    excerpt: "Complete nutrition information for Little Caesars menu. Calories, carbs, protein, fat content for every pizza, crazy bread, wings, and more. Diet-friendly options!",
    image: "/menu/Homepage-menus/Classic-Pepperoni-Pizza-Little-Caesars-Menu.webp",
    category: "Nutrition",
    readTime: "10 min",
    date: "December 2024",
    featured: false,
    hot: false,
    views: "28K+"
  },
  {
    id: 5,
    title: "Happy Christmas 2026 - Little Caesars Holiday Deals",
    slug: "/happy-christmas-2026",
    excerpt: "Celebrate Christmas 2026 with Little Caesars! Special holiday deals, party packs, family meal bundles, and festive offers for the holiday season.",
    image: "/menu/Homepage-menus/Ultimate-Supreme-Pizza-Little-Caesars-Menu.webp",
    category: "Holiday Deals",
    readTime: "6 min",
    date: "December 2024",
    featured: false,
    hot: false,
    views: "22K+"
  },
  {
    id: 6,
    title: "Little Caesars Christmas Hours 2026 - Holiday Schedule",
    slug: "/little-caesars-christmas-hours",
    excerpt: "Check Little Caesars Christmas hours for 2024-2026. Are they open on Christmas Eve? Christmas Day hours, New Year's schedule, and holiday closures guide.",
    image: "/menu/Homepage-menus/Hula-Hawaiian-Pizza-Little-Caesars-Menu.webp",
    category: "Store Hours",
    readTime: "4 min",
    date: "December 2024",
    featured: false,
    hot: false,
    views: "18K+"
  },
  {
    id: 7,
    title: "Little Caesars vs Domino's - Complete Comparison 2026",
    slug: "/little-caesars-vs-dominos",
    excerpt: "Little Caesars vs Domino's pizza comparison. Which is better? Price comparison, taste test, menu variety, delivery options, and value for money analysis.",
    image: "/menu/Homepage-menus/Stuffed-Crust-Pepperoni-Little-Caesars-Menu.webp",
    category: "Comparison",
    readTime: "9 min",
    date: "December 2024",
    featured: false,
    hot: false,
    views: "35K+"
  },
  {
    id: 8,
    title: "Little Caesars Hot-N-Ready Menu - Complete Guide",
    slug: "/menu",
    excerpt: "Complete Little Caesars Hot-N-Ready menu with prices. Classic pizzas from $5.99, ExtraMostBestest options, Crazy Bread, wings, and combo deals!",
    image: "/menu/Homepage-menus/Classic-Cheese-Pizza-Little-Caesars-Menu.webp",
    category: "Menu Guide",
    readTime: "12 min",
    date: "January 2026",
    featured: false,
    hot: false,
    views: "120K+"
  },
  {
    id: 9,
    title: "Little Caesars Gift Cards - Buy, Check Balance & FAQs",
    slug: "/gift-cards",
    excerpt: "Little Caesars gift cards guide. How to buy online, check balance, personalized cards, bulk purchases for businesses, and frequently asked questions.",
    image: "/menu/Homepage-menus/Veggie-Pizza-Little-Caesars-Menu.webp",
    category: "Gift Cards",
    readTime: "5 min",
    date: "January 2026",
    featured: false,
    hot: false,
    views: "15K+"
  }
]

const categories = [
  { name: "All Posts", count: blogPosts.length, active: true },
  { name: "Coupons", count: blogPosts.filter(p => p.category === "Coupons").length },
  { name: "Menu Guide", count: blogPosts.filter(p => p.category === "Menu Guide").length },
  { name: "Nutrition", count: blogPosts.filter(p => p.category === "Nutrition").length },
  { name: "Holiday Deals", count: blogPosts.filter(p => p.category === "Holiday Deals").length },
]

// SEO Metadata - Optimized for Blog & News ranking
export const metadata: Metadata = {
  title: 'Little Caesars Blog & News 2026 - Coupons, Deals, Menu Updates',
  description: 'Little Caesars blog with latest coupons, menu updates, nutrition guides, and deals for 2026. Get 50% off promo codes, new menu items, and pizza tips. Updated daily!',
  keywords: [
    'Little Caesars blog',
    'Little Caesars news 2026',
    'Little Caesars coupons blog',
    'Little Caesars menu updates',
    'pizza deals blog',
    'Little Caesars tips',
    'pizza news',
    'Little Caesars articles',
    'pizza coupons 2026',
    'Little Caesars guide'
  ],
  openGraph: {
    title: 'Little Caesars Blog & News 2026 - Latest Coupons & Deals',
    description: 'Stay updated with Little Caesars coupons, menu updates, nutrition guides, and exclusive deals. Your ultimate pizza resource!',
    url: 'https://littlecaesarsmenu.us/posts',
    type: 'website',
    images: [{
      url: 'https://littlecaesarsmenu.us/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp',
      width: 1200,
      height: 630,
      alt: 'Little Caesars Blog & News'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Little Caesars Blog & News 2026',
    description: 'Latest Little Caesars coupons, menu updates, and deals. Updated daily!',
  },
  alternates: {
    canonical: 'https://littlecaesarsmenu.us/posts'
  }
}

// JSON-LD Schema for Blog
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Little Caesars Blog & News",
  "description": "Latest Little Caesars coupons, menu updates, nutrition guides, and deals",
  "url": "https://littlecaesarsmenu.us/posts",
  "publisher": {
    "@type": "Organization",
    "name": "Little Caesars Menu",
    "url": "https://littlecaesarsmenu.us",
    "logo": {
      "@type": "ImageObject",
      "url": "https://littlecaesarsmenu.us/Little-Caesars-Menu-Logo.png"
    }
  },
  "blogPost": blogPosts.map(post => ({
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "url": `https://littlecaesarsmenu.us${post.slug}`,
    "image": `https://littlecaesarsmenu.us${post.image}`,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Little Caesars Menu"
    }
  }))
}

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />

      {/* Hero Section */}
      <section
        className="relative py-16 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #c53030 0%, #dd6b20 50%, #c53030 100%)' }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <TrendingUp className="w-4 h-4 text-yellow-300 mr-2" />
            <span className="text-white text-sm font-medium">Updated Daily • {blogPosts.length} Articles</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Little Caesars <span style={{ color: '#fcd34d' }}>Blog & News</span>
          </h1>

          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8" style={{ color: '#ffffff' }}>
            Your ultimate resource for coupons, menu updates, nutrition guides, and exclusive pizza deals
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="text-2xl font-bold text-white">{blogPosts.length}+</div>
              <div className="text-orange-100 text-sm">Articles</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="text-2xl font-bold text-white">500K+</div>
              <div className="text-orange-100 text-sm">Readers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3">
              <div className="text-2xl font-bold text-white">Daily</div>
              <div className="text-orange-100 text-sm">Updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat, index) => (
              <button
                key={index}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${cat.active
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white text-gray-700 hover:bg-orange-50 hover:text-orange-600 border border-gray-200'
                  }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-2 rounded-lg">
              <Star className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Featured Articles</h2>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
              Most Popular
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link
                key={post.id}
                href={post.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 transform hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {post.hot && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Flame className="w-3 h-3" /> HOT
                      </span>
                    )}
                    <span className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-gray-700 flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {post.views}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-3 text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {post.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-gradient-to-r from-gray-700 to-gray-900 p-2 rounded-lg">
              <Tag className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">All Articles</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link
                key={post.id}
                href={post.slug}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-full text-xs font-medium text-white flex items-center gap-1">
                    <Eye className="w-3 h-3" /> {post.views}
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-2 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {post.readTime} read
                    </span>
                    <span className="text-orange-500 font-medium group-hover:underline flex items-center gap-1">
                      Read More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="py-16"
        style={{ background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Never Miss a Deal! 🍕
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest Little Caesars coupons, menu updates, and exclusive deals delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-xl border-2 border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-colors"
            />
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold px-8 py-3 rounded-xl transition-all transform hover:scale-105 shadow-lg shadow-orange-500/30">
              Subscribe
            </button>
          </div>
          <p className="text-gray-500 text-sm mt-4">
            Join 50,000+ pizza lovers. No spam, unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About Little Caesars Blog</h2>
            <p className="text-gray-600 mb-4">
              Welcome to the official Little Caesars Menu blog - your ultimate resource for everything
              Little Caesars! We provide the latest coupons, promo codes, menu updates, nutrition
              information, and exclusive deals to help you save money on your favorite pizzas.
            </p>
            <p className="text-gray-600 mb-4">
              Our team updates this blog daily with verified coupon codes, new menu items, and
              helpful guides. Whether you're looking for the best Hot-N-Ready deals, want to know
              about new Crazy Puffs, or need nutrition facts for your diet, we've got you covered.
            </p>
            <h3 className="text-xl font-bold text-gray-900 mb-3">What You'll Find Here:</h3>
            <ul className="text-gray-600 list-disc pl-5 space-y-2">
              <li><strong>Coupons & Promo Codes:</strong> Daily updated deals with up to 50% off</li>
              <li><strong>Menu Updates:</strong> New items, limited-time offers, and seasonal specials</li>
              <li><strong>Nutrition Guides:</strong> Calories, macros, and diet-friendly options</li>
              <li><strong>Store Information:</strong> Hours, locations, and holiday schedules</li>
              <li><strong>Pizza Comparisons:</strong> How Little Caesars stacks up against competitors</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
