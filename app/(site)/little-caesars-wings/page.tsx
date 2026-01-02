import { Metadata } from 'next'
import Link from 'next/link'
import { Flame, DollarSign, UtensilsCrossed } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Wings - Caesar Wings Price & Flavors 2026',
    description: 'Little Caesars Caesar Wings® - choose from Plain, Buffalo, BBQ, or Garlic Parmesan. 8-piece order starting at $6.99. Get nutrition facts and order online!',
    keywords: 'little caesars wings, caesar wings, buffalo wings, little caesars chicken wings price',
    openGraph: {
        title: 'Little Caesars Wings - Caesar Wings® Flavors',
        description: 'Delicious chicken wings in 4 flavors - starting at $6.99 for 8 pieces!',
        url: 'https://littlecaesarsmenu.us/little-caesars-wings',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-wings',
    },
}

export default function LittleCaesarsWingsPage() {
    const flavors = [
        { name: 'Buffalo', description: 'Classic spicy buffalo sauce', heat: '🔥🔥' }, { name: 'BBQ', description: 'Sweet and tangy barbecue', heat: '🔥' },
        { name: 'Garlic Parmesan', description: 'Creamy garlic with Parmesan cheese', heat: '' },
        { name: 'Plain (Oven-Roasted)', description: 'No sauce, just crispy wings', heat: '' },
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        🍗 Caesar Wings®
                    </h1>
                    <p className="text-xl md:text-2xl mb-6">
                        Oven-Roasted Chicken Wings in 4 Delicious Flavors!
                    </p>
                    <div className="flex justify-center gap-4">
                        <Flame className="w-8 h-8" />
                        <DollarSign className="w-8 h-8" />
                        <UtensilsCrossed className="w-8 h-8" />
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        About Caesar Wings®
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-orange-50 rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-4">💰 Pricing</h3>
                            <ul className="space-y-2">
                                <li><strong>8-Piece:</strong> $6.99 - $7.99</li>
                                <li><strong>16-Piece:</strong> $13.99 - $15.99</li>
                                <li><strong>Combo with Pizza:</strong> Varies</li>
                            </ul>
                        </div>

                        <div className="bg-orange-50 rounded-lg p-6">
                            <h3 className="text-2xl font-bold mb-4">🔥 Nutrition Facts</h3>
                            <ul className="space-y-2">
                                <li><strong>Calories per wing:</strong> 70-90 cal</li>
                                <li><strong>Total Fat:</strong> 5-7g</li>
                                <li><strong>Protein:</strong> 6-8g</li>
                                <li><strong>Carbs:</strong> 1-4g</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-8">
                        <h3 className="text-2xl font-bold mb-4">Why Choose Caesar Wings®?</h3>
                        <ul className="space-y-3 text-lg">
                            <li>✅ <strong>Oven-Roasted:</strong> Never fried - healthier than traditional wings</li>
                            <li>✅ <strong>4 Flavors:</strong> Something for everyone!</li>
                            <li>✅ <strong>Premium Quality:</strong> 100% whole chicken wings</li>
                            <li>✅ <strong>Great Value:</strong> More wings for less money</li>
                            <li>✅ <strong>Perfect Pairing:</strong> Goes great with any pizza</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Wing Flavors
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {flavors.map((flavor) => (
                            <div key={flavor.name} className="bg-white rounded-lg p-6 shadow-sm">
                                <h3 className="text-xl font-bold mb-2">{flavor.name} {flavor.heat}</h3>
                                <p className="text-gray-600 mb-3">{flavor.description}</p>
                                {flavor.heat && (
                                    <span className="text-sm text-orange-600 font-semibold">
                                        Heat Level: {flavor.heat}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="bg-orange-600 text-white rounded-lg p-8 text-center">
                        <h2 className="text-3xl font-bold mb-4">🍗 Order Caesar Wings® Now!</h2>
                        <p className="text-xl mb-6">
                            Add wings to any pizza order for the ultimate meal!
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
                        <Link href="/little-caesars-crazy-bread" className="bg-white hover:bg-gray-50 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Crazy Bread</h3>
                            <p className="text-sm text-gray-600">Perfect side</p>
                        </Link>
                        <Link href="/little-caesars-pepperoni-pizza" className="bg-white hover:bg-gray-50 p-6 rounded-lg text-center transition shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Pepperoni Pizza</h3>
                            <p className="text-sm text-gray-600">Complete your order</p>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
