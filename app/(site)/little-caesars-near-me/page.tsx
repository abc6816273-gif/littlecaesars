import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Search } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Near Me - Find Locations Nearby | Open Now',
    description: 'Find Little Caesars pizza locations near you. Search by city, zip code, or use your current location. Get directions, hours, and contact info for stores nearby.',
    keywords: 'little caesars near me, little caesars locations, pizza near me, little caesars store finder, nearest little caesars',
    openGraph: {
        title: 'Little Caesars Near Me - Find Locations Nearby',
        description: 'Find the nearest Little Caesars pizza location. Get directions, hours, and contact information.',
        url: 'https://littlecaesarsmenu.us/little-caesars-near-me',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-near-me',
    },
}

export default function LittleCaesarsNearMePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        🍕 Find Little Caesars Near You
                    </h1>
                    <p className="text-xl md:text-2xl mb-8">
                        Locate the closest Little Caesars Pizza® location in seconds
                    </p>
                    <div className="flex justify-center gap-4">
                        <MapPin className="w-8 h-8" />
                        <Search className="w-8 h-8" />
                    </div>
                </div>
            </section>

            {/* How to Find Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        How to Find Little Caesars Locations
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="bg-orange-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                <MapPin className="w-12 h-12 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Use Store Locator</h3>
                            <p className="text-gray-600">
                                Enter your zip code or city to find nearby locations
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                <Clock className="w-12 h-12 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Check Hours</h3>
                            <p className="text-gray-600">
                                View opening hours and get real-time availability
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                <Search className="w-12 h-12 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Get Directions</h3>
                            <p className="text-gray-600">
                                Click for turn-by-turn directions via Google Maps
                            </p>
                        </div>
                    </div>

                    {/* Store Locator CTA */}
                    <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">🗺️ Interactive Store Locator</h3>
                        <p className="text-lg mb-6">
                            Use our official store locator to find Little Caesars locations with real-time information
                        </p>
                        <Link
                            href="/store-locator"
                            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition"
                        >
                            Open Store Locator →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Popular Cities Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Popular Cities & Locations
                    </h2>

                    <div className="grid md:grid-cols-4 gap-4">
                        {[
                            'New York, NY', 'Los Angeles, CA', 'Chicago, IL', 'Houston, TX',
                            'Phoenix, AZ', 'Philadelphia, PA', 'San Antonio, TX', 'San Diego, CA',
                            'Dallas, TX', 'San Jose, CA', 'Austin, TX', 'Jacksonville, FL',
                        ].map((city) => (
                            <div key={city} className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition">
                                <Link href="/store-locator" className="text-orange-600 hover:text-orange-700 font-semibold">
                                    {city} →
                                </Link>
                            </div>
                        ))}
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
                            <p className="text-sm text-gray-600">Check opening times</p>
                        </Link>

                        <Link
                            href="/little-caesars-menu"
                            className="bg-orange-50 hover:bg-orange-100 p-6 rounded-lg text-center transition"
                        >
                            <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                            <p className="text-sm text-gray-600">View all items & prices</p>
                        </Link>

                        <Link
                            href="/little-caesars-deals-today"
                            className="bg-orange-50 hover:bg-orange-100 p-6 rounded-lg text-center transition"
                        >
                            <h3 className="font-bold text-lg mb-2">Today's Deals</h3>
                            <p className="text-sm text-gray-600">Latest promotions</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
