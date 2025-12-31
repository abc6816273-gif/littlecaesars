import { Metadata } from 'next'
import Link from 'next/link'
import { Clock, MapPin, Phone } from 'lucide-react'

export const metadata: Metadata = {
    title: 'Little Caesars Hours - Store Opening & Closing Times',
    description: 'Find Little Caesars store hours near you. Most locations open 11 AM - 10 PM daily. Check holiday hours, breakfast times, and 24-hour locations.',
    keywords: 'little caesars hours, opening hours, closing time, store hours today, holiday hours',
    openGraph: {
        title: 'Little Caesars Hours - Opening & Closing Times',
        description: 'Check Little Caesars store hours. Most locations open 11 AM - 10 PM. Find hours near you.',
        url: 'https://littlecaesarsmenu.us/little-caesars-hours',
        type: 'website',
    },
    alternates: {
        canonical: 'https://littlecaesarsmenu.us/little-caesars-hours',
    },
}

export default function LittleCaesarsHoursPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <Clock className="w-16 h-16 mx-auto mb-4" />
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Little Caesars Hours
                    </h1>
                    <p className="text-xl md:text-2xl mb-2">
                        Store Opening & Closing Times
                    </p>
                    <p className="text-lg opacity-90">
                        Most locations: 11:00 AM - 10:00 PM Daily
                    </p>
                </div>
            </section>

            {/* Typical Hours Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        📅 Typical Store Hours
                    </h2>

                    <div className="bg-orange-50 border-2 border-orange-200 rounded-lg p-8 mb-8">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b-2 border-orange-300">
                                    <th className="text-left py-3 text-lg">Day</th>
                                    <th className="text-right py-3 text-lg">Hours</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { day: 'Monday', hours: '11:00 AM - 10:00 PM' },
                                    { day: 'Tuesday', hours: '11:00 AM - 10:00 PM' },
                                    { day: 'Wednesday', hours: '11:00 AM - 10:00 PM' },
                                    { day: 'Thursday', hours: '11:00 AM - 10:00 PM' },
                                    { day: 'Friday', hours: '11:00 AM - 11:00 PM' },
                                    { day: 'Saturday', hours: '11:00 AM - 11:00 PM' },
                                    { day: 'Sunday', hours: '11:00 AM - 10:00 PM' },
                                ].map((item) => (
                                    <tr key={item.day} className="border-b border-orange-100">
                                        <td className="py-3 font-semibold">{item.day}</td>
                                        <td className="py-3 text-right">{item.hours}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <p className="text-sm text-gray-600 mt-4 text-center">
                            ⚠️ Hours may vary by location. Check your local store for exact times.
                        </p>
                    </div>

                    {/* Find Your Store Hours CTA */}
                    <div className="text-center mb-12">
                        <Link
                            href="/store-locator"
                            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition"
                        >
                            Find Hours for Your Location →
                        </Link>
                    </div>
                </div>
            </section>

            {/* Holiday Hours */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        🎄 Holiday Hours
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-4 text-green-600">Open on Holidays</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✓</span>
                                    <span>New Year's Day (Reduced hours)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✓</span>
                                    <span>Memorial Day</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✓</span>
                                    <span>Independence Day</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-500">✓</span>
                                    <span>Labor Day</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow">
                            <h3 className="text-xl font-bold mb-4 text-red-600">Closed or Limited Hours</h3>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500">✗</span>
                                    <span>Thanksgiving Day (Most locations closed)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-red-500">✗</span>
                                    <span>Christmas Day (Most locations closed)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-500">⚠</span>
                                    <span>Christmas Eve (Reduced hours)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-orange-500">⚠</span>
                                    <span>New Year's Eve (Reduced hours)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
                        <p className="text-center text-lg">
                            <strong>Pro Tip:</strong> Always call ahead on major holidays to confirm hours: <Phone className="inline w-5 h-5" />
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-8">
                        Frequently Asked Questions
                    </h2>

                    <div className="space-y-4">
                        {[
                            {
                                q: 'What time does Little Caesars open?',
                                a: 'Most Little Caesars locations open at 11:00 AM daily. Some locations may open earlier or later depending on the area.',
                            },
                            {
                                q: 'What time does Little Caesars close?',
                                a: 'Typical closing time is 10:00 PM Monday-Thursday and Sunday, and 11:00 PM on Friday and Saturday.',
                            },
                            {
                                q: 'Is Little Caesars open 24 hours?',
                                a: 'No, Little Caesars does not have 24-hour locations. All stores close by 11:00 PM at the latest.',
                            },
                            {
                                q: 'Are Little Caesars hours the same on weekends?',
                                a: 'Weekend hours (Friday-Saturday) are typically 11 AM - 11 PM, staying open one hour later than weekdays.',
                            },
                        ].map((faq, idx) => (
                            <details key={idx} className="bg-gray-50 p-6 rounded-lg">
                                <summary className="font-bold text-lg cursor-pointer hover:text-orange-600">
                                    {faq.q}
                                </summary>
                                <p className="mt-3 text-gray-700">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-2xl font-bold text-center mb-8">You May Also Need</h2>

                    <div className="grid md:grid-cols-3 gap-4">
                        <Link
                            href="/little-caesars-near-me"
                            className="bg-white hover:bg-orange-50 p-6 rounded-lg text-center transition shadow"
                        >
                            <MapPin className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                            <h3 className="font-bold text-lg">Find Locations</h3>
                        </Link>

                        <Link
                            href="/little-caesars-menu"
                            className="bg-white hover:bg-orange-50 p-6 rounded-lg text-center transition shadow"
                        >
                            <h3 className="font-bold text-lg">View Menu</h3>
                        </Link>

                        <Link
                            href="/little-caesars-deals-today"
                            className="bg-white hover:bg-orange-50 p-6 rounded-lg text-center transition shadow"
                        >
                            <h3 className="font-bold text-lg">Today's Deals</h3>
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
