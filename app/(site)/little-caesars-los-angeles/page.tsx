import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Los Angeles - Locations, Hours & Menu Prices 2026',
    description: 'Find Little Caesars locations in Los Angeles, CA. Get hours, menu prices, delivery options, and special deals. Hot-N-Ready pizzas available now!',
    keywords: 'little caesars los angeles, little caesars LA, pizza los angeles, hot n ready los angeles, little caesars california, pizza delivery LA',
    openGraph: {
        title: 'Little Caesars Los Angeles - Menu, Hours & Locations',
        description: 'Find your nearest Little Caesars in Los Angeles! Hot-N-Ready pizzas, deals, and delivery options.',
        url: 'https://littlecaesarsmenu.us/little-caesars-los-angeles',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-los-angeles',
    },
}

export default function LittleCaesarsLosAngelesPage() {
    const losAngelesAreas = [
        'Downtown LA',
        'Hollywood',
        'Santa Monica',
        'Venice Beach',
        'Pasadena',
        'Glendale',
        'Burbank',
        'Long Beach',
        'Inglewood',
        'Compton',
        'Torrance',
        'El Segundo'
    ]

    const popularDeals = [
        {
            name: 'Hot-N-Ready Pepperoni',
            price: '$7.99',
            description: 'Classic pepperoni pizza ready when you are'
        },
        {
            name: '3 Pizza Party Pack',
            price: '$21.99',
            description: '3 Large pizzas - perfect for LA gatherings'
        },
        {
            name: 'ExtraMostBestest',
            price: '$9.99',
            description: 'Extra cheese and pepperoni'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-little-caesars-orange to-red-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars Los Angeles 🍕
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Pizza Pizza! Find Your Nearest Location in LA
                    </p>
                    <p className="text-lg mb-6">
                        🌴 Serving Greater Los Angeles County 🌴
                    </p>
                    <Link
                        href="/store-locator"
                        className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                    >
                        Find Stores Near Me →
                    </Link>
                </div>
            </section>

            {/* Quick Info */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <MapPin className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">50+ Locations</h3>
                            <p className="text-sm text-gray-600">Across Greater LA</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Clock className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Open Late</h3>
                            <p className="text-sm text-gray-600">Most until 10-11 PM</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Phone className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Call Ahead</h3>
                            <p className="text-sm text-gray-600">Pre-order available</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Navigation className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Delivery</h3>
                            <p className="text-sm text-gray-600">DoorDash & Uber Eats</p>
                        </div>
                    </div>

                    {/* LA Areas */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Little Caesars Locations Across Los Angeles
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {losAngelesAreas.map((area) => (
                                <div key={area} className="bg-white border-2 border-orange-200 rounded-lg p-4 text-center hover:border-orange-400 transition">
                                    <p className="font-semibold text-gray-800">{area}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/store-locator" className="text-orange-600 hover:text-orange-700 font-bold text-lg">
                                View All LA Locations →
                            </Link>
                        </div>
                    </div>

                    {/* Popular Deals */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Popular LA Deals
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {popularDeals.map((deal) => (
                                <div key={deal.name} className="bg-gradient-to-b from-orange-50 to-white border-2 border-orange-200 rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                                    <p className="text-3xl font-bold text-orange-600 mb-3">{deal.price}</p>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/coupons" className="text-orange-600 hover:text-orange-700 font-bold text-lg">
                                See All Coupons & Deals →
                            </Link>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-blue-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Typical Los Angeles Hours
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
                            *Hours may vary by location. Call ahead to confirm.
                        </p>
                    </div>

                    {/* Related Links */}
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            More Information
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/little-caesars-menu" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">View Menu</h3>
                                <p className="text-sm text-gray-600">Full menu & prices</p>
                            </Link>
                            <Link href="/little-caesars-delivery" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Delivery Options</h3>
                                <p className="text-sm text-gray-600">Get pizza delivered</p>
                            </Link>
                            <Link href="/little-caesars-california" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">All California</h3>
                                <p className="text-sm text-gray-600">Other CA cities</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
