import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Phoenix - Locations, Hours & Menu Prices 2026',
    description: 'Find Little Caesars locations in Phoenix, AZ. Get hours, menu prices, delivery options, and special deals. Hot-N-Ready pizzas available across the Valley!',
    keywords: 'little caesars phoenix, little caesars arizona, pizza phoenix, hot n ready phoenix, pizza delivery phoenix az, cheap pizza scottsdale',
    openGraph: {
        title: 'Little Caesars Phoenix - Menu, Hours & Locations',
        description: 'Find your nearest Little Caesars in Phoenix! Hot-N-Ready pizzas, deals, and delivery options across the Valley of the Sun.',
        url: 'https://littlecaesarsmenu.us/little-caesars-phoenix',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-phoenix',
    },
}

export default function LittleCaesarsPhoenixPage() {
    const phoenixAreas = [
        'Downtown Phoenix',
        'Scottsdale',
        'Tempe',
        'Mesa',
        'Glendale',
        'Chandler',
        'Gilbert',
        'Peoria',
        'Surprise',
        'Avondale',
        'Goodyear',
        'Queen Creek'
    ]

    const phoenixDeals = [
        {
            name: 'Hot-N-Ready Special',
            price: '$7.99',
            description: 'Perfect for hot Arizona days!'
        },
        {
            name: 'Valley Party Pack',
            price: '$21.99',
            description: '3 Large pizzas - feeds the whole crew'
        },
        {
            name: 'Deep Dish Combo',
            price: '$24.99',
            description: '2 Deep dish + Crazy Bread'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-orange-600 via-red-500 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars Phoenix 🍕
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Pizza Pizza! Serving the Valley of the Sun
                    </p>
                    <p className="text-lg mb-6">
                        🌵 50+ Locations Across Greater Phoenix 🌵
                    </p>
                    <Link
                        href="/store-locator"
                        className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                    >
                        Find Phoenix Locations →
                    </Link>
                </div>
            </section>

            {/* Quick Info */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <MapPin className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">50+ Stores</h3>
                            <p className="text-sm text-gray-600">Across the Valley</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Clock className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Open Daily</h3>
                            <p className="text-sm text-gray-600">Extended hours</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Phone className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Pre-Order</h3>
                            <p className="text-sm text-gray-600">Call ahead service</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Navigation className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Delivery</h3>
                            <p className="text-sm text-gray-600">Fast & fresh</p>
                        </div>
                    </div>

                    {/* Phoenix Areas */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Little Caesars Across the Valley
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {phoenixAreas.map((area) => (
                                <div key={area} className="bg-white border-2 border-orange-200 rounded-lg p-4 text-center hover:border-orange-400 transition">
                                    <p className="font-semibold text-gray-800">{area}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/store-locator" className="text-orange-600 hover:text-orange-700 font-bold text-lg">
                                Find Your Valley Store →
                            </Link>
                        </div>
                    </div>

                    {/* Phoenix Deals */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Phoenix Favorite Deals
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {phoenixDeals.map((deal) => (
                                <div key={deal.name} className="bg-gradient-to-b from-orange-50 to-white border-2 border-orange-200 rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                                    <p className="text-3xl font-bold text-orange-600 mb-3">{deal.price}</p>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/coupons" className="text-orange-600 hover:text-orange-700 font-bold text-lg">
                                View All Deals →
                            </Link>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-purple-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Typical Phoenix Hours
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
                            *Hours vary by Phoenix location. Always call ahead.
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
                                <p className="text-sm text-gray-600">Pizzas & prices</p>
                            </Link>
                            <Link href="/little-caesars-deals-today" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Today's Deals</h3>
                                <p className="text-sm text-gray-600">Best Valley offers</p>
                            </Link>
                            <Link href="/little-caesars-delivery" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Delivery Options</h3>
                                <p className="text-sm text-gray-600">Get it delivered</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
