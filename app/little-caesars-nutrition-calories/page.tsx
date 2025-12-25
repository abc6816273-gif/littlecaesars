import type { Metadata } from 'next'

// SEO-optimized metadata for nutrition guide
export const metadata: Metadata = {
    title: 'Little Caesars Nutrition & Calories Guide 2025 | Complete Menu Nutrition Facts',
    description: 'Complete Little Caesars nutrition guide with calories, carbs, protein, and fat for every menu item. Find healthiest options, low-calorie pizza, and diet-friendly choices.',
    keywords: [
        'little caesars calories',
        'little caesars nutrition',
        'little caesars nutrition facts',
        'little caesars calories per slice',
        'little caesars carbs',
        'little caesars protein',
        'healthiest little caesars pizza',
        'little caesars diet',
        'low calorie pizza little caesars'
    ].join(', '),
    openGraph: {
        title: 'Little Caesars Nutrition & Calories Guide 2025',
        description: 'Complete nutrition information for every Little Caesars menu item. Calories, carbs, protein, fat, and healthiest options.',
        type: 'article',
        url: 'https://littlecaesarsmenu.us/little-caesars-nutrition-calories',
        images: [
            {
                url: 'https://littlecaesarsmenu.us/images/little-caesars-nutrition.jpg',
                width: 1200,
                height: 630,
                alt: 'Little Caesars Nutrition & Calories Guide 2025'
            }
        ]
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Little Caesars Nutrition & Calories Guide 2025',
        description: 'Complete nutrition facts for all Little Caesars menu items.'
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-nutrition-calories'
    }
}

// Nutrition data for Little Caesars menu items
const nutritionData = {
    pizzas: [
        { name: 'Hot-N-Ready Pepperoni (1 slice)', calories: 280, fat: 11, carbs: 32, protein: 14, sodium: 560, fiber: 2 },
        { name: 'Hot-N-Ready Cheese (1 slice)', calories: 240, fat: 9, carbs: 30, protein: 12, sodium: 480, fiber: 2 },
        { name: 'ExtraMostBestest Pepperoni (1 slice)', calories: 330, fat: 15, carbs: 33, protein: 16, sodium: 680, fiber: 2 },
        { name: 'ExtraMostBestest Cheese (1 slice)', calories: 290, fat: 12, carbs: 32, protein: 14, sodium: 580, fiber: 2 },
        { name: 'Deep!Deep! Dish Pepperoni (1 slice)', calories: 380, fat: 17, carbs: 40, protein: 16, sodium: 720, fiber: 2 },
        { name: 'Deep!Deep! Dish Cheese (1 slice)', calories: 340, fat: 14, carbs: 38, protein: 14, sodium: 620, fiber: 2 },
        { name: 'Thin Crust Pepperoni (1 slice)', calories: 180, fat: 9, carbs: 16, protein: 9, sodium: 380, fiber: 1 },
        { name: 'Stuffed Crust Pepperoni (1 slice)', calories: 350, fat: 16, carbs: 36, protein: 16, sodium: 700, fiber: 2 },
        { name: 'Ultimate Supreme (1 slice)', calories: 310, fat: 14, carbs: 32, protein: 14, sodium: 640, fiber: 2 },
        { name: 'Veggie (1 slice)', calories: 260, fat: 10, carbs: 32, protein: 12, sodium: 520, fiber: 3 },
        { name: '3 Meat Treat (1 slice)', calories: 340, fat: 16, carbs: 32, protein: 16, sodium: 740, fiber: 2 },
        { name: 'Hula Hawaiian (1 slice)', calories: 270, fat: 10, carbs: 34, protein: 14, sodium: 580, fiber: 2 },
    ],
    sides: [
        { name: 'Crazy Bread (1 stick)', calories: 100, fat: 3, carbs: 15, protein: 3, sodium: 150, fiber: 1 },
        { name: 'Crazy Bread (8 sticks)', calories: 800, fat: 24, carbs: 120, protein: 24, sodium: 1200, fiber: 8 },
        { name: 'Italian Cheese Bread (1 piece)', calories: 130, fat: 6, carbs: 14, protein: 5, sodium: 280, fiber: 1 },
        { name: 'Italian Cheese Bread (10 pieces)', calories: 1300, fat: 60, carbs: 140, protein: 50, sodium: 2800, fiber: 10 },
        { name: 'Crazy Puffs (4 pieces)', calories: 190, fat: 9, carbs: 20, protein: 7, sodium: 420, fiber: 1 },
        { name: 'Stuffed Crazy Bread (4 pieces)', calories: 360, fat: 16, carbs: 40, protein: 14, sodium: 760, fiber: 2 },
    ],
    wings: [
        { name: 'Buffalo Wings (8 pieces)', calories: 510, fat: 35, carbs: 2, protein: 46, sodium: 2100, fiber: 0 },
        { name: 'BBQ Wings (8 pieces)', calories: 580, fat: 34, carbs: 22, protein: 46, sodium: 1800, fiber: 0 },
        { name: 'Oven Roasted Wings (8 pieces)', calories: 470, fat: 32, carbs: 0, protein: 46, sodium: 1400, fiber: 0 },
        { name: 'Mild Wings (8 pieces)', calories: 500, fat: 34, carbs: 4, protein: 46, sodium: 1900, fiber: 0 },
    ],
    drinks: [
        { name: 'Pepsi (20 oz)', calories: 250, fat: 0, carbs: 69, protein: 0, sodium: 55, fiber: 0 },
        { name: 'Diet Pepsi (20 oz)', calories: 0, fat: 0, carbs: 0, protein: 0, sodium: 60, fiber: 0 },
        { name: 'Mountain Dew (20 oz)', calories: 290, fat: 0, carbs: 77, protein: 0, sodium: 105, fiber: 0 },
        { name: '2-Liter Pepsi', calories: 800, fat: 0, carbs: 220, protein: 0, sodium: 150, fiber: 0 },
    ],
    sauces: [
        { name: 'Crazy Sauce (1 cup)', calories: 45, fat: 0, carbs: 10, protein: 2, sodium: 350, fiber: 1 },
        { name: 'Ranch Dressing (1.5 oz)', calories: 230, fat: 24, carbs: 2, protein: 1, sodium: 380, fiber: 0 },
        { name: 'Buffalo Sauce (1.5 oz)', calories: 25, fat: 0, carbs: 5, protein: 0, sodium: 1400, fiber: 0 },
        { name: 'BBQ Sauce (1.5 oz)', calories: 70, fat: 0, carbs: 17, protein: 0, sodium: 340, fiber: 0 },
    ]
}

