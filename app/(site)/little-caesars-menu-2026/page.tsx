import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import {
    Sparkles,
    ArrowRight,
    Check,
    Clock,
    MapPin,
    ChevronDown,
    Star,
    Flame,
    Gift,
    TrendingUp
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
        'Little Caesars new pizza 2026'
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

// Complete Menu Data with Images
const pizzaMenu = [
    { name: 'Hot-N-Ready Pepperoni', price: '$5.55', calories: '280/slice', popular: true, description: 'Americas favorite! Ready when you arrive.', image: '/menu/Homepage-menus/Classic-Pepperoni-Pizza-Little-Caesars-Menu.webp' },
    { name: 'Hot-N-Ready Cheese', price: '$5.55', calories: '250/slice', popular: true, description: 'Simple, classic cheese pizza.', image: '/menu/Homepage-menus/Classic-Cheese-Pizza-Little-Caesars-Menu.webp' },
    { name: 'ExtraMostBestest Pepperoni', price: '$7.99', calories: '310/slice', popular: true, description: '80+ pepperoni pieces + extra cheese!', image: '/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp' },
    { name: 'ExtraMostBestest Cheese', price: '$7.49', calories: '290/slice', popular: false, description: 'Extra cheese, extra delicious.', image: '/menu/Homepage-menus/ExtraMostBestest-Cheese-Pizza-Little-Caesars-Menu.webp' },
    { name: 'Detroit-Style Deep Dish', price: '$9.49', calories: '350/slice', popular: true, description: 'Crispy caramelized cheese edges!', image: '/menu/Homepage-menus/Detroit-Style-Deep-Dish-Pepperoni-Little-Caesars-Menu.webp' },
    { name: 'Stuffed Crust Pepperoni', price: '$10.99', calories: '340/slice', popular: true, description: 'Cheese-filled crust perfection.', image: '/menu/Homepage-menus/Stuffed-Crust-Pepperoni-Little-Caesars-Menu.webp' },
    { name: '3 Meat Treat', price: '$9.99', calories: '330/slice', popular: false, description: 'Pepperoni, sausage, bacon.', image: '/menu/Homepage-menus/3-Meat-Treat-Pizza-Little-Caesars-Menu.webp' },
    { name: 'Ultimate Supreme', price: '$9.99', calories: '290/slice', popular: false, description: 'Loaded with veggies and meat.', image: '/menu/Homepage-menus/Ultimate-Supreme-Pizza-Little-Caesars-Menu.webp' },
    { name: 'Hula Hawaiian', price: '$9.99', calories: '270/slice', popular: false, description: 'Ham and pineapple paradise.', image: '/menu/Homepage-menus/Hula-Hawaiian-Pizza-Little-Caesars-Menu.webp' },
    { name: 'Veggie Pizza', price: '$9.99', calories: '240/slice', popular: false, description: 'Fresh vegetables only.', image: '/menu/Homepage-menus/Veggie-Pizza-Little-Caesars-Menu.webp' },
    { name: 'Thin Crust Pepperoni', price: '$7.99', calories: '220/slice', popular: false, description: 'Crispy thin crust option.', image: '/menu/Homepage-menus/Thin-Crust-Pepperoni-Little-Caesars-Menu.webp' },
    { name: 'Thin Crust Cheese', price: '$7.49', calories: '200/slice', popular: false, description: 'Light and crispy.', image: '/menu/Homepage-menus/Thin-Crust-Cheese-Little-Caesars-Menu.webp' }
]

const sidesMenu = [
    { name: 'Crazy Bread (8pc)', price: '$4.49', calories: '100/stick', popular: true, image: '/menu/Homepage-menus/Crazy-Bread-Little-Caesars-Menu.webp', description: 'Warm, soft breadsticks with buttery garlic flavor.' },
    { name: 'Italian Cheese Bread (10pc)', price: '$6.49', calories: '130/piece', popular: true, image: '/menu/Homepage-menus/Italian-Cheese-Bread-Little-Caesars-Menu.webp', description: 'Cheesy bread with Italian seasoning.' },
    { name: 'Crazy Puffs (12pc)', price: '$5.99', calories: '45/puff', popular: true, image: '/menu/Homepage-menus/4-Cheese-Crazy-Puffs-Little-Caesars-Menu.webp', description: 'Crispy puffs filled with cheese.' },
    { name: 'Caesar Wings (8pc)', price: '$7.99', calories: '80/wing', popular: true, image: '/menu/Homepage-menus/Caesar-Wings-Little-Caesars-Menu.webp', description: 'Crispy chicken wings with your choice of flavor.' },
    { name: 'Stuffed Crazy Bread', price: '$5.99', calories: '150/piece', popular: true, image: '/menu/Homepage-menus/Stuffed-Crazy-Bread-Little-Caesars-Menu.webp', description: 'Crazy Bread stuffed with cheese.' },
    { name: 'Pepperoni Cheese Bread', price: '$6.99', calories: '140/piece', popular: false, image: '/menu/Homepage-menus/Pepperoni-Cheese-Bread-Little-Caesars-Menu.webp', description: 'Cheesy bread topped with pepperoni.' }
]

const drinksMenu = [
    { name: '2-Liter Pepsi', price: '$3.49', popular: true, image: '/menu/Homepage-menus/2L-Pepsi-Products-Little-Caesars-Menu.webp' },
    { name: '2-Liter Mountain Dew', price: '$3.49', popular: true, image: '/menu/Homepage-menus/Mountain-Dew-Mango-Rush-Little-Caesars-Menu-1.webp' },
    { name: '20oz Bottle', price: '$2.49', popular: false, image: '/menu/Homepage-menus/20-oz.-Pepsi-Products-Little-Caesars-Menu.webp' }
]

const combosMenu = [
    { name: 'Classic Combo', price: '$8.99', items: 'Hot-N-Ready + Crazy Bread + 2L Drink', savings: 'Save $2', image: '/menu/Homepage-menus/Lunch-Combo-Little-Caesars-Menu.webp' },
    { name: 'Crazy Combo', price: '$5.99', items: 'Crazy Bread + Crazy Sauce', savings: 'Best Value', image: '/menu/Homepage-menus/Crazy-Combo-Crazy-Bread-Crazy-Sauce-Little-Caesars-Menu.webp' }
]

const newItems2026 = [
    { name: 'Loaded Crazy Bread', prediction: 'Q1 2026', description: 'Crazy Bread topped with cheese, bacon, and jalapeños!', image: '/menu/Homepage-menus/Stuffed-Crazy-Bread-Little-Caesars-Menu.webp' },
    { name: 'Spicy Pepperoni Pizza', prediction: 'Q2 2026', description: 'Hot honey drizzled pepperoni pizza!', image: '/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp' },
    { name: 'Garlic Parmesan Wings', prediction: 'Q1 2026', description: 'New wing flavor addition!', image: '/menu/Homepage-menus/Caesar-Wings-Little-Caesars-Menu.webp' },
    { name: 'BBQ Chicken Pizza', prediction: 'Q2 2026', description: 'Sweet BBQ sauce with grilled chicken!', image: '/menu/Homepage-menus/Create-Your-Own-Pizza-Little-Caesars-Menu.webp' },
    { name: 'Cheesy Jalapeño Bread', prediction: 'Q3 2026', description: 'Italian Cheese Bread with jalapeños!', image: '/menu/Homepage-menus/Italian-Cheese-Bread-Little-Caesars-Menu.webp' },
    { name: 'Breakfast Pizza', prediction: 'Q4 2026', description: 'Eggs, bacon, sausage breakfast pizza!', image: '/menu/Homepage-menus/5-Meat-Feast-Pizza-Little-Caesars-Menu.webp' }
]

const faqData = [
    { question: "What is on the Little Caesars menu for 2026?", answer: "Little Caesars 2026 menu includes Hot-N-Ready pizzas starting at $5.55, ExtraMostBestest for $7.99, Detroit-Style Deep Dish for $9.49, Stuffed Crust for $10.99, Crazy Bread, Crazy Puffs, Wings, and more." },
    { question: "How much is a Hot-N-Ready pizza in 2026?", answer: "The Hot-N-Ready Classic Pepperoni and Cheese pizzas are $5.55 each in 2026. This makes Little Caesars one of the cheapest pizza options available." },
    { question: "What new items is Little Caesars releasing in 2026?", answer: "Expected new items include Loaded Crazy Bread, Spicy Pepperoni Pizza with hot honey, Garlic Parmesan Wings, BBQ Chicken Pizza, and Breakfast Pizza." },
    { question: "Does Little Caesars have a $5 pizza in 2026?", answer: "Yes! Little Caesars continues to offer the Hot-N-Ready pizza at $5.55 in 2026. It remains the best value for a large pizza." },
    { question: "What is the cheapest item on Little Caesars menu?", answer: "The cheapest items are dipping sauces at $0.79 each. For food, Hot-N-Ready pizzas at $5.55 offer the best value per slice." },
    { question: "How many calories in Little Caesars pizza?", answer: "Calories per slice range from 200 (Thin Crust) to 350 (Detroit Deep Dish). Hot-N-Ready Pepperoni has 280 calories per slice." },
    { question: "Does Little Caesars have coupons for 2026?", answer: "Yes! Download the Little Caesars app for exclusive coupons, email deals, and seasonal promotions including free Crazy Bread offers." },
    { question: "Does Little Caesars deliver in 2026?", answer: "Yes! Delivery through their app with $3.99 fee and $12 minimum. Also available through DoorDash, Uber Eats, and Grubhub." }
]

// Generate Schemas
function generateSchemas() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Little Caesars Menu 2026 - Complete Menu with Prices & New Items",
        "author": { "@type": "Organization", "name": "Little Caesars Menu" },
        "datePublished": "2026-12-28",
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
                    "offers": { "@type": "Offer", "price": item.price.replace('$', ''), "priceCurrency": "USD" }
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
            "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
        }))
    }

    return { articleSchema, menuSchema, faqSchema }
}

