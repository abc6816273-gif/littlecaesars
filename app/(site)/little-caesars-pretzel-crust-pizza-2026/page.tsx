import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
    Star,
    Clock,
    DollarSign,
    CheckCircle,
    TrendingUp,
    Flame,
    Pizza,
    ArrowRight,
    Calendar,
    Heart,
    Award,
    Sparkles
} from 'lucide-react'

// SEO Metadata - Optimized for "Little Caesars Pretzel Crust Pizza 2026"
export const metadata: Metadata = {
    title: 'Little Caesars Pretzel Crust Pizza 2026 - Prices, Review & Availability',
    description: 'Little Caesars Pretzel Crust Pizza is BACK in 2026! Get the latest prices ($9.99), flavors, nutritional info, and where to find it. New Stuffed Pretzel Crust available!',
    keywords: [
        'Little Caesars Pretzel Crust Pizza 2026',
        'Pretzel Crust Pizza price',
        'Little Caesars Pretzel Pizza',
        'Stuffed Pretzel Crust Pizza',
        'Little Caesars new pizza 2026',
        'Pretzel Crust Pizza near me',
        'Little Caesars limited time pizza',
        'best Little Caesars pizza 2026'
    ],
    openGraph: {
        title: 'Little Caesars Pretzel Crust Pizza 2026 - Its BACK!',
        description: 'The fan-favorite Pretzel Crust Pizza returns in March 2026! Plus NEW Stuffed Pretzel Crust. Get prices, reviews & availability.',
        url: 'https://littlecaesarsmenu.us/little-caesars-pretzel-crust-pizza-2026',
        type: 'article',
        images: [{
            url: 'https://littlecaesarsmenu.us/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp',
            width: 1200,
            height: 630,
            alt: 'Little Caesars Pretzel Crust Pizza 2026'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Little Caesars Pretzel Crust Pizza 2026',
        description: 'Fan-favorite Pretzel Crust Pizza is BACK! Prices start at $9.99. New Stuffed version available!'
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-pretzel-crust-pizza-2026'
    }
}

// Pretzel Crust Products
const pretzelProducts = [
    {
        name: 'Pretzel Crust Pepperoni Pizza',
        price: 9.99,
        description: 'Large pepperoni pizza with a soft pretzel crust, brushed with butter and topped with pretzel salt.',
        calories: '280 cal/slice',
        popular: true,
        isNew: false
    },
    {
        name: 'Stuffed Pretzel Crust Pizza',
        price: 11.99,
        description: 'NEW! Pretzel crust stuffed with melted cheese, topped with pepperoni and mozzarella.',
        calories: '320 cal/slice',
        popular: true,
        isNew: true
    },
    {
        name: 'Pretzel Crust Cheese Pizza',
        price: 8.99,
        description: 'Large cheese pizza featuring the signature buttery pretzel crust with pretzel salt.',
        calories: '250 cal/slice',
        popular: false,
        isNew: false
    }
]

// FAQ Data
const faqData = [
    {
        question: "When is Little Caesars Pretzel Crust Pizza available in 2026?",
        answer: "Little Caesars Pretzel Crust Pizza returns in March 2026 for a limited time. The new Stuffed Pretzel Crust Pizza is also available starting March 2026. Check your local store for availability."
    },
    {
        question: "How much does Pretzel Crust Pizza cost at Little Caesars?",
        answer: "The Pretzel Crust Pepperoni Pizza costs $9.99, while the new Stuffed Pretzel Crust Pizza is $11.99. Prices may vary slightly by location."
    },
    {
        question: "What makes the Pretzel Crust Pizza special?",
        answer: "The Pretzel Crust Pizza features a soft, chewy pretzel-style crust that's brushed with butter and topped with coarse pretzel salt. It offers a unique sweet-and-salty flavor combination that fans love."
    },
    {
        question: "Is the Pretzel Crust Pizza Hot-N-Ready?",
        answer: "The Pretzel Crust Pizza is typically available for ordering and may not always be in the Hot-N-Ready case. We recommend calling ahead or ordering through the Little Caesars app."
    },
    {
        question: "How many calories are in Pretzel Crust Pizza?",
        answer: "A slice of Pretzel Crust Pepperoni Pizza contains approximately 280 calories. The entire large pizza has about 2,240 calories (8 slices)."
    },
    {
        question: "Is the Stuffed Pretzel Crust Pizza new for 2026?",
        answer: "Yes! The Stuffed Pretzel Crust Pizza is a brand new addition for 2026. It features the pretzel crust stuffed with melted cheese for an even more indulgent experience."
    }
]

// Generate JSON-LD Schema
function generateSchemas() {
    const productSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Little Caesars Pretzel Crust Pizza",
        "description": "Soft pretzel-style crust pizza brushed with butter and pretzel salt, available for a limited time in 2026",
        "brand": {
            "@type": "Brand",
            "name": "Little Caesars"
        },
        "offers": {
            "@type": "Offer",
            "price": "9.99",
            "priceCurrency": "USD",
            "availability": "https://schema.org/LimitedAvailability"
        }
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
        "headline": "Little Caesars Pretzel Crust Pizza 2026 - Complete Guide",
        "description": "Everything you need to know about Little Caesars Pretzel Crust Pizza returning in 2026",
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
        "datePublished": "2026-01-01",
        "dateModified": new Date().toISOString().split('T')[0]
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
                "name": "Menu",
                "item": "https://littlecaesarsmenu.us/menu"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Pretzel Crust Pizza 2026",
                "item": "https://littlecaesarsmenu.us/little-caesars-pretzel-crust-pizza-2026"
            }
        ]
    }

    return { productSchema, faqSchema, articleSchema, breadcrumbSchema }
}

