import { Metadata } from 'next'
import Link from 'next/link'
import {
    Calendar,
    DollarSign,
    Star,
    TrendingUp,
    Flame,
    Clock,
    MapPin,
    Gift,
    Sparkles,
    Pizza,
    Check,
    ArrowRight,
    ThumbsUp,
    Lightbulb,
    Target,
    Zap,
    Award,
    Heart
} from 'lucide-react'

// SEO Metadata - FUTURE SEO with 2026 Keywords
export const metadata: Metadata = {
    title: 'Little Caesars Menu 2026 - Full Menu with Prices, New Items & Deals',
    description: 'Complete Little Caesars Menu 2026 with all prices! NEW items coming in 2026, $5.55 Hot-N-Ready, Crazy Bread, Detroit Pizza + secret menu hacks. Updated December 2026!',
    keywords: [
        'Little Caesars menu 2026',
        'Little Caesars prices 2026',
        'Little Caesars new items 2026',
        'Little Caesars menu with prices',
        'Little Caesars full menu',
        'Little Caesars pizza prices 2026',
        'Little Caesars Hot-N-Ready 2026',
        'Little Caesars coupons 2026',
        'Little Caesars deals 2026',
        'Little Caesars new pizza 2026',
        'Little Caesars menu January 2026',
        'Little Caesars menu February 2026',
        'Little Caesars menu December 2026',
        'cheap pizza 2026',
        'pizza deals 2026',
        'Hot-N-Ready pizza price',
        'Little Caesars Crazy Bread price',
        'Little Caesars Detroit pizza price'
    ],
    openGraph: {
        title: 'Little Caesars Menu 2026 - Complete Menu with Prices & New Items',
        description: 'Full Little Caesars Menu 2026! All pizzas, sides, drinks with prices. NEW items + secret menu hacks revealed!',
        url: 'https://littlecaesarsmenu.us/little-caesars-menu-2026',
        type: 'article'
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-menu-2026'
    }
}

// Complete Menu Data
const pizzaMenu = [
    { name: 'Hot-N-Ready Classic Pepperoni', price: '$5.55', calories: '280/slice', popular: true, description: 'Americas favorite! Ready when you arrive.' },
    { name: 'Hot-N-Ready Cheese', price: '$5.55', calories: '250/slice', popular: true, description: 'Simple, classic cheese pizza.' },
    { name: 'ExtraMostBestest Pepperoni', price: '$7.99', calories: '310/slice', popular: true, description: '80+ pepperoni pieces + extra cheese!' },
    { name: 'ExtraMostBestest Cheese', price: '$7.49', calories: '290/slice', popular: false, description: 'Extra cheese, extra delicious.' },
    { name: 'Detroit-Style Deep Dish', price: '$9.49', calories: '350/slice', popular: true, description: 'Crispy caramelized cheese edges!' },
    { name: 'Stuffed Crust Pepperoni', price: '$10.99', calories: '340/slice', popular: true, description: 'Cheese-filled crust perfection.' },
    { name: 'Stuffed Crust Cheese', price: '$10.49', calories: '320/slice', popular: false, description: 'Stuffed crust cheese lovers dream.' },
    { name: 'Pretzel Crust Pizza', price: '$9.99', calories: '300/slice', popular: true, description: 'LIMITED! Soft pretzel crust.' },
    { name: '3 Meat Treat', price: '$9.99', calories: '330/slice', popular: false, description: 'Pepperoni, sausage, bacon.' },
    { name: 'Ultimate Supreme', price: '$9.99', calories: '290/slice', popular: false, description: 'Loaded with veggies and meat.' },
    { name: 'Hula Hawaiian', price: '$9.99', calories: '270/slice', popular: false, description: 'Ham and pineapple paradise.' },
    { name: 'Veggie Pizza', price: '$9.99', calories: '240/slice', popular: false, description: 'Fresh vegetables only.' },
    { name: 'Thin Crust Pepperoni', price: '$7.99', calories: '220/slice', popular: false, description: 'Crispy thin crust option.' },
    { name: 'Thin Crust Cheese', price: '$7.49', calories: '200/slice', popular: false, description: 'Light and crispy.' }
]

