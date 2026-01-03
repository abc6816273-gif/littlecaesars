import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowLeft, Gift, Star, Heart, Sparkles, Pizza } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Happy Christmas 2026 - Little Caesars Holiday Deals, Party Ideas & Festive Pizza Guide',
  description: 'Celebrate Christmas 2026 with Little Caesars! Discover exclusive holiday pizza deals, Christmas party planning tips, festive menu ideas, family meal combos, and how to make your holiday celebration delicious with Hot-N-Ready pizzas.',
  keywords: [
    'Happy Christmas 2026',
    'Christmas 2026',
    'Little Caesars Christmas',
    'Christmas pizza deals',
    'holiday pizza party',
    'Christmas food ideas',
    'Little Caesars holiday menu',
    'Christmas party pizza',
    'festive pizza deals',
    'Christmas dinner ideas',
    'holiday meal planning',
    'Christmas 2026 food',
    'pizza for Christmas',
    'Little Caesars Christmas deals',
    'holiday pizza specials',
    'Christmas Eve pizza',
    'family Christmas dinner',
    'Christmas party food',
    'Little Caesars holiday hours',
    'Christmas pizza delivery'
  ],
  openGraph: {
    title: 'Happy Christmas 2026 - Little Caesars Holiday Pizza Guide & Festive Deals',
    description: 'Make your Christmas 2026 celebration special with Little Caesars! Exclusive holiday deals, party planning tips, and festive pizza ideas for the perfect holiday feast.',
    type: 'article',
    publishedTime: '2026-12-20T00:00:00Z',
    modifiedTime: '2026-12-20T00:00:00Z',
    authors: ['Little Caesars Menu Team'],
    images: [
      {
        url: 'https://littlecaesarsmenu.us/menu/happy-christmas-2026-little-caesars.png',
        width: 1200,
        height: 630,
        alt: 'Happy Christmas 2026 - Little Caesars Holiday Pizza Celebration'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy Christmas 2026 - Little Caesars Holiday Deals & Party Ideas',
    description: 'Celebrate Christmas 2026 with delicious Little Caesars pizza! Holiday deals, party tips & festive menu ideas.',
    images: ['https://littlecaesarsmenu.us/menu/happy-christmas-2026-little-caesars.png']
  },
  alternates: {
    canonical: 'https://littlecaesarsmenu.us/happy-christmas-2026'
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
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Happy Christmas 2026 - Little Caesars Holiday Deals, Party Ideas & Festive Pizza Guide',
  description: 'Celebrate Christmas 2026 with Little Caesars! Discover exclusive holiday pizza deals, Christmas party planning tips, festive menu ideas, and family meal combos.',
  image: 'https://littlecaesarsmenu.us/menu/happy-christmas-2026-little-caesars.png',
  datePublished: '2026-12-20T00:00:00Z',
  dateModified: '2026-12-20T00:00:00Z',
  author: {
    '@type': 'Organization',
    name: 'Little Caesars Menu Team',
    url: 'https://littlecaesarsmenu.us'
  },
  publisher: {
    '@type': 'Organization',
    name: 'Little Caesars Menu',
    logo: {
      '@type': 'ImageObject',
      url: 'https://littlecaesarsmenu.us/Little-Caesars-Menu-Logo.png'
    }
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://littlecaesarsmenu.us/happy-christmas-2026'
  },
  keywords: 'Happy Christmas 2026, Christmas pizza, Little Caesars holiday deals, Christmas party food, holiday pizza specials'
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Little Caesars open on Christmas Day 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Little Caesars holiday hours vary by location. Most stores have modified hours on Christmas Eve and may be closed on Christmas Day. We recommend checking with your local store or using the store locator for specific holiday hours.'
      }
    },
    {
      '@type': 'Question',
      name: 'What are the best Little Caesars pizzas for a Christmas party?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For Christmas parties, we recommend the Hot-N-Ready Pepperoni, Detroit-Style Deep Dish, and ExtraMostBestest pizzas. The Party Pack with multiple pizzas, Crazy Bread, and wings is perfect for larger gatherings. You can feed 10-15 people for under $50!'
      }
    },
    {
      '@type': 'Question',
      name: 'Does Little Caesars have Christmas deals in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Little Caesars typically offers holiday specials and party deals during the Christmas season. Check our coupons page for the latest deals, including bundle offers perfect for holiday parties and family gatherings.'
      }
    },
    {
      '@type': 'Question',
      name: 'How much pizza do I need for a Christmas party?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Plan for about 2-3 slices per adult and 1-2 slices per child. For a party of 20 people, order 5-6 large pizzas. Little Caesars Hot-N-Ready pizzas make party planning easy with no wait time!'
      }
    }
  ]
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
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Happy Christmas 2026',
      item: 'https://littlecaesarsmenu.us/happy-christmas-2026'
    }
  ]
}

