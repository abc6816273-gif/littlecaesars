import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars San Antonio - Locations, Hours & Menu Prices 2026',
    description: 'Find Little Caesars locations in San Antonio, TX. Get hours, menu prices, delivery options, and special deals. Hot-N-Ready pizzas available across the Alamo City!',
    keywords: 'little caesars san antonio, pizza san antonio, hot n ready san antonio tx, pizza delivery alamo city, cheap pizza san antonio texas',
    openGraph: {
        title: 'Little Caesars San Antonio - Menu, Hours & Locations',
        description: 'Find your nearest Little Caesars in San Antonio! Hot-N-Ready pizzas, deals, and delivery across the Alamo City.',
        url: 'https://littlecaesarsmenu.us/little-caesars-san-antonio',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-san-antonio',
    },
}

export default function LittleCaesarsSanAntonioPage() {
    const sanAntonioAreas = [
        'Downtown San Antonio',
        'Alamo Heights',
        'Stone Oak',
        'Medical Center',
        'Leon Valley',
        'Castle Hills',
        'Terrell Hills',
        'Windcrest',
        'Converse',
        'Universal City',
        'Schertz',
        'New Braunfels'
    ]

    const sanAntonioDeals = [
        {
            name: 'Alamo Special',
            price: '$7.99',
            description: 'Hot-N-Ready Pepperoni - SA favorite!'
        },
        {
            name: 'Fiesta Pack',
            price: '$21.99',
            description: '3 Large pizzas for your San Antonio party'
        },
        {
            name: 'Spurs Game Day',
            price: '$24.99',
            description: '2 Pizzas + Wings - perfect for game night'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-gray-800 via-orange-600 to-blue-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars San Antonio 🍕
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Pizza Pizza! Serving the Alamo City
                    </p>
                    <p className="text-lg mb-6">
                        🌮 50+ Locations Across Greater San Antonio 🌮
                    </p>
                    <Link
                        href="/store-locator"
                        className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                    >
                        Find San Antonio Locations →
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
                            <p className="text-sm text-gray-600">All over SA</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Clock className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Open Late</h3>
                            <p className="text-sm text-gray-600">Until 10-11 PM</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Phone className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Call Ahead</h3>
                            <p className="text-sm text-gray-600">Pre-order service</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Navigation className="w-12 h-12 mx-auto text-orange-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                            <p className="text-sm text-gray-600">DoorDash ready</p>
                        </div>
                    </div>

                    {/* San Antonio Areas */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Little Caesars Across San Antonio
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {sanAntonioAreas.map((area) => (
                                <div key={area} className="bg-white border-2 border-orange-200 rounded-lg p-4 text-center hover:border-orange-400 transition">
                                    <p className="font-semibold text-gray-800">{area}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/store-locator" className="text-orange-600 hover:text-orange-700 font-bold text-lg">
                                Find Your SA Store →
                            </Link>
                        </div>
                    </div>

                    {/* San Antonio Deals */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            San Antonio Favorite Deals
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {sanAntonioDeals.map((deal) => (
                                <div key={deal.name} className="bg-gradient-to-b from-orange-50 to-white border-2 border-orange-200 rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                                    <p className="text-3xl font-bold text-orange-600 mb-3">{deal.price}</p>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/coupons" className="text-orange-600 hover:text-orange-700 font-bold text-lg">
                                See All SA Coupons →
                            </Link>
                        </div>
                    </div>

                    {/* Spurs Special */}
                    <div className="bg-gradient-to-r from-gray-800 to-blue-600 text-white rounded-lg p-6 mb-12 text-center">
                        <h3 className="text-2xl font-bold mb-3">🏀 Go Spurs Go! Game Day Special</h3>
                        <p className="text-lg">
                            Order ahead for Spurs games - our busiest nights!<br />
                            Pre-order 24-48 hours before tip-off for guaranteed pickup.
                        </p>
                    </div>

                    {/* Hours */}
                    <div className="bg-blue-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Typical San Antonio Hours
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
                            *Hours vary by SA location. Call your store to confirm.
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
                                <p className="text-sm text-gray-600">SA menu & prices</p>
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
