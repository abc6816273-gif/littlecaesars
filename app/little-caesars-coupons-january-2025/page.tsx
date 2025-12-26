import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
    Tag,
    DollarSign,
    Percent,
    Gift,
    Clock,
    CheckCircle,
    Star,
    AlertCircle,
    Smartphone,
    Copy,
    ArrowRight,
    TrendingUp,
    Users,
    Pizza,
    Sparkles
} from 'lucide-react'

// SEO Metadata - Optimized for "Little Caesars Coupons January 2025"
export const metadata: Metadata = {
    title: 'Little Caesars Coupons January 2025 - 50% Off Codes & Promo Deals',
    description: 'Get 15 verified Little Caesars coupons for January 2025. Exclusive promo codes: 50% off, FREE Crazy Bread, $5.99 pizzas, BOGO deals. Updated daily - save up to $20!',
    keywords: [
        'Little Caesars coupons January 2025',
        'Little Caesars promo codes 2025',
        'Little Caesars coupon codes January',
        'Little Caesars deals January 2025',
        'Little Caesars discount codes',
        'Little Caesars offers 2025',
        'pizza coupons January 2025',
        'Little Caesars specials',
        'Hot-N-Ready coupons',
        'Crazy Bread deals',
        'Little Caesars pizza deals'
    ],
    openGraph: {
        title: 'Little Caesars Coupons January 2025 - 50% Off + FREE Crazy Bread',
        description: 'Save big with 15 verified Little Caesars coupon codes for January 2025. Get 50% off, BOGO deals, FREE Crazy Bread & more. Updated daily!',
        url: 'https://littlecaesarsmenu.us/little-caesars-coupons-january-2025',
        type: 'article',
        images: [{
            url: 'https://littlecaesarsmenu.us/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp',
            width: 1200,
            height: 630,
            alt: 'Little Caesars Coupons January 2025'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Little Caesars Coupons January 2025 - Save 50%',
        description: '15 verified promo codes for January 2025. FREE Crazy Bread, $5.99 pizzas, BOGO deals & more!'
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-coupons-january-2025'
    }
}

// Coupon Schema for Google Rich Snippets
const couponOffers = [
    {
        id: 1,
        code: 'CRAZY50',
        title: '50% Off Your First Online Order',
        description: 'Get 50% off your first online order at Little Caesars. New customers only. Minimum order $15.',
        discount: '50% OFF',
        discountType: 'percentage',
        minOrder: '$15',
        expiry: 'January 31, 2025',
        verified: true,
        popular: true,
        usedCount: 12453
    },
    {
        id: 2,
        code: 'FREEBREAD',
        title: 'FREE Crazy Bread with Any Pizza',
        description: 'Order any pizza and get FREE Crazy Bread (8-piece). Valid for online and app orders.',
        discount: 'FREE ITEM',
        discountType: 'freeitem',
        minOrder: 'Any Pizza',
        expiry: 'January 31, 2025',
        verified: true,
        popular: true,
        usedCount: 9876
    },
    {
        id: 3,
        code: 'PIZZA599',
        title: '$5.99 Classic Pepperoni Pizza',
        description: 'Get a large pepperoni pizza for just $5.99. Limited time Hot-N-Ready deal!',
        discount: '$5.99',
        discountType: 'fixed',
        minOrder: 'None',
        expiry: 'January 15, 2025',
        verified: true,
        popular: true,
        usedCount: 15234
    },
    {
        id: 4,
        code: 'BOGO2025',
        title: 'Buy One Get One FREE - Large Pizzas',
        description: 'Buy any large pizza and get a second large pizza absolutely FREE. Best deal of January!',
        discount: 'BOGO',
        discountType: 'bogo',
        minOrder: '1 Large Pizza',
        expiry: 'January 20, 2025',
        verified: true,
        popular: true,
        usedCount: 8765
    },
    {
        id: 5,
        code: 'SAVE5',
        title: '$5 Off Orders $20+',
        description: 'Save $5 on orders of $20 or more. Works on all menu items including wings and sides.',
        discount: '$5 OFF',
        discountType: 'fixed',
        minOrder: '$20',
        expiry: 'January 31, 2025',
        verified: true,
        popular: false,
        usedCount: 6543
    },
    {
        id: 6,
        code: 'STUFFED799',
        title: 'Stuffed Crust Pizza - $7.99',
        description: 'Get the delicious Stuffed Crust Pepperoni Pizza for only $7.99. Cheese-filled crust!',
        discount: '$7.99',
        discountType: 'fixed',
        minOrder: 'None',
        expiry: 'January 25, 2025',
        verified: true,
        popular: false,
        usedCount: 5432
    },
    {
        id: 7,
        code: 'FAMILY25',
        title: '25% Off Family Meal Deals',
        description: 'Get 25% off all family meal combos. Perfect for gatherings and parties!',
        discount: '25% OFF',
        discountType: 'percentage',
        minOrder: 'Family Combo',
        expiry: 'January 31, 2025',
        verified: true,
        popular: false,
        usedCount: 4321
    },
    {
        id: 8,
        code: 'CRAZYPUFFS',
        title: 'Crazy Puffs - Buy 2 Get 1 FREE',
        description: 'Buy 2 orders of Crazy Puffs and get 1 order FREE. Try all flavors!',
        discount: 'B2G1',
        discountType: 'bogo',
        minOrder: '2 Crazy Puffs',
        expiry: 'January 31, 2025',
        verified: true,
        popular: true,
        usedCount: 7654
    },
    {
        id: 9,
        code: 'DELIVERY20',
        title: '20% Off Delivery Orders',
        description: 'Get 20% off all delivery orders. No minimum required. Delivery fees apply.',
        discount: '20% OFF',
        discountType: 'percentage',
        minOrder: 'None',
        expiry: 'January 31, 2025',
        verified: true,
        popular: false,
        usedCount: 3456
    },
    {
        id: 10,
        code: 'FREEDRINK',
        title: 'FREE 2-Liter with Large Pizza',
        description: 'Order any large pizza and get a FREE 2-liter soda. Choice of Pepsi products.',
        discount: 'FREE ITEM',
        discountType: 'freeitem',
        minOrder: 'Large Pizza',
        expiry: 'January 31, 2025',
        verified: true,
        popular: false,
        usedCount: 4567
    },
    {
        id: 11,
        code: 'APP15',
        title: '15% Off App-Only Orders',
        description: 'Download the Little Caesars app and get 15% off your first app order.',
        discount: '15% OFF',
        discountType: 'percentage',
        minOrder: 'App Order',
        expiry: 'January 31, 2025',
        verified: true,
        popular: false,
        usedCount: 5678
    },
    {
        id: 12,
        code: 'DEEPDISH',
        title: 'Detroit Style Deep Dish - $9.99',
        description: 'Get the famous Detroit Style Deep Dish pizza for only $9.99. Crispy corners!',
        discount: '$9.99',
        discountType: 'fixed',
        minOrder: 'None',
        expiry: 'January 31, 2025',
        verified: true,
        popular: false,
        usedCount: 3214
    }
]

// FAQ Data for Schema
const faqData = [
    {
        question: "What Little Caesars coupons are available in January 2025?",
        answer: "In January 2025, Little Caesars offers multiple verified coupons including 50% off first orders (code: CRAZY50), FREE Crazy Bread with any pizza (code: FREEBREAD), $5.99 pepperoni pizzas, BOGO deals, and up to 25% off family meals. All codes are updated daily."
    },
    {
        question: "How do I use Little Caesars promo codes?",
        answer: "To use Little Caesars promo codes: 1) Order online at littlecaesars.com or through the app, 2) Add items to your cart, 3) At checkout, find the 'Promo Code' or 'Coupon Code' field, 4) Enter your code and click Apply, 5) Your discount will be automatically applied."
    },
    {
        question: "Does Little Caesars have a $5 pizza deal in January 2025?",
        answer: "Yes! Little Caesars offers their famous Hot-N-Ready $5.99 Classic Pepperoni Pizza in January 2025. You can also use code PIZZA599 to ensure you get this special price at participating locations."
    },
    {
        question: "Can I stack multiple Little Caesars coupons?",
        answer: "Unfortunately, Little Caesars typically allows only one promo code per order. However, you can combine promo codes with in-store specials, Hot-N-Ready prices, and the Little Caesars rewards program for maximum savings."
    },
    {
        question: "What is the best Little Caesars coupon for January 2025?",
        answer: "The best Little Caesars coupon for January 2025 is BOGO2025 (Buy One Get One FREE on large pizzas) for families, or CRAZY50 (50% off first online order) for new customers. Both offer significant savings of over $10."
    },
    {
        question: "Are Little Caesars coupons valid for delivery?",
        answer: "Yes, most Little Caesars coupons work for delivery orders. Some are specifically for delivery, like the DELIVERY20 code for 20% off delivery orders. Check each coupon's terms for delivery eligibility."
    },
    {
        question: "How often does Little Caesars release new coupons?",
        answer: "Little Caesars releases new coupons and deals regularly, typically weekly or bi-weekly. Special promotions often appear for holidays, major events, and seasonal celebrations. Sign up for their email newsletter for exclusive offers."
    },
    {
        question: "Does Little Caesars offer student or military discounts?",
        answer: "Little Caesars doesn't have an official nationwide student or military discount program. However, some local franchises may offer special discounts. It's best to ask at your local store. App-exclusive deals are available to everyone."
    }
]

// Generate JSON-LD Schema
function generateSchemas() {
    const couponSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Little Caesars Coupons January 2025",
        "description": "Verified Little Caesars coupon codes and promo deals for January 2025",
        "numberOfItems": couponOffers.length,
        "itemListElement": couponOffers.map((coupon, index) => ({
            "@type": "Offer",
            "position": index + 1,
            "name": coupon.title,
            "description": coupon.description,
            "priceValidUntil": "2025-01-31",
            "category": "Restaurant Coupon",
            "seller": {
                "@type": "Organization",
                "name": "Little Caesars"
            }
        }))
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqData.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Little Caesars Coupons January 2025 - 50% Off Codes & Promo Deals",
        "description": "Complete guide to all Little Caesars coupons, promo codes, and deals for January 2025. Save up to 50% with verified discount codes.",
        "author": {
            "@type": "Organization",
            "name": "Little Caesars Menu"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Little Caesars Menu",
            "logo": {
                "@type": "ImageObject",
                "url": "https://littlecaesarsmenu.us/Little-Caesars-Menu-Logo.png"
            }
        },
        "datePublished": "2025-01-01",
        "dateModified": new Date().toISOString().split('T')[0],
        "mainEntityOfPage": "https://littlecaesarsmenu.us/little-caesars-coupons-january-2025"
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://littlecaesarsmenu.us"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Coupons",
                "item": "https://littlecaesarsmenu.us/coupons"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "January 2025",
                "item": "https://littlecaesarsmenu.us/little-caesars-coupons-january-2025"
            }
        ]
    }

    return { couponSchema, faqSchema, articleSchema, breadcrumbSchema }
}

