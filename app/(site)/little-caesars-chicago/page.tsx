import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Chicago - Locations, Hours & Menu Prices 2026',
    description: 'Find Little Caesars locations in Chicago, IL. Get hours, menu prices, delivery options, and special deals. Hot-N-Ready pizzas available now in the Windy City!',
    keywords: 'little caesars chicago, little caesars illinois, pizza chicago, hot n ready chicago, pizza delivery chicago, cheap pizza chicago',
    openGraph: {
        title: 'Little Caesars Chicago - Menu, Hours & Locations',
        description: 'Find your nearest Little Caesars in Chicago! Hot-N-Ready pizzas, deals, and delivery options across the Windy City.',
        url: 'https://littlecaesarsmenu.us/little-caesars-chicago',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-chicago',
    },
}

export default function LittleCaesarsChicagoPage() {
    const chicagoAreas = [
        'Downtown Chicago',
        'North Side',
        'South Side',
        'West Side',
        'Loop',
        'Lincoln Park',
        'Wicker Park',
        'Hyde Park',
        'Pilsen',
        'Bronzeville',
        'Evanston',
        'Oak Park'
    ]

    const chicagoDeals = [
        {
            name: 'Hot-N-Ready Pepperoni',
            price: '$7.99',
            description: 'Quick pickup - no waiting!'
        },
        {
            name: 'Deep Dish Special',
            price: '$10.99',
            description: 'Detroit-style deep dish perfection'
        },
        {
            name: 'Family Combo',
            price: '$24.99',
            description: '2 Pizzas + Crazy Bread + Wings'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-800 via-red-600 to-orange-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars Chicago 🍕
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Pizza Pizza! Serving the Windy City
                    </p>
                    <p className="text-lg mb-6">
                        🌆 40+ Locations Across Chicagoland 🌆
                    </p>
                    <Link
                        href="/store-locator"
                        className="inline-block bg-white text-blue-800 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                    >
                        Find Chicago Locations →
                    </Link>
                </div>
            </section>

            {/* Quick Info */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <MapPin className="w-12 h-12 mx-auto text-blue-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">40+ Stores</h3>
                            <p className="text-sm text-gray-600">All over Chicago</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Clock className="w-12 h-12 mx-auto text-blue-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Open Daily</h3>
                            <p className="text-sm text-gray-600">Until 10-11 PM</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Phone className="w-12 h-12 mx-auto text-blue-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Call Ahead</h3>
                            <p className="text-sm text-gray-600">Pre-order pickup</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Navigation className="w-12 h-12 mx-auto text-blue-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Delivery</h3>
                            <p className="text-sm text-gray-600">Fast delivery available</p>
                        </div>
                    </div>

                    {/* Chicago Areas */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Little Caesars Across Chicago
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {chicagoAreas.map((area) => (
                                <div key={area} className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center hover:border-blue-400 transition">
                                    <p className="font-semibold text-gray-800">{area}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/store-locator" className="text-blue-700 hover:text-blue-800 font-bold text-lg">
                                Find Your Nearest Store →
                            </Link>
                        </div>
                    </div>

                    {/* Chicago Special Deals */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Chicago Favorite Deals
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {chicagoDeals.map((deal) => (
                                <div key={deal.name} className="bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                                    <p className="text-3xl font-bold text-blue-700 mb-3">{deal.price}</p>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/coupons" className="text-blue-700 hover:text-blue-800 font-bold text-lg">
                                View All Coupons →
                            </Link>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-orange-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Typical Chicago Hours
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
                            *Hours vary by location. Always call ahead during holidays.
                        </p>
                    </div>

                    {/* Related Pages */}
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            More Information
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/little-caesars-menu" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                                <p className="text-sm text-gray-600">Pizzas, sides & prices</p>
                            </Link>
                            <Link href="/little-caesars-delivery-near-me" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Delivery Near Me</h3>
                                <p className="text-sm text-gray-600">Get it delivered fast</p>
                            </Link>
                            <Link href="/little-caesars-deals-today" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Today's Deals</h3>
                                <p className="text-sm text-gray-600">Best Chicago offers</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
