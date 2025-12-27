'use client'

import Link from 'next/link'
import {
    Pizza,
    MapPin,
    Tag,
    BookOpen,
    Calculator,
    Gift,
    Star,
    Clock,
    Flame,
    Utensils,
    TrendingUp,
    DollarSign,
    Heart
} from 'lucide-react'

// All internal page links for SEO
const internalLinks = {
    main: [
        { href: '/menu', label: 'Full Menu', icon: Pizza, desc: 'Complete menu with prices' },
        { href: '/menus-prices', label: 'Menu Prices', icon: DollarSign, desc: 'All prices updated 2025' },
        { href: '/store-locator', label: 'Store Locator', icon: MapPin, desc: 'Find nearest location' },
        { href: '/little-caesars-coupons-january-2025', label: 'Coupons & Deals', icon: Tag, desc: '15+ verified codes' },
    ],
    popular: [
        { href: '/little-caesars-pretzel-crust-pizza-2025', label: 'Pretzel Crust Pizza', icon: Flame, desc: 'Limited time - $9.99' },
        { href: '/little-caesars-9-99-menu', label: '$9.99 Value Menu', icon: DollarSign, desc: 'Best value deals' },
        { href: '/crazy-puffs', label: 'Crazy Puffs Guide', icon: Star, desc: 'New snack everyone loves' },
        { href: '/little-caesars-new-items-2025', label: 'New Items 2025', icon: TrendingUp, desc: '10 new menu items' },
    ],
    guides: [
        { href: '/little-caesars-nutrition-calories', label: 'Nutrition Guide', icon: Heart, desc: 'Calories & healthy options' },
        { href: '/meal-planner', label: 'Meal Planner', icon: Calculator, desc: 'Build custom meals' },
        { href: '/gift-cards', label: 'Gift Cards', icon: Gift, desc: 'Buy & check balance' },
        { href: '/little-caesars-vs-dominos', label: 'LC vs Dominos', icon: Utensils, desc: 'Pizza comparison' },
    ],
    blogs: [
        { href: '/happy-christmas-2025', label: 'Christmas 2025', icon: Star, desc: 'Holiday deals & hours' },
        { href: '/little-caesars-christmas-hours', label: 'Christmas Hours', icon: Clock, desc: 'Holiday schedule' },
        { href: '/posts', label: 'All Blog Posts', icon: BookOpen, desc: 'Latest news & guides' },
        { href: '/important-blogs', label: 'Featured Blogs', icon: TrendingUp, desc: 'Popular articles' },
    ]
}

// External links for authority
const externalLinks = [
    { href: 'https://www.littlecaesars.com', label: 'Official Website', desc: 'Little Caesars official site' },
    { href: 'https://www.littlecaesars.com/menu', label: 'Official Menu', desc: 'View official menu' },
    { href: 'https://www.littlecaesars.com/store-locator', label: 'Official Locator', desc: 'Find a store' },
]

interface InternalLinksProps {
    currentPage?: string
    showExternal?: boolean
    variant?: 'full' | 'compact' | 'minimal'
}

