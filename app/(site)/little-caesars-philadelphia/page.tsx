import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Philadelphia - Locations, Hours & Menu Prices 2026',
    description: 'Find Little Caesars locations in Philadelphia, PA. Get hours, menu prices, delivery options, and special deals. Hot-N-Ready pizzas available across Philly!',
    keywords: 'little caesars philadelphia, little caesars philly, pizza philadelphia, hot n ready philly, pizza delivery philadelphia pa, cheap pizza philly',
    openGraph: {
        title: 'Little Caesars Philadelphia - Menu, Hours & Locations',
        description: 'Find your nearest Little Caesars in Philadelphia! Hot-N-Ready pizzas, deals, and delivery options across the City of Brotherly Love.',
        url: 'https://littlecaesarsmenu.us/little-caesars-philadelphia',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-philadelphia',
    },
}

export default function LittleCaesarsPhiladelphiaPage() {
    const phillyAreas = [
        'Center City',
        'South Philly',
        'North Philly',
        'West Philly',
        'Northeast Philly',
        'University City',
        'Fishtown',
        'Kensington',
        'Germantown',
        'Manayunk',
        'Chestnut Hill',
        'Roxborough'
    ]

    const phillyDeals = [
        {
            name: 'Hot-N-Ready Classic',
            price: '$7.99',
            description: 'Philly favorite - ready now!'
        },
        {
            name: 'Philly Party Pack',
            price: '$21.99',
            description: '3 Large pizzas for game day'
        },
        {
            name: 'Family Combo',
            price: '$24.99',
            description: '2 Pizzas + Wings + Crazy Bread'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-800 via-red-600 to-green-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars Philadelphia 🍕
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Pizza Pizza! Serving the City of Brotherly Love
                    </p>
                    <p className="text-lg mb-6">
                        🔔 45+ Locations Across Greater Philadelphia 🔔
                    </p>
                    <Link
                        href="/store-locator"
                        className="inline-block bg-white text-blue-800 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                    >
                        Find Philly Locations →
                    </Link>
                </div>
            </section>

            {/* Quick Info */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <MapPin className="w-12 h-12 mx-auto text-blue-800 mb-3" />
                            <h3 className="font-bold text-lg mb-2">45+ Stores</h3>
                            <p className="text-sm text-gray-600">All over Philly</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Clock className="w-12 h-12 mx-auto text-blue-800 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Open Late</h3>
                            <p className="text-sm text-gray-600">Until 10-11 PM</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Phone className="w-12 h-12 mx-auto text-blue-800 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Call Ahead</h3>
                            <p className="text-sm text-gray-600">Pre-order pickup</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Navigation className="w-12 h-12 mx-auto text-blue-800 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Delivery</h3>
                            <p className="text-sm text-gray-600">Fast Philly delivery</p>
                        </div>
                    </div>

                    {/* Philly Areas */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Little Caesars Across Philadelphia
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {phillyAreas.map((area) => (
                                <div key={area} className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center hover:border-blue-400 transition">
                                    <p className="font-semibold text-gray-800">{area}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/store-locator" className="text-blue-800 hover:text-blue-900 font-bold text-lg">
                                Find Your Philly Store →
                            </Link>
                        </div>
                    </div>

                    {/* Philly Deals */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Philadelphia Favorite Deals
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {phillyDeals.map((deal) => (
                                <div key={deal.name} className="bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                                    <p className="text-3xl font-bold text-blue-800 mb-3">{deal.price}</p>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/coupons" className="text-blue-800 hover:text-blue-900 font-bold text-lg">
                                See All Philly Coupons →
                            </Link>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-green-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Typical Philadelphia Hours
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
                            *Hours vary by Philly location. Call your store to confirm.
                        </p>
                    </div>

                    {/* Eagles Game Day Note */}
                    <div className="bg-gradient-to-r from-green-600 to-blue-800 text-white rounded-lg p-6 mb-12 text-center">
                        <h3 className="text-2xl font-bold mb-3">🦅 Eagles Game Day Special!</h3>
                        <p className="text-lg">
                            Order ahead for Eagles games - our busiest days!<br />
                            Pre-order 24-48 hours in advance for guaranteed pickup.
                        </p>
                    </div>

                    {/* Related Links */}
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            More Information
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/little-caesars-menu" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                                <p className="text-sm text-gray-600">Philly menu & prices</p>
                            </Link>
                            <Link href="/little-caesars-delivery-near-me" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Delivery Near Me</h3>
                                <p className="text-sm text-gray-600">Get it delivered</p>
                            </Link>
                            <Link href="/little-caesars-deals-today" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Today's Deals</h3>
                                <p className="text-sm text-gray-600">Best Philly offers</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
