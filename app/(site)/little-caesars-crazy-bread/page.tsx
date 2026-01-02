import { Metadata } from 'next'
import Link from 'next/link'
import { Utensils, DollarSign, Heart } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Crazy Bread - Price, Calories & Nutrition 2026',
    description: 'Little Caesars Crazy Bread® - warm, soft breadsticks with garlic butter & Parmesan. Only $3.99! Get nutrition facts, calories, and order online.',
    keywords: 'little caesars crazy bread, crazy bread price, crazy bread calories, garlic bread little caesars',
    openGraph: {
        title: 'Little Caesars Crazy Bread - Warm Garlic Breadsticks',
        description: 'Delicious garlic breadsticks with Parmesan cheese - only $3.99!',
        url: 'https://littlecaesarsmenu.us/little-caesars-crazy-bread',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-crazy-bread',
    },
}

export default function LittleCaesarsCrazyBreadPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-yellow-600 to-orange-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        🥖 Crazy Bread®
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Warm, Soft Breadsticks with Garlic \u0026 Parmesan - Only $3.99!
                    </p>
                    <div className="flex justify-center gap-4">
                        <Utensils className="w-8 h-8" />
                        <DollarSign className="w-8 h-8" />
                        <Heart className="w-8 h-8" />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        About Crazy Bread®
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-yellow-50 rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-4">💰 Pricing</h3>
                            <ul className="space-y-2">
                                <li><strong>Regular Order (8 pcs):</strong> $3.99</li>
                                <li><strong>Combo with Sauce:</strong> $4.99</li>
                                <li><strong>Stuffed Crazy Bread:</strong> $5.49</li>
                            </ul>
                        </div>

                        <div className="bg-yellow-50 rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-4">🔥 Nutrition Facts</h3>
                            <ul className="space-y-2">
                                <li><strong>Calories per stick:</strong> 100 cal</li>
                                <li><strong>Total Fat:</strong> 3.5g</li>
                                <li><strong>Protein:</strong> 3g</li>
                                <li><strong>Carbs:</strong> 15g</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-4">What Makes Crazy Bread® Special?</h3>
                        <ul className="space-y-3 text-lg">
                            <li>✅ <strong>Fresh Baked:</strong> Made from our famous pizza dough</li>
                            <li>✅ <strong>Garlic Butter:</strong> Brushed generously with garlic-flavored butter</li>
                            <li>✅ <strong>Parmesan Cheese:</strong> Sprinkled with real Parmesan</li>
                            <li>✅ <strong>Perfect Side:</strong> Pairs perfectly with any pizza</li>
                            <li>✅ <strong>Crazy Sauce®:</strong> Comes with marinara dipping sauce</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Crazy Bread® Variations
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold mb-3">Classic Crazy Bread®</h3>
                            <p className="text-gray-600 mb-4">
                                8 pieces of warm, soft breadsticks with garlic butter and Parmesan cheese + Crazy Sauce®
                            </p>
                            <p className="font-bold text-orange-600">$3.99</p>
                        </div>

                        <div className="bg-white rounded-lg p-6 shadow-sm">
                            <h3 className="text-xl font-bold mb-3">Stuffed Crazy Bread</h3>
                            <p className="text-gray-600 mb-4">
                                Crazy Bread stuffed with melted mozzarella cheese. Absolute game-changer!
                            </p>
                            <p className="font-bold text-orange-600">$5.49</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">🥖 Order Crazy Bread® Now!</h2>
                        <p className="text-xl mb-6">
                            Add Crazy Bread® to any pizza order for the perfect meal!
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
                            <p className="text-sm text-gray-600">View all items</p>
                        </Link>
                        <Link href="/crazy-puffs" className="bg-white hover:bg-gray-50 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Crazy Puffs</h3>
                            <p className="text-sm text-gray-600">Dessert option</p>
                        </Link>
                        <Link href="/little-caesars-pepperoni-pizza" className="bg-white hover:bg-gray-50 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Pepperoni Pizza</h3>
                            <p className="text-sm text-gray-600">Perfect combo</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
