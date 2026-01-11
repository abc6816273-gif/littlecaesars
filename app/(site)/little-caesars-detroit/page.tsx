import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Detroit - Locations, Hours & Menu Prices 2026',
    description: 'Find Little Caesars locations in Detroit, MI. Get hours, menu prices, delivery options, and special deals. Hot-N-Ready pizzas available across the Motor City - birthplace of Little Caesars!',
    keywords: 'little caesars detroit, pizza detroit, hot n ready detroit mi, pizza delivery motor city, little caesars michigan, detroit style pizza',
    openGraph: {
        title: 'Little Caesars Detroit - Menu, Hours & Locations',
        description: 'Find your nearest Little Caesars in Detroit - where it all started! Hot-N-Ready pizzas, deals, and delivery across the Motor City.',
        url: 'https://littlecaesarsmenu.us/little-caesars-detroit',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-detroit',
    },
}

export default function LittleCaesarsDetroitPage() {
    const detroitAreas = [
        'DowntownDetroit',
        'Midtown',
        'Dearborn',
        'Troy',
        'Sterling Heights',
        'Warren',
        'Livonia',
        'Southfield',
        'Royal Oak',
        'Farmington Hills',
        'Novi',
        'Ann Arbor'
    ]

    const detroitDeals = [
        {
            name: 'Motor City Classic',
            price: '$7.99',
            description: 'Hot-N-Ready - Detroit original!'
        },
        {
            name: 'Deep Dish Detroit Style',
            price: '$10.99',
            description: 'Authentic Detroit-style deep dish'
        },
        {
            name: 'Lions Game Day Pack',
            price: '$21.99',
            description: '3 Large pizzas - perfect for Sundays'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 via-gray-700 to-orange-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars Detroit 🍕
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Pizza Pizza! Proudly Born in Detroit Since 1959
                    </p>
                    <p className="text-lg mb-6">
                        🏭 50+ Locations Across Metro Detroit - The Original Home! 🏭
                    </p>
                    <Link
                        href="/store-locator"
                        className="inline-block bg-white text-blue-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                    >
                        Find Detroit Locations →
                    </Link>
                </div>
            </section>

            {/* Detroit Heritage Banner */}
            <div className="bg-orange-600 text-white py-4 text-center font-bold">
                <p className="text-lg">
                    🏆 DETROIT PROUD! Little Caesars was founded right here in 1959 - Motor City's Own!
                </p>
            </div>

            {/* Quick Info */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <MapPin className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">50+ Stores</h3>
                            <p className="text-sm text-gray-600">Metro Detroit</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Clock className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Open Daily</h3>
                            <p className="text-sm text-gray-600">Extended hours</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Phone className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Call Ahead</h3>
                            <p className="text-sm text-gray-600">Pre-order pickup</p>
                        </div>
                        <div className="text-center p-6 bg-blue-50 rounded-lg">
                            <Navigation className="w-12 h-12 mx-auto text-blue-600 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Delivery</h3>
                            <p className="text-sm text-gray-600">Motor City fast!</p>
                        </div>
                    </div>

                    {/* Detroit Areas */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Little Caesars Across Metro Detroit
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {detroitAreas.map((area) => (
                                <div key={area} className="bg-white border-2 border-blue-200 rounded-lg p-4 text-center hover:border-blue-400 transition">
                                    <p className="font-semibold text-gray-800">{area}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/store-locator" className="text-blue-600 hover:text-blue-700 font-bold text-lg">
                                Find Your Detroit Store →
                            </Link>
                        </div>
                    </div>

                    {/* Detroit Deals */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Detroit Favorite Deals
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {detroitDeals.map((deal) => (
                                <div key={deal.name} className="bg-gradient-to-b from-blue-50 to-white border-2 border-blue-200 rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                                    <p className="text-3xl font-bold text-blue-600 mb-3">{deal.price}</p>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/coupons" className="text-blue-600 hover:text-blue-700 font-bold text-lg">
                                See All Detroit Deals →
                            </Link>
                        </div>
                    </div>

                    {/* Lions Game Day */}
                    <div className="bg-gradient-to-r from-blue-600 to-gray-700 text-white rounded-lg p-6 mb-12 text-center">
                        <h3 className="text-2xl font-bold mb-3">🦁 Detroit Lions Game Day!</h3>
                        <p className="text-lg">
                            Roar for the Lions with Little Caesars pizza!<br />
                            Pre-order 24-48 hours before game time for guaranteed pickup.
                        </p>
                    </div>

                    {/* Hours */}
                    <div className="bg-orange-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Typical Detroit Hours
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
                            *Hours vary by Detroit location. Call ahead for confirmation.
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
                                <p className="text-sm text-gray-600">Detroit pricing</p>
                            </Link>
                            <Link href="/little-caesars-delivery-near-me" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Delivery Near Me</h3>
                                <p className="text-sm text-gray-600">Fast delivery</p>
                            </Link>
                            <Link href="/little-caesars-deals-today" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">Today's Deals</h3>
                                <p className="text-sm text-gray-600">Motor City offers</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
