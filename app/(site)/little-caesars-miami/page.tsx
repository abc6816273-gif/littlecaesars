import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Miami - Locations, Hours & Menu Prices 2026',
    description: 'Find Little Caesars locations in Miami, FL. Get hours, menu prices, delivery options, and special deals. Hot-N-Ready pizzas available across the Magic City!',
    keywords: 'little caesars miami, pizza miami, hot n ready miami fl, pizza delivery miami beach, cheap pizza miami florida, little caesars south beach',
    openGraph: {
        title: 'Little Caesars Miami - Menu, Hours & Locations',
        description: 'Find your nearest Little Caesars in Miami! Hot-N-Ready pizzas, deals, and delivery across the Magic City.',
        url: 'https://littlecaesarsmenu.us/little-caesars-miami',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-miami',
    },
}

export default function LittleCaesarsMiamiPage() {
    const miamiAreas = [
        'Downtown Miami',
        'Miami Beach',
        'South Beach',
        'Brickell',
        'Wynwood',
        'Coral Gables',
        'Coconut Grove',
        'Hialeah',
        'Kendall',
        'Aventura',
        'Homestead',
        'Doral'
    ]

    const miamiDeals = [
        {
            name: 'Beach Day Special',
            price: '$7.99',
            description: 'Hot-N-Ready for your Miami day!'
        },
        {
            name: 'Magic City Party Pack',
            price: '$21.99',
            description: '3 Large pizzas - Miami style'
        },
        {
            name: 'Heat Game Combo',
            price: '$24.99',
            description: '2 Pizzas + Wings - game night ready'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-pink-600 via-orange-500 to-cyan-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars Miami 🍕
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Pizza Pizza! Serving the Magic City
                    </p>
                    <p className="text-lg mb-6">
                        🌴 40+ Locations Across Greater Miami 🌴
                    </p>
                    <Link
                        href="/store-locator"
                        className="inline-block bg-white text-pink-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                    >
                        Find Miami Locations →
                    </Link>
                </div>
            </section>

            {/* Quick Info */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-6 bg-pink-50 rounded-lg">
                            <MapPin className="w-12 h-12 mx-auto text-pink-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">40+ Stores</h3>
                            <p className="text-sm text-gray-600">All over Miami</p>
                        </div>
                        <div className="text-center p-6 bg-pink-50 rounded-lg">
                            <Clock className="w-12 h-12 mx-auto text-pink-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Open Late</h3>
                            <p className="text-sm text-gray-600">Miami night hours</p>
                        </div>
                        <div className="text-center p-6 bg-pink-50 rounded-lg">
                            <Phone className="w-12 h-12 mx-auto text-pink-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Call Ahead</h3>
                            <p className="text-sm text-gray-600">Pre-order service</p>
                        </div>
                        <div className="text-center p-6 bg-pink-50 rounded-lg">
                            <Navigation className="w-12 h-12 mx-auto text-pink-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Beach Delivery</h3>
                            <p className="text-sm text-gray-600">Fast & fresh</p>
                        </div>
                    </div>

                    {/* Miami Areas */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Little Caesars Across Miami
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {miamiAreas.map((area) => (
                                <div key={area} className="bg-white border-2 border-pink-200 rounded-lg p-4 text-center hover:border-pink-400 transition">
                                    <p className="font-semibold text-gray-800">{area}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/store-locator" className="text-pink-600 hover:text-pink-700 font-bold text-lg">
                                Find Your Miami Store →
                            </Link>
                        </div>
                    </div>

                    {/* Miami Deals */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Miami Favorite Deals
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {miamiDeals.map((deal) => (
                                <div key={deal.name} className="bg-gradient-to-b from-pink-50 to-white border-2 border-pink-200 rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                                    <p className="text-3xl font-bold text-pink-600 mb-3">{deal.price}</p>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/coupons" className="text-pink-600 hover:text-pink-700 font-bold text-lg">
                                See All Miami Deals →
                            </Link>
                        </div>
                    </div>

                    {/* Heat Game Day */}
                    <div className="bg-gradient-to-r from-red-600 to-black text-white rounded-lg p-6 mb-12 text-center">
                        <h3 className="text-2xl font-bold mb-3">🏀 Miami Heat Game Day!</h3>
                        <p className="text-lg">
                            Turn up the Heat with Little Caesars pizza!<br />
                            Pre-order 24-48 hours before tip-off for game day pickup.
                        </p>
                    </div>

                    {/* Hours */}
                    <div className="bg-cyan-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Typical Miami Hours
                        </h2>
                        <div className="max-w-md mx-auto">
                            <div className="flex justify-between py-2 border-b">
                                <span className="font-semibold">Monday - Thursday:</span>
                                <span>11:00 AM - 10:00 PM</span>
                            </div>
                            <div className="flex justify-between py-2 border-b">
                                <span className="font-semibold">Friday - Saturday:</span>
                                <span>11:00 AM - 11:00 PM</span>
                            </div>
                            <div className="flex justify-between py-2">
                                <span className="font-semibold">Sunday:</span>
                                <span>12:00 PM - 10:00 PM</span>
                            </div>
                        </div>
                        <p className="text-center mt-4 text-sm text-gray-600">
                            *Perfect for beach trips! Hours vary by Miami location.
                        </p>
                    </div>

                    {/* Related Links */}
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            More Information
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/little-caesars-florida" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">All Florida</h3>
                                <p className="text-sm text-gray-600">Other FL cities</p>
                            </Link>
                            <Link href="/little-caesars-menu" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                                <p className="text-sm text-gray-600">Miami pricing</p>
                            </Link>
                            <Link href="/little-caesars-delivery" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Delivery</h3>
                                <p className="text-sm text-gray-600">Beach delivery</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