export function InternalLinks({
    currentPage = '',
    showExternal = true,
    variant = 'full'
}: InternalLinksProps) {

    // Filter out current page from links
    const filterLinks = (links: typeof internalLinks.main) =>
        links.filter(link => link.href !== currentPage && link.href !== `/${currentPage}`)

    if (variant === 'minimal') {
        return (
            <section className="py-8 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Related Pages</h3>
                    <div className="flex flex-wrap gap-3">
                        {[...filterLinks(internalLinks.main), ...filterLinks(internalLinks.popular)].slice(0, 8).map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-600 transition-colors border border-gray-200"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        )
    }

    if (variant === 'compact') {
        return (
            <section className="py-10 bg-gradient-to-b from-white to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                        Explore More on Little Caesars Menu
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {filterLinks([...internalLinks.main, ...internalLinks.popular]).slice(0, 8).map((link, i) => {
                            const Icon = link.icon
                            return (
                                <Link
                                    key={i}
                                    href={link.href}
                                    className="flex items-center gap-3 p-4 bg-white rounded-xl hover:shadow-lg transition-all border border-gray-100 group"
                                >
                                    <Icon className="w-5 h-5 text-orange-500 group-hover:text-orange-600" />
                                    <span className="font-medium text-gray-800 group-hover:text-orange-600 text-sm">{link.label}</span>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
    }

    // Full variant
    return (
        <section className="py-12 bg-gradient-to-b from-gray-50 to-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                        Explore Little Caesars Menu
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find everything you need - from menu prices to coupons, nutrition info to store locations.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Main Pages */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Pizza className="w-5 h-5 text-orange-500" />
                            Menu & Prices
                        </h3>
                        <ul className="space-y-3">
                            {filterLinks(internalLinks.main).map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-start gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                                    >
                                        <span className="text-orange-400 group-hover:text-orange-600">→</span>
                                        <div>
                                            <span className="font-medium">{link.label}</span>
                                            <p className="text-xs text-gray-400">{link.desc}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Popular Content */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Flame className="w-5 h-5 text-red-500" />
                            Popular Now
                        </h3>
                        <ul className="space-y-3">
                            {filterLinks(internalLinks.popular).map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-start gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                                    >
                                        <span className="text-orange-400 group-hover:text-orange-600">→</span>
                                        <div>
                                            <span className="font-medium">{link.label}</span>
                                            <p className="text-xs text-gray-400">{link.desc}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Guides */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-blue-500" />
                            Helpful Guides
                        </h3>
                        <ul className="space-y-3">
                            {filterLinks(internalLinks.guides).map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-start gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                                    >
                                        <span className="text-orange-400 group-hover:text-orange-600">→</span>
                                        <div>
                                            <span className="font-medium">{link.label}</span>
                                            <p className="text-xs text-gray-400">{link.desc}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Blog Posts */}
                    <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <TrendingUp className="w-5 h-5 text-green-500" />
                            Latest Blogs
                        </h3>
                        <ul className="space-y-3">
                            {filterLinks(internalLinks.blogs).map((link, i) => (
                                <li key={i}>
                                    <Link
                                        href={link.href}
                                        className="group flex items-start gap-2 text-gray-600 hover:text-orange-600 transition-colors"
                                    >
                                        <span className="text-orange-400 group-hover:text-orange-600">→</span>
                                        <div>
                                            <span className="font-medium">{link.label}</span>
                                            <p className="text-xs text-gray-400">{link.desc}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* External Links for Authority */}
                {showExternal && (
                    <div className="mt-10 pt-8 border-t border-gray-200">
                        <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4 text-center">
                            Official Little Caesars Resources
                        </h3>
                        <div className="flex flex-wrap justify-center gap-4">
                            {externalLinks.map((link, i) => (
                                <a
                                    key={i}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 hover:bg-orange-100 hover:text-orange-600 transition-colors"
                                >
                                    {link.label} ↗
                                </a>
                            ))}
                        </div>
                        <p className="text-center text-xs text-gray-400 mt-4">
                            This site is not affiliated with Little Caesars Enterprises, Inc.
                            For official information, visit <a href="https://www.littlecaesars.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline">littlecaesars.com</a>.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

// Quick Links Component for inline use
export function QuickLinks({ exclude = [] }: { exclude?: string[] }) {
    const allLinks = [...internalLinks.main, ...internalLinks.popular]
    const filtered = allLinks.filter(link => !exclude.includes(link.href))

    return (
        <div className="flex flex-wrap gap-2 my-4">
            {filtered.slice(0, 6).map((link, i) => (
                <Link
                    key={i}
                    href={link.href}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors"
                >
                    {link.label}
                </Link>
            ))}
        </div>
    )
}

// Related Posts Component
export function RelatedPosts({ currentSlug = '' }: { currentSlug?: string }) {
    const posts = [
        { slug: 'pretzel-crust-pizza-2025', title: 'Pretzel Crust Pizza 2025', href: '/little-caesars-pretzel-crust-pizza-2025' },
        { slug: '9-99-menu', title: '$9.99 Value Menu', href: '/little-caesars-9-99-menu' },
        { slug: 'crazy-puffs', title: 'Crazy Puffs Guide', href: '/crazy-puffs' },
        { slug: 'new-items-2025', title: 'New Items 2025', href: '/little-caesars-new-items-2025' },
        { slug: 'coupons', title: 'Coupons & Deals', href: '/little-caesars-coupons-january-2025' },
        { slug: 'nutrition', title: 'Nutrition Guide', href: '/little-caesars-nutrition-calories' },
    ]

    const filtered = posts.filter(p => p.slug !== currentSlug).slice(0, 4)

    return (
        <div className="bg-orange-50 rounded-2xl p-6 my-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Related Articles</h3>
            <div className="grid sm:grid-cols-2 gap-4">
                {filtered.map((post, i) => (
                    <Link
                        key={i}
                        href={post.href}
                        className="block p-4 bg-white rounded-xl hover:shadow-md transition-all border border-orange-100 group"
                    >
                        <span className="font-medium text-gray-800 group-hover:text-orange-600">{post.title}</span>
                    </Link>
                ))}
            </div>
        </div>
    )
}
