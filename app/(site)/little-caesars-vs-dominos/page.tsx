import type { Metadata } from 'next'

// SEO-optimized metadata for comparison page
export const metadata: Metadata = {
    title: "Little Caesars vs Domino's Prices 2025: Complete Comparison Guide | Little Caesars Menu",
    description: "Compare Little Caesars vs Domino's prices, menu items, quality, and value in 2025. Which pizza chain offers better deals? Complete side-by-side comparison.",
    keywords: [
        'little caesars vs dominos',
        'little caesars or dominos',
        'dominos vs little caesars',
        'cheapest pizza chain 2025',
        'little caesars vs dominos prices',
        'which pizza is better',
        'pizza chain comparison'
    ].join(', '),
    openGraph: {
        title: "Little Caesars vs Domino's: Complete Price & Quality Comparison 2025",
        description: "Which pizza chain offers better value in 2025? Compare prices, quality, and deals between Little Caesars and Domino's.",
        type: 'article',
        url: 'https://littlecaesarsmenu.us/little-caesars-vs-dominos',
        images: [
            {
                url: 'https://littlecaesarsmenu.us/images/little-caesars-vs-dominos.jpg',
                width: 1200,
                height: 630,
                alt: "Little Caesars vs Domino's Comparison 2025"
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: "Little Caesars vs Domino's Prices 2025",
        description: "Complete comparison of prices, quality, and value."
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-vs-dominos'
    }
}

export default function LittleCaesarsVsDominosPage() {
    const currentYear = 2025

    // Structured data for SEO
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `Little Caesars vs Domino's Prices ${currentYear}: Complete Comparison Guide`,
        "description": `Compare Little Caesars vs Domino's prices, menu items, quality, and value in ${currentYear}.`,
        "image": "https://littlecaesarsmenu.us/images/little-caesars-vs-dominos.jpg",
        "author": {
            "@type": "Organization",
            "name": "Little Caesars Menu Guide"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Little Caesars Menu Guide",
            "url": "https://littlecaesarsmenu.us"
        },
        "datePublished": "2024-12-24",
        "dateModified": new Date().toISOString().split('T')[0]
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Is Little Caesars cheaper than Domino's?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Little Caesars is generally cheaper than Domino's. A Hot-N-Ready pepperoni pizza at Little Caesars costs around $7.99, while a similar pizza at Domino's costs $13-15 without coupons."
                }
            },
            {
                "@type": "Question",
                "name": "Which has better pizza: Little Caesars or Domino's?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It depends on your preference. Little Caesars offers a classic, no-frills pizza that's ready instantly. Domino's offers more customization options and fresher toppings. For pure value and convenience, Little Caesars wins. For variety and customization, Domino's wins."
                }
            },
            {
                "@type": "Question",
                "name": "Does Little Caesars deliver like Domino's?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, many Little Caesars locations now offer delivery through their app and third-party services like DoorDash and Uber Eats. However, Domino's has a more established delivery infrastructure with faster delivery times in most areas."
                }
            }
        ]
    }

    return (
        <>
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
                {/* Hero Section */}
                <section className="relative py-16" style={{ background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 50%, #2563eb 100%)' }}>
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div style={{ color: '#ffffff', fontSize: '3rem' }} className="mb-4">🍕 VS 🍕</div>
                        <h1 style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }} className="text-4xl md:text-5xl font-bold mb-4">
                            Little Caesars vs Domino's Prices {currentYear}
                        </h1>
                        <p style={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }} className="text-xl max-w-2xl mx-auto">
                            Complete side-by-side comparison of prices, quality, delivery, and value.
                            Find out which pizza chain offers the best deal!
                        </p>
                    </div>
                </section>

                {/* Quick Winner Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* Little Caesars Card */}
                            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border-2 border-orange-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-4xl">🏆</span>
                                    <h2 className="text-2xl font-bold text-orange-700">Little Caesars</h2>
                                </div>
                                <p className="text-lg font-semibold text-orange-600 mb-3">
                                    Best For: Budget & Convenience
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✅ Cheapest large pizza ($7.99)</li>
                                    <li>✅ No waiting - Hot-N-Ready</li>
                                    <li>✅ Best value for parties</li>
                                    <li>✅ Famous Crazy Bread</li>
                                    <li>⚠️ Limited customization</li>
                                </ul>
                            </div>

                            {/* Domino's Card */}
                            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-2 border-blue-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-4xl">🍕</span>
                                    <h2 className="text-2xl font-bold text-blue-700">Domino's</h2>
                                </div>
                                <p className="text-lg font-semibold text-blue-600 mb-3">
                                    Best For: Delivery & Options
                                </p>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✅ Fast delivery everywhere</li>
                                    <li>✅ Lots of customization</li>
                                    <li>✅ More menu variety</li>
                                    <li>✅ Frequent app coupons</li>
                                    <li>⚠️ More expensive without deals</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Price Comparison Table */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            💰 Price Comparison {currentYear}
                        </h2>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-800 text-white">
                                        <tr>
                                            <th className="px-4 py-4 text-left">Item</th>
                                            <th className="px-4 py-4 text-center bg-orange-600">Little Caesars</th>
                                            <th className="px-4 py-4 text-center bg-blue-600">Domino's</th>
                                            <th className="px-4 py-4 text-center">Winner</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-4 py-4 font-semibold">Large Pepperoni Pizza</td>
                                            <td className="px-4 py-4 text-center text-orange-600 font-bold">$7.99</td>
                                            <td className="px-4 py-4 text-center text-blue-600">$14.99</td>
                                            <td className="px-4 py-4 text-center">🧡 LC</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 bg-orange-50">
                                            <td className="px-4 py-4 font-semibold">Large Cheese Pizza</td>
                                            <td className="px-4 py-4 text-center text-orange-600 font-bold">$6.99</td>
                                            <td className="px-4 py-4 text-center text-blue-600">$12.99</td>
                                            <td className="px-4 py-4 text-center">🧡 LC</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-4 py-4 font-semibold">Specialty/Premium Pizza</td>
                                            <td className="px-4 py-4 text-center text-orange-600">$12.99</td>
                                            <td className="px-4 py-4 text-center text-blue-600">$17.99</td>
                                            <td className="px-4 py-4 text-center">🧡 LC</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 bg-orange-50">
                                            <td className="px-4 py-4 font-semibold">Breadsticks (8 pc)</td>
                                            <td className="px-4 py-4 text-center text-orange-600 font-bold">$4.49 (Crazy Bread)</td>
                                            <td className="px-4 py-4 text-center text-blue-600">$6.99</td>
                                            <td className="px-4 py-4 text-center">🧡 LC</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="px-4 py-4 font-semibold">Wings (8 pc)</td>
                                            <td className="px-4 py-4 text-center text-orange-600">$7.99</td>
                                            <td className="px-4 py-4 text-center text-blue-600 font-bold">$7.99</td>
                                            <td className="px-4 py-4 text-center">🤝 Tie</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 bg-orange-50">
                                            <td className="px-4 py-4 font-semibold">2-Liter Soda</td>
                                            <td className="px-4 py-4 text-center text-orange-600">$2.99</td>
                                            <td className="px-4 py-4 text-center text-blue-600">$3.49</td>
                                            <td className="px-4 py-4 text-center">🧡 LC</td>
                                        </tr>
                                        <tr className="bg-green-50 font-bold">
                                            <td className="px-4 py-4">Family Meal (2 pizzas + sides)</td>
                                            <td className="px-4 py-4 text-center text-green-600">~$22-25</td>
                                            <td className="px-4 py-4 text-center text-gray-600">~$35-40</td>
                                            <td className="px-4 py-4 text-center">🧡 LC</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 p-4 bg-gray-50">
                                *Prices are approximate and may vary by location. Domino's prices shown are regular menu prices without coupons.
                            </p>
                        </div>

                        {/* Savings Calculator */}
                        <div className="bg-gradient-to-r from-green-100 to-green-200 p-6 rounded-xl">
                            <h3 className="text-xl font-bold text-green-800 mb-3">
                                💵 How Much Can You Save at Little Caesars?
                            </h3>
                            <div className="grid md:grid-cols-3 gap-4 text-center">
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-green-600">$7</div>
                                    <p className="text-gray-600">Saved per pizza</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-green-600">$28</div>
                                    <p className="text-gray-600">Saved on 4 pizzas</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg">
                                    <div className="text-3xl font-bold text-green-600">$364</div>
                                    <p className="text-gray-600">Saved per year (1 pizza/week)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Comparison */}
                <section className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            ⚖️ Feature-by-Feature Comparison
                        </h2>

                        <div className="space-y-6">
                            {/* Speed */}
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4">🚀 Speed & Convenience</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <p className="font-bold text-orange-700">Little Caesars</p>
                                        <p className="text-gray-600">Hot-N-Ready = Walk in, grab, leave in 2 minutes! No ordering ahead needed.</p>
                                        <p className="mt-2 font-semibold text-green-600">⭐ Winner for pickup</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold text-blue-700">Domino's</p>
                                        <p className="text-gray-600">Order ahead required. 15-25 minutes for pickup, 30-45 for delivery.</p>
                                        <p className="mt-2 font-semibold text-green-600">⭐ Winner for delivery</p>
                                    </div>
                                </div>
                            </div>

                            {/* Quality */}
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4">🍕 Pizza Quality</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <p className="font-bold text-orange-700">Little Caesars</p>
                                        <p className="text-gray-600">Classic, simple pizza. May sit under heat lamps. Great for basic cravings.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold text-blue-700">Domino's</p>
                                        <p className="text-gray-600">Made-to-order. More customization. Generally fresher toppings.</p>
                                        <p className="mt-2 font-semibold text-green-600">⭐ Winner</p>
                                    </div>
                                </div>
                            </div>

                            {/* Value */}
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4">💰 Overall Value</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-orange-50 p-4 rounded-lg border-2 border-green-500">
                                        <p className="font-bold text-orange-700">Little Caesars</p>
                                        <p className="text-gray-600">Best value in pizza. Period. 47% cheaper than average competitor.</p>
                                        <p className="mt-2 font-semibold text-green-600">⭐ Clear Winner</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold text-blue-700">Domino's</p>
                                        <p className="text-gray-600">Good value WITH coupons. Expensive at regular price.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Menu Variety */}
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h3 className="text-xl font-bold mb-4">📋 Menu Variety</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="bg-orange-50 p-4 rounded-lg">
                                        <p className="font-bold text-orange-700">Little Caesars</p>
                                        <p className="text-gray-600">Limited but focused. Pizza, Crazy Bread, Wings. Simple menu = fast service.</p>
                                    </div>
                                    <div className="bg-blue-50 p-4 rounded-lg">
                                        <p className="font-bold text-blue-700">Domino's</p>
                                        <p className="text-gray-600">Extensive menu. Pasta, sandwiches, desserts, specialty items.</p>
                                        <p className="mt-2 font-semibold text-green-600">⭐ Winner</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final Verdict */}
                <section className="py-12 bg-gradient-to-r from-orange-100 to-orange-200">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            🏆 Final Verdict: Which Should You Choose?
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-orange-600 mb-4">Choose Little Caesars If...</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✅ You want the cheapest pizza</li>
                                    <li>✅ You're feeding a large group</li>
                                    <li>✅ You need pizza NOW (Hot-N-Ready)</li>
                                    <li>✅ You're on a tight budget</li>
                                    <li>✅ You love Crazy Bread</li>
                                    <li>✅ Simple pizza is all you need</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold text-blue-600 mb-4">Choose Domino's If...</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li>✅ You need delivery</li>
                                    <li>✅ You want lots of topping options</li>
                                    <li>✅ You're craving specialty items</li>
                                    <li>✅ You have app coupons</li>
                                    <li>✅ Quality matters more than price</li>
                                    <li>✅ You want pasta or desserts too</li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-green-100 p-6 rounded-xl text-center">
                            <h3 className="text-2xl font-bold text-green-800 mb-2">
                                🎯 Our Recommendation
                            </h3>
                            <p className="text-lg text-green-700">
                                For <strong>pure value and convenience</strong>, Little Caesars wins hands down.
                                You'll save $7+ per pizza and never have to wait. For <strong>delivery and variety</strong>,
                                Domino's is the better choice.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            ❓ Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            <details className="bg-gray-50 p-6 rounded-lg group" open>
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    Is Little Caesars cheaper than Domino's?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    <strong>Yes, significantly!</strong> Little Caesars is about 40-50% cheaper than Domino's.
                                    A large pepperoni pizza costs $7.99 at Little Caesars vs $14.99 at Domino's (without coupons).
                                    Even with Domino's frequent deals, Little Caesars is usually cheaper.
                                </p>
                            </details>

                            <details className="bg-gray-50 p-6 rounded-lg group">
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    Which pizza tastes better?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    This is subjective! Domino's generally has fresher toppings since it's made to order.
                                    Little Caesars' Hot-N-Ready may sit longer but offers consistent, classic pizza taste.
                                    If you order ahead at Little Caesars, you get fresher pizza too.
                                </p>
                            </details>

                            <details className="bg-gray-50 p-6 rounded-lg group">
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    Does Little Caesars deliver?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    Yes! Many Little Caesars locations now offer delivery through their app and
                                    third-party services like DoorDash, Uber Eats, and Grubhub.
                                    However, Domino's has better delivery coverage and faster times in most areas.
                                </p>
                            </details>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12" style={{ background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)' }}>
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }} className="text-3xl font-bold mb-4">
                            Ready to Order from Little Caesars?
                        </h2>
                        <p style={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }} className="text-xl mb-6">
                            Check out our complete menu with all prices and nutrition info!
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="/menus-prices"
                                style={{ backgroundColor: '#ffffff', color: '#ea580c' }}
                                className="px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                            >
                                View Full Menu →
                            </a>
                            <a
                                href="/store-locator"
                                style={{ backgroundColor: '#b91c1c', color: '#ffffff' }}
                                className="px-8 py-3 rounded-full font-bold text-lg hover:bg-red-800 transition-colors"
                            >
                                📍 Find Store Near You
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