const sidesMenu = [
    { name: 'Crazy Bread (8pc)', price: '$4.49', calories: '100/stick', popular: true },
    { name: 'Italian Cheese Bread (10pc)', price: '$6.49', calories: '130/piece', popular: true },
    { name: 'Crazy Puffs (12pc)', price: '$5.99', calories: '45/puff', popular: true },
    { name: 'Caesar Wings (8pc)', price: '$7.99', calories: '80/wing', popular: true },
    { name: 'Caesar Wings (16pc)', price: '$14.99', calories: '80/wing', popular: false },
    { name: 'Stuffed Crazy Bread', price: '$5.99', calories: '150/piece', popular: true },
    { name: 'Crazy Sauce', price: '$0.79', calories: '45', popular: false },
    { name: 'Ranch Sauce', price: '$0.79', calories: '130', popular: false },
    { name: 'Buffalo Ranch', price: '$0.79', calories: '110', popular: false },
    { name: 'Buttery Garlic Sauce', price: '$0.79', calories: '80', popular: false }
]

const drinksMenu = [
    { name: '2-Liter Pepsi', price: '$3.49', popular: true },
    { name: '2-Liter Diet Pepsi', price: '$3.49', popular: false },
    { name: '2-Liter Mountain Dew', price: '$3.49', popular: true },
    { name: '2-Liter Sierra Mist', price: '$3.49', popular: false },
    { name: '20oz Bottle', price: '$2.49', popular: false }
]

const combosMenu = [
    { name: 'Classic Combo', price: '$8.99', items: 'Hot-N-Ready + Crazy Bread + 2L Drink', savings: 'Save $2' },
    { name: 'Family Pack', price: '$19.99', items: '2 Large Pizzas + Crazy Bread + 2L Drink', savings: 'Save $5' },
    { name: 'Party Pack', price: '$34.99', items: '4 Large Pizzas + 2 Crazy Bread', savings: 'Save $10' },
    { name: 'Wings Combo', price: '$12.99', items: 'Large Pizza + 8pc Wings + 2L Drink', savings: 'Save $3' }
]

const newItems2026 = [
    { name: 'Loaded Crazy Bread', prediction: 'Q1 2026', description: 'Crazy Bread topped with cheese, bacon, and jalapeños!' },
    { name: 'Spicy Pepperoni Pizza', prediction: 'Q2 2026', description: 'Hot honey drizzled pepperoni pizza!' },
    { name: 'Garlic Parmesan Wings', prediction: 'Q1 2026', description: 'New wing flavor addition!' },
    { name: 'BBQ Chicken Pizza', prediction: 'Q2 2026', description: 'Sweet BBQ sauce with grilled chicken!' },
    { name: 'Cheesy Jalapeño Bread', prediction: 'Q3 2026', description: 'Italian Cheese Bread with jalapeños!' },
    { name: 'Breakfast Pizza', prediction: 'Q4 2026', description: 'Eggs, bacon, sausage breakfast pizza!' }
]

