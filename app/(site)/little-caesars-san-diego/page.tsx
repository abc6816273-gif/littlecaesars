import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars San Diego - Locations, Hours & Menu Prices 2026',
    description: 'Find Little Caesars locations in San Diego, CA. Get hours, menu prices, delivery options, and special deals. Hot-N-Ready pizzas available across America\'s Finest City!',
    keywords: 'little caesars san diego, pizza san diego, hot n ready san diego, pizza delivery san diego ca, cheap pizza la jolla, little caesars chula vista',
    openGraph: {
        title: 'Little Caesars San Diego - Menu, Hours & Locations',
        description: 'Find your nearest Little Caesars in San Diego! Hot-N-Ready pizzas, deals, and delivery across America\'s Finest City.',
        url: 'https://littlecaesarsmenu.us/little-caesars-san-diego',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-san-diego',
    },
}

export default function LittleCaesarsSanDiegoPage() {
    const sanDiegoAreas = [
        'Downtown San Diego',
        'La Jolla',
        'Pacific Beach',
        'Mission Valley',
        'Chula Vista',
        'El Cajon',
        'Oceanside',
        'Carlsbad',
        'Escondido',
        'North Park',
        'Hillcrest',
        'Point Loma'
    ]

    const sanDiegoDeals = [
        {
            name: 'Beach Day Special',
            price: '$7.99',
            description: 'Hot-N-Ready for beach trips!'
        },
        {
            name: 'Party Pack',
            price: '$21.99',
            description: '3 Large pizzas - perfect for San Diego gatherings'
        },
        {
            name: 'Surf & Slice Combo',
            price: '$24.99',
            description: '2 Pizzas + Wings + Crazy Bread'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 via-yellow-500 to-orange-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars San Diego 🍕
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Pizza Pizza! Serving America's Finest City
                    </p>
                    <p className="text-lg mb-6">
                        ☀️ 35+ Locations Across San Diego County ☀️
                    </p>
                    <Link
                        href="/store-locator"
                        className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                    >
                        Find San Diego Locations →
                    </Link>
                </div>
            </section>

            {/* Quick Info */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <MapPin className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">35+ Stores</h3>
                            <p className="text-sm text-gray-600">All over San Diego</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Clock className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Open Daily</h3>
                            <p className="text-sm text-gray-600">Beach-friendly hours</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Phone className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Pre-Order</h3>
                            <p className="text-sm text-gray-600">Call ahead available</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Navigation className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Beach Delivery</h3>
                            <p className="text-sm text-gray-600">DoorDash & Uber Eats</p>
                        </div>
                    </div>

                    {/* San Diego Areas */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Little Caesars Across San Diego
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {sanDiegoAreas.map((area) => (
                                <div key={area} className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center hover:border-blue-400 transition">
                                    <p className="font-semibold text-gray-800">{area}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/store-locator" className="text-blue-600 hover:text-blue-700 font-bold text-lg">
                                Find Your San Diego Store →
                            </Link>
                        </div>
                    </div>

                    {/* San Diego Deals */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            San Diego Favorite Deals
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {sanDiegoDeals.map((deal) => (
                                <div key={deal.name} className="bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                                    <p className="text-3xl font-bold text-blue-600 mb-3">{deal.price}</p>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/coupons" className="text-blue-600 hover:text-blue-700 font-bold text-lg">
                                View All Deals →
                            </Link>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-yellow-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Typical San Diego Hours
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
                            *Perfect for beach day planning! Hours vary by location.
                        </p>
                    </div>

                    {/* Related Links */}
                    <div>
                        <h2 className="text-2xl font-bold text-center mb-6">
                            More Information
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <Link href="/little-caesars-california" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">All California</h3>
                                <p className="text-sm text-gray-600">Other CA cities</p>
                            </Link>
                            <Link href="/little-caesars-menu" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                                <p className="text-sm text-gray-600">Prices & options</p>
                            </Link>
                            <Link href="/little-caesars-deals-today" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Today's Deals</h3>
                                <p className="text-sm text-gray-600">Save more</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
