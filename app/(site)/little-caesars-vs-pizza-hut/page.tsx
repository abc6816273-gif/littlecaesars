'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';

// Comparison data
const priceComparison = [
    { item: 'Large Pepperoni Pizza', littleCaesars: '$7.99', pizzaHut: '$16.99', savings: '53% cheaper' },
    { item: 'Large Cheese Pizza', littleCaesars: '$6.99', pizzaHut: '$14.99', savings: '53% cheaper' },
    { item: 'Breadsticks', littleCaesars: '$4.99', pizzaHut: '$6.99', savings: '29% cheaper' },
    { item: 'Wings (8pc)', littleCaesars: '$7.99', pizzaHut: '$11.99', savings: '33% cheaper' },
    { item: 'Stuffed Crust Pizza', littleCaesars: 'N/A', pizzaHut: '$19.99', savings: 'LC has Detroit-Style' },
    { item: 'Family Meal Deal', littleCaesars: '$19.99', pizzaHut: '$29.99', savings: '33% cheaper' },
];

const nutritionComparison = [
    { item: 'Pepperoni Slice', lcCalories: 280, lcFat: 11, phCalories: 310, phFat: 14 },
    { item: 'Cheese Slice', lcCalories: 240, lcFat: 9, phCalories: 280, phFat: 12 },
    { item: 'Stuffed Crust Slice', lcCalories: 390, lcFat: 20, phCalories: 350, phFat: 16 },
];

const prosConsLC = {
    pros: [
        '$5.55 Hot-N-Ready - No waiting required',
        'Best value in fast-food pizza',
        'Pizza Portal touchless pickup',
        'Detroit-Style Deep Dish is legendary',
        'Crazy Bread + Sauce combo is iconic',
        'Consistent quality nationwide'
    ],
    cons: [
        'No stuffed crust option',
        'Smaller menu variety',
        'Limited dine-in locations',
        'Fewer specialty pizzas'
    ]
};

const prosConsPH = {
    pros: [
        'Original Stuffed Crust inventor',
        'More specialty pizza options',
        'Better dine-in experience',
        'Pan pizza is very popular',
        'Book It! program for kids'
    ],
    cons: [
        'Significantly more expensive',
        'Long wait times for orders',
        'Quality varies by location',
        'Delivery fees are high',
        'Frequent price increases'
    ]
};

const faqData = [
    {
        question: 'Is Little Caesars cheaper than Pizza Hut?',
        answer: 'Yes! Little Caesars is approximately 50% cheaper than Pizza Hut. A large pepperoni at LC costs $7.99 vs $16.99 at Pizza Hut. The Hot-N-Ready at $5.55 is the best value in pizza.'
    },
    {
        question: 'Which has better pizza - Little Caesars or Pizza Hut?',
        answer: 'It depends on your preference. Little Caesars excels at value and speed with Hot-N-Ready. Pizza Hut is known for Stuffed Crust and Pan Pizza. For price-to-quality ratio, Little Caesars wins.'
    },
    {
        question: 'Does Little Caesars have Stuffed Crust like Pizza Hut?',
        answer: 'Little Caesars doesn\'t have traditional stuffed crust, but offers Detroit-Style Deep Dish with thick, crispy cheese edges that many prefer. It\'s unique to Little Caesars and highly rated.'
    },
    {
        question: 'Which pizza chain has more calories?',
        answer: 'Pizza Hut generally has more calories per slice - about 280 vs 310 for pepperoni. Pizza Hut\'s pan pizza and stuffed crust options are higher calorie. Little Caesars is slightly healthier.'
    },
    {
        question: 'Is Pizza Hut or Little Caesars better for delivery?',
        answer: 'Pizza Hut has more established delivery. Little Caesars offers delivery through their app and third-party services (DoorDash, Uber Eats). For pickup, Little Caesars\' Pizza Portal is faster.'
    },
    {
        question: 'Which has better deals - Little Caesars or Pizza Hut?',
        answer: 'Little Caesars has consistent everyday low prices. Pizza Hut relies on promotional deals and coupons. For reliable savings without coupon hunting, Little Caesars is better.'
    },
    {
        question: 'What is the best thing at Little Caesars vs Pizza Hut?',
        answer: 'At Little Caesars: ExtraMostBestest and Detroit-Style Deep Dish. At Pizza Hut: Original Stuffed Crust and Meat Lover\'s. Crazy Bread at LC is legendary among breadstick fans.'
    },
    {
        question: 'Which pizza chain is better for families?',
        answer: 'Little Caesars is more budget-friendly for large families. A family of 4 can eat for under $20 at LC vs $35+ at Pizza Hut. The Hot-N-Ready instant availability also helps with hungry kids.'
    }
];