export default function NutritionCaloriesGuidePage() {
    const currentYear = 2025

    // Schema for SEO
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": `Little Caesars Nutrition & Calories Guide ${currentYear}`,
        "description": "Complete nutrition information for every Little Caesars menu item including calories, carbs, protein, and fat.",
        "image": "https://littlecaesarsmenu.us/images/little-caesars-nutrition.jpg",
        "author": {
            "@type": "Organization",
            "name": "Little Caesars Menu Guide"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Little Caesars Menu Guide",
            "url": "https://littlecaesarsmenu.us"
        },
        "datePublished": "2024-12-25",
        "dateModified": new Date().toISOString().split('T')[0]
    }

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How many calories are in a slice of Little Caesars pizza?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A slice of Little Caesars Hot-N-Ready Pepperoni pizza contains approximately 280 calories. Cheese pizza has about 240 calories per slice. The Thin Crust option is lower at 180 calories per slice."
                }
            },
            {
                "@type": "Question",
                "name": "What is the healthiest pizza at Little Caesars?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The healthiest pizza option at Little Caesars is the Thin Crust pizza with vegetable toppings, at approximately 180 calories per slice. The Veggie pizza on regular crust at 260 calories is also a good choice with added fiber from vegetables."
                }
            },
            {
                "@type": "Question",
                "name": "How many calories are in Crazy Bread?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "One stick of Crazy Bread contains 100 calories. A full order of 8 sticks contains 800 calories total. Each stick has 3g of fat, 15g of carbs, and 3g of protein."
                }
            },
            {
                "@type": "Question",
                "name": "Is Little Caesars pizza high in sodium?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, like most fast food pizza, Little Caesars has moderate to high sodium content. A slice of pepperoni pizza contains about 560mg of sodium, which is about 24% of the daily recommended intake. Wings have the highest sodium content at 1400-2100mg per serving."
                }
            },
            {
                "@type": "Question",
                "name": "How many carbs are in Little Caesars pizza?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "A slice of regular Hot-N-Ready pizza contains about 32g of carbohydrates. Thin Crust pizza has significantly fewer carbs at only 16g per slice, making it a better option for low-carb diets."
                }
            }
        ]
    }

    // Calculate lowest calorie options
    const lowestCaloriePizza = nutritionData.pizzas.reduce((min, item) =>
        item.calories < min.calories ? item : min
    )

    return (
        <>
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <main className="min-h-screen bg-gradient-to-br from-green-50 via-white to-orange-50">
                {/* Hero Section */}
                <section className="relative py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
                    <div className="max-w-5xl mx-auto px-4 text-center">
                        <div className="text-5xl mb-4">🥗🍕</div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Little Caesars Nutrition & Calories Guide {currentYear}
                        </h1>
                        <p className="text-xl opacity-90 max-w-3xl mx-auto">
                            Complete nutrition information for every menu item.
                            Find calories, carbs, protein, fat, and the healthiest options!
                        </p>
                    </div>
                </section>

                {/* Quick Stats */}
                <section className="py-8 bg-white border-b">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div className="bg-green-50 p-4 rounded-xl">
                                <div className="text-3xl font-bold text-green-600">180</div>
                                <p className="text-gray-600 text-sm">Lowest Cal/Slice</p>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-xl">
                                <div className="text-3xl font-bold text-orange-600">280</div>
                                <p className="text-gray-600 text-sm">Avg Cal/Slice</p>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl">
                                <div className="text-3xl font-bold text-blue-600">14g</div>
                                <p className="text-gray-600 text-sm">Avg Protein/Slice</p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-xl">
                                <div className="text-3xl font-bold text-purple-600">32g</div>
                                <p className="text-gray-600 text-sm">Avg Carbs/Slice</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Healthiest Options Alert */}
                <section className="py-8 bg-green-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
                            <h2 className="text-2xl font-bold text-green-700 mb-4">
                                🥬 Healthiest Little Caesars Options
                            </h2>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-green-800">Lowest Calorie Pizza</h3>
                                    <p className="text-2xl font-bold text-green-600">Thin Crust</p>
                                    <p className="text-gray-600">180 cal/slice</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-green-800">Lowest Carb Option</h3>
                                    <p className="text-2xl font-bold text-green-600">Thin Crust</p>
                                    <p className="text-gray-600">16g carbs/slice</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h3 className="font-bold text-green-800">Most Protein</h3>
                                    <p className="text-2xl font-bold text-green-600">Deep Dish</p>
                                    <p className="text-gray-600">16g protein/slice</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pizza Nutrition Table */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            🍕 Pizza Nutrition Facts (Per Slice)
                        </h2>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                            <div className="bg-little-caesars-orange text-white p-4">
                                <h3 className="text-xl font-bold">Pizza Menu - Calories & Nutrition</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold">Item (1 Slice)</th>
                                            <th className="px-3 py-3 text-center font-semibold">Calories</th>
                                            <th className="px-3 py-3 text-center font-semibold">Fat (g)</th>
                                            <th className="px-3 py-3 text-center font-semibold">Carbs (g)</th>
                                            <th className="px-3 py-3 text-center font-semibold">Protein (g)</th>
                                            <th className="px-3 py-3 text-center font-semibold">Sodium (mg)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {nutritionData.pizzas.map((item, index) => (
                                            <tr key={index} className={`hover:bg-orange-50 ${item.calories <= 200 ? 'bg-green-50' : ''}`}>
                                                <td className="px-4 py-3 font-medium">
                                                    {item.name}
                                                    {item.calories <= 200 && <span className="ml-2 text-green-600 text-xs">✓ Low Cal</span>}
                                                </td>
                                                <td className="px-3 py-3 text-center font-bold">{item.calories}</td>
                                                <td className="px-3 py-3 text-center">{item.fat}</td>
                                                <td className="px-3 py-3 text-center">{item.carbs}</td>
                                                <td className="px-3 py-3 text-center">{item.protein}</td>
                                                <td className="px-3 py-3 text-center">{item.sodium}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Whole Pizza Note */}
                        <div className="bg-orange-50 p-4 rounded-lg text-center">
                            <p className="text-gray-700">
                                <strong>📝 Note:</strong> A whole large pizza has 8 slices.
                                To calculate whole pizza calories, multiply slice calories by 8.
                                <br />
                                Example: Hot-N-Ready Pepperoni = 280 × 8 = <strong>2,240 calories</strong> per whole pizza.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sides Nutrition */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            🥖 Sides & Bread Nutrition Facts
                        </h2>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                            <div className="bg-yellow-500 text-white p-4">
                                <h3 className="text-xl font-bold">Crazy Bread & Sides</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold">Item</th>
                                            <th className="px-3 py-3 text-center font-semibold">Calories</th>
                                            <th className="px-3 py-3 text-center font-semibold">Fat (g)</th>
                                            <th className="px-3 py-3 text-center font-semibold">Carbs (g)</th>
                                            <th className="px-3 py-3 text-center font-semibold">Protein (g)</th>
                                            <th className="px-3 py-3 text-center font-semibold">Sodium (mg)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {nutritionData.sides.map((item, index) => (
                                            <tr key={index} className="hover:bg-yellow-50">
                                                <td className="px-4 py-3 font-medium">{item.name}</td>
                                                <td className="px-3 py-3 text-center font-bold">{item.calories}</td>
                                                <td className="px-3 py-3 text-center">{item.fat}</td>
                                                <td className="px-3 py-3 text-center">{item.carbs}</td>
                                                <td className="px-3 py-3 text-center">{item.protein}</td>
                                                <td className="px-3 py-3 text-center">{item.sodium}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Wings Nutrition */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            🍗 Wings Nutrition Facts
                        </h2>

                        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                            <div className="bg-red-500 text-white p-4">
                                <h3 className="text-xl font-bold">Caesar Wings</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm">
                                    <thead className="bg-gray-100">
                                        <tr>
                                            <th className="px-4 py-3 text-left font-semibold">Item</th>
                                            <th className="px-3 py-3 text-center font-semibold">Calories</th>
                                            <th className="px-3 py-3 text-center font-semibold">Fat (g)</th>
                                            <th className="px-3 py-3 text-center font-semibold">Carbs (g)</th>
                                            <th className="px-3 py-3 text-center font-semibold">Protein (g)</th>
                                            <th className="px-3 py-3 text-center font-semibold">Sodium (mg)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y">
                                        {nutritionData.wings.map((item, index) => (
                                            <tr key={index} className={`hover:bg-red-50 ${item.carbs === 0 ? 'bg-green-50' : ''}`}>
                                                <td className="px-4 py-3 font-medium">
                                                    {item.name}
                                                    {item.carbs === 0 && <span className="ml-2 text-green-600 text-xs">✓ Zero Carb</span>}
                                                </td>
                                                <td className="px-3 py-3 text-center font-bold">{item.calories}</td>
                                                <td className="px-3 py-3 text-center">{item.fat}</td>
                                                <td className="px-3 py-3 text-center">{item.carbs}</td>
                                                <td className="px-3 py-3 text-center">{item.protein}</td>
                                                <td className="px-3 py-3 text-center">{item.sodium}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-blue-800">
                                <strong>💪 Keto/Low-Carb Tip:</strong> Oven Roasted Wings have 0 carbs and 46g protein,
                                making them the best option for keto and low-carb diets!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Sauces */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            🥫 Sauces & Dips Nutrition
                        </h2>

                        <div className="grid md:grid-cols-2 gap-4">
                            {nutritionData.sauces.map((item, index) => (
                                <div key={index} className="bg-white p-4 rounded-lg shadow flex justify-between items-center">
                                    <div>
                                        <h3 className="font-bold">{item.name}</h3>
                                        <p className="text-sm text-gray-600">
                                            Fat: {item.fat}g | Carbs: {item.carbs}g | Sodium: {item.sodium}mg
                                        </p>
                                    </div>
                                    <div className="text-2xl font-bold text-orange-600">
                                        {item.calories} cal
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Diet Guide */}
                <section className="py-12 bg-white">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            🎯 Diet-Specific Recommendations
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Low Calorie */}
                            <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                                <h3 className="text-xl font-bold text-green-700 mb-3">🥗 Low-Calorie Diet</h3>
                                <p className="text-gray-700 mb-3">Best options under 500 calories:</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li>✅ 2 slices Thin Crust Pizza = 360 cal</li>
                                    <li>✅ 1 slice regular + side salad = ~300 cal</li>
                                    <li>✅ Veggie Pizza (2 slices) = 520 cal</li>
                                </ul>
                            </div>

                            {/* Low Carb/Keto */}
                            <div className="bg-purple-50 p-6 rounded-xl border-2 border-purple-200">
                                <h3 className="text-xl font-bold text-purple-700 mb-3">🥩 Keto/Low-Carb</h3>
                                <p className="text-gray-700 mb-3">Best low-carb options:</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li>✅ Oven Roasted Wings (8pc) = 0 carbs</li>
                                    <li>✅ Buffalo Wings (8pc) = 2 carbs</li>
                                    <li>✅ 1 slice Thin Crust = 16 carbs</li>
                                </ul>
                            </div>

                            {/* High Protein */}
                            <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
                                <h3 className="text-xl font-bold text-blue-700 mb-3">💪 High Protein</h3>
                                <p className="text-gray-700 mb-3">Best protein options:</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li>✅ Wings (8pc) = 46g protein</li>
                                    <li>✅ 3 Meat Treat (2 slices) = 32g protein</li>
                                    <li>✅ Deep Dish (2 slices) = 32g protein</li>
                                </ul>
                            </div>

                            {/* Budget Calories */}
                            <div className="bg-orange-50 p-6 rounded-xl border-2 border-orange-200">
                                <h3 className="text-xl font-bold text-orange-700 mb-3">💰 Best Value Nutrition</h3>
                                <p className="text-gray-700 mb-3">Most nutrition per dollar:</p>
                                <ul className="space-y-2 text-gray-600">
                                    <li>✅ Hot-N-Ready = 2,240 cal for $7.99</li>
                                    <li>✅ Crazy Bread = 800 cal for $4.49</li>
                                    <li>✅ Combo Meal = best overall value</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-12 bg-gray-50">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8">
                            ❓ Frequently Asked Questions
                        </h2>

                        <div className="space-y-4">
                            <details className="bg-white p-6 rounded-lg shadow-md group" open>
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    How many calories are in a slice of Little Caesars pizza?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    A slice of Little Caesars Hot-N-Ready Pepperoni pizza contains approximately <strong>280 calories</strong>.
                                    Cheese pizza has about 240 calories per slice. The lowest calorie option is
                                    Thin Crust at only <strong>180 calories</strong> per slice.
                                </p>
                            </details>

                            <details className="bg-white p-6 rounded-lg shadow-md group">
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    What is the healthiest pizza at Little Caesars?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    The healthiest pizza option at Little Caesars is the <strong>Thin Crust pizza</strong> with
                                    vegetable toppings, at approximately 180 calories per slice with only 16g carbs.
                                    The Veggie pizza on regular crust at 260 calories is also a good choice with added fiber.
                                </p>
                            </details>

                            <details className="bg-white p-6 rounded-lg shadow-md group">
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    How many calories are in a whole Little Caesars pizza?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    A whole large Little Caesars pizza has 8 slices. A whole Hot-N-Ready Pepperoni
                                    pizza contains approximately <strong>2,240 calories</strong> (280 × 8). A whole Cheese pizza
                                    contains about <strong>1,920 calories</strong> (240 × 8).
                                </p>
                            </details>

                            <details className="bg-white p-6 rounded-lg shadow-md group">
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    Is Little Caesars good for keto diet?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    Traditional pizza is not keto-friendly due to the carb-heavy crust. However, Little Caesars
                                    <strong>Oven Roasted Wings</strong> are perfect for keto with <strong>0 carbs and 46g protein</strong>.
                                    If you must have pizza, Thin Crust has the lowest carbs at 16g per slice.
                                </p>
                            </details>

                            <details className="bg-white p-6 rounded-lg shadow-md group">
                                <summary className="font-bold text-lg cursor-pointer list-none flex justify-between items-center">
                                    How many calories in Crazy Bread?
                                    <span className="transform group-open:rotate-180 transition-transform">▼</span>
                                </summary>
                                <p className="mt-4 text-gray-600">
                                    One stick of Crazy Bread contains <strong>100 calories</strong>. A full order of 8 sticks
                                    contains <strong>800 calories</strong> total. Each stick has 3g of fat, 15g of carbs, and 3g of protein.
                                </p>
                            </details>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-12 bg-little-caesars-orange text-white">
                    <div className="max-w-4xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Ready to Order?
                        </h2>
                        <p className="text-xl mb-6 opacity-90">
                            Check out our complete menu with all prices!
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center">
                            <a
                                href="/menus-prices"
                                className="bg-white text-little-caesars-orange px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
                            >
                                View Full Menu →
                            </a>
                            <a
                                href="/store-locator"
                                className="bg-green-600 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-green-700 transition-colors"
                            >
                                📍 Find Store Near You
                            </a>
                        </div>
                    </div>
                </section>

                {/* Disclaimer */}
                <section className="py-6 bg-gray-100">
                    <div className="max-w-4xl mx-auto px-4 text-center text-sm text-gray-600">
                        <p>
                            <strong>Disclaimer:</strong> Nutrition information is approximate and based on standard recipes.
                            Actual values may vary based on location, preparation methods, and ingredient availability.
                            Always check with your local store for the most accurate nutrition information.
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}
