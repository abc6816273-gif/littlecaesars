import { Metadata } from 'next'
import Link from 'next/link'
import {
    Star,
    DollarSign,
    CheckCircle,
    Pizza,
    ArrowRight,
    Flame,
    Award,
    Users,
    Sparkles,
    Clock
} from 'lucide-react'

// SEO Metadata - Optimized for "Little Caesars $9.99 Menu"
export const metadata: Metadata = {
    title: 'Little Caesars $9.99 Menu 2026 - More for $9.99 Value Deals & Combos',
    description: 'Little Caesars $9.99 Menu 2026: Get pizza combos, Crazy Puffs, Caesar Wings & more starting at just $9.99! Complete value menu with prices & what\'s included.',
    keywords: [
        'Little Caesars $9.99 menu',
        'Little Caesars value menu',
        'Little Caesars deals',
        'Little Caesars combo',
        'cheap pizza deals',
        'Little Caesars More for $9.99',
        'Little Caesars $10 pizza',
        'budget pizza deals 2026'
    ],
    openGraph: {
        title: 'Little Caesars $9.99 Menu - Best Value Deals 2026',
        description: 'Complete Little Caesars $9.99 Value Menu. Pizza combos, wings, Crazy Puffs & more - all for just $9.99!',
        url: 'https://littlecaesarsmenu.us/little-caesars-9-99-menu',
        type: 'article',
        images: [{
            url: 'https://littlecaesarsmenu.us/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp',
            width: 1200,
            height: 630,
            alt: 'Little Caesars $9.99 Menu 2026'
        }]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Little Caesars $9.99 Menu 2026',
        description: 'Pizza combos, wings & more for just $9.99! Complete value menu guide.'
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-9-99-menu'
    }
}

// $9.99 Menu Items
const valueMenuItems = [
    {
        name: 'ExtraMostBestest Pepperoni',
        price: 9.99,
        description: 'Large round pizza loaded with 80+ pepperoni slices and extra cheese.',
        includes: ['80+ Pepperoni', 'Extra Mozzarella', 'Marinara Sauce'],
        popular: true,
        bestValue: true
    },
    {
        name: 'Detroit-Style Deep Dish',
        price: 9.99,
        description: 'Rectangular deep dish pizza with crispy, cheesy edges in Detroit style.',
        includes: ['4 Corners of Cheese', 'Pepperoni', 'Buttery Crisp Crust'],
        popular: true,
        bestValue: false
    },
    {
        name: '3 Meat Treat Pizza',
        price: 9.99,
        description: 'Large pizza with pepperoni, Italian sausage, and bacon for meat lovers.',
        includes: ['Pepperoni', 'Italian Sausage', 'Bacon'],
        popular: false,
        bestValue: false
    },
    {
        name: 'Hula Hawaiian Pizza',
        price: 9.99,
        description: 'Sweet and savory combo of ham, pineapple, and mozzarella cheese.',
        includes: ['Sliced Ham', 'Pineapple', 'Mozzarella'],
        popular: false,
        bestValue: false
    },
    {
        name: 'Ultimate Supreme Pizza',
        price: 9.99,
        description: 'Loaded with pepperoni, sausage, green peppers, onions, and mushrooms.',
        includes: ['Pepperoni', 'Sausage', 'Veggies', 'Mushrooms'],
        popular: true,
        bestValue: false
    },
    {
        name: 'Veggie Pizza',
        price: 9.99,
        description: 'Garden-fresh vegetables including peppers, onions, mushrooms on cheese pizza.',
        includes: ['Green Peppers', 'Onions', 'Mushrooms', 'Black Olives'],
        popular: false,
        bestValue: false
    }
]

// Combo Deals
const comboDeals = [
    {
        name: 'Pizza + Crazy Bread Combo',
        price: 12.99,
        items: ['Large 1-Topping Pizza', '8-Piece Crazy Bread', 'Crazy Sauce'],
        savings: 'Save $3'
    },
    {
        name: 'Wings + Pizza Combo',
        price: 14.99,
        items: ['Large 1-Topping Pizza', '8-Piece Caesar Wings', '2-Liter Drink'],
        savings: 'Save $4'
    },
    {
        name: 'Family Meal Deal',
        price: 24.99,
        items: ['2 Large Pepperoni Pizzas', '16-Piece Crazy Bread', '2-Liter Pepsi'],
        savings: 'Save $6'
    }
]

