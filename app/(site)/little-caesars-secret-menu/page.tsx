import { Metadata } from 'next'
import Link from 'next/link'
import {
    Eye,
    Star,
    Sparkles,
    Pizza,
    ArrowRight,
    Lock,
    Flame,
    DollarSign,
    CheckCircle,
    AlertCircle
} from 'lucide-react'

// SEO Metadata - Optimized for "Little Caesars Secret Menu"
export const metadata: Metadata = {
    title: 'Little Caesars Secret Menu 2026 - Hidden Items & Hacks Revealed!',
    description: 'Discover the Little Caesars SECRET MENU 2026! Hidden pizza customizations, off-menu hacks, insider ordering tips & secret deals. Unlock exclusive items today!',
    keywords: [
        'Little Caesars secret menu',
        'Little Caesars hidden menu',
        'Little Caesars menu hacks',
        'Little Caesars off menu items',
        'secret pizza orders',
        'Little Caesars ordering tips',
        'Little Caesars insider tricks',
        'hidden pizza deals'
    ],
    openGraph: {
        title: 'Little Caesars Secret Menu 2026 - Hidden Items Revealed!',
        description: 'Unlock the SECRET Little Caesars menu! Hidden customizations, off-menu hacks, and insider ordering tips.',
        url: 'https://littlecaesarsmenu.us/little-caesars-secret-menu',
        type: 'article'
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-secret-menu'
    }
}

// Secret Menu Items
const secretMenuItems = [
    {
        name: 'The Double Pepperoni Stack',
        description: 'Ask for DOUBLE pepperoni on any pizza. They\'ll load it with 2x the pepperoni for just $1-2 extra!',
        howToOrder: 'Say: "Can I get double pepperoni please?"',
        price: '+$1-2',
        difficulty: 'Easy',
        rating: 4.9
    },
    {
        name: 'Extra Cheese Bomb',
        description: 'Request triple cheese on your pizza. The cheese will be so thick it stretches for feet!',
        howToOrder: 'Say: "Extra extra cheese, like triple cheese"',
        price: '+$2-3',
        difficulty: 'Easy',
        rating: 4.8
    },
    {
        name: 'The Crispy Well-Done',
        description: 'Ask for your pizza "well-done" for extra crispy, almost burnt edges. Perfect for crispy crust lovers!',
        howToOrder: 'Say: "Can you cook it well-done please?"',
        price: 'FREE',
        difficulty: 'Easy',
        rating: 4.7
    },
    {
        name: 'Light Sauce / No Sauce',
        description: 'Request light sauce or no sauce for a different texture. Great for those who prefer less tang.',
        howToOrder: 'Say: "Light sauce" or "No sauce please"',
        price: 'FREE',
        difficulty: 'Easy',
        rating: 4.5
    },
    {
        name: 'The Veggie Supreme Hack',
        description: 'Order a plain cheese pizza and ask to add ALL veggies. Costs less than buying the Supreme!',
        howToOrder: 'Say: "Cheese pizza with mushrooms, peppers, onions, olives"',
        price: 'Saves $2-3',
        difficulty: 'Medium',
        rating: 4.6
    },
    {
        name: 'Half and Half Pizza',
        description: 'Get two different pizzas on one! Half pepperoni, half cheese - perfect for sharing.',
        howToOrder: 'Say: "Can I do half pepperoni, half cheese?"',
        price: 'FREE',
        difficulty: 'Easy',
        rating: 4.8
    },
    {
        name: 'Crazy Bread with Garlic Butter',
        description: 'Ask for EXTRA garlic butter sauce on your Crazy Bread. Some locations give extra sauce cups for free!',
        howToOrder: 'Say: "Extra Crazy Sauce on the side please"',
        price: 'FREE or +$0.50',
        difficulty: 'Easy',
        rating: 4.9
    },
    {
        name: 'The Stuffed Combo',
        description: 'Combine Stuffed Crust with Deep Dish toppings for the ultimate indulgence.',
        howToOrder: 'Say: "Stuffed Crust with Detroit-style toppings"',
        price: 'Varies',
        difficulty: 'Advanced',
        rating: 4.7
    }
]

