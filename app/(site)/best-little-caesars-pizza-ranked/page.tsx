import { Metadata } from 'next'
import Link from 'next/link'
import {
    Trophy,
    Star,
    ThumbsUp,
    ThumbsDown,
    DollarSign,
    Flame,
    Award,
    ArrowRight,
    TrendingUp,
    Medal
} from 'lucide-react'

// SEO Metadata
export const metadata: Metadata = {
    title: 'Best Pizza at Little Caesars 2025 - All Pizzas Ranked #1 to #15',
    description: 'Which Little Caesars pizza is the best? We ranked ALL 15 pizzas from best to worst! ExtraMostBestest, Detroit Deep Dish, Stuffed Crust & more compared.',
    keywords: [
        'best Little Caesars pizza',
        'Little Caesars pizza ranking',
        'Little Caesars pizza review',
        'best pizza at Little Caesars',
        'Little Caesars pizza comparison',
        'ExtraMostBestest review',
        'Little Caesars Detroit Deep Dish',
        'worst Little Caesars pizza'
    ],
    openGraph: {
        title: 'Best Pizza at Little Caesars - All Pizzas Ranked!',
        description: 'Complete ranking of all 15 Little Caesars pizzas from best to worst.',
        url: 'https://littlecaesarsmenu.us/best-little-caesars-pizza-ranked',
        type: 'article'
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/best-little-caesars-pizza-ranked'
    }
}

// Pizza Rankings
const pizzaRankings = [
    {
        rank: 1,
        name: 'ExtraMostBestest Pepperoni',
        price: '$7.99',
        rating: 4.9,
        description: 'The KING of Little Caesars! 80+ pieces of pepperoni and extra cheese. Unbeatable value.',
        pros: ['Most pepperoni', 'Extra cheese', 'Great value'],
        cons: ['Can be greasy'],
        verdict: 'MUST TRY',
        color: 'from-yellow-400 to-orange-500'
    },
    {
        rank: 2,
        name: 'Detroit-Style Deep Dish',
        price: '$9.49',
        rating: 4.8,
        description: 'Crispy caramelized cheese edges, thick buttery crust. A different pizza experience.',
        pros: ['Crispy edges', 'Thick crust', 'Unique taste'],
        cons: ['Higher price', 'Not for thin crust fans'],
        verdict: 'EXCELLENT',
        color: 'from-gray-400 to-gray-600'
    },
    {
        rank: 3,
        name: 'Stuffed Crust Pepperoni',
        price: '$10.99',
        rating: 4.7,
        description: 'Cheese-filled crust takes this pizza to the next level. Worth the extra cost.',
        pros: ['Cheese-stuffed crust', 'Premium feel', 'Great flavor'],
        cons: ['Most expensive', 'Very filling'],
        verdict: 'WORTH IT',
        color: 'from-amber-600 to-yellow-700'
    },
    {
        rank: 4,
        name: 'Pretzel Crust Pizza',
        price: '$9.99',
        rating: 4.7,
        description: 'LIMITED TIME fan favorite! Soft pretzel crust with cheese sauce is incredible.',
        pros: ['Unique pretzel flavor', 'Cheese sauce', 'Limited edition'],
        cons: ['Not always available'],
        verdict: 'GET IT NOW',
        color: 'from-amber-500 to-yellow-600'
    },
    {
        rank: 5,
        name: '3 Meat Treat',
        price: '$9.99',
        rating: 4.5,
        description: 'Pepperoni, Italian sausage, and bacon. Perfect for meat lovers.',
        pros: ['Lots of meat', 'Great flavor combo', 'Filling'],
        cons: ['Very heavy'],
        verdict: 'GREAT CHOICE',
        color: 'from-red-500 to-red-700'
    },
    {
        rank: 6,
        name: 'Ultimate Supreme',
        price: '$9.99',
        rating: 4.4,
        description: 'Loaded with pepperoni, sausage, mushrooms, peppers, and onions.',
        pros: ['Lots of toppings', 'Balanced flavors', 'Good value'],
        cons: ['Can be soggy'],
        verdict: 'SOLID PICK',
        color: 'from-green-500 to-green-700'
    },
    {
        rank: 7,
        name: 'Hot-N-Ready Pepperoni',
        price: '$5.55',
        rating: 4.3,
        description: 'The classic! Ready when you walk in. Best value in pizza.',
        pros: ['Cheapest option', 'Always available', 'Fast'],
        cons: ['Less pepperoni', 'Basic'],
        verdict: 'BEST VALUE',
        color: 'from-orange-400 to-orange-600'
    },
    {
        rank: 8,
        name: 'Hot-N-Ready Cheese',
        price: '$5.55',
        rating: 4.2,
        description: 'Simple cheese pizza. Great for kids and picky eaters.',
        pros: ['Cheapest', 'Kid-friendly', 'Simple'],
        cons: ['Plain', 'Nothing special'],
        verdict: 'BUDGET PICK',
        color: 'from-yellow-300 to-yellow-500'
    },
    {
        rank: 9,
        name: 'Hula Hawaiian',
        price: '$9.99',
        rating: 4.1,
        description: 'Ham and pineapple for those who like sweet pizza.',
        pros: ['Sweet & savory', 'Unique flavor'],
        cons: ['Divisive (pineapple)', 'Not for everyone'],
        verdict: 'FOR FANS ONLY',
        color: 'from-yellow-400 to-green-500'
    },
    {
        rank: 10,
        name: 'Veggie Pizza',
        price: '$9.99',
        rating: 4.0,
        description: 'Mushrooms, peppers, onions, black olives on cheese pizza.',
        pros: ['Healthy option', 'Fresh veggies'],
        cons: ['Can be watery', 'Less popular'],
        verdict: 'VEGGIE OPTION',
        color: 'from-green-400 to-green-600'
    },
    {
        rank: 11,
        name: 'Classic Round Cheese',
        price: '$6.49',
        rating: 3.9,
        description: 'Basic cheese pizza. More cheese than Hot-N-Ready version.',
        pros: ['More cheese', 'Simple'],
        cons: ['More expensive than Hot-N-Ready', 'Basic'],
        verdict: 'AVERAGE',
        color: 'from-gray-300 to-gray-500'
    },
    {
        rank: 12,
        name: 'Thin Crust Pepperoni',
        price: '$7.99',
        rating: 3.8,
        description: 'Cracker-thin crust for those who prefer crispy pizza.',
        pros: ['Crispy', 'Less carbs'],
        cons: ['Not as filling', 'Easy to burn'],
        verdict: 'THIN CRUST FAN',
        color: 'from-amber-300 to-amber-500'
    }
]

