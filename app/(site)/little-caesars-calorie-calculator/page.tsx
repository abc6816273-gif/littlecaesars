'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';

// Menu items with calorie data
const menuCategories = {
    pizzas: {
        name: '🍕 Pizzas',
        items: [
            { id: 'hot-n-ready-pepperoni', name: 'Hot-N-Ready Pepperoni', calories: 280, slices: 8, fat: 11, protein: 14, carbs: 32, sodium: 560, image: '/images/menu/pepperoni-pizza.jpg' },
            { id: 'hot-n-ready-cheese', name: 'Hot-N-Ready Cheese', calories: 240, slices: 8, fat: 9, protein: 11, carbs: 30, sodium: 420, image: '/images/menu/cheese-pizza.jpg' },
            { id: 'extramostbestest', name: 'ExtraMostBestest Pepperoni', calories: 350, slices: 8, fat: 16, protein: 18, carbs: 33, sodium: 780, image: '/images/menu/extramostbestest.jpg' },
            { id: 'detroit-style', name: 'Detroit-Style Deep Dish', calories: 390, slices: 8, fat: 20, protein: 19, carbs: 36, sodium: 920, image: '/images/menu/detroit-style.jpg' },
            { id: 'pepperoni-cheeser', name: 'Pepperoni Cheeser! Cheeser!', calories: 340, slices: 8, fat: 17, protein: 17, carbs: 32, sodium: 870, image: '/images/menu/pepperoni-cheeser.jpg' },
            { id: 'veggie', name: 'Veggie Pizza', calories: 250, slices: 8, fat: 9, protein: 11, carbs: 32, sodium: 520, image: '/images/menu/veggie-pizza.jpg' },
            { id: '3-meat-treat', name: '3 Meat Treat', calories: 320, slices: 8, fat: 15, protein: 16, carbs: 31, sodium: 780, image: '/images/menu/3-meat-treat.jpg' },
        ]
    },
    sides: {
        name: '🥖 Sides & Bread',
        items: [
            { id: 'crazy-bread', name: 'Crazy Bread (8pc)', calories: 800, slices: 1, fat: 24, protein: 24, carbs: 120, sodium: 1200, image: '/images/menu/crazy-bread.jpg' },
            { id: 'stuffed-crazy-bread', name: 'Stuffed Crazy Bread', calories: 1200, slices: 1, fat: 56, protein: 48, carbs: 128, sodium: 2240, image: '/images/menu/stuffed-crazy-bread.jpg' },
            { id: 'italian-cheese-bread', name: 'Italian Cheese Bread', calories: 1300, slices: 1, fat: 50, protein: 50, carbs: 160, sodium: 2200, image: '/images/menu/italian-cheese-bread.jpg' },
        ]
    },
    wings: {
        name: '🍗 Wings',
        items: [
            { id: 'buffalo-wings-8', name: 'Buffalo Wings (8pc)', calories: 510, slices: 1, fat: 35, protein: 46, carbs: 2, sodium: 1280, image: '/images/menu/buffalo-wings.jpg' },
            { id: 'bbq-wings-8', name: 'BBQ Wings (8pc)', calories: 580, slices: 1, fat: 35, protein: 46, carbs: 18, sodium: 1400, image: '/images/menu/bbq-wings.jpg' },
            { id: 'garlic-parmesan-wings', name: 'Garlic Parmesan Wings (8pc)', calories: 620, slices: 1, fat: 42, protein: 46, carbs: 8, sodium: 1520, image: '/images/menu/garlic-wings.jpg' },
        ]
    },
    drinks: {
        name: '🥤 Drinks',
        items: [
            { id: 'pepsi-2l', name: '2-Liter Pepsi', calories: 800, slices: 1, fat: 0, protein: 0, carbs: 220, sodium: 200, image: '/images/menu/pepsi.jpg' },
            { id: 'mountain-dew-2l', name: '2-Liter Mountain Dew', calories: 880, slices: 1, fat: 0, protein: 0, carbs: 242, sodium: 280, image: '/images/menu/mountain-dew.jpg' },
            { id: 'bottle-20oz', name: '20oz Bottle', calories: 250, slices: 1, fat: 0, protein: 0, carbs: 69, sodium: 60, image: '/images/menu/20oz-bottle.jpg' },
        ]
    }
};

