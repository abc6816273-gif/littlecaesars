import { Metadata } from 'next'
import Link from 'next/link'
import { Trophy, Pizza, Users } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Super Bowl LX 2026 Deals - Game Day Pizza Specials (Feb 9)',
    description: 'Little Caesars Super Bowl LX 2026 deals! Get the best pizza deals for your game day party Feb 9, 2026. Party packs, coupons, combo deals, and catering. Pre-order now!',
    keywords: 'little caesars super bowl 2026, super bowl LX pizza deals, game day pizza, little caesars party pack, february 9 2026, super bowl pizza coupons, game day catering',
    openGraph: {
        title: 'Little Caesars Super Bowl LX 2026 - Game Day Deals (Feb 9)',
        description: 'Score big with Super Bowl pizza deals and party packs! Pre-order for Feb 9, 2026!',
        url: 'https://littlecaesarsmenu.us/little-caesars-super-bowl-2026',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-super-bowl-2026',
    },
}

export default function LittleCaesarsSuperBowl2026Page() {
    const gameDayDeals = [
        {
            title: '3 Pizza Party Pack',
            description: '3 Large Pizzas (any variety)',
            price: '$21.99',
            serves: '10-15 people'
        },
        {
            title: 'Family Combo',
            description: '2 Pizzas + Crazy Bread + Wings',
            price: '$24.99',
            serves: '6-8 people'
        },
        {
            title: 'Ultimate Party Pack',
            description: '5 Pizzas + 3 Crazy Breads + 2 Wings',
            price: '$49.99',
            serves: '20+ people'
        },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* URGENT COUNTDOWN BANNER */}
            <div className="bg-red-600 text-white py-4 text-center font-bold">
                <div className="container mx-auto px-4">
                    <p className="text-lg md:text-xl">
                        🏈 SUPER BOWL LX IN 30 DAYS! Pre-Order Your Super Pizza Party Pack Now! 🍕
                    </p>
                    <p className="text-sm md:text-base mt-1">
                        ⚠️ February 9 is ONE MONTH AWAY - Reserve your order 24-48 hours ahead!
                    </p>
                </div>
            </div>

            <section className="bg-gradient-to-r from-blue-700 via-purple-700 to-red-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        🏈 Super Bowl LX 2026 Deals
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Score Big with Game Day Pizza Specials!
                    </p>
                    <p className="text-lg mb-6">
                        Super Bowl LX • February 9, 2026
                    </p>
                    <div className="flex justify-center gap-4">
                        <Trophy className="w-8 h-8" />
                        <Pizza className="w-8 h-8" />
                        <Users className="w-8 h-8" />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        🏆 Game Day Party Packs
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {gameDayDeals.map((deal) => (
                            <div key={deal.title} className="bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition">
                                <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                                <p className="text-gray-600 mb-3">{deal.description}</p>
                                <p className="text-3xl font-bold text-orange-600 mb-2">{deal.price}</p>
                                <p className="text-sm text-gray-500">Serves {deal.serves}</p>
                            </div>
                        ))}
                    </div>

                    {/* COUPON CODES SECTION */}
                    <div className="bg-little-caesars-orange rounded-lg p-8 text-white mb-12">
                        <h3 className="text-3xl font-bold mb-6 text-center">🎟️ Super Bowl Coupon Codes</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white text-gray-900 rounded-lg p-4">
                                <p className="font-bold text-lg mb-2">SUPERBOWL2026</p>
                                <p className="text-sm">Special Super Bowl Party Pack Deal</p>
                            </div>
                            <div className="bg-white text-gray-900 rounded-lg p-4">
                                <p className="font-bold text-lg mb-2">PIZZAPIZZA</p>
                                <p className="text-sm">Two 1-Topping Pizzas $4.99 Each</p>
                            </div>
                            <div className="bg-white text-gray-900 rounded-lg p-4">
                                <p className="font-bold text-lg mb-2">FREEBREAD26</p>
                                <p className="text-sm">FREE Crazy Bread with $4.99+ Purchase</p>
                            </div>
                            <div className="bg-white text-gray-900 rounded-lg p-4">
                                <p className="font-bold text-lg mb-2">FIVEOFFTHIRTY</p>
                                <p className="text-sm">$5 Off Orders of $30 or More</p>
                            </div>
                        </div>
                        <p className="text-center mt-4 text-sm">
                            ✅ All codes verified for January 2026 | <Link href="/coupons" className="underline font-bold">See All Coupons →</Link>
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">🏈 Super Bowl Catering Available!</h3>
                        <p className="text-lg mb-6">
                            Hosting a big party? Order our catering packages for 30+ guests!
                        </p>
                        <Link
                            href="/store-locator"
                            className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                        >
                            Find Store & Pre-Order →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Why Choose Little Caesars for Super Bowl?
                    </h2>

                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <ul className="space-y-4 text-lg">
                            <li>✅ <strong>No Wait Time:</strong> Hot-N-Ready® pizzas available instantly</li>
                            <li>✅ <strong>Best Value:</strong> Feed more people for less money</li>
                            <li>✅ <strong>Pizza Portal:</strong> Contactless pickup available</li>
                            <li>✅ <strong>Party Packs:</strong> Deals designed for large groups</li>
                            <li>✅ <strong>Pre-Order:</strong> Call ahead to guarantee your order</li>
                            <li>✅ <strong>Delivery Available:</strong> Use DoorDash or Uber Eats</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        🎯 How to Order for Super Bowl Sunday
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-orange-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-3">Pre-Order (Recommended)</h3>
                            <p className="mb-4">Call your local store 24-48 hours before Super Bowl Sunday to reserve your party pack.</p>
                            <Link href="/store-locator" className="text-orange-600 hover:text-orange-700 font-semibold">
                                Find Your Store →
                            </Link>
                        </div>

                        <div className="bg-orange-50 rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-3">Order Online</h3>
                            <p className="mb-4">Use the Little Caesars app or delivery platforms for convenient ordering on game day.</p>
                            <Link href="/little-caesars-online-ordering" className="text-orange-600 hover:text-orange-700 font-semibold">
                                Order Online →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-blue-600 text-white rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">🏈 Find Super Bowl Deals Near You!</h2>
                        <p className="text-xl mb-6">
                            Visit your nearest Little Caesars for game day specials!
                        </p>
                        <Link
                            href="/store-locator"
                            className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                        >
                            Find Your Store →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-center mb-8">More Game Day Options</h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/little-caesars-wings" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Caesar Wings</h3>
                            <p className="text-sm text-gray-600">Perfect for parties</p>
                        </Link>
                        <Link href="/little-caesars-crazy-bread" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Crazy Bread</h3>
                            <p className="text-sm text-gray-600">Great side dish</p>
                        </Link>
                        <Link href="/little-caesars-deals-today" className="bg-gray-50 hover:bg-gray-100 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">All Deals</h3>
                            <p className="text-sm text-gray-600">Save more</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
