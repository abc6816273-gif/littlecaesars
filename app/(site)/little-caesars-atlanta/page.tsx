import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Atlanta - Locations, Hours & Menu Prices 2026',
    description: 'Find Little Caesars locations in Atlanta, GA. Get hours, menu prices, delivery options, and special deals. Hot-N-Ready pizzas available across the ATL!',
    keywords: 'little caesars atlanta, pizza atlanta, hot n ready atlanta ga, pizza delivery atl, cheap pizza atlanta georgia',
    openGraph: {
        title: 'Little Caesars Atlanta - Menu, Hours & Locations',
        description: 'Find your nearest Little Caesars in Atlanta! Hot-N-Ready pizzas, deals, and delivery across the ATL.',
        url: 'https://littlecaesarsmenu.us/little-caesars-atlanta',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-atlanta',
    },
}

export default function LittleCaesarsAtlantaPage() {
    const atlantaAreas = [
        'Downtown Atlanta',
        'Midtown',
        'Buckhead',
        'Decatur',
        'Sandy Springs',
        'Marietta',
        'Roswell',
        'Alpharetta',
        'East Point',
        'College Park',
        'Johns Creek',
        'Duluth'
    ]

    const atlantaDeals = [
        {
            name: 'ATL Special',
            price: '$7.99',
            description: 'Hot-N-Ready classic - Atlanta favorite'
        },
        {
            name: 'Peach State Pack',
            price: '$21.99',
            description: '3 Large pizzas for your ATL party'
        },
        {
            name: 'Falcons Game Day',
            price: '$24.99',
            description: '2 Pizzas + Wings - Rise Up!'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-red-700 via-black to-gray-800 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars Atlanta 🍕
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Pizza Pizza! Serving the ATL
                    </p>
                    <p className="text-lg mb-6">
                        🍑 45+ Locations Across Metro Atlanta 🍑
                    </p>
                    <Link
                        href="/store-locator"
                        className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                    >
                        Find Atlanta Locations →
                    </Link>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-6 bg-red-50 rounded-lg">
                            <MapPin className="w-12 h-12 mx-auto text-red-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">45+ Stores</h3>
                            <p className="text-sm text-gray-600">Metro Atlanta</p>
                        </div>
                        <div className="text-center p-6 bg-red-50 rounded-lg">
                            <Clock className="w-12 h-12 mx-auto text-red-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Open Late</h3>
                            <p className="text-sm text-gray-600">Until 10-11 PM</p>
                        </div>
                        <div className="text-center p-6 bg-red-50 rounded-lg">
                            <Phone className="w-12 h-12 mx-auto text-red-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Call Ahead</h3>
                            <p className="text-sm text-gray-600">Pre-order ready</p>
                        </div>
                        <div className="text-center p-6 bg-red-50 rounded-lg">
                            <Navigation className="w-12 h-12 mx-auto text-red-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">ATL Delivery</h3>
                            <p className="text-sm text-gray-600">Fast delivery</p>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Little Caesars Across Atlanta
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {atlantaAreas.map((area) => (
                                <div key={area} className="bg-white border-2 border-red-200 rounded-lg p-4 text-center hover:border-red-400 transition">
                                    <p className="font-semibold text-gray-800">{area}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/store-locator" className="text-red-700 hover:text-red-800 font-bold text-lg">
                                Find Your ATL Store →
                            </Link>
                        </div>
                    </div>

                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Atlanta Favorite Deals
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {atlantaDeals.map((deal) => (
                                <div key={deal.name} className="bg-gradient-to-b from-red-50 to-white border-2 border-red-200 rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                                    <p className="text-3xl font-bold text-red-700 mb-3">{deal.price}</p>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/coupons" className="text-red-700 hover:text-red-800 font-bold text-lg">
                                View All ATL Deals →
                            </Link>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-700 to-black text-white rounded-lg p-6 mb-12 text-center">
                        <h3 className="text-2xl font-bold mb-3">🏈 Rise Up! Falcons Game Day</h3>
                        <p className="text-lg">
                            Atlanta Falcons game day? Order early!<br />
                            Pre-order 24-48 hours before kickoff.
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Typical Atlanta Hours
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
                            *Hours vary by Atlanta location.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            More Information
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/little-caesars-menu" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                                <p className="text-sm text-gray-600">ATL pricing</p>
                            </Link>
                            <Link href="/little-caesars-deals-today" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Today's Deals</h3>
                                <p className="text-sm text-gray-600">Best Atlanta offers</p>
                            </Link>
                            <Link href="/little-caesars-delivery-near-me" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Delivery</h3>
                                <p className="text-sm text-gray-600">Get it delivered</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