// FAQ Data
const faqData = [
    {
        question: "Which is the best pizza at Little Caesars?",
        answer: "The ExtraMostBestest Pepperoni is the #1 ranked pizza at Little Caesars. It features 80+ pieces of pepperoni and extra cheese for only $7.99, making it the best value and taste combination."
    },
    {
        question: "Is the Detroit Deep Dish pizza worth it?",
        answer: "Yes! The Detroit Deep Dish is our #2 ranked pizza. It has crispy caramelized cheese edges, a thick buttery crust, and a unique taste. At $9.49, it's worth the extra cost for a premium pizza experience."
    },
    {
        question: "What is the cheapest pizza at Little Caesars?",
        answer: "The Hot-N-Ready Pepperoni and Hot-N-Ready Cheese are the cheapest at $5.55 each. They're ready when you walk in and offer the best budget value."
    },
    {
        question: "Is Little Caesars Stuffed Crust good?",
        answer: "Yes! Our ranking puts Stuffed Crust Pepperoni at #3. The cheese-filled crust is delicious and worth the $10.99 price for a premium feel."
    },
    {
        question: "What is the worst pizza at Little Caesars?",
        answer: "The Thin Crust Pepperoni ranks lowest at #12 in our list. It's not bad, but it's less filling and can burn easily. It's best for those who specifically prefer thin crust pizza."
    },
    {
        question: "Does Little Caesars have a secret menu?",
        answer: "Yes! Little Caesars has unofficial secret menu items including double pepperoni, well-done pizza, half-and-half options, and extra cheese requests. Check our Secret Menu guide for all hacks!"
    }
]

