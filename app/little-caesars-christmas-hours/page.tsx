import type { Metadata } from 'next'

// SEO-optimized metadata for Christmas hours page
export const metadata: Metadata = {
    title: 'Is Little Caesars Open on Christmas 2025? Holiday Hours Guide | Little Caesars Menu',
    description: 'Find out if Little Caesars is open on Christmas Day 2025. Complete holiday hours guide, Christmas Eve hours, and what to order for your holiday pizza party.',
    keywords: [
        'is little caesars open on christmas',
        'little caesars christmas hours',
        'little caesars holiday hours 2025',
        'little caesars christmas eve hours',
        'little caesars open christmas day',
        'pizza open on christmas'
    ].join(', '),
    openGraph: {
        title: 'Is Little Caesars Open on Christmas 2025? | Holiday Hours Guide',
        description: 'Complete guide to Little Caesars holiday hours. Find out if your local store is open on Christmas Day and Christmas Eve 2025.',
        type: 'article',
        url: 'https://littlecaesarsmenu.us/little-caesars-christmas-hours',
        images: [
            {
                url: 'https://littlecaesarsmenu.us/images/little-caesars-christmas.jpg',
                width: 1200,
                height: 630,
                alt: 'Little Caesars Christmas Hours 2025'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Is Little Caesars Open on Christmas 2025?',
        description: 'Find out Little Caesars holiday hours for Christmas Day and Christmas Eve 2025.'
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-christmas-hours'
    }
}

export default function LittleCaesarsChristmasHoursPage() {
    const currentYear = 2025

    // Structured data for SEO
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `Is Little Caesars Open on Christmas ${currentYear}? Complete Holiday Hours Guide`,
        "description": `Find out if Little Caesars is open on Christmas Day ${currentYear}. Complete holiday hours guide for Christmas Eve and Christmas Day.`,
        "image": "https://littlecaesarsmenu.us/images/little-caesars-christmas.jpg",
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
                "name": "Is Little Caesars open on Christmas Day 2025?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Most Little Caesars locations are CLOSED on Christmas Day (December 25th, 2025). However, hours vary by location, so it's best to call your local store or check the Little Caesars app to confirm."
                }
            },
            {
                "@type": "Question",
                "name": "Is Little Caesars open on Christmas Eve 2025?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Most Little Caesars locations are open on Christmas Eve (December 24th, 2025), typically with reduced hours. Many stores close early, around 6-8 PM, so plan to pick up your pizza earlier in the day."
                }
            },
            {
                "@type": "Question",
                "name": "What should I order from Little Caesars for a Christmas party?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For Christmas parties, we recommend: The Party Pack (4 Hot-N-Ready pizzas), Crazy Bread (crowd favorite), Wings bucket, and 2-liter drinks. Order ahead to avoid waiting!"
                }
            },
            {
                "@type": "Question",
                "name": "Can I order Little Caesars online for Christmas Eve pickup?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! You can order through the Little Caesars app or website for pickup. We recommend ordering early on Christmas Eve as stores get busy and may close earlier than usual."
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

            <main className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
                {/* Hero Section */}
                <section className="relative py-16 bg-gradient-to-r from-little-caesars-orange to-red-600 text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <div className="text-6xl mb-4">🎄🍕</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Is Little Caesars Open on Christmas {currentYear}?
                        </h1>
                        <p className="text-xl opacity-90 max-w-2xl mx-auto">
                            Complete holiday hours guide for Christmas Day and Christmas Eve.
                            Find out when your local Little Caesars is open!
                        </p>
                    </div>
                </section>

                {/* Quick Answer Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <div className="bg-gradient-to-r from-green-50 to-green-100 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
                            <h2 className="text-2xl font-bold text-green-800 mb-3">
                                ⚡ Quick Answer
                            </h2>
                            <p className="text-lg text-green-700">
                                <strong>Christmas Day (Dec 25):</strong> Most Little Caesars locations are <span className="text-red-600 font-bold">CLOSED</span>
                            </p>
                            <p className="text-lg text-green-700 mt-2">
                                <strong>Christmas Eve (Dec 24):</strong> Most locations are <span className="text-green-600 font-bold">OPEN</span> with reduced hours (typically until 6-8 PM)
                            </p>
                        </div>

                        {/* Detailed Hours Table */}
                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                            <div className="bg-little-caesars-orange text-white p-4">
                                <h2 className="text-2xl font-bold">🕐 Little Caesars Holiday Hours {currentYear}</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-6 py-4 text-left font-semibold">Holiday</th>
                                            <th className="px-6 py-4 text-left font-semibold">Date</th>
                                            <th className="px-6 py-4 text-left font-semibold">Status</th>
                                            <th className="px-6 py-4 text-left font-semibold">Typical Hours</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        <tr className="hover:bg-orange-50">
                                            <td className="px-6 py-4">Christmas Eve</td>
                                            <td className="px-6 py-4">December 24, {currentYear}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    ✅ Open
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">10:30 AM - 6:00 PM*</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50 bg-red-50">
                                            <td className="px-6 py-4 font-semibold">Christmas Day</td>
                                            <td className="px-6 py-4">December 25, {currentYear}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    ❌ Closed
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">—</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50">
                                            <td className="px-6 py-4">Day After Christmas</td>
                                            <td className="px-6 py-4">December 26, {currentYear}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    ✅ Open
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">Regular Hours</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50">
                                            <td className="px-6 py-4">New Year's Eve</td>
                                            <td className="px-6 py-4">December 31, {currentYear}</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    ✅ Open
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">10:30 AM - 8:00 PM*</td>
                                        </tr>
                                        <tr className="hover:bg-orange-50">
                                            <td className="px-6 py-4">New Year's Day</td>
                                            <td className="px-6 py-4">January 1, 2026</td>
                                            <td className="px-6 py-4">
                                                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                                                    ⚠️ Varies
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">Check Local Store</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-sm text-gray-500 p-4 bg-gray-50">
                                *Hours may vary by location. Always call ahead or check the Little Caesars app to confirm your local store's hours.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Tips Section */}
                <section className="py-12 bg-orange-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            🍕 Tips for Ordering Little Caesars on Christmas Eve
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="text-3xl mb-3">⏰</div>
                                <h3 className="text-xl font-bold mb-2">Order Early</h3>
                                <p className="text-gray-600">
                                    Christmas Eve is busy! Order before 4 PM to avoid long waits.
                                    Many stores close by 6 PM.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="text-3xl mb-3">📱</div>
                                <h3 className="text-xl font-bold mb-2">Use the App</h3>
                                <p className="text-gray-600">
                                    Skip the line by ordering through the Little Caesars app.
                                    Your pizza will be ready when you arrive!
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="text-3xl mb-3">📞</div>
                                <h3 className="text-xl font-bold mb-2">Call Ahead</h3>
                                <p className="text-gray-600">
                                    Holiday hours vary by location. Call your local store
                                    to confirm they're open and check wait times.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-md">
                                <div className="text-3xl mb-3">🎉</div>
                                <h3 className="text-xl font-bold mb-2">Party Packs</h3>
                                <p className="text-gray-600">
                                    Hosting a party? Order the Party Pack with 4 pizzas,
                                    Crazy Bread, and drinks for the best value!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* What to Order Section */}
                <section className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            🎄 Best Little Caesars Items for Christmas Parties
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                                <span className="text-2xl">🍕</span>
                                <div>
                                    <h3 className="font-bold">Hot-N-Ready Pepperoni Pizza</h3>
                                    <p className="text-gray-600">Classic crowd-pleaser, no wait required - $7.99</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                                <span className="text-2xl">🥖</span>
                                <div>
                                    <h3 className="font-bold">Crazy Bread (8 pieces)</h3>
                                    <p className="text-gray-600">Everyone's favorite breadsticks with Crazy Sauce - $4.49</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
                                <span className="text-2xl">🍗</span>
                                <div>
                                    <h3 className="font-bold">Wings (8 or 16 pieces)</h3>
                                    <p className="text-gray-600">Buffalo, BBQ, or Oven Roasted - Starting at $7.99</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg border-2 border-green-300">
                                <span className="text-2xl">⭐</span>
                                <div>
                                    <h3 className="font-bold text-green-700">Party Pack Bundle (Best Value!)</h3>
                                    <p className="text-gray-600">4 Large Pizzas + Crazy Bread + 2-Liter - ~$35</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            ❓ Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            <details className="bg-white p-6 rounded-lg shadow-md group" open>
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    Is Little Caesars open on Christmas Day 2025?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    Most Little Caesars locations are <strong>closed on Christmas Day</strong> (December 25th, 2025).
                                    This is one of the few days of the year that Little Caesars closes.
                                    However, hours can vary by location, especially for franchise-owned stores,
                                    so it's always best to call ahead or check the app.
                                </p>
                            </details>

                            <details className="bg-white p-6 rounded-lg shadow-md group">
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    Is Little Caesars open on Christmas Eve 2025?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    Yes! Most Little Caesars locations are <strong>open on Christmas Eve</strong> (December 24th, 2025),
                                    but typically with reduced hours. Most stores close earlier than usual,
                                    around 6-8 PM. Plan to order early to make sure you get your pizza!
                                </p>
                            </details>

                            <details className="bg-white p-6 rounded-lg shadow-md group">
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    What should I order from Little Caesars for a Christmas party?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    For Christmas parties, we recommend the <strong>Party Pack Bundle</strong> which includes
                                    4 Hot-N-Ready pizzas, Crazy Bread, and a 2-liter drink. You can also add wings
                                    and extra Crazy Bread. Order through the app to skip the line!
                                </p>
                            </details>

                            <details className="bg-white p-6 rounded-lg shadow-md group">
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    How do I find my local Little Caesars holiday hours?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    The best way to find your local store's holiday hours is to:
                                    <br /><br />
                                    1. <strong>Use the Little Caesars app</strong> - shows real-time store hours
                                    <br />
                                    2. <strong>Call your local store</strong> directly
                                    <br />
                                    3. <strong>Visit littlecaesars.com</strong> and use the store locator
                                </p>
                            </details>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 bg-little-caesars-orange text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            🍕 Ready to Order for Christmas?
                        </h2>
                        <p className="text-xl mb-6 opacity-90">
                            Check out our complete menu with all prices and nutrition info!
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="/menus-prices"
                                className="bg-white text-little-caesars-orange px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                            >
                                View Full Menu →
                            </a>
                            <a
                                href="/happy-christmas-2025"
                                className="bg-red-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-800 transition-colors"
                            >
                                🎄 Christmas Deals Guide
                            </a>
                        </div>
                    </div>
                </section>

                {/* Related Articles */}
                <section className="py-12 bg-white">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold mb-6">📚 Related Articles</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <a href="/happy-christmas-2025" className="block p-4 border rounded-lg hover:border-orange-500 transition-colors">
                                <h3 className="font-bold text-lg mb-1">🎄 Happy Christmas 2025 - Little Caesars Holiday Guide</h3>
                                <p className="text-gray-600 text-sm">Complete guide to Little Caesars Christmas deals, party ideas, and festive pizza combinations.</p>
                            </a>
                            <a href="/menus-prices" className="block p-4 border rounded-lg hover:border-orange-500 transition-colors">
                                <h3 className="font-bold text-lg mb-1">🍕 Little Caesars Menu & Prices 2025</h3>
                                <p className="text-gray-600 text-sm">Complete menu with all items, prices, calories, and nutrition information.</p>
                            </a>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
