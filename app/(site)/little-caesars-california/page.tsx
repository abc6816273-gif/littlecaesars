import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars California Locations - Find CA Pizza Stores',
    description: 'Find Little Caesars pizza locations across California. Over 500+ stores in Los Angeles, San Diego, San Francisco, Sacramento, and more. Get hours, directions & phone numbers.',
    keywords: 'little caesars california, little caesars ca, pizza california, little caesars los angeles, little caesars san diego',
    openGraph: {
        title: 'Little Caesars California - 500+ Locations Statewide',
        description: 'Find Little Caesars pizza locations across California. Get directions, hours, and contact info.',
        url: 'https://littlecaesarsmenu.us/little-caesars-california',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-california',
    },
}

export default function LittleCaesarsCaliforniaPage() {
    const majorCities = [
        'Los Angeles', 'San Diego', 'San Jose', 'San Francisco',
        'Fresno', 'Sacramento', 'Long Beach', 'Oakland',
        'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside',
        'Stockton', 'Irvine', 'Chula Vista', 'Fremont',
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        🍕 Little Caesars California
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Over 500+ Little Caesars locations across the Golden State
                    </p>
                    <div className="flex justify-center gap-4">
                        <MapPin className="w-8 h-8" />
                        <Clock className="w-8 h-8" />
                        <Phone className="w-8 h-8" />
                    </div>
                </div>
            </section>

            {/* Major Cities Grid */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Find Little Caesars by California City
                    </h2>

                    <div className="grid md:grid-cols-4 gap-4 mb-12">
                        {majorCities.map((city) => (
                            <div key={city} className="bg-orange-50 p-4 rounded-lg hover:bg-orange-100 transition">
                                <h3 className="font-bold text-lg mb-2">{city}</h3>
                                <Link
                                    href="/store-locator"
                                    className="text-orange-600 hover:text-orange-700 text-sm"
                                >
                                    View Locations →
                                </Link>
                            </div>
                        ))}
                    </div>

                    {/* Store Locator CTA */}
                    <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">🗺️ Find Your Nearest Location</h3>
                        <p className="text-lg mb-6">
                            Use our interactive store locator to find Little Caesars in California
                        </p>
                        <Link
                            href="/store-locator"
                            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition"
                        >
                            Search by ZIP Code →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Little Caesars in California
                    </h2>

                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <p className="text-lg mb-4">
                            California is home to over 500 Little Caesars locations, making it one of the largest markets for the pizza chain. From San Diego to Sacramento, you can find Hot-N-Ready pizzas available for pickup.
                        </p>
                        <p className="text-lg mb-4">
                            <strong>Popular Menu Items in CA:</strong> Classic Pepperoni Pizza, ExtraMostBestest, Crazy Bread, and Caesar Wings.
                        </p>
                        <p className="text-lg">
                            Most California locations offer Pizza Portal pickup, online ordering, and delivery through third-party apps.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <Link
                            href="/little-caesars-hours"
                            className="bg-orange-50 hover:bg-orange-100 p-6 rounded-lg text-center transition"
                        >
                            <h3 className="font-bold text-lg mb-2">Store Hours</h3>
                            <p className="text-sm text-gray-600">CA opening times</p>
                        </Link>

                        <Link
                            href="/little-caesars-menu"
                            className="bg-orange-50 hover:bg-orange-100 p-6 rounded-lg text-center transition"
                        >
                            <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                            <p className="text-sm text-gray-600">Prices & items</p>
                        </Link>

                        <Link
                            href="/little-caesars-deals-today"
                            className="bg-orange-50 hover:bg-orange-100 p-6 rounded-lg text-center transition"
                        >
                            <h3 className="font-bold text-lg mb-2">CA Deals</h3>
                            <p className="text-sm text-gray-600">Current offers</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