export default function PretzelCrustPizza2026() {
    const { productSchema, faqSchema, articleSchema, breadcrumbSchema } = generateSchemas()

    return (
        <>
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
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

            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
                {/* Breadcrumb */}
                <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol className="flex items-center space-x-2 py-4 text-sm">
                            <li><Link href="/" className="text-gray-500 hover:text-little-caesars-orange">Home</Link></li>
                            <li className="text-gray-400">/</li>
                            <li><Link href="/menu" className="text-gray-500 hover:text-little-caesars-orange">Menu</Link></li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-900 font-medium">Pretzel Crust Pizza 2026</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero Section */}
                <header
                    className="relative py-16 lg:py-24 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #b45309 100%)' }}
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 text-8xl">🥨</div>
                        <div className="absolute bottom-10 right-10 text-8xl">🍕</div>
                        <div className="absolute top-1/2 left-1/4 text-6xl">⭐</div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center bg-yellow-400 text-amber-900 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                            <Sparkles className="w-4 h-4 mr-2" />
                            🔥 ITS BACK - LIMITED TIME 2026!
                        </div>

                        <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                            Little Caesars<br />
                            <span style={{ color: '#fcd34d' }}>Pretzel Crust Pizza</span>
                        </h1>

                        <p style={{ color: '#ffffff' }} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            The fan-favorite is BACK! Soft, buttery pretzel crust with coarse salt.
                            Plus <strong>NEW Stuffed Pretzel Crust</strong> for 2026!
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">$9.99</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Starting Price</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">March</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">2026 Launch</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">LIMITED</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Time Only</div>
                            </div>
                        </div>

                        <a
                            href="#menu"
                            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-amber-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            View Menu & Prices
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </header>

                {/* What is Pretzel Crust Pizza */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center bg-amber-100 text-amber-800 px-4 py-1 rounded-full text-sm font-bold mb-3">
                                <Award className="w-4 h-4 mr-2" />
                                FAN FAVORITE
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                What is Pretzel Crust Pizza?
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    Little Caesars Pretzel Crust Pizza is a unique twist on traditional pizza. Instead of regular pizza dough, it features a <strong>soft, chewy pretzel-style crust</strong> that's brushed with rich butter and topped with coarse pretzel salt.
                                </p>
                                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                    The result is a perfect balance of <strong>sweet and salty flavors</strong> that pizza lovers can't resist. First introduced as a limited-time offer, it became so popular that fans demanded its return year after year!
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: '🥨', text: 'Soft Pretzel Crust' },
                                        { icon: '🧈', text: 'Butter Brushed' },
                                        { icon: '🧂', text: 'Pretzel Salt Topped' },
                                        { icon: '🧀', text: 'Melted Mozzarella' }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-center bg-amber-50 rounded-lg p-3">
                                            <span className="text-2xl mr-3">{item.icon}</span>
                                            <span className="font-medium text-gray-800">{item.text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8 text-center">
                                <div className="text-8xl mb-4">🥨🍕</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Fans Love It</h3>
                                <p className="text-gray-600">
                                    "The pretzel crust is game-changing! The soft, buttery texture with that salty kick makes it unlike any other pizza."
                                </p>
                                <div className="flex justify-center gap-1 mt-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm text-gray-500 mt-2">4.8/5 Customer Rating</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Menu & Prices */}
                <section id="menu" className="py-16 bg-gradient-to-b from-amber-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Pretzel Crust Pizza Menu & Prices
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Available for a limited time starting March 2026. Prices may vary by location.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {pretzelProducts.map((product, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${product.isNew ? 'border-amber-400' : 'border-gray-100'} hover:shadow-xl transition-all`}
                                >
                                    {product.isNew && (
                                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-center py-2 font-bold">
                                            🆕 NEW FOR 2026!
                                        </div>
                                    )}
                                    {product.popular && !product.isNew && (
                                        <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-center py-2 font-bold">
                                            ⭐ FAN FAVORITE
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                                            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold text-lg">
                                                ${product.price}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4">{product.description}</p>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="flex items-center text-gray-500">
                                                <Flame className="w-4 h-4 mr-1 text-orange-500" />
                                                {product.calories}
                                            </span>
                                            <span className="text-amber-600 font-medium">Large Pizza</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 text-center">
                            <a
                                href="https://littlecaesars.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg"
                            >
                                Order Now at LittleCaesars.com
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </section>

                {/* New for 2026 */}
                <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-500">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center text-white">
                            <span className="inline-flex items-center bg-white/20 px-4 py-2 rounded-full text-sm font-bold mb-6">
                                <Sparkles className="w-4 h-4 mr-2" />
                                BRAND NEW
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Introducing: Stuffed Pretzel Crust Pizza
                            </h2>
                            <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                                For 2026, Little Caesars is taking the Pretzel Crust Pizza to the next level!
                                The new Stuffed Pretzel Crust features melted cheese INSIDE the pretzel crust for an extra indulgent experience.
                            </p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <div className="bg-white/20 backdrop-blur rounded-xl p-6 max-w-xs">
                                    <div className="text-4xl mb-3">🧀</div>
                                    <h3 className="font-bold text-lg mb-2">Cheese-Stuffed Crust</h3>
                                    <p className="text-sm opacity-80">Gooey melted cheese inside every bite of the pretzel crust</p>
                                </div>
                                <div className="bg-white/20 backdrop-blur rounded-xl p-6 max-w-xs">
                                    <div className="text-4xl mb-3">🥨</div>
                                    <h3 className="font-bold text-lg mb-2">Classic Pretzel Flavor</h3>
                                    <p className="text-sm opacity-80">Same buttery, salty pretzel crust fans love</p>
                                </div>
                                <div className="bg-white/20 backdrop-blur rounded-xl p-6 max-w-xs">
                                    <div className="text-4xl mb-3">💰</div>
                                    <h3 className="font-bold text-lg mb-2">Only $11.99</h3>
                                    <p className="text-sm opacity-80">Great value for a premium stuffed crust pizza</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Pretzel Crust Pizza FAQ
                            </h2>
                            <p className="text-xl text-gray-600">
                                Everything you need to know about this limited-time favorite
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-amber-50 rounded-2xl overflow-hidden border border-amber-100 hover:shadow-lg transition-all"
                                >
                                    <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-amber-100 transition-colors">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-700 transition-colors pr-4">
                                            {faq.question}
                                        </h3>
                                        <svg className="w-6 h-6 text-amber-600 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-amber-100 pt-4">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section
                    className="py-16"
                    style={{ background: 'linear-gradient(135deg, #92400e 0%, #d97706 50%, #b45309 100%)' }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 style={{ color: '#ffffff' }} className="text-3xl md:text-4xl font-bold mb-6">
                            Don't Miss Out! 🥨🍕
                        </h2>
                        <p style={{ color: '#ffffff' }} className="text-xl mb-8">
                            Pretzel Crust Pizza is only available for a LIMITED TIME. Order yours before it's gone!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://littlecaesars.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: '#ffffff', color: '#92400e' }}
                                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-colors shadow-lg"
                            >
                                Order Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <Link
                                href="/store-locator"
                                style={{ border: '2px solid #ffffff', color: '#ffffff' }}
                                className="inline-flex items-center bg-transparent px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                            >
                                Find a Location
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
                            <Link href="/menu" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Full Menu & Prices</h3>
                                <p className="text-sm text-gray-600 mt-2">Complete Little Caesars menu with 2026 prices</p>
                            </Link>
                            <Link href="/little-caesars-coupons-january-2026" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Coupons & Deals</h3>
                                <p className="text-sm text-gray-600 mt-2">Save up to 50% with verified promo codes</p>
                            </Link>
                            <Link href="/crazy-puffs" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Crazy Puffs Guide</h3>
                                <p className="text-sm text-gray-600 mt-2">All about the new Crazy Puffs - flavors & prices</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