// Ordering Hacks
const orderingHacks = [
    {
        title: 'App-Only Deals',
        tip: 'Download the Little Caesars app - they have EXCLUSIVE deals not available in-store or online!',
        savings: 'Up to 30% off'
    },
    {
        title: 'Birthday Freebie',
        tip: 'Sign up for Little Caesars email list and get a FREE Crazy Bread on your birthday!',
        savings: 'FREE item'
    },
    {
        title: 'Combo Stacking',
        tip: 'Sometimes you can combine Hot-N-Ready prices with app coupons for maximum savings.',
        savings: 'Up to $5 off'
    },
    {
        title: 'Fresh Pizza Trick',
        tip: 'Ask for a pizza "fresh out of the oven" instead of Hot-N-Ready. You\'ll wait 5-10 min but get it piping hot!',
        savings: 'Better quality'
    },
    {
        title: 'Manager Specials',
        tip: 'Ask about manager specials or end-of-day discounts on pizzas that need to sell.',
        savings: 'Up to 50% off'
    }
]

// FAQ
const faqData = [
    {
        question: "Does Little Caesars have a secret menu?",
        answer: "While Little Caesars doesn't have an official 'secret menu' like some restaurants, they do allow many customizations that most people don't know about. You can request well-done pizzas, extra cheese, half-and-half toppings, and more. Our guide reveals all the hidden ordering tricks!"
    },
    {
        question: "How do I order from the Little Caesars secret menu?",
        answer: "Simply ask politely when ordering. Most 'secret' items are just customizations. Say things like 'Can I get it well-done?' or 'Double pepperoni please.' Staff are usually happy to accommodate reasonable requests."
    },
    {
        question: "Do secret menu items cost extra?",
        answer: "Some customizations are free (like well-done or light sauce), while others cost $1-3 extra (like extra cheese or double toppings). We've listed the approximate prices for each secret item in our guide."
    },
    {
        question: "What's the best secret menu hack at Little Caesars?",
        answer: "The 'well-done' hack is the most popular - it's FREE and gives you a crispier, more flavorful crust. The double pepperoni stack is also a fan favorite for meat lovers."
    }
]

// Schema
function generateSchemas() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Little Caesars Secret Menu 2026 - Hidden Items & Hacks",
        "description": "Complete guide to Little Caesars secret menu items and ordering hacks",
        "author": { "@type": "Organization", "name": "Little Caesars Menu" },
        "datePublished": "2026-01-01",
        "dateModified": new Date().toISOString().split('T')[0]
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

    return { articleSchema, faqSchema }
}