// FAQ data
const faqData = [
    {
        question: 'How many calories are in a Little Caesars Hot-N-Ready pizza?',
        answer: 'A Little Caesars Hot-N-Ready Pepperoni pizza has approximately 2,240 total calories (280 calories per slice × 8 slices). A Hot-N-Ready Cheese pizza has about 1,920 calories total (240 per slice).'
    },
    {
        question: 'What is the lowest calorie pizza at Little Caesars?',
        answer: 'The Hot-N-Ready Cheese pizza is the lowest calorie option at 240 calories per slice. The Veggie Pizza is also a healthier choice at 250 calories per slice with added vegetables and fiber.'
    },
    {
        question: 'How many calories are in Crazy Bread?',
        answer: 'An 8-piece order of Crazy Bread contains approximately 800 calories total (100 calories per breadstick). Stuffed Crazy Bread has more calories at about 150 per piece due to the cheese filling.'
    },
    {
        question: 'Are Little Caesars wings high in calories?',
        answer: 'Little Caesars wings are moderate in calories - an 8-piece order of Buffalo wings contains about 510 calories. They\'re high in protein (46g) and low in carbs, making them a decent option for low-carb diets.'
    },
    {
        question: 'How can I eat healthier at Little Caesars?',
        answer: 'To eat healthier: 1) Choose Veggie or Cheese pizza (lower calories), 2) Limit to 1-2 slices, 3) Skip the Crazy Bread or share it, 4) Choose water instead of soda, 5) Wings are high-protein, low-carb options.'
    },
    {
        question: 'How many calories in one slice of ExtraMostBestest?',
        answer: 'One slice of ExtraMostBestest Pepperoni pizza contains 350 calories. This is higher than regular Hot-N-Ready due to 80% more pepperoni and 25% more cheese.'
    },
    {
        question: 'What is the daily recommended calorie intake?',
        answer: 'The average daily calorie recommendation is 2,000-2,500 calories for adults. One Hot-N-Ready pizza provides about 2,240 calories - nearly a full day\'s worth if eaten entirely.'
    },
    {
        question: 'How accurate is this calorie calculator?',
        answer: 'Our calculator uses official Little Caesars nutrition data. Actual calories may vary slightly based on preparation. For exact nutrition information, check littlecaesars.com or ask in-store.'
    }
];

// Generate JSON-LD Schema
function generateSchema() {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebApplication',
                'name': 'Little Caesars Calorie Calculator',
                'description': 'Free online calculator to count calories in Little Caesars pizza, wings, crazy bread and more. Plan your meal and track nutrition.',
                'url': 'https://www.littlecaesarsmenu.us/little-caesars-calorie-calculator',
                'applicationCategory': 'HealthApplication',
                'operatingSystem': 'Web',
                'offers': {
                    '@type': 'Offer',
                    'price': '0',
                    'priceCurrency': 'USD'
                }
            },
            {
                '@type': 'FAQPage',
                'mainEntity': faqData.map(faq => ({
                    '@type': 'Question',
                    'name': faq.question,
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': faq.answer
                    }
                }))
            },
            {
                '@type': 'HowTo',
                'name': 'How to Use the Little Caesars Calorie Calculator',
                'description': 'Calculate the total calories in your Little Caesars order',
                'step': [
                    {
                        '@type': 'HowToStep',
                        'position': 1,
                        'name': 'Select Category',
                        'text': 'Choose from Pizzas, Sides, Wings, or Drinks'
                    },
                    {
                        '@type': 'HowToStep',
                        'position': 2,
                        'name': 'Add Items',
                        'text': 'Click on menu items to add them to your order'
                    },
                    {
                        '@type': 'HowToStep',
                        'position': 3,
                        'name': 'Adjust Quantities',
                        'text': 'For pizzas, select how many slices you\'ll eat'
                    },
                    {
                        '@type': 'HowToStep',
                        'position': 4,
                        'name': 'View Results',
                        'text': 'See total calories and nutritional breakdown'
                    }
                ]
            },
            {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                    { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.littlecaesarsmenu.us' },
                    { '@type': 'ListItem', 'position': 2, 'name': 'Calorie Calculator', 'item': 'https://www.littlecaesarsmenu.us/little-caesars-calorie-calculator' }
                ]
            }
        ]
    };
}

interface SelectedItem {
    id: string;
    name: string;
    calories: number;
    quantity: number;
    fat: number;
    protein: number;
    carbs: number;
    sodium: number;
    isSliceBased: boolean;
    caloriesPerUnit: number;
}

