import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars New York Locations - Find NY Pizza Stores',
    description: 'Find Little Caesars pizza locations across New York. 200+ stores in NYC, Buffalo, Rochester, Syracuse, and more. Get hours, directions & phone numbers.',
    keywords: 'little caesars new york, little caesars ny, pizza new york, little caesars nyc, little caesars buffalo',
    openGraph: {
        title: 'Little Caesars New York - 200+ Locations Statewide',
        description: 'Find Little Caesars pizza locations across New York. Get directions, hours, and contact info.',
        url: 'https://littlecaesarsmenu.us/little-caesars-new-york',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-new-york',
    },
}

export default function LittleCaesarsNewYorkPage() {
    const majorCities = [
        'New York City', 'Buffalo', 'Rochester', 'Syracuse',
        'Albany', 'Yonkers', 'New Rochelle', 'Mount Vernon',
        'Schenectady', 'Utica', 'Niagara Falls', 'White Plains',
        'Troy', 'Binghamton', 'Ithaca', 'Long Beach',
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        🍕 Little Caesars New York
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Over 200+ Little Caesars locations across the Empire State
                    </p>
                    <div className="flex justify-center gap-4">
                        <MapPin className="w-8 h-8" />
                        <Clock className="w-8 h-8" />
                        <Phone className="w-8 h-8" />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Find Little Caesars by NY City
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

                    <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8 text-center">
                        <h3 className="text-2xl font-bold mb-4">🗺️ Find Your Nearest Location</h3>
                        <p className="text-lg mb-6">
                            Use our interactive store locator to find Little Caesars in New York
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

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Little Caesars in New York
                    </h2>

                    <div className="bg-white rounded-lg p-8 shadow-sm">
                        <p className="text-lg mb-4">
                            New York is home to over 200 Little Caesars locations throughout the state. From Manhattan to Buffalo, enjoy hot and fresh pizzas!
                        </p>
                        <p className="text-lg mb-4">
                            <strong>NY Favorites:</strong> Hot-N-Ready Cheese, ExtraMostBestest Pepperoni, and Classic Crazy Bread.
                        </p>
                        <p className="text-lg">
                            NYC locations offer pickup and delivery. Many stores feature Pizza Portal for contactless pickup.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/little-caesars-hours" className="bg-orange-50 hover:bg-orange-100 p-6 rounded-lg text-center transition">
                            <h3 className="font-bold text-lg mb-2">Store Hours</h3>
                            <p className="text-sm text-gray-600">NY opening times</p>
                        </Link>
                        <Link href="/little-caesars-menu" className="bg-orange-50 hover:bg-orange-100 p-6 rounded-lg text-center transition">
                            <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                            <p className="text-sm text-gray-600">Prices & items</p>
                        </Link>
                        <Link href="/little-caesars-deals-today" className="bg-orange-50 hover:bg-orange-100 p-6 rounded-lg text-center transition">
                            <h3 className="font-bold text-lg mb-2">NY Deals</h3>
                            <p className="text-sm text-gray-600">Current offers</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
