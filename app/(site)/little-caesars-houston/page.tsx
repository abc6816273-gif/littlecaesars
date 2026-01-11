import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Phone, Navigation } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Houston - Locations, Hours & Menu Prices 2026',
    description: 'Find Little Caesars locations in Houston, TX. Get hours, menu prices, delivery options, and special deals. Hot-N-Ready pizzas available across H-Town!',
    keywords: 'little caesars houston, little caesars texas, pizza houston, hot n ready houston, pizza delivery houston, cheap pizza houston tx',
    openGraph: {
        title: 'Little Caesars Houston - Menu, Hours & Locations',
        description: 'Find your nearest Little Caesars in Houston! Hot-N-Ready pizzas, deals, and delivery options across H-Town.',
        url: 'https://littlecaesarsmenu.us/little-caesars-houston',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-houston',
    },
}

export default function LittleCaesarsHoustonPage() {
    const houstonAreas = [
        'Downtown Houston',
        'Midtown',
        'The Woodlands',
        'Sugar Land',
        'Katy',
        'Pearland',
        'Cypress',
        'Spring',
        'Galleria',
        'Medical Center',
        'Clear Lake',
        'Humble'
    ]

    const houstonDeals = [
        {
            name: 'Hot-N-Ready Pepperoni',
            price: '$7.99',
            description: 'Ready when you are - no waiting!'
        },
        {
            name: 'Texas-Sized Party Pack',
            price: '$21.99',
            description: '3 Large pizzas for your Houston party'
        },
        {
            name: 'ExtraMostBestest',
            price: '$9.99',
            description: 'Extra everything - Texas style!'
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-red-700 via-orange-600 to-yellow-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars Houston 🍕
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Pizza Pizza! Serving H-Town Since Day One
                    </p>
                    <p className="text-lg mb-6">
                        🤠 60+ Locations Across Greater Houston 🤠
                    </p>
                    <Link
                        href="/store-locator"
                        className="inline-block bg-white text-red-700 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                    >
                        Find Houston Locations →
                    </Link>
                </div>
            </section>

            {/* Quick Info */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-4 gap-6 mb-12">
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <MapPin className="w-12 h-12 mx-auto text-red-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">60+ Locations</h3>
                            <p className="text-sm text-gray-600">All over Houston</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Clock className="w-12 h-12 mx-auto text-red-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Open Late</h3>
                            <p className="text-sm text-gray-600">Most until 11 PM</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Phone className="w-12 h-12 mx-auto text-red-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Call Ahead</h3>
                            <p className="text-sm text-gray-600">Pre-order available</p>
                        </div>
                        <div className="text-center p-6 bg-orange-50 rounded-lg">
                            <Navigation className="w-12 h-12 mx-auto text-red-700 mb-3" />
                            <h3 className="font-bold text-lg mb-2">Fast Delivery</h3>
                            <p className="text-sm text-gray-600">DoorDash & Uber Eats</p>
                        </div>
                    </div>

                    {/* Houston Areas */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Little Caesars Across Houston
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {houstonAreas.map((area) => (
                                <div key={area} className="bg-white border-2 border-red-200 rounded-lg p-4 text-center hover:border-red-400 transition">
                                    <p className="font-semibold text-gray-800">{area}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/store-locator" className="text-red-700 hover:text-red-800 font-bold text-lg">
                                Find Your H-Town Store →
                            </Link>
                        </div>
                    </div>

                    {/* Houston Deals */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            Popular Houston Deals
                        </h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {houstonDeals.map((deal) => (
                                <div key={deal.name} className="bg-gradient-to-b from-red-50 to-white border-2 border-red-200 rounded-lg p-6 text-center">
                                    <h3 className="text-xl font-bold mb-2">{deal.name}</h3>
                                    <p className="text-3xl font-bold text-red-700 mb-3">{deal.price}</p>
                                    <p className="text-sm text-gray-600">{deal.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="text-center mt-6">
                            <Link href="/coupons" className="text-red-700 hover:text-red-800 font-bold text-lg">
                                See All Houston Coupons →
                            </Link>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-yellow-50 rounded-lg p-8 mb-12">
                        <h2 className="text-2xl font-bold text-center mb-6">
                            Typical Houston Hours
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
                            *Hours may vary by location. Call your Houston store to confirm.
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
                                <p className="text-sm text-gray-600">Full Houston menu</p>
                            </Link>
                            <Link href="/little-caesars-texas" className="bg-gray-100 hover:bg-gray-200 p-6 rounded-lg text-center transition">
                                <h3 className="font-bold text-lg mb-2">All Texas Locations</h3>
                                <p className="text-sm text-gray-600">Other TX cities</p>
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