// Schema
function generateSchemas() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Best Pizza at Little Caesars 2025 - Complete Ranking",
        "author": { "@type": "Organization", "name": "Little Caesars Menu" },
        "datePublished": "2025-01-01",
        "dateModified": new Date().toISOString().split('T')[0]
    }

    const listSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Best Little Caesars Pizzas Ranked",
        "itemListElement": pizzaRankings.map((pizza, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": pizza.name,
            "description": pizza.description
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

    return { articleSchema, listSchema, faqSchema }
}

export default function PizzaRankingPage() {
    const { articleSchema, listSchema, faqSchema } = generateSchemas()

    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
                {/* Breadcrumb */}
                <nav className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol className="flex items-center space-x-2 py-4 text-sm">
                            <li><Link href="/" className="text-gray-500 hover:text-orange-600">Home</Link></li>
                            <li className="text-gray-400">/</li>
                            <li><Link href="/menu" className="text-gray-500 hover:text-orange-600">Menu</Link></li>
                            <li className="text-gray-400">/</li>
                            <li className="text-gray-900 font-medium">Pizza Rankings</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero */}
                <header
                    className="relative py-16 lg:py-24 overflow-hidden"
                    style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)' }}
                >
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-10 left-10 text-8xl">🏆</div>
                        <div className="absolute bottom-10 right-10 text-8xl">🍕</div>
                    </div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center bg-yellow-400 text-orange-900 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <Trophy className="w-4 h-4 mr-2" />
                            🏆 DEFINITIVE RANKING 2025
                        </div>

                        <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                            Best Pizza at<br />
                            <span style={{ color: '#fcd34d' }}>Little Caesars</span>
                        </h1>

                        <p style={{ color: '#ffffff' }} className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                            We ranked ALL pizzas from #1 to #12 based on taste, value, and popularity!
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">12</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">Pizzas Ranked</div>
                            </div>
                            <div style={{ backgroundColor: 'rgba(255,255,255,0.2)' }} className="backdrop-blur px-6 py-3 rounded-xl">
                                <div style={{ color: '#ffffff' }} className="text-3xl font-bold">#1</div>
                                <div style={{ color: '#ffffff' }} className="text-sm">ExtraMostBestest</div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Rankings */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                🏆 Complete Pizza Rankings
                            </h2>
                            <p className="text-lg text-gray-600">
                                From best to worst - our definitive guide
                            </p>
                        </div>

                        <div className="space-y-6">
                            {pizzaRankings.map((pizza) => (
                                <div
                                    key={pizza.rank}
                                    className={`relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${pizza.rank === 1 ? 'border-yellow-400' :
                                        pizza.rank <= 3 ? 'border-orange-300' : 'border-gray-200'
                                        }`}
                                >
                                    {/* Rank Badge */}
                                    <div className={`absolute top-0 left-0 bg-gradient-to-r ${pizza.color} text-white font-bold px-4 py-2 rounded-br-xl`}>
                                        #{pizza.rank}
                                    </div>

                                    {pizza.rank === 1 && (
                                        <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 font-bold px-3 py-1 rounded-bl-xl text-sm">
                                            👑 BEST OVERALL
                                        </div>
                                    )}

                                    <div className="p-6 pt-12">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900">{pizza.name}</h3>
                                                <span className="text-2xl font-bold text-orange-600">{pizza.price}</span>
                                            </div>
                                            <div className="flex items-center gap-1 bg-yellow-100 px-3 py-1 rounded-full">
                                                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                                <span className="font-bold text-yellow-700">{pizza.rating}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4">{pizza.description}</p>

                                        <div className="grid md:grid-cols-2 gap-4 mb-4">
                                            <div className="bg-green-50 rounded-xl p-3">
                                                <p className="font-semibold text-green-700 text-sm mb-2 flex items-center gap-1">
                                                    <ThumbsUp className="w-4 h-4" /> Pros
                                                </p>
                                                <ul className="space-y-1">
                                                    {pizza.pros.map((pro, i) => (
                                                        <li key={i} className="text-sm text-green-600">✓ {pro}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="bg-red-50 rounded-xl p-3">
                                                <p className="font-semibold text-red-700 text-sm mb-2 flex items-center gap-1">
                                                    <ThumbsDown className="w-4 h-4" /> Cons
                                                </p>
                                                <ul className="space-y-1">
                                                    {pizza.cons.map((con, i) => (
                                                        <li key={i} className="text-sm text-red-600">✗ {con}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className={`inline-block px-4 py-2 rounded-full font-bold text-sm ${pizza.verdict === 'MUST TRY' ? 'bg-green-500 text-white' :
                                            pizza.verdict === 'EXCELLENT' ? 'bg-blue-500 text-white' :
                                                pizza.verdict === 'WORTH IT' ? 'bg-purple-500 text-white' :
                                                    pizza.verdict === 'GET IT NOW' ? 'bg-orange-500 text-white' :
                                                        pizza.verdict === 'BEST VALUE' ? 'bg-green-600 text-white' :
                                                            'bg-gray-500 text-white'
                                            }`}>
                                            {pizza.verdict}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section
                    className="py-16"
                    style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)' }}
                >
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 style={{ color: '#ffffff' }} className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Try the Best? 🍕🏆
                        </h2>
                        <p style={{ color: '#ffffff' }} className="text-xl mb-8">
                            Order the ExtraMostBestest - our #1 ranked pizza!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <a
                                href="https://littlecaesars.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ backgroundColor: '#ffffff', color: '#ea580c' }}
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
                                Find Location
                            </Link>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                ❓ Frequently Asked Questions
                            </h2>
                            <p className="text-lg text-gray-600">
                                Common questions about Little Caesars pizza rankings
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200"
                                >
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

                {/* Related */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">More Guides</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Link href="/menu" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600">Full Menu & Prices</h3>
                                <p className="text-sm text-gray-600 mt-2">Complete 2025 menu</p>
                            </Link>
                            <Link href="/little-caesars-secret-menu" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600">Secret Menu</h3>
                                <p className="text-sm text-gray-600 mt-2">Hidden items & hacks</p>
                            </Link>
                            <Link href="/little-caesars-coupons-january-2025" className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all border border-gray-200 group">
                                <h3 className="font-bold text-gray-900 group-hover:text-orange-600">Coupons & Deals</h3>
                                <p className="text-sm text-gray-600 mt-2">Save up to 50%</p>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