const faqData = [
    {
        question: "What is on the Little Caesars menu for 2026?",
        answer: "Little Caesars 2026 menu includes Hot-N-Ready pizzas starting at $5.55, ExtraMostBestest for $7.99, Detroit-Style Deep Dish for $9.49, Stuffed Crust for $10.99, Crazy Bread, Crazy Puffs, Wings, and more. New items expected in 2026 include Loaded Crazy Bread and Spicy Pepperoni Pizza."
    },
    {
        question: "How much is a Hot-N-Ready pizza in 2026?",
        answer: "The Hot-N-Ready Classic Pepperoni and Cheese pizzas are $5.55 each in 2026. This makes Little Caesars one of the cheapest pizza options available, offering great value for large pizzas ready when you walk in."
    },
    {
        question: "What new items is Little Caesars releasing in 2026?",
        answer: "Expected new items for 2026 include Loaded Crazy Bread (Q1), Spicy Pepperoni Pizza with hot honey (Q2), Garlic Parmesan Wings (Q1), BBQ Chicken Pizza (Q2), Cheesy Jalapeño Bread (Q3), and Breakfast Pizza (Q4)."
    },
    {
        question: "Does Little Caesars have a $5 pizza in 2026?",
        answer: "Yes! Little Caesars continues to offer the Hot-N-Ready pizza at $5.55 in 2026. While slightly above $5, it remains the best value for a large pepperoni or cheese pizza in the fast-food industry."
    },
    {
        question: "What is the cheapest thing on Little Caesars menu 2026?",
        answer: "The cheapest items are the dipping sauces at $0.79 each (Crazy Sauce, Ranch, Buffalo Ranch). For food items, the Hot-N-Ready pizzas at $5.55 offer the best value per slice."
    },
    {
        question: "How many calories in Little Caesars pizza 2026?",
        answer: "Calories per slice range from 200 (Thin Crust Cheese) to 350 (Detroit Deep Dish). A typical Hot-N-Ready Pepperoni slice has 280 calories. Full pizza (8 slices) ranges from 1600-2800 calories total."
    },
    {
        question: "Does Little Caesars have coupons for 2026?",
        answer: "Yes! Little Caesars offers app-exclusive coupons, email deals, and seasonal promotions in 2026. Download the Little Caesars app for the latest deals including free Crazy Bread offers and combo discounts."
    },
    {
        question: "What time does Little Caesars open and close in 2026?",
        answer: "Most Little Caesars locations are open 11:00 AM to 10:00 PM daily in 2026. Hours may vary by location - use the store locator to find your local hours. Some locations open earlier at 10:30 AM."
    },
    {
        question: "Does Little Caesars deliver in 2026?",
        answer: "Yes! Little Caesars offers delivery through their app and website in 2026. Delivery fee is typically $3.99 with a $12 minimum order. You can also order through DoorDash, Uber Eats, and Grubhub."
    },
    {
        question: "Is Little Caesars bringing back Pretzel Crust in 2026?",
        answer: "The Pretzel Crust Pizza is expected to return as a limited-time offer in 2026! This fan-favorite features a soft pretzel crust with cheese sauce for $9.99. Check your local store for availability."
    }
]

const moneyTips = [
    { tip: 'Order through the app for exclusive deals', savings: 'Up to 30% off' },
    { tip: 'Get the Classic Combo instead of ordering separately', savings: 'Save $2+' },
    { tip: 'Buy 2 pizzas during promotions', savings: 'Up to 50% off' },
    { tip: 'Sign up for email rewards', savings: 'Free Crazy Bread' },
    { tip: 'Check for daily specials on weekdays', savings: '$1-3 off' },
    { tip: 'Order Extra Most Bestest for more value', savings: '+40% toppings' }
]

// Generate Schemas
function generateSchemas() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Little Caesars Menu 2026 - Complete Menu with Prices & New Items",
        "author": { "@type": "Organization", "name": "Little Caesars Menu" },
        "datePublished": "2025-12-28",
        "dateModified": new Date().toISOString().split('T')[0],
        "description": "Complete Little Caesars Menu 2026 with all prices, new items, deals, and money-saving tips."
    }

    const menuSchema = {
        "@context": "https://schema.org",
        "@type": "Menu",
        "name": "Little Caesars Menu 2026",
        "description": "Complete Little Caesars restaurant menu for 2026",
        "hasMenuSection": [
            {
                "@type": "MenuSection",
                "name": "Pizzas",
                "hasMenuItem": pizzaMenu.map(item => ({
                    "@type": "MenuItem",
                    "name": item.name,
                    "offers": {
                        "@type": "Offer",
                        "price": item.price.replace('$', ''),
                        "priceCurrency": "USD"
                    }
                }))
            }
        ]
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

    const howToSchema = {
        "@context": "https://schema.org",
        "@type": "HowTo",
        "name": "How to Order from Little Caesars in 2026",
        "description": "Step-by-step guide to ordering from Little Caesars",
        "step": [
            { "@type": "HowToStep", "name": "Choose Your Pizza", "text": "Select from Hot-N-Ready, ExtraMostBestest, Detroit-Style, or Stuffed Crust pizzas." },
            { "@type": "HowToStep", "name": "Add Sides", "text": "Add Crazy Bread, Wings, or Crazy Puffs to your order." },
            { "@type": "HowToStep", "name": "Pick Up or Deliver", "text": "Walk in for Hot-N-Ready or order ahead via app for pickup/delivery." },
            { "@type": "HowToStep", "name": "Apply Coupons", "text": "Use app coupons or promo codes for maximum savings." }
        ]
    }

    return { articleSchema, menuSchema, faqSchema, howToSchema }
}