// Generate Schema
function generateSchema() {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Article',
                'headline': 'Little Caesars vs Pizza Hut 2025: Complete Price & Quality Comparison',
                'description': 'Detailed comparison of Little Caesars and Pizza Hut - prices, menu, nutrition, delivery, taste. Find out which pizza chain offers better value.',
                'author': {
                    '@type': 'Organization',
                    'name': 'LittleCaesarsMenu.us'
                },
                'datePublished': '2025-01-01',
                'dateModified': '2025-12-28'
            },
            {
                '@type': 'FAQPage',
                'mainEntity': faqData.map(faq => ({
                    '@type': 'Question',
                    'name': faq.question,
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': faq.answer
                    }
                }))
            },
            {
                '@type': 'HowTo',
                'name': 'How to Choose Between Little Caesars and Pizza Hut',
                'description': 'Step-by-step guide to pick the best pizza chain for your needs',
                'step': [
                    { '@type': 'HowToStep', 'position': 1, 'name': 'Determine Your Budget', 'text': 'If saving money is priority, Little Caesars is 50% cheaper. Hot-N-Ready at $5.55 is unbeatable value.' },
                    { '@type': 'HowToStep', 'position': 2, 'name': 'Consider Crust Preference', 'text': 'Want Stuffed Crust? Go Pizza Hut. Prefer thick, crispy Detroit-Style? Choose Little Caesars.' },
                    { '@type': 'HowToStep', 'position': 3, 'name': 'Check Wait Time', 'text': 'Need pizza NOW? Little Caesars Hot-N-Ready is instant. Pizza Hut requires 20-45 min wait.' },
                    { '@type': 'HowToStep', 'position': 4, 'name': 'Compare Nutrition', 'text': 'Little Caesars has fewer calories per slice. Check our calorie calculator for exact counts.' },
                    { '@type': 'HowToStep', 'position': 5, 'name': 'Look for Deals', 'text': 'Check Little Caesars app for $5.55 Hot-N-Ready. Check Pizza Hut for current promos.' }
                ]
            },
            {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.littlecaesarsmenu.us' },
                    { '@type': 'ListItem', 'position': 2, 'name': 'Little Caesars vs Pizza Hut', 'item': 'https://www.littlecaesarsmenu.us/little-caesars-vs-pizza-hut' }
                ]
            }
        ]
    };
}

