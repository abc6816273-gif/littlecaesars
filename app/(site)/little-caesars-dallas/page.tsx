import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Dallas - Locations, Hours & Menu Prices 2026',

    description: 'Find Little Caesars locations in Dallas, TX. Get hours, menu prices, delivery options, and special deals. Hot-N-Ready pizzas available across Big D!',
    keywords: 'little caesars dallas, pizza dallas, hot n ready dallas tx, pizza delivery dallas texas, cheap pizza fort worth, little caesars dfw',
    openGraph: {
        title: 'Little Caesars Dallas - Menu, Hours & Locations',
        description: 'Find your nearest Little Caesars in Dallas! Hot-N-Ready pizzas, deals, and delivery across Big D and DFW.',
        url: 'https://littlecaesarsmenu.us/little-caesars-dallas',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-dallas',
    },
}

export default function LittleCaesarsDallasPage() {
    const dallasAreas = [
        'Downtown Dallas',
        'Uptown',
        'Oak Lawn',
        'Deep Ellum',
        'Fort Worth',
        'Arlington',
        'Plano',
        'Irving',
        'Garland',
        'Mesquite',
        'Richardson',
        'Frisco'
    ]

    const dallasDeals = [
        {
            name: 'Big D Special',
            price: '$7.99',
            description: 'Hot-N-Ready classic - Dallas favorite'
        },
        {
            name: 'Cowboys Game Pack',
            price: '$21.99',
            description: '3 Large pizzas for game day'
        },
        {
            name: 'DFW Family Combo',
            price: '$24.99',
            description: '2 Pizzas + Wings + Crazy Bread'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-700 via-gray-800 to-blue-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars Dallas 🍕
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Pizza Pizza! Serving Big D & DFW
                    </p>
                    <p className="text-lg mb-6">
                        ⭐ 70+ Locations Across Dallas-Fort Worth ⭐
                    </p>
                    <Link
                        href="/store-locator"
                        className="inline-block bg-white text-blue-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                    >
                        Find Dallas Locations →
                    </Link>
                </div>
            </section>

            {/* Quick Info */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <MapPin className="w-12 h-12 mx-auto text-blue-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">70+ Stores</h3>
                            <p className="text-sm text-gray-600">Across DFW</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Clock className="w-12 h-12 mx-auto text-blue-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Open Late</h3>
                            <p className="text-sm text-gray-600">Most until 11 PM</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Phone className="w-12 h-12 mx-auto text-blue-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Pre-Order</h3>
                            <p className="text-sm text-gray-600">Call ahead service</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Navigation className="w-12 h-12 mx-auto text-blue-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">DFW Delivery</h3>
                            <p className="text-sm text-gray-600">Fast & fresh</p>
                        </div>
                    </div>

                    {/* Dallas Areas */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Little Caesars Across Dallas-Fort Worth
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {dallasAreas.map((area) => (
                                <div key={area} className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center hover:border-blue-400 transition">
                                    <p className="font-semibold text-gray-800">{area}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/store-locator" className="text-blue-700 hover:text-blue-800 font-bold text-lg">
                                Find Your DFW Store →
                            </Link>
                        </div>
                    </div>

                    {/* Dallas Deals */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Dallas Favorite Deals
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {dallasDeals.map((deal) => (
                                <div key={deal.name} className="bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                                    <p className="text-3xl font-bold text-blue-700 mb-3">{deal.price}</p>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/coupons" className="text-blue-700 hover:text-blue-800 font-bold text-lg">
                                View All Dallas Deals →
                            </Link>
                        </div>
                    </div>

                    {/* Cowboys Special */}
                    <div className="bg-gradient-to-r from-blue-700 to-gray-800 text-white rounded-lg p-6 mb-12 text-center">
                        <h3 className="text-2xl font-bold mb-3">🏈 How 'Bout Them Cowboys! Game Day Special</h3>
                        <p className="text-lg">
                            Dallas Cowboys game day? Order your pizza early!<br />
                            Pre-order 24-48 hours before kickoff for guaranteed delivery.
                        </p>
                    </div>

                    {/* Hours */}
                    <div className="bg-gray-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Typical Dallas Hours
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
                            *Hours vary by DFW location. Call ahead to confirm.
                        </p>
                    </div>

                    {/* Related Links */}
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            More Information
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/little-caesars-texas" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">All Texas</h3>
                                <p className="text-sm text-gray-600">Other TX cities</p>
                            </Link>
                            <Link href="/little-caesars-menu" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                                <p className="text-sm text-gray-600">DFW pricing</p>
                            </Link>
                            <Link href="/little-caesars-deals-today" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Today's Deals</h3>
                                <p className="text-sm text-gray-600">Best Dallas offers</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
