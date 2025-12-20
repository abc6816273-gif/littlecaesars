'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Clock, User, ArrowRight, Star, TrendingUp } from 'lucide-react'

interface HomepageMenuSectionProps {
  className?: string
}

interface BlogPost {
  id: string
  title: string
  excerpt: string
  slug: string
  date: string
  featuredImage?: {
    node?: {
      sourceUrl?: string
    }
  }
  categories?: {
    nodes?: Array<{
      name: string
    }>
  }
}

// SEO OPTIMIZED HOMEPAGE SECTIONS WITH TRENDING BLOGS: ${new Date().toISOString()}
export function ModernHomepageMenuSection({ className = '' }: HomepageMenuSectionProps) {
  const [trendingBlogs, setTrendingBlogs] = useState<BlogPost[]>([])
  const [blogsLoading, setBlogsLoading] = useState(true)
  
  // Fetch trending blogs
  useEffect(() => {
    const fetchTrendingBlogs = async () => {
      try {
        const response = await fetch('/api/posts?limit=3')
        if (response.ok) {
          const data = await response.json()
          setTrendingBlogs(data.posts?.nodes || [])
        }
      } catch (error) {
        console.error('Error fetching trending blogs:', error)
      } finally {
        setBlogsLoading(false)
      }
    }
    
    fetchTrendingBlogs()
  }, [])
  
  // CONSOLE DEBUG - SEO OPTIMIZED COMPONENT
  console.log('🚀 SEO OPTIMIZED HOMEPAGE SECTIONS LOADED:', new Date().toISOString())
  console.log('📈 Trending blogs:', trendingBlogs.length)

  return (
    <section className={`py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-stone-50 to-stone-100 ${className}`}>
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">

        {/* Trending Blogs Section - SEO Optimized */}
        <div className="bg-gradient-to-br from-stone-50 to-stone-100 rounded-3xl p-6 sm:p-8 mb-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <TrendingUp className="h-6 w-6 text-texas-red" />
              <h2 className="font-slab text-2xl sm:text-3xl font-bold text-stone-900">
                Trending Blog Posts
                </h2>
            </div>
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto">
              Stay updated with latest menu news, cooking tips, and restaurant insights
                </p>
              </div>
              
          {blogsLoading ? (
            // Loading skeleton
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                  <div className="aspect-video bg-stone-200"></div>
                  <div className="p-4">
                    <div className="h-4 bg-stone-200 rounded mb-2"></div>
                    <div className="h-3 bg-stone-200 rounded w-3/4 mb-3"></div>
                    <div className="flex justify-between items-center">
                      <div className="h-3 bg-stone-200 rounded w-20"></div>
                      <div className="h-3 bg-stone-200 rounded w-16"></div>
                    </div>
                  </div>
                    </div>
              ))}
                  </div>
          ) : (
            // Trending blogs grid
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingBlogs.length > 0 ? (
                trendingBlogs.slice(0, 3).map((blog) => (
                  <Link
                    key={blog.id}
                    href={`/${blog.slug}`}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-stone-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      {blog.featuredImage?.node?.sourceUrl ? (
                        <Image
                          src={blog.featuredImage.node.sourceUrl}
                          alt={blog.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-texas-yellow/20 to-texas-red/20 flex items-center justify-center">
                          <div className="text-center">
                            <Star className="h-12 w-12 text-texas-yellow mx-auto mb-2" />
                            <p className="text-texas-black font-semibold text-sm">Texas Roadhouse</p>
                    </div>
                  </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="bg-texas-red text-white text-xs font-bold px-2 py-1 rounded-full">
                          TRENDING
                        </span>
                    </div>
                  </div>
                    <div className="p-4">
                      <h3 className="font-slab font-bold text-stone-900 mb-2 group-hover:text-texas-red transition-colors line-clamp-2">
                        {blog.title}
                </h3>
                      {blog.excerpt && (
                        <p className="text-stone-600 text-sm mb-3 line-clamp-2">
                          {blog.excerpt.replace(/<[^>]*>/g, '')}
                </p>
                      )}
                      <div className="flex justify-between items-center text-xs text-stone-500">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{new Date(blog.date).toLocaleDateString()}</span>
              </div>
                        {blog.categories?.nodes?.[0]?.name && (
                          <span className="bg-texas-yellow/10 text-texas-black px-2 py-1 rounded-full">
                            {blog.categories.nodes[0].name}
                    </span>
                  )}
                </div>
                    </div>
                  </Link>
                ))
              ) : (
                // Fallback content when no blogs
                <div className="col-span-full text-center py-12">
                  <TrendingUp className="h-16 w-16 text-stone-400 mx-auto mb-4" />
                  <h3 className="text-xl font-slab font-bold text-stone-700 mb-2">
                    Blog Posts Coming Soon!
                  </h3>
                  <p className="text-stone-600 max-w-md mx-auto">
                    We're working on bringing you the latest Texas Roadhouse news, menu updates, and cooking tips.
                      </p>
                    </div>
                  )}
                </div>
          )}
          
          {/* View All Blogs CTA */}
          {trendingBlogs.length > 0 && (
            <div className="text-center mt-8">
              <Link
                href="/posts"
                className="inline-flex items-center gap-2 bg-texas-red text-white px-6 py-3 rounded-full font-bold hover:bg-texas-red/90 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View All Blog Posts
                <ArrowRight className="h-4 w-4" />
              </Link>
                    </div>
                  )}
                </div>
      </div>
    </section>
  )
}