export default function LittleCaesarsVsPizzaHutPage() {
    const [activeTab, setActiveTab] = useState<'price' | 'nutrition' | 'features'>('price');

    return (
        <>
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema()) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 50%, #b91c1c 100%)' }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                            <span style={{ color: '#ffffff' }} className="text-sm font-bold">🍕 2025 PIZZA SHOWDOWN</span>
                        </div>
                        <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-6xl font-black mb-6">
                            Little Caesars vs Pizza Hut
                        </h1>
                        <p style={{ color: '#ffffff' }} className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 opacity-90">
                            The ultimate battle: Hot-N-Ready vs Stuffed Crust! Compare prices, taste, nutrition & value.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <div style={{ backgroundColor: '#ea580c' }} className="px-6 py-3 rounded-xl">
                                <span style={{ color: '#ffffff' }} className="font-bold">🏆 Little Caesars</span>
                                <p style={{ color: '#ffffff' }} className="text-sm">$5.55 Hot-N-Ready</p>
                            </div>
                            <div style={{ color: '#ffffff' }} className="text-4xl font-black flex items-center">VS</div>
                            <div style={{ backgroundColor: '#b91c1c' }} className="px-6 py-3 rounded-xl">
                                <span style={{ color: '#ffffff' }} className="font-bold">🍕 Pizza Hut</span>
                                <p style={{ color: '#ffffff' }} className="text-sm">$16.99+ Large Pizza</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Verdict */}
            <section className="py-12 bg-gradient-to-r from-orange-50 to-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-orange-500">
                        <h2 style={{ color: '#111827' }} className="text-2xl font-bold mb-4">⚡ Quick Verdict</h2>
                        <p style={{ color: '#374151' }} className="text-lg mb-4">
                            <strong style={{ color: '#ea580c' }}>Little Caesars wins for value!</strong> With prices 50% lower than Pizza Hut,
                            you get MORE pizza for LESS money. Pizza Hut's Stuffed Crust is iconic, but LC's Detroit-Style
                            Deep Dish rivals it at half the price!
                        </p>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">💰 53% Cheaper</span>
                            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">⚡ No Wait Time</span>
                            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">🔥 Fewer Calories</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Tabs */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 style={{ color: '#111827' }} className="text-3xl font-bold text-center mb-8">📊 Detailed Comparison</h2>

                    {/* Tab Buttons */}
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        {[
                            { id: 'price', label: '💰 Price Comparison' },
                            { id: 'nutrition', label: '🥗 Nutrition Facts' },
                            { id: 'features', label: '⭐ Pros & Cons' }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                style={{
                                    backgroundColor: activeTab === tab.id ? '#ea580c' : '#ffffff',
                                    color: activeTab === tab.id ? '#ffffff' : '#374151'
                                }}
                                className="px-6 py-3 rounded-full font-semibold shadow-md transition-all hover:shadow-lg"
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Price Comparison Table */}
                    {activeTab === 'price' && (
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead style={{ background: 'linear-gradient(135deg, #f97316 0%, #dc2626 100%)' }}>
                                        <tr>
                                            <th style={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }} className="px-6 py-4 text-left font-bold">Menu Item</th>
                                            <th style={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }} className="px-6 py-4 text-center font-bold">🏆 Little Caesars</th>
                                            <th style={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }} className="px-6 py-4 text-center font-bold">Pizza Hut</th>
                                            <th style={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }} className="px-6 py-4 text-center font-bold">Your Savings</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {priceComparison.map((item, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                                <td style={{ color: '#111827' }} className="px-6 py-4 font-semibold">{item.item}</td>
                                                <td className="px-6 py-4 text-center">
                                                    <span style={{ color: '#16a34a' }} className="font-black text-xl">{item.littleCaesars}</span>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span style={{ color: '#6b7280' }} className="text-lg line-through">{item.pizzaHut}</span>
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold text-sm">{item.savings}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-6 bg-green-50">
                                <p style={{ color: '#166534' }} className="font-semibold text-center">
                                    💰 Save an average of $8-10 per order by choosing Little Caesars!
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Nutrition Comparison */}
                    {activeTab === 'nutrition' && (
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="bg-gradient-to-r from-blue-500 to-blue-600">
                                        <tr>
                                            <th style={{ color: '#ffffff' }} className="px-6 py-4 text-left font-bold">Item (per slice)</th>
                                            <th style={{ color: '#ffffff' }} className="px-6 py-4 text-center font-bold" colSpan={2}>Little Caesars</th>
                                            <th style={{ color: '#ffffff' }} className="px-6 py-4 text-center font-bold" colSpan={2}>Pizza Hut</th>
                                        </tr>
                                        <tr className="bg-blue-400">
                                            <th></th>
                                            <th style={{ color: '#ffffff' }} className="px-4 py-2 text-center text-sm">Calories</th>
                                            <th style={{ color: '#ffffff' }} className="px-4 py-2 text-center text-sm">Fat (g)</th>
                                            <th style={{ color: '#ffffff' }} className="px-4 py-2 text-center text-sm">Calories</th>
                                            <th style={{ color: '#ffffff' }} className="px-4 py-2 text-center text-sm">Fat (g)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {nutritionComparison.map((item, index) => (
                                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                                <td style={{ color: '#111827' }} className="px-6 py-4 font-semibold">{item.item}</td>
                                                <td className="px-4 py-4 text-center">
                                                    <span style={{ color: '#16a34a' }} className="font-bold">{item.lcCalories}</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span style={{ color: '#16a34a' }} className="font-bold">{item.lcFat}g</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span style={{ color: '#dc2626' }} className="font-bold">{item.phCalories}</span>
                                                </td>
                                                <td className="px-4 py-4 text-center">
                                                    <span style={{ color: '#dc2626' }} className="font-bold">{item.phFat}g</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="p-6 bg-green-50">
                                <p style={{ color: '#166534' }} className="font-semibold">
                                    ✅ Little Caesars has 10-15% fewer calories per slice on average!
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Features Comparison */}
                    {activeTab === 'features' && (
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Little Caesars */}
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-orange-500">
                                <div style={{ backgroundColor: '#f97316' }} className="px-6 py-4">
                                    <h3 style={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }} className="text-xl font-bold">🏆 Little Caesars</h3>
                                </div>
                                <div className="p-6">
                                    <h4 style={{ color: '#16a34a' }} className="font-bold mb-3">✅ Pros</h4>
                                    <ul className="space-y-2 mb-6">
                                        {prosConsLC.pros.map((pro, i) => (
                                            <li key={i} style={{ color: '#374151' }} className="flex items-start gap-2">
                                                <span className="text-green-500 mt-1">✓</span> {pro}
                                            </li>
                                        ))}
                                    </ul>
                                    <h4 style={{ color: '#dc2626' }} className="font-bold mb-3">❌ Cons</h4>
                                    <ul className="space-y-2">
                                        {prosConsLC.cons.map((con, i) => (
                                            <li key={i} style={{ color: '#6b7280' }} className="flex items-start gap-2">
                                                <span className="text-red-500 mt-1">✗</span> {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Pizza Hut */}
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-t-4 border-red-600">
                                <div className="bg-red-600 px-6 py-4">
                                    <h3 style={{ color: '#ffffff' }} className="text-xl font-bold">🍕 Pizza Hut</h3>
                                </div>
                                <div className="p-6">
                                    <h4 style={{ color: '#16a34a' }} className="font-bold mb-3">✅ Pros</h4>
                                    <ul className="space-y-2 mb-6">
                                        {prosConsPH.pros.map((pro, i) => (
                                            <li key={i} style={{ color: '#374151' }} className="flex items-start gap-2">
                                                <span className="text-green-500 mt-1">✓</span> {pro}
                                            </li>
                                        ))}
                                    </ul>
                                    <h4 style={{ color: '#dc2626' }} className="font-bold mb-3">❌ Cons</h4>
                                    <ul className="space-y-2">
                                        {prosConsPH.cons.map((con, i) => (
                                            <li key={i} style={{ color: '#6b7280' }} className="flex items-start gap-2">
                                                <span className="text-red-500 mt-1">✗</span> {con}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Winner Declaration */}
            <section className="py-16" style={{ background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)' }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span style={{ color: '#ffffff', fontSize: '4rem' }}>🏆</span>
                    <h2 style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }} className="text-3xl md:text-4xl font-black mt-4 mb-6">
                        The Winner: Little Caesars!
                    </h2>
                    <p style={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }} className="text-xl mb-8">
                        For budget-conscious pizza fans, Little Caesars delivers incredible value.
                        Save 50%+ while enjoying Hot-N-Ready convenience and Detroit-Style greatness!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/little-caesars-menu"
                            style={{ backgroundColor: '#ffffff', color: '#16a34a' }}
                            className="inline-block px-8 py-4 rounded-full font-bold text-lg hover:bg-green-50 transition-colors shadow-xl"
                        >
                            View Full Menu →
                        </Link>
                        <Link
                            href="/little-caesars-calorie-calculator"
                            style={{ backgroundColor: '#15803d', color: '#ffffff' }}
                            className="inline-block px-8 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition-colors shadow-xl"
                        >
                            Try Calorie Calculator 🧮
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 style={{ color: '#111827' }} className="text-3xl font-bold text-center mb-8">
                        ❓ Frequently Asked Questions
                    </h2>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <details key={index} className="bg-white rounded-xl shadow-md group">
                                <summary
                                    style={{ color: '#111827' }}
                                    className="px-6 py-4 font-semibold cursor-pointer list-none flex items-center justify-between hover:bg-gray-50 rounded-xl"
                                >
                                    {faq.question}
                                    <span className="text-orange-500 group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <div className="px-6 pb-4">
                                    <p style={{ color: '#4b5563' }}>{faq.answer}</p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Comparisons */}
            <section className="py-12 bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 style={{ color: '#111827' }} className="text-2xl font-bold text-center mb-8">📚 More Comparisons & Guides</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <Link href="/little-caesars-vs-dominos" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group">
                            <span className="text-3xl">🆚</span>
                            <h3 style={{ color: '#111827' }} className="font-bold mt-2 group-hover:text-orange-600">LC vs Dominos</h3>
                            <p style={{ color: '#6b7280' }} className="text-sm mt-1">Compare with Dominos prices</p>
                        </Link>
                        <Link href="/little-caesars-calorie-calculator" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group">
                            <span className="text-3xl">🧮</span>
                            <h3 style={{ color: '#111827' }} className="font-bold mt-2 group-hover:text-orange-600">Calorie Calculator</h3>
                            <p style={{ color: '#6b7280' }} className="text-sm mt-1">Count calories in your order</p>
                        </Link>
                        <Link href="/little-caesars-coupons-january-2025" className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all group">
                            <span className="text-3xl">🎟️</span>
                            <h3 style={{ color: '#111827' }} className="font-bold mt-2 group-hover:text-orange-600">Latest Coupons</h3>
                            <p style={{ color: '#6b7280' }} className="text-sm mt-1">Save even more with deals</p>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16" style={{ background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)' }}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 style={{ color: '#ffffff', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }} className="text-3xl font-black mb-4">
                        Ready to Order?
                    </h2>
                    <p style={{ color: '#ffffff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }} className="text-lg mb-8">
                        Get your Hot-N-Ready pizza for just $5.55 - no waiting required!
                    </p>
                    <Link
                        href="https://littlecaesars.com"
                        target="_blank"
                        style={{ backgroundColor: '#ffffff', color: '#ea580c' }}
                        className="inline-block px-10 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors shadow-xl"
                    >
                        Order from Little Caesars 🍕
                    </Link>
                </div>
            </section>
        </>
    );
}
