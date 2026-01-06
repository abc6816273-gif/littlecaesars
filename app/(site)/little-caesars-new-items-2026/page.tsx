import type { Metadata } from 'next'
import Link from 'next/link'

// Ultimate SEO metadata for New Items 2026 - targeting all high-traffic keywords
export const metadata: Metadata = {
    title: 'Little Caesars New Menu Items 2026 | Complete Guide to All New Pizzas & Sides',
    description: 'Discover ALL Little Caesars new menu items for 2026! Stuffed Crust Pizza, Pretzel Crust, Cheesesteak Crazy Puffs, $9.99 Value Menu, and more. Prices, calories & reviews included.',
    keywords: [
        'little caesars new menu items 2026',
        'little caesars new pizza 2026',
        'little caesars stuffed crust',
        'little caesars pretzel crust',
        'little caesars new items',
        'little caesars menu 2026',
        'little caesars cheesesteak pizza',
        'little caesars value menu',
        'little caesars new crazy puffs',
        'little caesars stuffed crunch crust',
        'what is new at little caesars',
        'little caesars limited time',
        'little caesars 2026 menu',
        'new pizza at little caesars',
        'little caesars specials 2026'
    ].join(', '),
    openGraph: {
        title: 'Little Caesars New Menu Items 2026 | All New Pizzas & Sides',
        description: 'Complete guide to all new Little Caesars menu items in 2026. Stuffed Crust, Pretzel Crust, Cheesesteak Crazy Puffs & more!',
        type: 'article',
        url: 'https://littlecaesarsmenu.us/little-caesars-new-items-2026',
        images: [
            {
                url: 'https://littlecaesarsmenu.us/images/new-items-2026.jpg',
                width: 1200,
                height: 630,
                alt: 'Little Caesars New Menu Items 2026'
            }
        ],
        publishedTime: '2026-01-01T00:00:00Z',
        modifiedTime: new Date().toISOString(),
        authors: ['Little Caesars Menu'],
        section: 'Menu Updates'
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Little Caesars New Menu Items 2026',
        description: 'All new pizzas, sides & deals at Little Caesars for 2026!'
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-new-items-2026'
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

// All new items data for 2026
const newItems2026 = [
    {
        id: 1,
        name: 'Stuffed Crunch Crust Pizza',
        category: 'Pizza',
        price: 11.99,
        calories: 320,
        description: 'Crispy, cheese-stuffed crust with a satisfying crunch in every bite. Available in Pepperoni, Cheese, and Custom toppings.',
        releaseDate: 'January 2026',
        status: 'Available Now',
        isLimited: false,
        isHot: true,
        rating: 4.8,
        reviews: 2341,
        highlights: ['Cheese-stuffed crust', 'Extra crispy texture', 'Premium mozzarella']
    },
    {
        id: 2,
        name: 'Pretzel Crust Pizza',
        category: 'Pizza',
        price: 10.99,
        calories: 290,
        description: 'Fan-favorite returns! Soft pretzel-style crust with buttery salt topping. A unique twist on classic pizza.',
        releaseDate: 'February 2026',
        status: 'Available Now',
        isLimited: true,
        isHot: true,
        rating: 4.7,
        reviews: 1876,
        highlights: ['Soft pretzel dough', 'Buttery salt finish', 'Limited time only']
    },
    {
        id: 3,
        name: 'Cheesesteak Crazy Puffs',
        category: 'Sides',
        price: 4.99,
        calories: 105,
        description: 'Philly-inspired puff pastries stuffed with tender steak, peppers, onions, and melted cheese.',
        releaseDate: 'September 2024',
        status: 'Available Now',
        isLimited: false,
        isHot: true,
        rating: 4.8,
        reviews: 1523,
        highlights: ['Real steak pieces', 'Peppers & onions', 'NFL season special']
    },
    {
        id: 4,
        name: 'Ultimate Cheesesteak Pizza',
        category: 'Pizza',
        price: 12.99,
        calories: 340,
        description: 'Large round pizza topped with seasoned steak, green peppers, onions, and cheese sauce drizzle.',
        releaseDate: 'September 2024',
        status: 'Available Now',
        isLimited: true,
        isHot: false,
        rating: 4.6,
        reviews: 987,
        highlights: ['Cheese sauce drizzle', 'Philly-style toppings', 'Large size only']
    },
    {
        id: 5,
        name: '4 Cheese Crazy Puffs',
        category: 'Sides',
        price: 3.99,
        calories: 95,
        description: 'Four delicious cheeses - mozzarella, parmesan, asiago, and muenster - in every puff. Vegetarian-friendly!',
        releaseDate: 'March 2026',
        status: 'Available Now',
        isLimited: false,
        isHot: true,
        rating: 4.9,
        reviews: 2156,
        highlights: ['4 cheese blend', 'Vegetarian', 'Super cheesy']
    },
    {
        id: 6,
        name: 'Bacon Cheese Crazy Puffs',
        category: 'Sides',
        price: 4.49,
        calories: 100,
        description: 'Crispy bacon bits combined with melted cheese in a flaky puff pastry. Perfect for bacon lovers!',
        releaseDate: 'January 2026',
        status: 'Available Now',
        isLimited: false,
        isHot: true,
        rating: 4.9,
        reviews: 1892,
        highlights: ['Real bacon bits', 'Extra cheesy', 'Customer favorite']
    },
    {
        id: 7,
        name: 'Mountain Dew Mango Rush',
        category: 'Drinks',
        price: 2.49,
        calories: 170,
        description: 'Exclusive Little Caesars x Mountain Dew collaboration! Tropical mango flavor with classic Dew taste.',
        releaseDate: 'Summer 2026',
        status: 'Coming Soon',
        isLimited: true,
        isHot: false,
        rating: 0,
        reviews: 0,
        highlights: ['Exclusive collab', 'Mango tropical', 'Limited edition']
    },
    {
        id: 8,
        name: 'Stuffed Crazy Crust Pizza',
        category: 'Pizza',
        price: 11.49,
        calories: 330,
        description: 'The beloved Stuffed Crazy Crust returns with more cheese than ever! Garlic butter brushed crust stuffed with mozzarella.',
        releaseDate: 'December 2024',
        status: 'Available Now',
        isLimited: true,
        isHot: false,
        rating: 4.7,
        reviews: 1654,
        highlights: ['More cheese filling', 'Garlic butter crust', 'Fan favorite return']
    },
    {
        id: 9,
        name: '$9.99 Value Combos',
        category: 'Deals',
        price: 9.99,
        calories: 0,
        description: 'Choose from multiple combo options: Pizza + Crazy Bread, Pizza + Wings, or 2 Medium Pizzas. Best value in 2026!',
        releaseDate: 'January 2026',
        status: 'Available Now',
        isLimited: false,
        isHot: true,
        rating: 4.8,
        reviews: 3421,
        highlights: ['Multiple options', 'Best value', 'Family-sized']
    },
    {
        id: 10,
        name: 'Cookie Dough Brownie with TWIX',
        category: 'Desserts',
        price: 4.89,
        calories: 380,
        description: 'Decadent cookie dough brownie topped with TWIX pieces. The perfect sweet ending to your pizza meal!',
        releaseDate: 'November 2024',
        status: 'Available Now',
        isLimited: false,
        isHot: false,
        rating: 4.5,
        reviews: 876,
        highlights: ['Real TWIX topping', 'Cookie dough center', 'Shareable size']
    }
]

const faqs = [
    {
        question: 'What are the new items at Little Caesars in 2026?',
        answer: 'Little Caesars has introduced several exciting new items in 2026 including: Stuffed Crunch Crust Pizza ($11.99), Pretzel Crust Pizza ($10.99), Cheesesteak Crazy Puffs ($4.99), 4 Cheese Crazy Puffs ($3.99), Bacon Cheese Crazy Puffs ($4.49), Ultimate Cheesesteak Pizza ($12.99), and the new $9.99 Value Combos. They also have an upcoming Mountain Dew Mango Rush exclusive drink.'
    },
    {
        question: 'Is the Pretzel Crust Pizza back at Little Caesars?',
        answer: 'Yes! The fan-favorite Pretzel Crust Pizza has returned to Little Caesars in February 2026. It features a soft pretzel-style crust with buttery salt topping and is priced at $10.99. However, it is a limited-time offering, so get it while you can!'
    },
    {
        question: 'What is the Stuffed Crunch Crust Pizza?',
        answer: 'The Stuffed Crunch Crust Pizza is Little Caesars newest crust innovation for 2026. It features a cheese-stuffed crust with an extra crispy, crunchy texture. Available in Pepperoni, Cheese, or custom toppings for $11.99. Each slice has about 320 calories.'
    },
    {
        question: 'How much are the new Crazy Puffs flavors?',
        answer: 'The new Crazy Puffs flavors are affordably priced: 4 Cheese Crazy Puffs are $3.99 (10 pieces), Bacon Cheese Crazy Puffs are $4.49 (10 pieces), and Cheesesteak Crazy Puffs are $4.99 (10 pieces). All varieties are made fresh to order.'
    },
    {
        question: 'What is the Little Caesars $9.99 Value Menu?',
        answer: 'The $9.99 Value Menu launched in January 2026 and offers amazing combo deals: Pizza + Crazy Bread, Pizza + Wings, or 2 Medium Pizzas - all for just $9.99! This is one of the best values in the fast food pizza industry.'
    },
    {
        question: 'Are all new items available at every location?',
        answer: 'Most new items are available at participating locations nationwide. However, some limited-time items like the Pretzel Crust Pizza and exclusive drinks may have limited availability. We recommend calling your local store or using the Little Caesars app to check availability.'
    },
    {
        question: 'What is the Mountain Dew Mango Rush?',
        answer: 'Mountain Dew Mango Rush is an exclusive Little Caesars x Mountain Dew collaboration drink coming in Summer 2026. It features a tropical mango flavor combined with classic Mountain Dew taste. This will be a limited edition exclusive to Little Caesars!'
    },
    {
        question: 'Which new item has the best reviews?',
        answer: 'Based on customer reviews, the Bacon Cheese Crazy Puffs and 4 Cheese Crazy Puffs both have the highest ratings at 4.9/5 stars. The $9.99 Value Combos are also extremely popular with 4.8/5 stars due to their incredible value.'
    }
]

export default function NewItems2026Page() {
    const availableItems = newItems2026.filter(item => item.status === 'Available Now')
    const comingSoonItems = newItems2026.filter(item => item.status === 'Coming Soon')
    const avgRating = (availableItems.filter(i => i.rating > 0).reduce((sum, i) => sum + i.rating, 0) / availableItems.filter(i => i.rating > 0).length).toFixed(1)
    const totalReviews = newItems2026.reduce((sum, i) => sum + i.reviews, 0)

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
                                "@id": "https://littlecaesarsmenu.us/little-caesars-new-items-2026#article",
                                "headline": "Little Caesars New Menu Items 2026: Complete Guide",
                                "description": "Comprehensive guide to all new Little Caesars menu items for 2026 including pizzas, sides, and deals.",
                                "image": "https://littlecaesarsmenu.us/images/new-items-2026.jpg",
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
                                "datePublished": "2026-01-01",
                                "dateModified": new Date().toISOString().split('T')[0],
                                "mainEntityOfPage": "https://littlecaesarsmenu.us/little-caesars-new-items-2026"
                            },
                            {
                                "@type": "ItemList",
                                "@id": "https://littlecaesarsmenu.us/little-caesars-new-items-2026#itemlist",
                                "name": "Little Caesars New Menu Items 2026",
                                "numberOfItems": newItems2026.length,
                                "itemListElement": newItems2026.map((item, index) => ({
                                    "@type": "ListItem",
                                    "position": index + 1,
                                    "item": {
                                        "@type": "Product",
                                        "name": item.name,
                                        "description": item.description,
                                        "category": item.category,
                                        "offers": {
                                            "@type": "Offer",
                                            "price": item.price,
                                            "priceCurrency": "USD",
                                            "availability": item.status === 'Available Now' ? "https://schema.org/InStock" : "https://schema.org/PreOrder"
                                        },
                                        ...(item.rating > 0 && {
                                            "aggregateRating": {
                                                "@type": "AggregateRating",
                                                "ratingValue": item.rating,
                                                "reviewCount": item.reviews
                                            }
                                        })
                                    }
                                }))
                            },
                            {
                                "@type": "FAQPage",
                                "@id": "https://littlecaesarsmenu.us/little-caesars-new-items-2026#faq",
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
                                        "name": "New Items 2026",
                                        "item": "https://littlecaesarsmenu.us/little-caesars-new-items-2026"
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />

            {/* Hero Section */}
            <section className="relative py-16 md:py-24" style={{ background: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)' }}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                        <span className="animate-pulse text-2xl">🆕</span>
                        <span className="text-white font-bold">Updated December 2026</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                        Little Caesars New Menu Items<br />
                        <span className="text-yellow-300">2026 Complete Guide</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
                        All {newItems2026.length} new pizzas, sides, drinks & deals at Little Caesars for 2026.
                        Prices, calories, and honest reviews!
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                            <div className="text-3xl font-bold text-yellow-300">{newItems2026.length}</div>
                            <div className="text-sm text-white/80">New Items</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                            <div className="text-3xl font-bold text-yellow-300">{availableItems.length}</div>
                            <div className="text-sm text-white/80">Available Now</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                            <div className="text-3xl font-bold text-yellow-300">⭐ {avgRating}</div>
                            <div className="text-sm text-white/80">Avg Rating</div>
                        </div>
                        <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl">
                            <div className="text-3xl font-bold text-yellow-300">{totalReviews.toLocaleString()}</div>
                            <div className="text-sm text-white/80">Reviews</div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/store-locator"
                            className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg"
                        >
                            📍 Find Store Near Me
                        </Link>
                        <Link
                            href="/crazy-puffs"
                            className="bg-white/20 hover:bg-white/30 text-white font-bold px-8 py-4 rounded-xl transition-all backdrop-blur-sm"
                        >
                            🔥 Crazy Puffs Guide
                        </Link>
                    </div>
                </div>
            </section>

            {/* Quick Navigation */}
            <section className="py-6 bg-red-50 border-b border-red-100 sticky top-0 z-40">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-3 text-sm">
                        <span className="font-semibold text-red-800">Jump to:</span>
                        <a href="#pizzas" className="text-red-600 hover:text-red-800 underline">🍕 New Pizzas</a>
                        <span className="text-red-300">|</span>
                        <a href="#sides" className="text-red-600 hover:text-red-800 underline">🥟 New Sides</a>
                        <span className="text-red-300">|</span>
                        <a href="#deals" className="text-red-600 hover:text-red-800 underline">💰 New Deals</a>
                        <span className="text-red-300">|</span>
                        <a href="#coming-soon" className="text-red-600 hover:text-red-800 underline">🔜 Coming Soon</a>
                        <span className="text-red-300">|</span>
                        <a href="#faq" className="text-red-600 hover:text-red-800 underline">❓ FAQ</a>
                    </div>
                </div>
            </section>

            {/* New Pizzas Section */}
            <section id="pizzas" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-5xl mb-4 block">🍕</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            New Pizzas 2026
                        </h2>
                        <p className="text-xl text-gray-600">
                            Exciting new crust options and flavor combinations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {newItems2026.filter(item => item.category === 'Pizza').map((item) => (
                            <div key={item.id} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 shadow-lg border-2 border-red-100 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.isHot && (
                                        <span className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            🔥 HOT
                                        </span>
                                    )}
                                    {item.isLimited && (
                                        <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            ⏰ LIMITED TIME
                                        </span>
                                    )}
                                    <span className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {item.status}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 mb-4">{item.description}</p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.highlights.map((h, i) => (
                                        <span key={i} className="bg-white text-gray-700 text-xs px-3 py-1 rounded-full border">
                                            ✓ {h}
                                        </span>
                                    ))}
                                </div>

                                {item.rating > 0 && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex text-yellow-400">
                                            {'★'.repeat(Math.floor(item.rating))}{'☆'.repeat(5 - Math.floor(item.rating))}
                                        </div>
                                        <span className="text-sm text-gray-600">
                                            {item.rating} ({item.reviews.toLocaleString()} reviews)
                                        </span>
                                    </div>
                                )}

                                <div className="flex justify-between items-center pt-4 border-t border-red-100">
                                    <div>
                                        <span className="text-3xl font-bold text-green-600">${item.price}</span>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-sm text-gray-500">{item.calories} cal/slice</div>
                                        <div className="text-xs text-gray-400">Released: {item.releaseDate}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* New Sides Section */}
            <section id="sides" className="py-16 bg-gradient-to-b from-orange-50 to-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-5xl mb-4 block">🥟</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            New Sides & Snacks 2026
                        </h2>
                        <p className="text-xl text-gray-600">
                            Perfect companions to your pizza - new Crazy Puffs flavors!
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {newItems2026.filter(item => item.category === 'Sides').map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {item.isHot && (
                                        <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                                            🔥 POPULAR
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                                <p className="text-gray-600 text-sm mb-4">{item.description}</p>

                                {item.rating > 0 && (
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex text-yellow-400 text-sm">
                                            {'★'.repeat(Math.floor(item.rating))}
                                        </div>
                                        <span className="text-xs text-gray-600">
                                            {item.rating} ({item.reviews.toLocaleString()})
                                        </span>
                                    </div>
                                )}

                                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                                    <span className="text-2xl font-bold text-green-600">${item.price}</span>
                                    <span className="text-sm text-gray-500">{item.calories} cal/puff</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <Link
                            href="/crazy-puffs"
                            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg"
                        >
                            📖 Read Complete Crazy Puffs Guide
                            <span>→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Deals Section */}
            <section id="deals" className="py-16" style={{ background: 'linear-gradient(135deg, #15803d 0%, #166534 50%, #14532d 100%)' }}>
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <span className="text-5xl mb-4 block">💰</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            New Deals & Value Menu 2026
                        </h2>
                        <p className="text-xl text-white/90">
                            Best bang for your buck - new combo deals!
                        </p>
                    </div>

                    {newItems2026.filter(item => item.category === 'Deals').map((item) => (
                        <div key={item.id} className="bg-white rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="inline-block bg-green-100 text-green-800 font-bold px-4 py-2 rounded-full mb-4">
                                    🎉 BEST VALUE IN 2026
                                </div>
                                <h3 className="text-3xl font-bold text-gray-900 mb-2">{item.name}</h3>
                                <div className="text-6xl font-bold text-green-600 my-4">${item.price}</div>
                                <p className="text-gray-600 text-lg mb-6">{item.description}</p>

                                <div className="flex flex-wrap justify-center gap-3 mb-6">
                                    {item.highlights.map((h, i) => (
                                        <span key={i} className="bg-green-50 text-green-700 font-medium px-4 py-2 rounded-full border border-green-200">
                                            ✓ {h}
                                        </span>
                                    ))}
                                </div>

                                {item.rating > 0 && (
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="flex text-yellow-400 text-xl">
                                            {'★'.repeat(Math.floor(item.rating))}
                                        </div>
                                        <span className="text-gray-600">
                                            {item.rating}/5 ({item.reviews.toLocaleString()} reviews)
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Coming Soon Section */}
            {comingSoonItems.length > 0 && (
                <section id="coming-soon" className="py-16 bg-gradient-to-b from-purple-50 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <span className="text-5xl mb-4 block">🔜</span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                                Coming Soon to Little Caesars
                            </h2>
                            <p className="text-xl text-gray-600">
                                Exciting new items launching later in 2026!
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                            {comingSoonItems.map((item) => (
                                <div key={item.id} className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 shadow-lg border-2 border-purple-200">
                                    <div className="flex items-center gap-2 mb-4">
                                        <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                                            COMING SOON
                                        </span>
                                        <span className="text-sm text-purple-600 font-medium">{item.releaseDate}</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                                    <p className="text-gray-600 mb-4">{item.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.highlights.map((h, i) => (
                                            <span key={i} className="bg-white text-purple-700 text-xs px-3 py-1 rounded-full border border-purple-200">
                                                {h}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-purple-200">
                                        <span className="text-lg font-bold text-purple-600">Expected: ${item.price}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* All Items Comparison Table */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Complete New Items Price List 2026
                        </h2>
                        <p className="text-xl text-gray-600">
                            Quick comparison of all new menu items
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full bg-white rounded-2xl shadow-lg overflow-hidden">
                            <thead className="bg-gradient-to-r from-red-500 to-orange-500 text-white">
                                <tr>
                                    <th className="text-left p-4 font-bold">Item</th>
                                    <th className="text-center p-4 font-bold">Category</th>
                                    <th className="text-center p-4 font-bold">Price</th>
                                    <th className="text-center p-4 font-bold">Calories</th>
                                    <th className="text-center p-4 font-bold">Rating</th>
                                    <th className="text-center p-4 font-bold">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {newItems2026.map((item) => (
                                    <tr key={item.id} className="hover:bg-red-50 transition-colors">
                                        <td className="p-4">
                                            <div className="font-medium text-gray-900">{item.name}</div>
                                            {item.isHot && <span className="text-xs text-red-500">🔥 Popular</span>}
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                                                {item.category}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center font-bold text-green-600">${item.price}</td>
                                        <td className="p-4 text-center text-gray-600">
                                            {item.calories > 0 ? `${item.calories} cal` : '-'}
                                        </td>
                                        <td className="p-4 text-center">
                                            {item.rating > 0 ? (
                                                <span className="text-yellow-500">★ {item.rating}</span>
                                            ) : '-'}
                                        </td>
                                        <td className="p-4 text-center">
                                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${item.status === 'Available Now'
                                                ? 'bg-green-100 text-green-700'
                                                : 'bg-purple-100 text-purple-700'
                                                }`}>
                                                {item.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="py-16 bg-gradient-to-b from-red-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-gray-600">
                            Everything you need to know about new items
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
                            >
                                <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-red-50 transition-colors">
                                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-600 transition-colors pr-4">
                                        {faq.question}
                                    </h3>
                                    <svg className="w-6 h-6 text-red-500 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <section className="py-16 bg-gradient-to-r from-red-600 via-orange-600 to-red-600">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Ready to Try the New Menu? 🍕
                    </h2>
                    <p className="text-xl text-white/90 mb-8">
                        Find a Little Caesars near you and taste all the exciting new items!
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link
                            href="/store-locator"
                            className="bg-yellow-400 hover:bg-yellow-300 text-red-900 font-bold px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg text-lg"
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
                        Last updated: December 2026 | Prices and availability may vary by location
                    </p>
                </div>
            </section>
        </>
    )
}