export default function HappyChristmas2026() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
        {/* Breadcrumb Navigation */}
        <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 py-4 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-little-caesars-orange transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li>
                <Link href="/important-blogs" className="text-gray-500 hover:text-little-caesars-orange transition-colors">
                  Important Blogs
                </Link>
              </li>
              <li className="text-gray-400">/</li>
              <li className="text-gray-900 font-medium">Happy Christmas 2026</li>
            </ol>
          </div>
        </nav>

        {/* Hero Section with Christmas Theme */}
        <header className="relative bg-gradient-to-r from-red-600 via-red-500 to-green-600 text-white py-16 lg:py-24 overflow-hidden">
          {/* Decorative snowflakes */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 left-10 text-white/20 text-6xl">❄</div>
            <div className="absolute top-20 right-20 text-white/30 text-4xl">❄</div>
            <div className="absolute bottom-10 left-1/4 text-white/20 text-5xl">❄</div>
            <div className="absolute top-1/3 right-10 text-white/25 text-3xl">✨</div>
            <div className="absolute bottom-20 right-1/3 text-white/20 text-4xl">🎄</div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-6 space-x-2">
              <Gift className="w-8 h-8 text-yellow-300" />
              <span className="bg-yellow-400 text-red-800 px-4 py-1 rounded-full text-sm font-bold">
                🎄 Christmas Special 2026
              </span>
              <Gift className="w-8 h-8 text-yellow-300" />
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
              🎅 Happy Christmas 2026! 🎄
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Celebrate the holidays with delicious Little Caesars pizza! Discover festive deals, party planning tips, and make your Christmas celebration unforgettable.
            </p>

            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Calendar className="w-4 h-4 mr-2" />
                December 20, 2026
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Clock className="w-4 h-4 mr-2" />
                8 min read
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Star className="w-4 h-4 mr-2" />
                Featured Guide
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Image */}
          <div className="relative h-80 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-12 border-4 border-red-500">
            <Image
              src="/menu/happy-christmas-2026-little-caesars.png"
              alt="Happy Christmas 2026 - Little Caesars Holiday Pizza Celebration with festive decorations"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </div>

          <article className="prose prose-lg max-w-none">
            {/* Table of Contents - SEO Boost */}
            <nav className="bg-white rounded-2xl shadow-lg p-6 mb-10 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                📋 Table of Contents - Quick Navigation
              </h2>
              <ul className="space-y-2 text-gray-700">
                <li>
                  <a href="#why-little-caesars" className="text-little-caesars-orange hover:underline flex items-center">
                    🍕 Why Choose Little Caesars for Christmas 2026
                  </a>
                </li>
                <li>
                  <a href="#party-planning" className="text-little-caesars-orange hover:underline flex items-center">
                    🎄 Christmas Party Planning Guide
                  </a>
                </li>
                <li>
                  <a href="#top-pizzas" className="text-little-caesars-orange hover:underline flex items-center">
                    ⭐ Top Pizza Picks for Christmas
                  </a>
                </li>
                <li>
                  <a href="#holiday-hours" className="text-little-caesars-orange hover:underline flex items-center">
                    🕐 Little Caesars Holiday Hours 2026
                  </a>
                </li>
                <li>
                  <a href="#christmas-deals" className="text-little-caesars-orange hover:underline flex items-center">
                    💰 Christmas Deals & Coupons
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-little-caesars-orange hover:underline flex items-center">
                    ❓ Frequently Asked Questions
                  </a>
                </li>
              </ul>
            </nav>

            {/* Key Takeaways - Featured Snippet Optimization */}
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl p-6 mb-10">
              <h2 className="text-xl font-bold text-gray-900 mb-3">🔑 Key Takeaways</h2>
              <ul className="space-y-2 text-gray-700">
                <li>✅ Little Caesars offers affordable pizza options perfect for Christmas parties</li>
                <li>✅ Hot-N-Ready pizzas available for quick pickup during the holiday rush</li>
                <li>✅ Order 2-3 slices per person for your Christmas gathering</li>
                <li>✅ Check local store for Christmas Eve and Christmas Day hours</li>
                <li>✅ ExtraMostBestest and Detroit-Style are top picks for holiday celebrations</li>
              </ul>
            </div>

            {/* Introduction */}
            <div className="bg-gradient-to-r from-red-100 to-green-100 rounded-2xl p-8 mb-10 border-l-4 border-red-500">
              <div className="flex items-start">
                <Sparkles className="w-8 h-8 text-red-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 mt-0">
                    🎁 Make This Christmas Extra Special with Pizza!
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed mb-0">
                    Christmas 2026 is here, and what better way to celebrate than with hot, delicious pizza from Little Caesars?
                    Whether you're hosting a family gathering, planning a holiday party, or just want a stress-free Christmas dinner,
                    we've got you covered with everything you need to know about Little Caesars holiday offerings, deals, and party planning tips!
                  </p>
                </div>
              </div>
            </div>

            {/* Why Pizza for Christmas */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Pizza className="w-8 h-8 text-little-caesars-orange mr-3" />
                Why Choose Little Caesars for Christmas 2026?
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Hot-N-Ready Convenience</h3>
                  </div>
                  <p className="text-gray-600">
                    No waiting, no stress! Grab your pizzas and get back to celebrating with your loved ones.
                    Perfect for busy holiday schedules when you don't have time to cook.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">💰</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Budget-Friendly Feasts</h3>
                  </div>
                  <p className="text-gray-600">
                    Feed your entire family without breaking the bank. Christmas can be expensive,
                    but Little Caesars makes it affordable to enjoy delicious pizza together.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-yellow-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">👨‍👩‍👧‍👦</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Something for Everyone</h3>
                  </div>
                  <p className="text-gray-600">
                    From classic pepperoni to veggie options, cheese lovers to meat enthusiasts -
                    there's a pizza for every family member at your Christmas gathering.
                  </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">🎉</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Party-Ready Options</h3>
                  </div>
                  <p className="text-gray-600">
                    Bundle deals, Crazy Bread, wings, and more! Little Caesars has everything
                    you need to throw an amazing Christmas party without the kitchen stress.
                  </p>
                </div>
              </div>
            </section>

            {/* Christmas Party Planning */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Gift className="w-8 h-8 text-green-600 mr-3" />
                Christmas 2026 Party Planning Guide
              </h2>

              <div className="bg-gradient-to-br from-green-50 to-red-50 rounded-2xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">🍕 How Much Pizza to Order</h3>

                <div className="overflow-x-auto">
                  <table className="w-full bg-white rounded-xl shadow">
                    <thead className="bg-gradient-to-r from-red-500 to-green-500 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-bold">Party Size</th>
                        <th className="px-6 py-4 text-left font-bold">Pizzas Needed</th>
                        <th className="px-6 py-4 text-left font-bold">Recommended Add-ons</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">5-8 people</td>
                        <td className="px-6 py-4">2-3 large pizzas</td>
                        <td className="px-6 py-4">1 Crazy Bread</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">10-15 people</td>
                        <td className="px-6 py-4">4-5 large pizzas</td>
                        <td className="px-6 py-4">2 Crazy Bread + Wings</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">20-25 people</td>
                        <td className="px-6 py-4">7-8 large pizzas</td>
                        <td className="px-6 py-4">3 Crazy Bread + Wings + Drinks</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">30+ people</td>
                        <td className="px-6 py-4">10+ large pizzas</td>
                        <td className="px-6 py-4">Full Party Pack recommended</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Best Pizzas for Christmas */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Star className="w-8 h-8 text-yellow-500 mr-3" />
                Top Pizza Picks for Christmas 2026
              </h2>

              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3">
                    <span className="font-bold">🥇 #1 Most Popular</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">ExtraMostBestest Pepperoni</h3>
                    <p className="text-gray-600 mb-4">
                      The crowd favorite! 80% more pepperoni and 25% more cheese than the classic.
                      Perfect for pepperoni lovers at your Christmas party.
                    </p>
                    <div className="flex items-center text-little-caesars-orange font-bold">
                      Starting at $7.99
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3">
                    <span className="font-bold">🎄 Holiday Favorite</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Detroit-Style Deep Dish</h3>
                    <p className="text-gray-600 mb-4">
                      Crispy, cheesy edges with a thick, airy crust. A premium option that's perfect
                      for making Christmas dinner feel extra special.
                    </p>
                    <div className="flex items-center text-little-caesars-orange font-bold">
                      Starting at $9.99
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-3">
                    <span className="font-bold">👨‍👩‍👧‍👦 Family Favorite</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3 Meat Treat Pizza</h3>
                    <p className="text-gray-600 mb-4">
                      Loaded with pepperoni, Italian sausage, and bacon. Satisfies the meat lovers
                      in your family this Christmas.
                    </p>
                    <div className="flex items-center text-little-caesars-orange font-bold">
                      Starting at $8.99
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FAQ Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Heart className="w-8 h-8 text-red-500 mr-3" />
                Christmas 2026 FAQs
              </h2>

              <div className="space-y-4">
                <details className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 flex items-center justify-between">
                    Is Little Caesars open on Christmas Day 2026?
                    <span className="text-little-caesars-orange group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p className="text-gray-600">
                      Little Caesars holiday hours vary by location. Most stores have modified hours on Christmas Eve
                      and may be closed on Christmas Day. We recommend checking with your local store or using our
                      <Link href="/store-locator" className="text-little-caesars-orange hover:underline ml-1">store locator</Link> for specific holiday hours.
                    </p>
                  </div>
                </details>

                <details className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 flex items-center justify-between">
                    What are the best pizzas for a Christmas party?
                    <span className="text-little-caesars-orange group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p className="text-gray-600">
                      For Christmas parties, we recommend a mix of Hot-N-Ready Pepperoni, Detroit-Style Deep Dish,
                      and ExtraMostBestest pizzas. Add Crazy Bread and wings for the complete party experience!
                    </p>
                  </div>
                </details>

                <details className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 flex items-center justify-between">
                    Does Little Caesars have Christmas deals?
                    <span className="text-little-caesars-orange group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p className="text-gray-600">
                      Yes! Check our <Link href="/coupons" className="text-little-caesars-orange hover:underline">coupons page</Link> for
                      the latest holiday deals and bundle offers perfect for Christmas celebrations.
                    </p>
                  </div>
                </details>

                <details className="bg-white rounded-xl shadow-lg overflow-hidden group">
                  <summary className="px-6 py-4 cursor-pointer font-bold text-gray-900 hover:bg-gray-50 flex items-center justify-between">
                    Can I pre-order pizza for Christmas?
                    <span className="text-little-caesars-orange group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <div className="px-6 py-4 bg-gray-50 border-t">
                    <p className="text-gray-600">
                      Yes! You can place orders through the <a href="https://littlecaesars.com" target="_blank" rel="noopener noreferrer" className="text-little-caesars-orange hover:underline">Little Caesars official website</a> or
                      <a href="https://www.littlecaesars.com/en-us/order/pickup" target="_blank" rel="noopener noreferrer" className="text-little-caesars-orange hover:underline">mobile app</a> for pickup.
                      For large party orders, we recommend calling your local store in advance.
                    </p>
                  </div>
                </details>
              </div>
            </section>

            {/* Christmas Message */}
            <section className="mb-12">
              <div className="bg-gradient-to-r from-red-500 via-red-600 to-green-600 rounded-2xl p-8 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  🎄 Merry Christmas 2026! 🎅
                </h2>
                <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                  From our Little Caesars family to yours, we wish you a wonderful holiday season
                  filled with joy, love, and delicious pizza! May your Christmas be merry and bright!
                </p>
                <div className="text-6xl mb-4">🎁 🍕 ❄️ 🎄 ⭐</div>
                <div className="flex flex-wrap justify-center gap-4 mt-6">
                  <a href="https://littlecaesars.com" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full text-sm font-medium transition-colors">
                    🌐 Official Website
                  </a>
                  <a href="https://www.facebook.com/LittleCaesars" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full text-sm font-medium transition-colors">
                    📘 Facebook
                  </a>
                  <a href="https://www.instagram.com/littlecaesars" target="_blank" rel="noopener noreferrer" className="bg-white/20 hover:bg-white/30 px-6 py-2 rounded-full text-sm font-medium transition-colors">
                    📸 Instagram
                  </a>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="grid md:grid-cols-3 gap-6 mb-12">
              <Link
                href="/menu"
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-little-caesars-orange"
              >
                <div className="w-16 h-16 bg-little-caesars-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <Pizza className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">View Full Menu</h3>
                <p className="text-gray-600 text-sm">Explore all pizza options for your Christmas celebration</p>
              </Link>

              <Link
                href="/coupons"
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-green-500"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Holiday Deals</h3>
                <p className="text-gray-600 text-sm">Find the best Christmas coupons and special offers</p>
              </Link>

              <Link
                href="/store-locator"
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-red-500"
              >
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Find Store</h3>
                <p className="text-gray-600 text-sm">Locate your nearest Little Caesars for holiday hours</p>
              </Link>
            </section>
          </article>

          {/* Back to Blogs */}
          <div className="border-t pt-8">
            <Link
              href="/important-blogs"
              className="inline-flex items-center text-little-caesars-orange hover:text-red-600 font-semibold group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Important Blogs
            </Link>
          </div>
        </main>
      </div>
    </>
  )
}
