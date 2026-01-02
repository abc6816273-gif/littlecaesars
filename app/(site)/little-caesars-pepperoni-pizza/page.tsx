import { Metadata } from 'next'
import Link from 'next/link'
import { Pizza, DollarSign, Star } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Pepperoni Pizza - Price, Nutrition & Calories 2026',
    description: 'Little Caesars Classic Pepperoni Pizza - $5.99 Hot-N-Ready! Get nutrition facts, calories, ingredients, and toppings info. Order the most popular pizza in America.',
    keywords: 'little caesars pepperoni pizza, pepperoni pizza price, hot n ready pepperoni, little caesars pepperoni calories',
    openGraph: {
        title: 'Little Caesars Pepperoni Pizza - Classic Hot-N-Ready',
        description: 'America\'s favorite $5.99 pepperoni pizza! Get nutrition facts and order now.',
        url: 'https://littlecaesarsmenu.us/little-caesars-pepperoni-pizza',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-pepperoni-pizza',
    },
}

export default function LittleCaesarsPepperoniPizzaPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        🍕 Classic Pepperoni Pizza
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        America's Favorite Hot-N-Ready® Pizza - Only $5.99!
                    </p>
                    <div className="flex justify-center gap-4">
                        <Pizza className="w-8 h-8" />
                        <DollarSign className="w-8 h-8" />
                        <Star className="w-8 h-8" />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        About the Pepperoni Pizza
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-orange-50 rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-4">💰 Pricing</h3>
                            <ul className="space-y-2">
                                <li><strong>Hot-N-Ready®:</strong> $5.99</li>
                                <li><strong>Large (14"):</strong> $8-10</li>
                                <li><strong>ExtraMostBestest™:</strong> $6-8</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-4">🔥 Nutrition Facts</h3>
                            <ul className="space-y-2">
                                <li><strong>Calories per slice:</strong> 280 cal</li>
                                <li><strong>Total Fat:</strong> 10g</li>
                                <li><strong>Protein:</strong> 12g</li>
                                <li><strong>Carbs:</strong> 34g</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-4">What Makes It Special?</h3>
                        <ul className="space-y-3 text-lg">
                            <li>✅ <strong>Fresh Dough:</strong> Made daily in-store</li>
                            <li>✅ <strong>Quality Pepperoni:</strong> Classic, savory pepperoni slices</li>
                            <li>✅ <strong>Mozzarella Cheese:</strong> 100% real cheese, never frozen</li>
                            <li>✅ <strong>Hot-N-Ready®:</strong> No wait, no call ahead - always ready!</li>
                            <li>✅ <strong>Unbeatable Value:</strong> $5.99 for a large pizza</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Pepperoni Pizza Variations
                    </h2>

                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold mb-3">Classic Hot-N-Ready®</h3>
                            <p className="text-gray-600 mb-4">
                                The original $5.99 large pepperoni pizza. Always hot, always ready!
                            </p>
                            <p className="font-bold text-orange-600">$5.99</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold mb-3">ExtraMostBestest™</h3>
                            <p className="text-gray-600 mb-4">
                                The most pepperoni and cheese - 80% more! Worth every penny.
                            </p>
                            <p className="font-bold text-orange-600">$6-8</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold mb-3">Stuffed Crust</h3>
                            <p className="text-gray-600 mb-4">
                                Pepperoni pizza with cheese-filled crust. Ultimate indulgence!
                            </p>
                            <p className="font-bold text-orange-600">$10-12</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">🍕 Order Pepperoni Pizza Now!</h2>
                        <p className="text-xl mb-6">
                            Visit your nearest Little Caesars for Hot-N-Ready® pickup or order delivery!
                        </p>
                        <Link
                            href="/store-locator"
                            className="inline-block bg-white text-orange-600 font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition"
                        >
                            Find a Store Near You →
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-center mb-8">Related Items</h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <Link href="/little-caesars-menu" className="bg-white hover:bg-gray-50 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Full Menu</h3>
                            <p className="text-sm text-gray-600">View all pizzas</p>
                        </Link>
                        <Link href="/little-caesars-crazy-bread" className="bg-white hover:bg-gray-50 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Crazy Bread</h3>
                            <p className="text-sm text-gray-600">Perfect side dish</p>
                        </Link>
                        <Link href="/little-caesars-deals-today" className="bg-white hover:bg-gray-50 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Today's Deals</h3>
                            <p className="text-sm text-gray-600">Save more money</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