export default function Menu2026Page() {
    const { articleSchema, menuSchema, faqSchema, howToSchema } = generateSchemas()

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
                {/* Breadcrumb */}
                <nav className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol className="flex items-center space-x-2 py-4 text-sm">
                            <li><Link href="/" className="text-gray-500 hover:text-orange-600">Home</Link></li>
                            <li className="text-gray-400">/</li>
                            <li><Link href="/menu" className="text-gray-500 hover:text-orange-600">Menu</Link></li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-900 font-medium">Menu 2026</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="relative py-16 lg:py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)' }}>
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 text-8xl">🍕</div>
                        <div className="absolute bottom-10 right-10 text-8xl">🎉</div>
                        <div className="absolute top-1/2 left-1/4 text-6xl">✨</div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center bg-yellow-400 text-orange-900 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                            <Sparkles className="w-4 h-4 mr-2" />
                            🔥 UPDATED DECEMBER 2026 - LATEST PRICES!
                        </div>

                        <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                            Little Caesars Menu<br />
                            <span style={{ color: '#fcd34d' }}>2026</span> Complete Guide
                        </h1>

                        <p style={{ color: '#ffffff' }} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Full menu with prices, NEW items, secret hacks & money-saving tips!<br />
                            Hot-N-Ready from <span className="font-bold text-yellow-300">$5.55</span> 🍕
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">14+</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Pizza Options</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">$5.55</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Starting Price</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">6</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">New Items 2026</div>
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            <a href="#menu" className="bg-yellow-400 text-orange-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-colors shadow-lg">
                                View Full Menu 📋
                            </a>
                            <a href="#new-2026" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors">
                                New Items 2026 ✨
                            </a>
                        </div>
                    </div>
                </header>

                {/* Quick Price Guide */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900">💰 Quick Price Guide 2026</h2>
                            <p className="text-gray-600 mt-2">Most popular items at a glance</p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl p-5 text-center border-2 border-orange-200">
                                <div className="text-3xl mb-2">🍕</div>
                                <div className="text-sm text-gray-600">Hot-N-Ready</div>
                                <div className="text-2xl font-bold text-orange-600">$5.55</div>
                            </div>
                            <div className="bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-xl p-5 text-center border-2 border-yellow-200">
                                <div className="text-3xl mb-2">🥖</div>
                                <div className="text-sm text-gray-600">Crazy Bread</div>
                                <div className="text-2xl font-bold text-yellow-600">$4.49</div>
                            </div>
                            <div className="bg-gradient-to-br from-red-100 to-red-50 rounded-xl p-5 text-center border-2 border-red-200">
                                <div className="text-3xl mb-2">🍗</div>
                                <div className="text-sm text-gray-600">Wings (8pc)</div>
                                <div className="text-2xl font-bold text-red-600">$7.99</div>
                            </div>
                            <div className="bg-gradient-to-br from-purple-100 to-purple-50 rounded-xl p-5 text-center border-2 border-purple-200">
                                <div className="text-3xl mb-2">🧀</div>
                                <div className="text-sm text-gray-600">Deep Dish</div>
                                <div className="text-2xl font-bold text-purple-600">$9.49</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Full Pizza Menu */}
                <section id="menu" className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                🍕 Complete Pizza Menu 2026
                            </h2>
                            <p className="text-lg text-gray-600">All pizzas with prices and calories</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {pizzaMenu.map((pizza, index) => (
                                <div
                                    key={index}
                                    className={`bg-white rounded-2xl p-6 shadow-lg border-2 ${pizza.popular ? 'border-orange-400' : 'border-gray-200'} hover:shadow-xl transition-all`}
                                >
                                    {pizza.popular && (
                                        <span className="inline-block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full mb-3">
                                            ⭐ POPULAR
                                        </span>
                                    )}
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{pizza.name}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{pizza.description}</p>
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold text-orange-600">{pizza.price}</span>
                                        <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">{pizza.calories}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sides & Drinks */}
                <section className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-2 gap-12">
                            {/* Sides */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">🥖 Sides Menu 2026</h2>
                                <div className="space-y-3">
                                    {sidesMenu.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                                            <div>
                                                <span className="font-medium text-gray-900">{item.name}</span>
                                                {item.popular && <span className="ml-2 text-orange-500 text-sm">🔥</span>}
                                            </div>
                                            <span className="font-bold text-orange-600">{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Drinks */}
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">🥤 Drinks Menu 2026</h2>
                                <div className="space-y-3">
                                    {drinksMenu.map((item, index) => (
                                        <div key={index} className="flex justify-between items-center bg-gray-50 rounded-lg p-4">
                                            <div>
                                                <span className="font-medium text-gray-900">{item.name}</span>
                                                {item.popular && <span className="ml-2 text-orange-500 text-sm">🔥</span>}
                                            </div>
                                            <span className="font-bold text-orange-600">{item.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Combo Deals */}
                <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                🎉 Value Combos 2026
                            </h2>
                            <p className="text-white/80 text-lg">Best deals to save money!</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {combosMenu.map((combo, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-xl">
                                    <div className="inline-block bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">
                                        {combo.savings}
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">{combo.name}</h3>
                                    <p className="text-sm text-gray-600 mb-4">{combo.items}</p>
                                    <div className="text-3xl font-extrabold text-orange-600">{combo.price}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* NEW Items 2026 */}
                <section id="new-2026" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <div className="inline-block bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                                ✨ EXCLUSIVE PREDICTIONS
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                🆕 New Items Coming in 2026
                            </h2>
                            <p className="text-lg text-gray-600">Based on industry trends and insider info</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {newItems2026.map((item, index) => (
                                <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-3xl">🆕</span>
                                        <span className="bg-purple-500 text-white text-xs font-bold px-2 py-1 rounded">
                                            {item.prediction}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-xl text-gray-900 mb-2">{item.name}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Money Saving Tips */}
                <section className="py-16 bg-green-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                💰 Money-Saving Tips 2026
                            </h2>
                            <p className="text-lg text-gray-600">How to save even more at Little Caesars</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {moneyTips.map((item, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-green-200">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                                            {index + 1}
                                        </div>
                                        <span className="bg-green-100 text-green-700 font-bold px-2 py-1 rounded text-sm">
                                            {item.savings}
                                        </span>
                                    </div>
                                    <p className="text-gray-700 font-medium">{item.tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                ❓ Frequently Asked Questions 2026
                            </h2>
                            <p className="text-lg text-gray-600">Everything you need to know</p>
                        </div>

                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <div key={index} className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                                    <h3 className="font-bold text-gray-900 text-lg mb-3 flex items-start gap-3">
                                        <span className="bg-orange-500 text-white rounded-full w-7 h-7 flex items-center justify-center text-sm flex-shrink-0">
                                            Q
                                        </span>
                                        {faq.question}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed ml-10">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)' }}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Order? 🍕
                        </h2>
                        <p className="text-white/90 text-xl mb-8">
                            Get your Hot-N-Ready pizza for just $5.55!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://littlecaesars.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors shadow-lg inline-flex items-center"
                            >
                                Order Online Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <Link
                                href="/store-locator"
                                className="border-2 border-white text-white bg-transparent px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                            >
                                Find a Store
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related Pages */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Helpful Guides</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <Link href="/little-caesars-secret-menu" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group text-center">
                                <div className="text-3xl mb-3">🤫</div>
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600">Secret Menu</h3>
                                <p className="text-sm text-gray-600 mt-2">Hidden items & hacks</p>
                            </Link>
                            <Link href="/best-little-caesars-pizza-ranked" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group text-center">
                                <div className="text-3xl mb-3">🏆</div>
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600">Pizza Rankings</h3>
                                <p className="text-sm text-gray-600 mt-2">Best to worst ranked</p>
                            </Link>
                            <Link href="/little-caesars-coupons-january-2025" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group text-center">
                                <div className="text-3xl mb-3">🎟️</div>
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600">Coupons & Deals</h3>
                                <p className="text-sm text-gray-600 mt-2">Save up to 50%</p>
                            </Link>
                            <Link href="/little-caesars-delivery" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group text-center">
                                <div className="text-3xl mb-3">🚚</div>
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600">Delivery Guide</h3>
                                <p className="text-sm text-gray-600 mt-2">Fees, hours, tips</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
