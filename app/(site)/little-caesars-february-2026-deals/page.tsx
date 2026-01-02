import { Metadata } from 'next'
import Link from 'next/link'
import { Tag, TrendingUp, DollarSign } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars February 2026 Deals - Latest Specials & Coupons',
    description: 'Little Caesars February 2026 deals and promotions! Get the latest pizza specials, combo deals, and exclusive coupons. Save big on your favorite pizzas this month!',
    keywords: 'little caesars february 2026, february deals, pizza deals 2026, little caesars coupons february',
    openGraph: {
        title: 'Little Caesars February 2026 Deals \u0026 Promotions',
        description: 'Save big with February 2026 pizza deals and special offers!',
        url: 'https://littlecaesarsmenu.us/little-caesars-february-2026-deals',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-february-2026-deals',
    },
}

export default function LittleCaesarsFebruary2026Page() {
    const deals = [
        {
            title: 'Hot-N-Ready Special',
            description: 'Classic Pepperoni or Cheese Pizza',
            price: '$5.99',
            badge: 'Bestseller'
        },
        {
            title: 'ExtraMostBestest Deal',
            description: 'Extra cheese \u0026 extra toppings',
            price: '$6.99',
            badge: 'Popular'
        },
        {
            title: 'Crazy Combo',
            description: 'Pizza + Crazy Bread + Sauce',
            price: '$9.99',
            badge: 'Value'
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-pink-600 to-red-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        💕 February 2026 Deals
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Love is in the air... and so are amazing pizza deals!
                    </p>
                    <div className="flex justify-center gap-4">
                        <Tag className="w-8 h-8" />
                        <TrendingUp className="w-8 h-8" />
                        <DollarSign className="w-8 h-8" />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        🔥 Hot Deals This Month
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {deals.map((deal) => (
                            <div key={deal.title} className="bg-gradient-to-b from-orange-50 to-white border-2 border-orange-200 rounded-lg p-6 shadow-sm">
                                <div className="text-xs font-bold text-white bg-red-600 inline-block px-3 py-1 rounded-full mb-3">
                                    {deal.badge}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                                <p className="text-gray-600 mb-4">{deal.description}</p>
                                <p className="text-3xl font-bold text-orange-600">{deal.price}</p>
                            </div>
                        ))}
                    </div>

                    <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">💝 Valentine's Day Special</h3>
                        <p className="text-lg mb-6">
                            Share the love! Get a Heart-Shaped Pizza or special combo deals for Valentine's Day 2026!
                        </p>
                        <Link
                            href="/store-locator"
                            className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition"
                        >
                            Order Valentine's Special →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        How to Redeem February Deals
                    </h2>

                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <ol className="space-y-4 text-lg">
                            <li><strong>1. Visit Your Local Store:</strong> Deals available at all participating locations</li>
                            <li><strong>2. Order Online:</strong> Use promo codes at checkout</li>
                            <li><strong>3. Call Ahead:</strong> Mention the deal when ordering by phone</li>
                            <li><strong>4. Check the App:</strong> Exclusive app-only deals available</li>
                        </ol>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">🍕 Find Deals Near You!</h2>
                        <p className="text-xl mb-6">
                            Visit your nearest Little Caesars to enjoy February 2026 deals!
                        </p>
                        <Link
                            href="/store-locator"
                            className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                        >
                            Find Your Store →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-center mb-8">More Deals</h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/little-caesars-deals-today" className="bg-white hover:bg-gray-50 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Today's Deals</h3>
                            <p className="text-sm text-gray-600">Current offers</p>
                        </Link>
                        <Link href="/coupons" className="bg-white hover:bg-gray-50 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">All Coupons</h3>
                            <p className="text-sm text-gray-600">Save more</p>
                        </Link>
                        <Link href="/little-caesars-menu" className="bg-white hover:bg-gray-50 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                            <p className="text-sm text-gray-600">View prices</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