// FAQ Data
const faqData = [
    {
        question: "What is on the Little Caesars $9.99 menu?",
        answer: "The Little Caesars $9.99 menu includes popular items like ExtraMostBestest Pepperoni Pizza, Detroit-Style Deep Dish, 3 Meat Treat Pizza, Ultimate Supreme, Hula Hawaiian, and Veggie Pizza. All are large pizzas priced at $9.99."
    },
    {
        question: "What is the More for $9.99 Menu at Little Caesars?",
        answer: "The 'More for $9.99 Menu' was launched in January 2026 offering premium pizzas and value combos for just $9.99. It includes specialty pizzas that normally cost more, giving customers more value for their money."
    },
    {
        question: "Is the $9.99 menu available Hot-N-Ready?",
        answer: "Some items like the ExtraMostBestest Pepperoni may be available Hot-N-Ready at select locations. For specialty pizzas, we recommend ordering ahead through the app or calling your local store."
    },
    {
        question: "Can I use coupons on $9.99 menu items?",
        answer: "The $9.99 menu already offers great value pricing. Some locations may allow stacking with certain promotions. Check the Little Caesars app or our coupons page for current deals."
    },
    {
        question: "How long is the $9.99 menu available?",
        answer: "The $9.99 value menu is an ongoing offering that was expanded in 2026. While menu items may rotate, Little Caesars typically maintains value pricing on popular items."
    }
]

// Generate JSON-LD Schema
function generateSchemas() {
    const menuSchema = {
        "@context": "https://schema.org",
        "@type": "Menu",
        "name": "Little Caesars $9.99 Value Menu",
        "description": "Value menu featuring premium pizzas and combos for $9.99",
        "hasMenuSection": {
            "@type": "MenuSection",
            "name": "$9.99 Pizzas",
            "hasMenuItem": valueMenuItems.map(item => ({
                "@type": "MenuItem",
                "name": item.name,
                "description": item.description,
                "offers": {
                    "@type": "Offer",
                    "price": item.price,
                    "priceCurrency": "USD"
                }
            }))
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
        "headline": "Little Caesars $9.99 Menu 2026 - Complete Value Guide",
        "description": "Everything on the Little Caesars $9.99 value menu with prices and what's included",
        "author": {
            "@type": "Organization",
            "name": "Little Caesars Menu"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Little Caesars Menu"
        },
        "datePublished": "2026-01-01",
        "dateModified": new Date().toISOString().split('T')[0]
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://littlecaesarsmenu.us" },
            { "@type": "ListItem", "position": 2, "name": "Menu", "item": "https://littlecaesarsmenu.us/menu" },
            { "@type": "ListItem", "position": 3, "name": "$9.99 Menu", "item": "https://littlecaesarsmenu.us/little-caesars-9-99-menu" }
        ]
    }

    return { menuSchema, faqSchema, articleSchema, breadcrumbSchema }
}