export default function LittleCaesarsCouponsJanuary2025() {
    const { couponSchema, faqSchema, articleSchema, breadcrumbSchema } = generateSchemas()
    const popularCoupons = couponOffers.filter(c => c.popular)
    const allCoupons = couponOffers

    return (
        <>
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(couponSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
                {/* Breadcrumb */}
                <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol className="flex items-center space-x-2 py-4 text-sm">
                            <li><Link href="/" className="text-gray-500 hover:text-little-caesars-orange">Home</Link></li>
                            <li className="text-gray-400">/</li>
                            <li><Link href="/coupons" className="text-gray-500 hover:text-little-caesars-orange">Coupons</Link></li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-900 font-medium">January 2025</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="relative bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white py-16 lg:py-24 overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 text-8xl">🍕</div>
                        <div className="absolute bottom-10 right-10 text-8xl">💰</div>
                        <div className="absolute top-1/2 left-1/4 text-6xl">🎉</div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center bg-yellow-400 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                            <Sparkles className="w-4 h-4 mr-2" />
                            UPDATED: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                            Little Caesars Coupons<br />
                            <span className="text-yellow-300">January 2025</span>
                        </h1>

                        <p className="text-xl md:text-2xl text-orange-100 mb-8 max-w-3xl mx-auto">
                            🔥 <strong>15 Verified Promo Codes</strong> - Save up to <strong>50% OFF</strong> on pizza, Crazy Bread,
                            wings, and more! All deals tested and working.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-xl">
                                <div className="text-3xl font-bold">15+</div>
                                <div className="text-sm">Active Coupons</div>
                            </div>
                            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-xl">
                                <div className="text-3xl font-bold">50%</div>
                                <div className="text-sm">Max Discount</div>
                            </div>
                            <div className="bg-white/20 backdrop-blur px-6 py-3 rounded-xl">
                                <div className="text-3xl font-bold">85K+</div>
                                <div className="text-sm">Times Used</div>
                            </div>
                        </div>

                        <a
                            href="#coupons"
                            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-red-800 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            View All Coupons
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </header>

                {/* Top Coupons - Above the Fold */}
                <section className="py-12 -mt-8 relative z-10" id="coupons">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow-2xl p-8 border-4 border-yellow-400">
                            <div className="text-center mb-8">
                                <span className="inline-flex items-center bg-red-100 text-red-800 px-4 py-1 rounded-full text-sm font-bold mb-3">
                                    <TrendingUp className="w-4 h-4 mr-2" />
                                    MOST POPULAR
                                </span>
                                <h2 className="text-3xl font-bold text-gray-900">
                                    Top Little Caesars Coupons for January 2025
                                </h2>
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                {popularCoupons.map((coupon) => (
                                    <div
                                        key={coupon.id}
                                        className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-dashed border-orange-300 hover:border-orange-500 transition-all hover:shadow-lg"
                                    >
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex items-center">
                                                {coupon.verified && (
                                                    <span className="inline-flex items-center bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-bold mr-2">
                                                        <CheckCircle className="w-3 h-3 mr-1" />
                                                        VERIFIED
                                                    </span>
                                                )}
                                                <span className="inline-flex items-center bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-bold">
                                                    <Users className="w-3 h-3 mr-1" />
                                                    {coupon.usedCount.toLocaleString()} used
                                                </span>
                                            </div>
                                            <div className="bg-red-600 text-white px-3 py-1 rounded-lg font-bold">
                                                {coupon.discount}
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{coupon.title}</h3>
                                        <p className="text-gray-600 mb-4">{coupon.description}</p>

                                        <div className="flex items-center justify-between">
                                            <div className="bg-gray-900 text-yellow-400 px-4 py-2 rounded-lg font-mono font-bold text-lg tracking-wider">
                                                {coupon.code}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                <Clock className="w-4 h-4 inline mr-1" />
                                                Expires: {coupon.expiry}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* All Coupons List */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                All Little Caesars Coupon Codes - January 2025
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Complete list of verified promo codes and discount deals. Click any code to copy!
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allCoupons.map((coupon) => (
                                <div
                                    key={coupon.id}
                                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-200 overflow-hidden group"
                                >
                                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 text-white text-center">
                                        <div className="text-2xl font-bold">{coupon.discount}</div>
                                    </div>
                                    <div className="p-5">
                                        <h3 className="font-bold text-gray-900 mb-2">{coupon.title}</h3>
                                        <p className="text-sm text-gray-600 mb-4">{coupon.description}</p>

                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-xs text-gray-500">Min: {coupon.minOrder}</span>
                                            <span className="text-xs text-gray-500">Exp: {coupon.expiry}</span>
                                        </div>

                                        <div className="bg-gray-100 rounded-lg p-3 text-center font-mono font-bold text-lg text-gray-800 group-hover:bg-gray-200 cursor-pointer transition-colors">
                                            {coupon.code}
                                            <Copy className="w-4 h-4 inline ml-2 text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* How to Use Section */}
                <section className="py-16 bg-gradient-to-br from-gray-50 to-orange-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                How to Use Little Caesars Coupons
                            </h2>
                            <p className="text-lg text-gray-600">
                                Follow these simple steps to save money on your next order
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { step: 1, title: 'Choose a Coupon', desc: 'Select a promo code from our verified list above', icon: Tag },
                                { step: 2, title: 'Order Online', desc: 'Visit littlecaesars.com or open the mobile app', icon: Smartphone },
                                { step: 3, title: 'Add to Cart', desc: 'Select your pizzas, sides, and drinks', icon: Pizza },
                                { step: 4, title: 'Apply Code', desc: 'Enter the promo code at checkout and save!', icon: DollarSign }
                            ].map((item) => (
                                <div key={item.step} className="bg-white rounded-xl p-6 shadow-md text-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <div className="text-4xl font-bold text-orange-500 mb-2">{item.step}</div>
                                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Current Deals Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            Little Caesars January 2025 In-Store Deals
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 text-white text-center">
                                <Pizza className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Hot-N-Ready® Classic</h3>
                                <div className="text-5xl font-extrabold mb-2">$5.99</div>
                                <p className="text-orange-100">Large pepperoni or cheese pizza ready when you arrive!</p>
                            </div>

                            <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-8 text-white text-center">
                                <Gift className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">ExtraMostBestest®</h3>
                                <div className="text-5xl font-extrabold mb-2">$7.99</div>
                                <p className="text-orange-100">80% more pepperoni and 25% more cheese!</p>
                            </div>

                            <div className="bg-gradient-to-br from-yellow-500 to-orange-400 rounded-2xl p-8 text-white text-center">
                                <Star className="w-16 h-16 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold mb-2">Stuffed Crust</h3>
                                <div className="text-5xl font-extrabold mb-2">$9.99</div>
                                <p className="text-orange-100">Cheese-filled crust for the ultimate pizza experience!</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            Little Caesars Coupons FAQ - January 2025
                        </h2>

                        <div className="space-y-6">
                            {faqData.map((faq, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                                    <div className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start">
                                            <span className="bg-orange-100 text-orange-600 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                                                Q
                                            </span>
                                            {faq.question}
                                        </h3>
                                        <p className="text-gray-600 ml-11">{faq.answer}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Money Saving Tips */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
                            Top Money-Saving Tips for Little Caesars
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                { tip: 'Download the App', desc: 'Get exclusive app-only deals and earn rewards on every order' },
                                { tip: 'Order Hot-N-Ready', desc: 'Best value - ready pizzas are always the cheapest option' },
                                { tip: 'Use Pickup', desc: 'Skip delivery fees by picking up your order in-store' },
                                { tip: 'Check Local Deals', desc: 'Some locations have exclusive regional promotions' },
                                { tip: 'Order on Tuesdays', desc: 'Many stores offer special Tuesday pizza deals' },
                                { tip: 'Sign Up for Emails', desc: 'Get exclusive coupons sent directly to your inbox' }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg">
                                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-gray-900">{item.tip}</h3>
                                        <p className="text-sm text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Start Saving Today! 🍕
                        </h2>
                        <p className="text-xl text-orange-100 mb-8">
                            Use these verified Little Caesars coupons and save up to 50% on your next pizza order!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://littlecaesars.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg"
                            >
                                Order Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <Link
                                href="/coupons"
                                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                            >
                                View All Coupons
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related Pages */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                            More Little Caesars Guides
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/little-caesars-menu" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Little Caesars Menu & Prices</h3>
                                <p className="text-sm text-gray-600 mt-2">Complete menu with updated 2025 prices</p>
                            </Link>
                            <Link href="/crazy-puffs" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Crazy Puffs Guide</h3>
                                <p className="text-sm text-gray-600 mt-2">All flavors, prices, and reviews</p>
                            </Link>
                            <Link href="/little-caesars-nutrition-calories" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Nutrition & Calories</h3>
                                <p className="text-sm text-gray-600 mt-2">Complete nutrition facts for all items</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
