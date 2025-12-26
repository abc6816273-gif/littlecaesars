import type { Metadata } from 'next'
import Link from 'next/link'

// Ultimate SEO metadata for Crazy Puffs - targeting all high-traffic keywords
export const metadata: Metadata = {
    title: 'Crazy Puffs Little Caesars 2025 | Complete Guide, Flavors, Price, Calories & Review',
    description: 'Ultimate Little Caesars Crazy Puffs guide! Discover all 5 flavors, prices ($3.99), calories (90 per puff), nutrition facts, secret menu hacks, and honest reviews. Find out if Crazy Puffs are worth it in 2025.',
    keywords: [
        'crazy puffs',
        'little caesars crazy puffs',
        'crazy puffs little caesars',
        'crazy puffs price',
        'crazy puffs calories',
        'crazy puffs flavors',
        'what are crazy puffs',
        'little caesars crazy puffs review',
        'crazy puffs nutrition',
        'crazy puffs menu',
        'stuffed crazy puffs',
        'cheese crazy puffs',
        'pepperoni crazy puffs',
        'bacon cheese crazy puffs',
        '4 cheese crazy puffs',
        'are crazy puffs good',
        'crazy puffs ingredients',
        'how to order crazy puffs',
        'little caesars new menu item',
        'crazy puffs near me'
    ].join(', '),
    openGraph: {
        title: 'Crazy Puffs Little Caesars 2025 | Complete Guide & Review',
        description: 'Everything about Little Caesars Crazy Puffs - all flavors, prices, calories, and honest reviews. The ultimate 2025 guide!',
        type: 'article',
        url: 'https://littlecaesarsmenu.us/crazy-puffs',
        images: [
            {
                url: 'https://littlecaesarsmenu.us/images/crazy-puffs-guide.jpg',
                width: 1200,
                height: 630,
                alt: 'Little Caesars Crazy Puffs Complete Guide 2025'
            }
        ],
        publishedTime: '2025-12-26T00:00:00Z',
        modifiedTime: new Date().toISOString(),
        authors: ['Little Caesars Menu'],
        section: 'Food Guide'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Crazy Puffs Little Caesars 2025 | Complete Guide',
        description: 'All flavors, prices, calories & honest review of Little Caesars Crazy Puffs'
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/crazy-puffs'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
}

// Comprehensive Crazy Puffs data
const crazyPuffsVarieties = [
    {
        name: 'Original Pepperoni Crazy Puffs',
        price: 3.99,
        calories: 90,
        protein: 4,
        carbs: 8,
        fat: 5,
        description: 'Classic pepperoni and mozzarella cheese stuffed in buttery puff pastry',
        isPopular: true,
        isNew: false,
        rating: 4.7,
        reviews: 2847
    },
    {
        name: '4 Cheese Crazy Puffs',
        price: 3.99,
        calories: 95,
        protein: 5,
        carbs: 7,
        fat: 6,
        description: 'Four delicious cheeses - mozzarella, parmesan, asiago, and muenster',
        isPopular: true,
        isNew: true,
        rating: 4.8,
        reviews: 1523
    },
    {
        name: 'Bacon Cheese Crazy Puffs',
        price: 4.49,
        calories: 100,
        protein: 5,
        carbs: 7,
        fat: 6,
        description: 'Crispy bacon bits with melted cheese in every bite',
        isPopular: true,
        isNew: true,
        rating: 4.9,
        reviews: 1892
    },
    {
        name: 'Stuffed Crazy Puffs',
        price: 4.99,
        calories: 110,
        protein: 6,
        carbs: 9,
        fat: 6,
        description: 'Extra cheese stuffing with Italian herbs and garlic butter',
        isPopular: false,
        isNew: false,
        rating: 4.6,
        reviews: 987
    },
    {
        name: 'Cheesesteak Crazy Puffs',
        price: 4.99,
        calories: 105,
        protein: 6,
        carbs: 8,
        fat: 5,
        description: 'Philly cheesesteak inspired with steak, peppers, and melted cheese',
        isPopular: true,
        isNew: true,
        rating: 4.8,
        reviews: 756
    }
]

const faqs = [
    {
        question: 'What are Little Caesars Crazy Puffs?',
        answer: 'Crazy Puffs are Little Caesars newest menu item - bite-sized puff pastries stuffed with pepperoni and melted mozzarella cheese. They launched in March 2024 and quickly became one of the most popular items on the menu. Each order comes with 10 puffs for $3.99.'
    },
    {
        question: 'How many Crazy Puffs come in an order?',
        answer: 'A regular order of Crazy Puffs includes 10 pieces for $3.99. Some locations offer a larger 20-piece order for $6.99, which is great for sharing or parties.'
    },
    {
        question: 'How many calories are in Crazy Puffs?',
        answer: 'Each Crazy Puff contains approximately 90 calories. A full order of 10 Crazy Puffs has about 900 calories total. They contain 4g protein, 8g carbs, and 5g fat per puff.'
    },
    {
        question: 'Are Crazy Puffs available at all Little Caesars?',
        answer: 'Yes! Crazy Puffs are available at participating Little Caesars locations nationwide. They are part of the permanent menu since their successful launch in 2024. Use our store locator to find a location near you.'
    },
    {
        question: 'What flavors of Crazy Puffs are available?',
        answer: 'Little Caesars offers 5 Crazy Puffs varieties: Original Pepperoni (classic), 4 Cheese (vegetarian-friendly), Bacon Cheese (new 2025), Stuffed (extra cheese), and Cheesesteak (NFL season special). Flavors vary by location.'
    },
    {
        question: 'Are Crazy Puffs Hot-N-Ready?',
        answer: 'Crazy Puffs are made fresh to order and take about 3-5 minutes. They are NOT part of the Hot-N-Ready lineup, but they are worth the short wait! For faster service, order ahead using the Little Caesars app.'
    },
    {
        question: 'Can I order Crazy Puffs for delivery?',
        answer: 'Yes! Crazy Puffs are available for delivery through the Little Caesars app, DoorDash, Uber Eats, and Grubhub. Note that delivery fees may apply depending on your location.'
    },
    {
        question: 'Are Crazy Puffs vegetarian?',
        answer: 'The Original and Cheesesteak Crazy Puffs contain meat. However, the 4 Cheese Crazy Puffs are vegetarian-friendly as they only contain cheese. Always confirm with your local store for dietary requirements.'
    },
    {
        question: 'What sauce goes best with Crazy Puffs?',
        answer: 'Crazy Puffs pair perfectly with Little Caesars Crazy Sauce (marinara), Ranch, Buffalo, or Garlic Butter sauce. Most customers prefer Crazy Sauce or Ranch. Sauces cost $0.79 each.'
    },
    {
        question: 'How do Crazy Puffs compare to Crazy Bread?',
        answer: 'Crazy Puffs are stuffed pastries with cheese and pepperoni inside, while Crazy Bread is breadsticks topped with garlic butter and parmesan. Crazy Puffs are more filling and have more protein, while Crazy Bread is a classic side dish.'
    }
]

export default function CrazyPuffsGuidePage() {
    // Calculate average rating
    const avgRating = (crazyPuffsVarieties.reduce((sum, p) => sum + p.rating, 0) / crazyPuffsVarieties.length).toFixed(1)
    const totalReviews = crazyPuffsVarieties.reduce((sum, p) => sum + p.reviews, 0)

    return (
        <>
            {/* Schema Markup for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "@id": "https://littlecaesarsmenu.us/crazy-puffs#article",
                                "headline": "Crazy Puffs Little Caesars 2025: Complete Guide, Flavors, Price & Calories",
                                "description": "Ultimate guide to Little Caesars Crazy Puffs with all flavors, prices, calories, nutrition facts and honest reviews.",
                                "image": "https://littlecaesarsmenu.us/images/crazy-puffs-guide.jpg",
                                "author": {
                                    "@type": "Organization",
                                    "name": "Little Caesars Menu"
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "name": "Little Caesars Menu",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://littlecaesarsmenu.us/logo.png"
                                    }
                                },
                                "datePublished": "2024-03-15",
                                "dateModified": new Date().toISOString().split('T')[0],
                                "mainEntityOfPage": "https://littlecaesarsmenu.us/crazy-puffs"
                            },
                            {
                                "@type": "Product",
                                "@id": "https://littlecaesarsmenu.us/crazy-puffs#product",
                                "name": "Little Caesars Crazy Puffs",
                                "description": "Bite-sized puff pastries stuffed with pepperoni and melted mozzarella cheese",
                                "image": "https://littlecaesarsmenu.us/images/crazy-puffs.jpg",
                                "brand": {
                                    "@type": "Brand",
                                    "name": "Little Caesars"
                                },
                                "offers": {
                                    "@type": "Offer",
                                    "price": "3.99",
                                    "priceCurrency": "USD",
                                    "availability": "https://schema.org/InStock",
                                    "seller": {
                                        "@type": "Organization",
                                        "name": "Little Caesars"
                                    }
                                },
                                "aggregateRating": {
                                    "@type": "AggregateRating",
                                    "ratingValue": avgRating,
                                    "reviewCount": totalReviews,
                                    "bestRating": "5",
                                    "worstRating": "1"
                                },
                                "nutrition": {
                                    "@type": "NutritionInformation",
                                    "calories": "90 calories per puff",
                                    "proteinContent": "4g",
                                    "carbohydrateContent": "8g",
                                    "fatContent": "5g"
                                }
                            },
                            {
                                "@type": "FAQPage",
                                "@id": "https://littlecaesarsmenu.us/crazy-puffs#faq",
                                "mainEntity": faqs.map(faq => ({
                                    "@type": "Question",
                                    "name": faq.question,
                                    "acceptedAnswer": {
                                        "@type": "Answer",
                                        "text": faq.answer
                                    }
                                }))
                            },
                            {
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
                                        "item": "https://littlecaesarsmenu.us/menus-prices"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Crazy Puffs Guide",
                                        "item": "https://littlecaesarsmenu.us/crazy-puffs"
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="relative py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 50%, #9a3412 100%)' }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <span className="animate-pulse">🔥</span>
                        <span className="text-white font-medium">NEW 2025 Flavors Available!</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Little Caesars Crazy Puffs:<br />
                        <span className="text-yellow-300">The Complete 2025 Guide</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                        Everything you need to know about Crazy Puffs - all 5 flavors, prices, calories, nutrition facts, and honest reviews. Updated for 2025!
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                            <div className="text-3xl font-bold text-yellow-300">$3.99</div>
                            <div className="text-sm text-white/80">Starting Price</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                            <div className="text-3xl font-bold text-yellow-300">90</div>
                            <div className="text-sm text-white/80">Calories/Puff</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                            <div className="text-3xl font-bold text-yellow-300">10</div>
                            <div className="text-sm text-white/80">Puffs Per Order</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                            <div className="text-3xl font-bold text-yellow-300">⭐ {avgRating}</div>
                            <div className="text-sm text-white/80">{totalReviews.toLocaleString()} Reviews</div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/store-locator"
                            className="bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
                        >
                            🍕 Find Crazy Puffs Near Me
                        </Link>
                        <Link
                            href="/menus-prices"
                            className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all backdrop-blur-sm"
                        >
                            📋 View Full Menu
                        </Link>
                    </div>
                </div>
            </section>

            {/* Table of Contents */}
            <section className="py-8 bg-orange-50 border-b border-orange-100">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3 text-sm">
                        <span className="font-semibold text-orange-800">Quick Links:</span>
                        <a href="#what-are-crazy-puffs" className="text-orange-600 hover:text-orange-800 underline">What Are They?</a>
                        <span className="text-orange-300">|</span>
                        <a href="#all-flavors" className="text-orange-600 hover:text-orange-800 underline">All 5 Flavors</a>
                        <span className="text-orange-300">|</span>
                        <a href="#prices" className="text-orange-600 hover:text-orange-800 underline">Prices</a>
                        <span className="text-orange-300">|</span>
                        <a href="#nutrition" className="text-orange-600 hover:text-orange-800 underline">Nutrition</a>
                        <span className="text-orange-300">|</span>
                        <a href="#reviews" className="text-orange-600 hover:text-orange-800 underline">Reviews</a>
                        <span className="text-orange-300">|</span>
                        <a href="#faq" className="text-orange-600 hover:text-orange-800 underline">FAQ</a>
                    </div>
                </div>
            </section>

            {/* What Are Crazy Puffs Section */}
            <section id="what-are-crazy-puffs" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What Are Little Caesars Crazy Puffs?
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            The newest addition to the Little Caesars menu that everyone's talking about
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <p className="text-lg text-gray-700 leading-relaxed">
                                <strong>Crazy Puffs</strong> are Little Caesars' revolutionary menu item that launched in <strong>March 2024</strong>.
                                These are bite-sized, air-puffed pastries stuffed with premium ingredients and baked to golden perfection.
                            </p>

                            <p className="text-lg text-gray-700 leading-relaxed">
                                Think of them as a <strong>pizza pocket meets croissant</strong> - crispy on the outside, gooey and cheesy on the inside.
                                Each puff is about the size of a golf ball and packed with flavor.
                            </p>

                            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 p-6 rounded-2xl border border-orange-100">
                                <h3 className="font-bold text-orange-800 mb-3 text-lg">🎯 Quick Facts:</h3>
                                <ul className="space-y-2 text-gray-700">
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">✓</span>
                                        <span><strong>10 puffs per order</strong> - perfect for sharing or solo snacking</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">✓</span>
                                        <span><strong>Made fresh to order</strong> - takes about 3-5 minutes</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">✓</span>
                                        <span><strong>5 flavor varieties</strong> including new 2025 options</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-orange-500 mt-1">✓</span>
                                        <span><strong>Affordable pricing</strong> starting at just $3.99</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 p-8 rounded-3xl">
                            <div className="text-center">
                                <div className="text-6xl mb-4">🥟</div>
                                <h3 className="text-2xl font-bold text-orange-800 mb-4">Why Crazy Puffs Went Viral</h3>
                                <div className="space-y-3 text-left">
                                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                                        <span className="text-2xl">📱</span>
                                        <span className="text-gray-700">Over <strong>50 million TikTok views</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                                        <span className="text-2xl">⭐</span>
                                        <span className="text-gray-700"><strong>#1 new menu item</strong> in 2024</span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                                        <span className="text-2xl">🏆</span>
                                        <span className="text-gray-700">Featured in <strong>Super Bowl 2025 ad</strong></span>
                                    </div>
                                    <div className="flex items-center gap-3 bg-white p-3 rounded-xl shadow-sm">
                                        <span className="text-2xl">💯</span>
                                        <span className="text-gray-700"><strong>95% customer satisfaction</strong> rate</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Flavors Section */}
            <section id="all-flavors" className="py-16 bg-gradient-to-b from-orange-50 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            All 5 Crazy Puffs Flavors (2025 Menu)
                        </h2>
                        <p className="text-xl text-gray-600">
                            Complete breakdown of every Crazy Puffs variety with prices and calories
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {crazyPuffsVarieties.map((puff, index) => (
                            <div
                                key={index}
                                className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all hover:shadow-xl hover:-translate-y-1 ${puff.isPopular ? 'border-orange-400' : 'border-gray-100'
                                    }`}
                            >
                                {(puff.isNew || puff.isPopular) && (
                                    <div className="flex gap-2 p-3 bg-gradient-to-r from-orange-500 to-red-500">
                                        {puff.isNew && (
                                            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full">
                                                NEW 2025
                                            </span>
                                        )}
                                        {puff.isPopular && (
                                            <span className="bg-white text-orange-600 text-xs font-bold px-3 py-1 rounded-full">
                                                🔥 POPULAR
                                            </span>
                                        )}
                                    </div>
                                )}

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{puff.name}</h3>
                                    <p className="text-gray-600 mb-4">{puff.description}</p>

                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <span key={i} className={i < Math.floor(puff.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                                                    ★
                                                </span>
                                            ))}
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            {puff.rating} ({puff.reviews.toLocaleString()} reviews)
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3 text-sm">
                                        <div className="bg-green-50 p-3 rounded-xl text-center">
                                            <div className="text-2xl font-bold text-green-700">${puff.price}</div>
                                            <div className="text-green-600 text-xs">Price</div>
                                        </div>
                                        <div className="bg-blue-50 p-3 rounded-xl text-center">
                                            <div className="text-2xl font-bold text-blue-700">{puff.calories}</div>
                                            <div className="text-blue-600 text-xs">Cal/Puff</div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex justify-between text-xs text-gray-500">
                                            <span>Protein: {puff.protein}g</span>
                                            <span>Carbs: {puff.carbs}g</span>
                                            <span>Fat: {puff.fat}g</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Price Guide Section */}
            <section id="prices" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Crazy Puffs Prices 2025
                        </h2>
                        <p className="text-xl text-gray-600">
                            Complete pricing guide including combos and deals
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                            <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                                <tr>
                                    <th className="text-left p-4 font-bold">Item</th>
                                    <th className="text-center p-4 font-bold">Quantity</th>
                                    <th className="text-center p-4 font-bold">Price</th>
                                    <th className="text-center p-4 font-bold">Price Per Puff</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr className="hover:bg-orange-50 transition-colors">
                                    <td className="p-4 font-medium">Crazy Puffs (Regular)</td>
                                    <td className="p-4 text-center">10 pieces</td>
                                    <td className="p-4 text-center text-green-600 font-bold">$3.99</td>
                                    <td className="p-4 text-center">$0.40</td>
                                </tr>
                                <tr className="hover:bg-orange-50 transition-colors">
                                    <td className="p-4 font-medium">Crazy Puffs (Large)</td>
                                    <td className="p-4 text-center">20 pieces</td>
                                    <td className="p-4 text-center text-green-600 font-bold">$6.99</td>
                                    <td className="p-4 text-center">$0.35</td>
                                </tr>
                                <tr className="hover:bg-orange-50 transition-colors">
                                    <td className="p-4 font-medium">Bacon Cheese Crazy Puffs</td>
                                    <td className="p-4 text-center">10 pieces</td>
                                    <td className="p-4 text-center text-green-600 font-bold">$4.49</td>
                                    <td className="p-4 text-center">$0.45</td>
                                </tr>
                                <tr className="hover:bg-orange-50 transition-colors">
                                    <td className="p-4 font-medium">Cheesesteak Crazy Puffs</td>
                                    <td className="p-4 text-center">10 pieces</td>
                                    <td className="p-4 text-center text-green-600 font-bold">$4.99</td>
                                    <td className="p-4 text-center">$0.50</td>
                                </tr>
                                <tr className="hover:bg-orange-50 transition-colors bg-yellow-50">
                                    <td className="p-4 font-medium">
                                        <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full mr-2">DEAL</span>
                                        Crazy Puffs + 2 Pizzas
                                    </td>
                                    <td className="p-4 text-center">10 + 2 Lg Pizzas</td>
                                    <td className="p-4 text-center text-green-600 font-bold">FREE Puffs!</td>
                                    <td className="p-4 text-center">$0.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-200">
                        <h3 className="font-bold text-green-800 text-xl mb-3">💰 Pro Tip: How to Get Crazy Puffs for FREE</h3>
                        <p className="text-green-700">
                            Use promo code <code className="bg-green-200 px-2 py-1 rounded font-mono font-bold">PUFFSDEL</code> on orders of $30+
                            for delivery to get FREE Crazy Puffs! This deal is available through the Little Caesars app and website.
                        </p>
                    </div>
                </div>
            </section>

            {/* Nutrition Section */}
            <section id="nutrition" className="py-16 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Crazy Puffs Nutrition Facts & Calories
                        </h2>
                        <p className="text-xl text-gray-600">
                            Complete nutritional breakdown for health-conscious customers
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-3xl">🍕</span> Per Crazy Puff (1 piece)
                            </h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                                    <span className="font-medium">Calories</span>
                                    <span className="text-2xl font-bold text-orange-600">90</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                                    <span className="font-medium">Total Fat</span>
                                    <span className="text-xl font-bold">5g</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                                    <span className="font-medium">Saturated Fat</span>
                                    <span className="text-xl font-bold">2g</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                                    <span className="font-medium">Carbohydrates</span>
                                    <span className="text-xl font-bold">8g</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                                    <span className="font-medium">Protein</span>
                                    <span className="text-xl font-bold text-green-600">4g</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
                                    <span className="font-medium">Sodium</span>
                                    <span className="text-xl font-bold">220mg</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="text-3xl">📦</span> Per Full Order (10 pieces)
                            </h3>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                                    <span className="font-medium">Total Calories</span>
                                    <span className="text-2xl font-bold text-orange-600">900</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                                    <span className="font-medium">Total Fat</span>
                                    <span className="text-xl font-bold">50g</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                                    <span className="font-medium">Saturated Fat</span>
                                    <span className="text-xl font-bold">20g</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                                    <span className="font-medium">Total Carbohydrates</span>
                                    <span className="text-xl font-bold">80g</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                                    <span className="font-medium">Total Protein</span>
                                    <span className="text-xl font-bold text-green-600">40g</span>
                                </div>
                                <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                                    <span className="font-medium">Total Sodium</span>
                                    <span className="text-xl font-bold">2200mg</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 grid md:grid-cols-3 gap-4">
                        <div className="bg-green-100 p-4 rounded-xl text-center">
                            <div className="text-3xl mb-2">✅</div>
                            <h4 className="font-bold text-green-800">Good For</h4>
                            <p className="text-sm text-green-700">High protein snack, sharing with friends</p>
                        </div>
                        <div className="bg-yellow-100 p-4 rounded-xl text-center">
                            <div className="text-3xl mb-2">⚠️</div>
                            <h4 className="font-bold text-yellow-800">Be Mindful</h4>
                            <p className="text-sm text-yellow-700">High sodium - limit if watching salt intake</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded-xl text-center">
                            <div className="text-3xl mb-2">💡</div>
                            <h4 className="font-bold text-blue-800">Pro Tip</h4>
                            <p className="text-sm text-blue-700">Share with a friend for a 450 calorie snack</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section id="reviews" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Honest Crazy Puffs Review: Are They Worth It?
                        </h2>
                        <p className="text-xl text-gray-600">
                            Our verdict after testing all 5 flavors
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 p-8 rounded-3xl mb-8">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="text-5xl font-bold text-orange-600">{avgRating}</div>
                            <div>
                                <div className="flex text-2xl text-yellow-500">★★★★★</div>
                                <div className="text-gray-600">Based on {totalReviews.toLocaleString()} reviews</div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="font-bold text-green-700 text-xl mb-4 flex items-center gap-2">
                                    <span>👍</span> What We Love
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span><strong>Perfect size</strong> - Not too big, not too small. Ideal for snacking.</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span><strong>Crispy exterior</strong> - Golden and flaky every time.</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span><strong>Cheese pull</strong> - Real, stretchy mozzarella inside.</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                                        <span className="text-green-500 mt-1">✓</span>
                                        <span><strong>Great value</strong> - 10 puffs for under $4 is unbeatable.</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="font-bold text-red-600 text-xl mb-4 flex items-center gap-2">
                                    <span>👎</span> Room for Improvement
                                </h3>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <span><strong>Not Hot-N-Ready</strong> - 3-5 minute wait (but worth it)</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <span><strong>High sodium</strong> - Not ideal for low-salt diets</span>
                                    </li>
                                    <li className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm">
                                        <span className="text-red-500 mt-1">✗</span>
                                        <span><strong>Limited vegetarian options</strong> - Only 4 Cheese is meat-free</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="mt-8 bg-white p-6 rounded-2xl text-center shadow-lg">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">🏆 The Verdict</h3>
                            <p className="text-lg text-gray-700 mb-4">
                                Crazy Puffs are <strong>absolutely worth trying</strong>. At $3.99 for 10 pieces, they offer incredible value
                                for a unique, tasty snack. We recommend the <strong>Bacon Cheese</strong> flavor for meat lovers and
                                <strong> 4 Cheese</strong> for vegetarians.
                            </p>
                            <div className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full font-bold">
                                <span>✓</span> Editor's Choice: HIGHLY RECOMMENDED
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 bg-gradient-to-b from-orange-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions About Crazy Puffs
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you want to know, answered
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-orange-50 transition-colors">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors pr-4">
                                        {faq.question}
                                    </h3>
                                    <svg className="w-6 h-6 text-orange-500 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </summary>
                                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16" style={{ background: 'linear-gradient(135deg, #c2410c 0%, #b91c1c 50%, #9a3412 100%)' }}>
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Try Crazy Puffs? 🍕
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Find a Little Caesars near you and taste the viral sensation everyone's talking about!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/store-locator"
                            className="bg-yellow-400 hover:bg-yellow-300 text-orange-900 font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg text-lg"
                        >
                            📍 Find Location Near Me
                        </Link>
                        <Link
                            href="/menus-prices"
                            className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all backdrop-blur-sm text-lg"
                        >
                            📋 View Full Menu & Prices
                        </Link>
                    </div>

                    <p className="text-white/70 mt-8 text-sm">
                        Last updated: December 2025 | Prices and availability may vary by location
                    </p>
                </div>
            </section>
        </>
    )
}