export default function NineNinetyNineMenu() {
    const { menuSchema, faqSchema, articleSchema, breadcrumbSchema } = generateSchemas()

    return (
        <>
            {/* Schema Markup */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
                {/* Breadcrumb */}
                <nav className="bg-white border-b border-gray-200" aria-label="Breadcrumb">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol className="flex items-center space-x-2 py-4 text-sm">
                            <li><Link href="/" className="text-gray-500 hover:text-little-caesars-orange">Home</Link></li>
                            <li className="text-gray-400">/</li>
                            <li><Link href="/menu" className="text-gray-500 hover:text-little-caesars-orange">Menu</Link></li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-900 font-medium">$9.99 Menu</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero Section */}
                <header
                    className="relative py-16 lg:py-24 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #15803d 100%)' }}
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 text-8xl">💰</div>
                        <div className="absolute bottom-10 right-10 text-8xl">🍕</div>
                        <div className="absolute top-1/2 left-1/4 text-6xl">💵</div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center bg-yellow-400 text-green-900 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                            <DollarSign className="w-4 h-4 mr-2" />
                            💸 BEST VALUE DEALS 2026!
                        </div>

                        <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                            Little Caesars<br />
                            <span style={{ color: '#fcd34d' }}>$9.99 Menu</span>
                        </h1>

                        <p style={{ color: '#ffffff' }} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Premium pizzas, combos & more - all for just <strong>$9.99</strong>!
                            The best value in pizza, hands down.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">$9.99</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Large Pizzas</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">6+</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Pizza Varieties</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">$6</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Max Savings</div>
                            </div>
                        </div>

                        <a
                            href="#menu"
                            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-green-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            See Full $9.99 Menu
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </header>

                {/* Why $9.99 Menu */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Why the $9.99 Menu Rocks 💰
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Little Caesars delivers unbeatable value without sacrificing quality
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-6">
                            {[
                                { icon: <DollarSign className="w-8 h-8" />, title: 'Unbeatable Price', desc: 'Premium pizzas for just $9.99' },
                                { icon: <Pizza className="w-8 h-8" />, title: 'Large Pizzas', desc: 'Full-size pizzas, not mediums' },
                                { icon: <Star className="w-8 h-8" />, title: 'Quality Toppings', desc: 'Fresh ingredients on every pie' },
                                { icon: <Clock className="w-8 h-8" />, title: 'Fast Service', desc: 'Hot-N-Ready or quick order' }
                            ].map((item, index) => (
                                <div key={index} className="bg-green-50 rounded-2xl p-6 text-center border border-green-100 hover:shadow-lg transition-all">
                                    <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* $9.99 Menu Items */}
                <section id="menu" className="py-16 bg-gradient-to-b from-green-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Complete $9.99 Menu
                            </h2>
                            <p className="text-lg text-gray-600">
                                All these large pizzas for just $9.99 each!
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {valueMenuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${item.bestValue ? 'border-green-400' : 'border-gray-100'} hover:shadow-xl transition-all`}
                                >
                                    {item.bestValue && (
                                        <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center py-2 font-bold">
                                            ⭐ BEST VALUE - MOST POPULAR
                                        </div>
                                    )}
                                    {item.popular && !item.bestValue && (
                                        <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-2 font-bold">
                                            🔥 FAN FAVORITE
                                        </div>
                                    )}
                                    <div className="p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold text-lg">
                                                ${item.price}
                                            </span>
                                        </div>
                                        <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                                        <div className="space-y-2">
                                            <p className="text-xs font-semibold text-gray-500 uppercase">Includes:</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.includes.map((inc, i) => (
                                                    <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs flex items-center">
                                                        <CheckCircle className="w-3 h-3 mr-1 text-green-500" />
                                                        {inc}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Combo Deals */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-flex items-center bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-bold mb-3">
                                <Users className="w-4 h-4 mr-2" />
                                COMBO DEALS
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Value Combo Meals
                            </h2>
                            <p className="text-lg text-gray-600">
                                Even more savings with our combo meals
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {comboDeals.map((combo, index) => (
                                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 hover:shadow-lg transition-all">
                                    <div className="flex justify-between items-center mb-4">
                                        <h3 className="text-xl font-bold text-gray-900">{combo.name}</h3>
                                        <span className="bg-green-500 text-white px-3 py-1 rounded-full font-bold">
                                            {combo.savings}
                                        </span>
                                    </div>
                                    <ul className="space-y-2 mb-4">
                                        {combo.items.map((item, i) => (
                                            <li key={i} className="flex items-center text-gray-700">
                                                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="text-center pt-4 border-t border-green-200">
                                        <span className="text-3xl font-bold text-green-600">${combo.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-16 bg-green-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                $9.99 Menu FAQ
                            </h2>
                        </div>

                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-white rounded-2xl overflow-hidden border border-green-100 hover:shadow-lg transition-all"
                                >
                                    <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-green-50 transition-colors">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-green-700 transition-colors pr-4">
                                            {faq.question}
                                        </h3>
                                        <svg className="w-6 h-6 text-green-600 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-green-100 pt-4">
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
                    style={{ background: 'linear-gradient(135deg, #16a34a 0%, #22c55e 50%, #15803d 100%)' }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 style={{ color: '#ffffff' }} className="text-3xl md:text-4xl font-bold mb-6">
                            Get Your $9.99 Pizza Now! 🍕💰
                        </h2>
                        <p style={{ color: '#ffffff' }} className="text-xl mb-8">
                            Best value pizza in America. Order online or visit your nearest store.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://littlecaesars.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: '#ffffff', color: '#16a34a' }}
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
                            <Link href="/little-caesars-pretzel-crust-pizza-2026" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">Pretzel Crust Pizza</h3>
                                <p className="text-sm text-gray-600 mt-2">Limited time pretzel crust pizza is back!</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