export default function Menu2026Page() {
    const { articleSchema, menuSchema, faqSchema } = generateSchemas()

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="min-h-screen bg-white">
                {/* Breadcrumb */}
                <nav className="bg-orange-50 border-b border-orange-100">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol className="flex items-center space-x-2 py-3 text-sm">
                            <li><Link href="/" className="text-orange-600 hover:text-orange-700 font-medium">Home</Link></li>
                            <li className="text-gray-400">/</li>
                            <li><Link href="/menu" className="text-orange-600 hover:text-orange-700 font-medium">Menu</Link></li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-700 font-semibold">2026 Menu</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero Section - Orange Background */}
                <header className="relative py-16 lg:py-20 overflow-hidden" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)' }}>
                    <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.1)' }}></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-bold mb-6 border border-white/30">
                                <Sparkles className="w-4 h-4 mr-2" />
                                UPDATED DECEMBER 2026
                            </div>

                            <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                                Little Caesars Menu
                            </h1>
                            <p style={{ color: '#fcd34d' }} className="text-2xl md:text-3xl font-bold mb-6">
                                2026 Complete Price Guide
                            </p>
                            <p style={{ color: '#ffffff' }} className="text-lg max-w-2xl mx-auto mb-8">
                                All pizzas, sides, drinks with prices. Hot-N-Ready from <span style={{ color: '#fcd34d' }} className="font-bold">$5.55</span>
                            </p>

                            <div className="flex flex-wrap justify-center gap-4 mb-8">
                                <div style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} className="backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                                    <div style={{ color: '#ffffff' }} className="text-3xl font-black">12+</div>
                                    <div style={{ color: '#ffffff' }} className="text-sm opacity-80">Pizzas</div>
                                </div>
                                <div style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} className="backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                                    <div style={{ color: '#fcd34d' }} className="text-3xl font-black">$5.55</div>
                                    <div style={{ color: '#ffffff' }} className="text-sm opacity-80">Starting</div>
                                </div>
                                <div style={{ backgroundColor: 'rgba(255,255,255,0.15)' }} className="backdrop-blur-sm px-6 py-4 rounded-2xl border border-white/30">
                                    <div style={{ color: '#ffffff' }} className="text-3xl font-black">6</div>
                                    <div style={{ color: '#ffffff' }} className="text-sm opacity-80">New Items</div>
                                </div>
                            </div>

                            <div className="flex flex-wrap justify-center gap-4">
                                <a href="#pizzas" className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-all shadow-lg inline-flex items-center">
                                    View Full Menu
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </a>
                                <a href="#new-2026" className="bg-transparent text-white border-2 border-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                                    New Items 2026
                                </a>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Featured Pizzas - Chipotle Style Cards */}
                <section id="pizzas" className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-bold mb-4">
                                🍕 MADE FRESH DAILY
                            </span>
                            <h2 style={{ color: '#111827' }} className="text-3xl md:text-4xl font-black mb-4">
                                Featured Pizza Menu
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                Hot-N-Ready pizzas ready when you arrive. Premium quality at unbeatable prices.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {pizzaMenu.map((pizza, index) => (
                                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group">
                                    <div className="relative h-48 overflow-hidden bg-orange-50">
                                        <img
                                            src={pizza.image}
                                            alt={pizza.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {pizza.popular && (
                                            <div className="absolute top-3 left-3 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                                                <Flame className="w-3 h-3 mr-1" /> POPULAR
                                            </div>
                                        )}
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-700 px-2 py-1 rounded text-xs font-medium">
                                            {pizza.calories}
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <h3 style={{ color: '#111827' }} className="font-bold text-lg mb-2 group-hover:text-orange-600 transition-colors">
                                            {pizza.name}
                                        </h3>
                                        <p style={{ color: '#4b5563' }} className="text-sm mb-4 line-clamp-2">
                                            {pizza.description}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-black text-orange-600">{pizza.price}</span>
                                            <span className="text-orange-600 font-semibold text-sm flex items-center hover:text-orange-700 cursor-pointer">
                                                View Details <ArrowRight className="w-4 h-4 ml-1" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Sides Menu - Chipotle Style */}
                <section id="sides" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                                🥖 SIDES & BREAD
                            </span>
                            <h2 style={{ color: '#111827' }} className="text-3xl md:text-4xl font-black mb-4">
                                Sides Menu
                            </h2>
                            <p className="text-lg text-gray-600">Complete your meal with our delicious sides</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {sidesMenu.map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group flex">
                                    <div className="w-32 h-32 flex-shrink-0 overflow-hidden bg-orange-50">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4 flex flex-col justify-center flex-grow">
                                        <div className="flex items-start justify-between mb-1">
                                            <h3 className="font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                                {item.name}
                                            </h3>
                                            {item.popular && (
                                                <span className="bg-orange-500 text-white px-2 py-0.5 rounded text-xs font-bold ml-2">HOT</span>
                                            )}
                                        </div>
                                        <p className="text-sm text-gray-500 mb-2 line-clamp-1">{item.description}</p>
                                        <div className="flex items-center justify-between">
                                            <span className="text-xl font-black text-orange-600">{item.price}</span>
                                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{item.calories}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Drinks Menu */}
                <section id="drinks" className="py-16 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-4">
                                🥤 DRINKS
                            </span>
                            <h2 style={{ color: '#111827' }} className="text-3xl md:text-4xl font-black mb-4">
                                Drinks Menu
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                            {drinksMenu.map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group text-center">
                                    <div className="h-40 overflow-hidden">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 style={{ color: '#111827' }} className="font-bold mb-2">{item.name}</h3>
                                        <span style={{ color: '#ea580c' }} className="text-2xl font-black">{item.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Combo Deals */}
                <section className="py-16 bg-gradient-to-r from-orange-500 to-red-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span style={{ color: '#000000', backgroundColor: 'rgba(255,255,255,0.9)' }} className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4">
                                🎉 BEST VALUE
                            </span>
                            <h2 style={{ color: '#000000' }} className="text-3xl md:text-4xl font-black mb-4">
                                Value Combos
                            </h2>
                            <p style={{ color: '#000000' }} className="text-lg">Save more with our combo deals</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {combosMenu.map((combo, index) => (
                                <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-2xl group">
                                    <div className="h-48 overflow-hidden bg-orange-50">
                                        <img
                                            src={combo.image}
                                            alt={combo.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-6">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 style={{ color: '#111827' }} className="text-xl font-black">{combo.name}</h3>
                                            <span style={{ color: '#ffffff', backgroundColor: '#22c55e' }} className="px-3 py-1 rounded-full text-sm font-bold">{combo.savings}</span>
                                        </div>
                                        <p style={{ color: '#4b5563' }} className="mb-4">{combo.items}</p>
                                        <div className="text-3xl font-black text-orange-600">{combo.price}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* New Items 2026 */}
                <section id="new-2026" className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span style={{ color: '#15803d', backgroundColor: '#dcfce7' }} className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4">
                                🔮 COMING SOON
                            </span>
                            <h2 style={{ color: '#111827' }} className="text-3xl md:text-4xl font-bold mb-4">
                                Predicted New Items for 2026
                            </h2>
                            <p style={{ color: '#4b5563' }} className="text-lg">Based on industry trends and insider info</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {newItems2026.map((item, index) => (
                                <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-100">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-3xl">🆕</span>
                                        <span style={{ color: '#ffffff', backgroundColor: '#22c55e' }} className="text-xs font-bold px-3 py-1 rounded-full">
                                            {item.prediction}
                                        </span>
                                    </div>
                                    <h3 style={{ color: '#111827' }} className="font-bold text-xl mb-2">{item.name}</h3>
                                    <p style={{ color: '#4b5563' }}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section - Accordion Style */}
                <section id="faq" className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Little Caesars Menu 2026 FAQ
                            </h2>
                            <p className="text-xl text-gray-600">
                                Everything you need to know about the 2026 menu
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-orange-50 rounded-2xl overflow-hidden border border-orange-100 hover:shadow-lg transition-all"
                                >
                                    <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-orange-100 transition-colors">
                                        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-700 transition-colors pr-4">
                                            {faq.question}
                                        </h3>
                                        <svg className="w-6 h-6 text-orange-600 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-orange-100 pt-4">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16" style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)' }}>
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 style={{ color: '#ffffff' }} className="text-3xl md:text-4xl font-black mb-6">
                            Ready to Order? 🍕
                        </h2>
                        <p style={{ color: '#ffffff' }} className="text-xl mb-8 opacity-90">
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
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                            >
                                Find a Store
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related Pages */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Explore More</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            <Link href="/little-caesars-secret-menu" className="bg-gray-50 rounded-xl p-6 hover:bg-orange-50 transition-all border border-gray-100 group text-center">
                                <div className="text-4xl mb-3">🤫</div>
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600">Secret Menu</h3>
                                <p className="text-sm text-gray-500 mt-2">Hidden items & hacks</p>
                            </Link>
                            <Link href="/best-little-caesars-pizza-ranked" className="bg-gray-50 rounded-xl p-6 hover:bg-orange-50 transition-all border border-gray-100 group text-center">
                                <div className="text-4xl mb-3">🏆</div>
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600">Pizza Rankings</h3>
                                <p className="text-sm text-gray-500 mt-2">Best to worst ranked</p>
                            </Link>
                            <Link href="/little-caesars-coupons-january-2026" className="bg-gray-50 rounded-xl p-6 hover:bg-orange-50 transition-all border border-gray-100 group text-center">
                                <div className="text-4xl mb-3">🎟️</div>
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600">Coupons & Deals</h3>
                                <p className="text-sm text-gray-500 mt-2">Save up to 50%</p>
                            </Link>
                            <Link href="/little-caesars-delivery" className="bg-gray-50 rounded-xl p-6 hover:bg-orange-50 transition-all border border-gray-100 group text-center">
                                <div className="text-4xl mb-3">🚚</div>
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600">Delivery Guide</h3>
                                <p className="text-sm text-gray-500 mt-2">Fees, hours, tips</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
