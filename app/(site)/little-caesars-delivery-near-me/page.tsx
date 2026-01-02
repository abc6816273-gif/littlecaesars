import { Metadata } from 'next'
import Link from 'next/link'
import { Truck, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Delivery Near Me - Order Pizza Online Now',
    description: 'Get Little Caesars pizza delivered to your door. Order online via DoorDash, Uber Eats, or Grubhub. Fast delivery from locations near you. Hot-N-Ready pizzas delivered!',
    keywords: 'little caesars delivery near me, little caesars delivery, pizza delivery, little caesars doordash, little caesars uber eats',
    openGraph: {
        title: 'Little Caesars Delivery - Order Pizza Online Near You',
        description: 'Get Little Caesars delivered fast! Order via DoorDash, Uber Eats, or Grubhub.',
        url: 'https://littlecaesarsmenu.us/little-caesars-delivery-near-me',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-delivery-near-me',
    },
}

export default function LittleCaesarsDeliveryNearMePage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        🚚 Little Caesars Delivery Near You
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Hot pizzas delivered fresh to your door!
                    </p>
                    <div className="flex justify-center gap-4">
                        <Truck className="w-8 h-8" />
                        <MapPin className="w-8 h-8" />
                        <Phone className="w-8 h-8" />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        How to Order Little Caesars Delivery
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="text-center">
                            <div className="bg-red-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-4xl">🚗</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">DoorDash</h3>
                            <p className="text-gray-600 mb-3">
                                Order Little Caesars through DoorDash for fast delivery
                            </p>
                            <a
                                href="https://www.doordash.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-orange-700 font-semibold"
                            >
                                Order Now →
                            </a>
                        </div>

                        <div className="text-center">
                            <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-4xl">🚕</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Uber Eats</h3>
                            <p className="text-gray-600 mb-3">
                                Get Little Caesars delivered via Uber Eats
                            </p>
                            <a
                                href="https://www.ubereats.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-orange-700 font-semibold"
                            >
                                Order Now →
                            </a>
                        </div>

                        <div className="text-center">
                            <div className="bg-orange-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                                <span className="text-4xl">🍕</span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Grubhub</h3>
                            <p className="text-gray-600 mb-3">
                                Order from Little Caesars on Grubhub
                            </p>
                            <a
                                href="https://www.grubhub.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-orange-600 hover:text-orange-700 font-semibold"
                            >
                                Order Now →
                            </a>
                        </div>
                    </div>

                    <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-4 text-center">📍 Find Delivery Locations</h3>
                        <p className="text-lg mb-6 text-center">
                            Not all locations offer direct delivery. Use our store locator to find delivery near you!
                        </p>
                        <div className="text-center">
                            <Link
                                href="/store-locator"
                                className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition"
                            >
                                Find Delivery Locations →
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Delivery FAQs
                    </h2>

                    <div className="bg-white rounded-lg p-8 shadow-sm space-y-6">
                        <div>
                            <h3 className="text-xl font-bold mb-2">Does Little Caesars deliver?</h3>
                            <p className="text-gray-700">
                                Yes! Little Caesars partners with DoorDash, Uber Eats, and Grubhub for delivery. Some locations may also offer direct delivery.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">What's the delivery fee?</h3>
                            <p className="text-gray-700">
                                Delivery fees vary by location and delivery service. Check your delivery app for exact pricing.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">How long does delivery take?</h3>
                            <p className="text-gray-700">
                                Average delivery time is 30-45 minutes, depending on your location and driver availability.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-center mb-8">Related Pages</h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/little-caesars-near-me" className="bg-orange-50 hover:bg-orange-100 p-6 rounded-lg text-center transition">
                            <h3 className="font-bold text-lg mb-2">Locations</h3>
                            <p className="text-sm text-gray-600">Find stores nearby</p>
                        </Link>
                        <Link href="/little-caesars-menu" className="bg-orange-50 hover:bg-orange-100 p-6 rounded-lg text-center transition">
                            <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                            <p className="text-sm text-gray-600">View all items</p>
                        </Link>
                        <Link href="/little-caesars-deals-today" className="bg-orange-50 hover:bg-orange-100 p-6 rounded-lg text-center transition">
                            <h3 className="font-bold text-lg mb-2">Today's Deals</h3>
                            <p className="text-sm text-gray-600">Save on delivery</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
