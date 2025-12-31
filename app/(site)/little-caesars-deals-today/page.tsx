import { Metadata } from 'next'
import Link from 'next/link'
import { Tag, Clock, TrendingDown } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Deals Today - Current Offers & Promotions 2025',
    description: 'Get today's hottest Little Caesars deals! $5 Hot- N - Ready pizzas, ExtraMostBestest combos, family deals, and exclusive app offers.Updated daily.',
keywords: 'little caesars deals today, hot n ready deals, pizza deals, little caesars specials, daily offers',
    openGraph: {
    title: 'Little Caesars Deals Today - Latest Offers & Promotions',
        description: 'Check out today's best Little Caesars deals.Hot - N - Ready pizzas, combos, and exclusive offers updated daily.',
    url: 'https://littlecaesarsmenu.us/little-caesars-deals-today',
        type: 'website',
  },
alternates: {
    canonical: 'https://littlecaesarsmenu.us/little-caesars-deals-today',
  },
}

const deals = [
    {
        title: '$5 Hot-N-Ready Classic',
        description: 'Large pepperoni or cheese pizza, ready when you are',
        price: '$5.00',
        valid: 'Daily',
        badge: 'BEST VALUE',
        color: 'orange',
    },
    {
        title: '$6 ExtraMostBestest',
        description: 'Extra cheese and extra pepperoni on a large pizza',
        price: '$6.00',
        valid: 'Daily',
        badge: 'POPULAR',
        color: 'purple',
    },
    {
        title: '$10 Crazy Combo',
        description: 'Hot-N-Ready pizza + Crazy Bread + dipping sauce',
        price: '$10.00',
        valid: 'Limited Time',
        badge: 'COMBO DEAL',
        color: 'blue',
    },
    {
        title: '$13 3 Meat Treat',
        description: 'Pepperoni, sausage, and bacon on a large pizza',
        price: '$13.00',
        valid: 'Daily',
        badge: 'MEAT LOVERS',
        color: 'red',
    },
    {
        title: 'Lunch Combo $5.55',
        description: '4-slice Deep! Deep! Dish + 20oz drink',
        price: '$5.55',
        valid: '11 AM - 2 PM',
        badge: 'LUNCH SPECIAL',
        color: 'green',
    },
    {
        title: 'Family Deal $25',
        description: '2 ExtraMostBestest pizzas + Crazy Bread',
        price: '$25.00',
        valid: 'Daily',
        badge: 'FAMILY SIZE',
        color: 'indigo',
    },
]

export default function LittleCaesarsDealsPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <Tag className="w-16 h-16 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        🔥 Today's Hottest Deals!
                    </h1>
                    <p className="text-xl md:text-2xl mb-2">
                        Little Caesars Special Offers
                    </p>
                    <p className="text-lg opacity-90">
                        <Clock className="inline w-5 h-5 mr-2" />
                        Updated Daily - Valid {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </div>
            </section>

            {/* Current Deals Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        🍕 Current Promotions
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {deals.map((deal, idx) => (
                            <div key={idx} className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition">
                                <div className={`bg-${deal.color}-500 text-white px-4 py-2 text-center font-bold text-sm`}>
                                    {deal.badge}
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2">{deal.title}</h3>
                                    <p className="text-gray-600 mb-4 min-h-[48px]">{deal.description}</p>

                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-3xl font-bold text-orange-600">{deal.price}</span>
                                        <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                                            {deal.valid}
                                        </span>
                                    </div>

                                    <Link
                                        href="/store-locator"
                                        className="block text-center bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-4 rounded transition"
                                    >
                                        Find Store →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* App Exclusive Deals */}
            <section className="py-12 bg-orange-50">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        📱 App-Only Exclusive Offers
                    </h2>

                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="text-center mb-6">
                            <div className="bg-orange-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                <Tag className="w-12 h-12 text-orange-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">Get Extra Savings!</h3>
                            <p className="text-lg text-gray-600">
                                Download the Little Caesars app for exclusive mobile-only deals
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="bg-orange-50 p-4 rounded text-center">
                                <p className="font-bold text-lg">Free Crazy Bread</p>
                                <p className="text-sm text-gray-600">First app order</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded text-center">
                                <p className="font-bold text-lg">$2 Off</p>
                                <p className="text-sm text-gray-600">Orders over $15</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded text-center">
                                <p className="font-bold text-lg">Early Access</p>
                                <p className="text-sm text-gray-600">New deals first</p>
                            </div>
                        </div>

                        <div className="text-center">
                            <Link
                                href="/little-caesars-app"
                                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition"
                            >
                                Download App Now →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* How to Save More */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        💰 How to Save More
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-3">✉️ Email Sign-Up</h3>
                            <p className="text-gray-700 mb-3">
                                Get exclusive coupons and early access to new deals delivered to your inbox
                            </p>
                            <p className="text-sm text-blue-600 font-semibold">+ Free pizza on signup</p>
                        </div>

                        <div className="bg-purple-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-3">🎁 Rewards Program</h3>
                            <p className="text-gray-700 mb-3">
                                Earn points on every purchase and redeem for free pizzas and sides
                            </p>
                            <Link href="/little-caesars-rewards-program" className="text-sm text-purple-600 font-semibold hover:underline">
                                Learn more →
                            </Link>
                        </div>

                        <div className="bg-green-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-3">🕐 Lunch Hours</h3>
                            <p className="text-gray-700 mb-3">
                                Special lunch combos available 11 AM - 2 PM weekdays at participating locations
                            </p>
                            <p className="text-sm text-green-600 font-semibold">Starting at $5.55</p>
                        </div>

                        <div className="bg-orange-50 p-6 rounded-lg">
                            <h3 className="text-xl font-bold mb-3">📅 Weekly Specials</h3>
                            <p className="text-gray-700 mb-3">
                                Check back every Monday for new weekly deals and limited-time offers
                            </p>
                            <p className="text-sm text-orange-600 font-semibold">New deals weekly!</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Popular Combos */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold mb-8">
                        🌟 Most Popular Value Combos
                    </h2>

                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="text-4xl mb-2">🍕</div>
                            <h4 className="font-bold mb-2">$5 Classic</h4>
                            <p className="text-2xl text-orange-600 font-bold">$5.00</p>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow border-4 border-orange-400">
                            <div className="text-4xl mb-2">🍕🍞</div>
                            <h4 className="font-bold mb-2">$10 Crazy Combo</h4>
                            <p className="text-2xl text-orange-600 font-bold">$10.00</p>
                            <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full">BEST DEAL</span>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="text-4xl mb-2">🍕🍕</div>
                            <h4 className="font-bold mb-2">$25 Family Pack</h4>
                            <p className="text-2xl text-orange-600 font-bold">$25.00</p>
                        </div>
                    </div>

                    <Link
                        href="/little-caesars-menu"
                        className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg transition"
                    >
                        View Full Menu →
                    </Link>
                </div>
            </section>
        </div>
    )
}