export default function CalorieCalculatorPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>('pizzas');
    const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);

    const addItem = (item: any, category: string) => {
        const isSliceBased = category === 'pizzas';
        const existingIndex = selectedItems.findIndex(i => i.id === item.id);

        if (existingIndex >= 0) {
            // Increase quantity
            const updated = [...selectedItems];
            updated[existingIndex].quantity += 1;
            updated[existingIndex].calories = updated[existingIndex].caloriesPerUnit * updated[existingIndex].quantity;
            updated[existingIndex].fat = item.fat * updated[existingIndex].quantity / (isSliceBased ? item.slices : 1);
            updated[existingIndex].protein = item.protein * updated[existingIndex].quantity / (isSliceBased ? item.slices : 1);
            updated[existingIndex].carbs = item.carbs * updated[existingIndex].quantity / (isSliceBased ? item.slices : 1);
            setSelectedItems(updated);
        } else {
            // Add new item
            const caloriesPerUnit = isSliceBased ? item.calories : item.calories;
            setSelectedItems([...selectedItems, {
                id: item.id,
                name: item.name,
                calories: caloriesPerUnit,
                quantity: 1,
                fat: item.fat / (isSliceBased ? item.slices : 1),
                protein: item.protein / (isSliceBased ? item.slices : 1),
                carbs: item.carbs / (isSliceBased ? item.slices : 1),
                sodium: item.sodium / (isSliceBased ? item.slices : 1),
                isSliceBased,
                caloriesPerUnit
            }]);
        }
    };

    const removeItem = (id: string) => {
        setSelectedItems(selectedItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity <= 0) {
            removeItem(id);
            return;
        }
        const updated = selectedItems.map(item => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: newQuantity,
                    calories: item.caloriesPerUnit * newQuantity
                };
            }
            return item;
        });
        setSelectedItems(updated);
    };

    const clearAll = () => setSelectedItems([]);

    const totals = selectedItems.reduce((acc, item) => ({
        calories: acc.calories + item.calories,
        fat: acc.fat + (item.fat * item.quantity),
        protein: acc.protein + (item.protein * item.quantity),
        carbs: acc.carbs + (item.carbs * item.quantity),
        sodium: acc.sodium + (item.sodium * item.quantity)
    }), { calories: 0, fat: 0, protein: 0, carbs: 0, sodium: 0 });

    const dailyValues = {
        calories: Math.round((totals.calories / 2000) * 100),
        fat: Math.round((totals.fat / 65) * 100),
        protein: Math.round((totals.protein / 50) * 100),
        carbs: Math.round((totals.carbs / 300) * 100),
        sodium: Math.round((totals.sodium / 2300) * 100)
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema()) }}
            />

            <main className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section style={{ background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)' }} className="py-16 text-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-block bg-white/20 backdrop-blur px-4 py-2 rounded-full text-sm font-bold mb-4">
                            🔢 FREE CALCULATOR
                        </div>
                        <h1 style={{ color: '#ffffff' }} className="text-4xl md:text-5xl font-black mb-4">
                            Little Caesars Calorie Calculator
                        </h1>
                        <p style={{ color: '#ffffff' }} className="text-xl max-w-2xl mx-auto mb-6">
                            Calculate calories for your entire order. Track nutrition for pizzas, wings, Crazy Bread & more!
                        </p>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                                🍕 All Menu Items
                            </div>
                            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                                📊 Nutrition Facts
                            </div>
                            <div className="bg-white/20 backdrop-blur px-4 py-2 rounded-full">
                                ⚡ Real-Time Totals
                            </div>
                        </div>
                    </div>
                </section>

                {/* Calculator Section */}
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid lg:grid-cols-3 gap-8">

                            {/* Menu Selection */}
                            <div className="lg:col-span-2">
                                {/* Category Tabs */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {Object.entries(menuCategories).map(([key, category]) => (
                                        <button
                                            key={key}
                                            onClick={() => setSelectedCategory(key)}
                                            style={{
                                                color: selectedCategory === key ? '#ffffff' : '#1f2937',
                                                backgroundColor: selectedCategory === key ? '#f97316' : '#ffffff'
                                            }}
                                            className="px-4 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
                                        >
                                            <span style={{ color: selectedCategory === key ? '#ffffff' : '#1f2937' }}>
                                                {category.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>

                                {/* Items Grid */}
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {menuCategories[selectedCategory as keyof typeof menuCategories].items.map((item) => (
                                        <div
                                            key={item.id}
                                            onClick={() => addItem(item, selectedCategory)}
                                            className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all cursor-pointer border-2 border-transparent hover:border-orange-500 group"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center text-2xl">
                                                    {selectedCategory === 'pizzas' ? '🍕' :
                                                        selectedCategory === 'sides' ? '🥖' :
                                                            selectedCategory === 'wings' ? '🍗' : '🥤'}
                                                </div>
                                                <div className="flex-1">
                                                    <h3 style={{ color: '#111827' }} className="font-bold group-hover:text-orange-600 transition-colors">
                                                        {item.name}
                                                    </h3>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <span style={{ color: '#ea580c' }} className="font-black text-lg">
                                                            {item.calories} cal
                                                        </span>
                                                        {selectedCategory === 'pizzas' && (
                                                            <span style={{ color: '#6b7280' }} className="text-xs">per slice</span>
                                                        )}
                                                    </div>
                                                </div>
                                                <div style={{ color: '#ffffff', backgroundColor: '#f97316' }} className="w-8 h-8 rounded-full flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                                                    +
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Order Summary */}
                            <div className="lg:col-span-1">
                                <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-4">
                                    <div className="flex items-center justify-between mb-4">
                                        <h2 style={{ color: '#111827' }} className="text-xl font-bold">Your Order</h2>
                                        {selectedItems.length > 0 && (
                                            <button
                                                onClick={clearAll}
                                                style={{ color: '#ef4444' }}
                                                className="text-sm hover:underline"
                                            >
                                                Clear All
                                            </button>
                                        )}
                                    </div>

                                    {selectedItems.length === 0 ? (
                                        <div className="text-center py-8">
                                            <p className="text-4xl mb-2">🍕</p>
                                            <p style={{ color: '#6b7280' }}>Click items to add them</p>
                                        </div>
                                    ) : (
                                        <div className="space-y-3 mb-6 max-h-64 overflow-y-auto">
                                            {selectedItems.map((item) => (
                                                <div key={item.id} className="flex items-center gap-3 bg-gray-50 rounded-lg p-3">
                                                    <div className="flex-1">
                                                        <p style={{ color: '#111827' }} className="font-semibold text-sm">{item.name}</p>
                                                        <p style={{ color: '#ea580c' }} className="font-bold">{item.calories} cal</p>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                            style={{ color: '#111827', backgroundColor: '#e5e7eb' }}
                                                            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-300"
                                                        >
                                                            -
                                                        </button>
                                                        <span style={{ color: '#111827' }} className="font-bold w-6 text-center">
                                                            {item.quantity}{item.isSliceBased ? '' : ''}
                                                        </span>
                                                        <button
                                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                            style={{ color: '#ffffff', backgroundColor: '#f97316' }}
                                                            className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-orange-600"
                                                        >
                                                            +
                                                        </button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Totals */}
                                    <div className="border-t pt-4">
                                        <div className="text-center mb-4">
                                            <p style={{ color: '#6b7280' }} className="text-sm">Total Calories</p>
                                            <p style={{ color: '#ea580c' }} className="text-4xl font-black">{Math.round(totals.calories)}</p>
                                            <p style={{ color: '#6b7280' }} className="text-sm">{dailyValues.calories}% of daily value</p>
                                        </div>

                                        {selectedItems.length > 0 && (
                                            <div className="space-y-2">
                                                <div className="flex justify-between text-sm">
                                                    <span style={{ color: '#4b5563' }}>Fat</span>
                                                    <span style={{ color: '#111827' }} className="font-semibold">{Math.round(totals.fat)}g ({dailyValues.fat}%)</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span style={{ color: '#4b5563' }}>Protein</span>
                                                    <span style={{ color: '#111827' }} className="font-semibold">{Math.round(totals.protein)}g ({dailyValues.protein}%)</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span style={{ color: '#4b5563' }}>Carbs</span>
                                                    <span style={{ color: '#111827' }} className="font-semibold">{Math.round(totals.carbs)}g ({dailyValues.carbs}%)</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span style={{ color: '#4b5563' }}>Sodium</span>
                                                    <span style={{ color: '#111827' }} className="font-semibold">{Math.round(totals.sodium)}mg ({dailyValues.sodium}%)</span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Calorie Quick Reference */}
                <section className="py-12 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 style={{ color: '#111827' }} className="text-3xl font-bold text-center mb-8">
                            Little Caesars Calories Per Slice
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="w-full max-w-3xl mx-auto">
                                <thead>
                                    <tr className="bg-orange-500 text-white">
                                        <th className="px-4 py-3 text-left rounded-tl-xl">Pizza</th>
                                        <th className="px-4 py-3 text-center">Per Slice</th>
                                        <th className="px-4 py-3 text-center rounded-tr-xl">Whole Pizza</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {menuCategories.pizzas.items.map((pizza, idx) => (
                                        <tr key={pizza.id} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                                            <td style={{ color: '#111827' }} className="px-4 py-3 font-semibold">{pizza.name}</td>
                                            <td style={{ color: '#ea580c' }} className="px-4 py-3 text-center font-bold">{pizza.calories} cal</td>
                                            <td style={{ color: '#111827' }} className="px-4 py-3 text-center font-bold">{pizza.calories * 8} cal</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Healthy Eating Tips */}
                <section className="py-12 bg-orange-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 style={{ color: '#111827' }} className="text-3xl font-bold text-center mb-8">
                            Tips for Eating Healthier at Little Caesars
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <span className="text-3xl mb-3 block">🥗</span>
                                <h3 style={{ color: '#111827' }} className="font-bold text-lg mb-2">Choose Veggie Pizza</h3>
                                <p style={{ color: '#4b5563' }}>At 250 calories per slice, it's one of the lowest-calorie options with added fiber from vegetables.</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <span className="text-3xl mb-3 block">🍕</span>
                                <h3 style={{ color: '#111827' }} className="font-bold text-lg mb-2">Limit to 2-3 Slices</h3>
                                <p style={{ color: '#4b5563' }}>A full pizza is 2,000+ calories. Stick to 2-3 slices (560-840 cal) for a reasonable meal.</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <span className="text-3xl mb-3 block">💧</span>
                                <h3 style={{ color: '#111827' }} className="font-bold text-lg mb-2">Skip the Soda</h3>
                                <p style={{ color: '#4b5563' }}>A 2-liter has 800+ calories. Choose water or bring your own zero-calorie drink.</p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-md">
                                <span className="text-3xl mb-3 block">🍗</span>
                                <h3 style={{ color: '#111827' }} className="font-bold text-lg mb-2">Wings for Low-Carb</h3>
                                <p style={{ color: '#4b5563' }}>Wings are high in protein (46g) and low in carbs (2g) - great for keto dieters.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="py-16 bg-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12">
                            <h2 style={{ color: '#111827' }} className="text-3xl md:text-4xl font-bold mb-4">
                                Little Caesars Calorie FAQ
                            </h2>
                            <p style={{ color: '#4b5563' }} className="text-xl">
                                Common questions about nutrition and calories
                            </p>
                        </div>
                        <div className="space-y-4">
                            {faqData.map((faq, index) => (
                                <details
                                    key={index}
                                    className="group bg-orange-50 rounded-2xl overflow-hidden border border-orange-100 hover:shadow-lg transition-all"
                                >
                                    <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-orange-100 transition-colors">
                                        <h3 style={{ color: '#111827' }} className="text-lg font-semibold group-hover:text-orange-700 transition-colors pr-4">
                                            {faq.question}
                                        </h3>
                                        <svg className="w-6 h-6 text-orange-600 transform group-open:rotate-180 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </summary>
                                    <div style={{ color: '#374151' }} className="px-6 pb-6 leading-relaxed border-t border-orange-100 pt-4">
                                        {faq.answer}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section style={{ background: 'linear-gradient(135deg, #ea580c 0%, #dc2626 100%)' }} className="py-16">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 style={{ color: '#ffffff' }} className="text-3xl md:text-4xl font-bold mb-4">
                            View Full Menu with Prices
                        </h2>
                        <p style={{ color: '#ffffff' }} className="text-xl mb-8 opacity-90">
                            See all Little Caesars menu items, prices, and nutritional information
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                href="/little-caesars-menu"
                                className="bg-white text-orange-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-50 transition-colors shadow-xl"
                            >
                                View Full Menu
                            </Link>
                            <Link
                                href="/little-caesars-nutrition-calories"
                                className="bg-white/20 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/30 transition-colors border-2 border-white"
                            >
                                Complete Nutrition Guide
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