export default function SecretMenuPage() {
    const { articleSchema, faqSchema } = generateSchemas()

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
                {/* Breadcrumb */}
                <nav className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol className="flex items-center space-x-2 py-4 text-sm">
                            <li><Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link></li>
                            <li className="text-gray-400">/</li>
                            <li><Link href="/menu" className="text-gray-500 hover:text-purple-600">Menu</Link></li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-900 font-medium">Secret Menu</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <header
                    className="relative py-16 lg:py-24 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #6d28d9 100%)' }}
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 text-8xl">🤫</div>
                        <div className="absolute bottom-10 right-10 text-8xl">🔓</div>
                        <div className="absolute top-1/2 left-1/4 text-6xl">🍕</div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center bg-yellow-400 text-purple-900 px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse">
                            <Lock className="w-4 h-4 mr-2" />
                            🤫 SECRETS REVEALED!
                        </div>

                        <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                            Little Caesars<br />
                            <span style={{ color: '#fcd34d' }}>SECRET MENU</span> 2026
                        </h1>

                        <p style={{ color: '#ffffff' }} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            Unlock hidden pizza hacks, off-menu items & insider ordering tricks
                            that most customers don't know about!
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">8+</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Secret Items</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">5</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Ordering Hacks</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">50%</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Potential Savings</div>
                            </div>
                        </div>

                        <a
                            href="#secrets"
                            className="inline-flex items-center bg-yellow-400 hover:bg-yellow-300 text-purple-900 px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg"
                        >
                            Unlock the Secrets
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </header>

                {/* Secret Menu Items */}
                <section id="secrets" className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                🤫 Secret Menu Items
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                                These hidden customizations will transform your Little Caesars experience
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {secretMenuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-100 hover:border-purple-300 hover:shadow-lg transition-all"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                                        <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                                            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                            <span className="text-sm font-bold text-yellow-700">{item.rating}</span>
                                        </div>
                                    </div>
                                    <p className="text-gray-600 mb-4">{item.description}</p>

                                    <div className="bg-white rounded-xl p-4 mb-4">
                                        <p className="text-sm font-semibold text-purple-600 mb-1">📢 How to Order:</p>
                                        <p className="text-gray-800 italic">"{item.howToOrder.replace('Say: ', '')}"</p>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <span className={`px-3 py-1 rounded-full text-sm font-bold ${item.price === 'FREE' ? 'bg-green-100 text-green-700' :
                                                item.price.includes('Saves') ? 'bg-blue-100 text-blue-700' :
                                                    'bg-orange-100 text-orange-700'
                                            }`}>
                                            {item.price}
                                        </span>
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.difficulty === 'Easy' ? 'bg-green-50 text-green-600' :
                                                item.difficulty === 'Medium' ? 'bg-yellow-50 text-yellow-600' :
                                                    'bg-red-50 text-red-600'
                                            }`}>
                                            {item.difficulty}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Ordering Hacks */}
                <section className="py-16 bg-gradient-to-b from-purple-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                💡 Insider Ordering Hacks
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {orderingHacks.map((hack, index) => (
                                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100">
                                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                                        <Sparkles className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{hack.title}</h3>
                                    <p className="text-gray-600 text-sm mb-4">{hack.tip}</p>
                                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                                        {hack.savings}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Secret Menu FAQ
                        </h2>
                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <details key={index} className="group bg-purple-50 rounded-2xl overflow-hidden">
                                    <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-purple-100 transition-colors">
                                        <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                                        <svg className="w-6 h-6 text-purple-600 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-700 border-t border-purple-100 pt-4">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section
                    className="py-16"
                    style={{ background: 'linear-gradient(135deg, #7c3aed 0%, #a855f7 50%, #6d28d9 100%)' }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 style={{ color: '#ffffff' }} className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Order? 🍕🤫
                        </h2>
                        <p style={{ color: '#ffffff' }} className="text-xl mb-8">
                            Use these secret menu hacks on your next Little Caesars visit!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://littlecaesars.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: '#ffffff', color: '#7c3aed' }}
                                className="inline-flex items-center px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-colors shadow-lg"
                            >
                                Order Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </a>
                            <Link
                                href="/little-caesars-coupons-january-2026"
                                style={{ border: '2px solid #ffffff', color: '#ffffff' }}
                                className="inline-flex items-center bg-transparent px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors"
                            >
                                Get Coupons First
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Related */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/menu" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-purple-600">Full Menu & Prices</h3>
                                <p className="text-sm text-gray-600 mt-2">Complete 2026 menu with prices</p>
                            </Link>
                            <Link href="/little-caesars-coupons-january-2026" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-purple-600">Coupons & Deals</h3>
                                <p className="text-sm text-gray-600 mt-2">15+ verified promo codes</p>
                            </Link>
                            <Link href="/little-caesars-nutrition-calories" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-purple-600">Nutrition Guide</h3>
                                <p className="text-sm text-gray-600 mt-2">Calories for all items</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
