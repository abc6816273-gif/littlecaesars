'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { useState } from 'react'

interface BlogCardProps {
  blog: {
    id: string
    category: string
    title: string
    excerpt: string
    image: string
    imageAlt: string
    date: string
    readTime: string
    slug: string
    isNew?: boolean
    featured?: boolean
  }
  featured?: boolean
  priority?: boolean
}

export default function BlogCard({ blog, featured = false, priority = false }: BlogCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative h-56 bg-gray-100 overflow-hidden">
        {!imageError ? (
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes={priority ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' : '(max-width: 768px) 100vw, 33vw'}
            priority={priority}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-orange-100 to-red-100">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 bg-little-caesars-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-2xl">🍕</span>
              </div>
              <p className="text-sm font-medium">{blog.category}</p>
            </div>
          </div>
        )}

        {/* NEW Badge - Top Right */}
        {blog.isNew && (
          <div className="absolute top-3 right-3">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
              NEW
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category Label */}
        <span className="text-red-500 text-sm font-medium">
          {blog.category}
        </span>

        {/* Title */}
        <h2 className="font-bold text-gray-900 text-lg mt-2 mb-3 line-clamp-2 hover:text-red-600 transition-colors">
          <Link href={`/${blog.slug}`}>
            {blog.title}
          </Link>
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4">
          {blog.excerpt}
        </p>

        {/* Date & Read Time */}
        <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {blog.date}
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {blog.readTime}
          </div>
        </div>

        {/* Read Full Guide Button */}
        <Link
          href={`/${blog.slug}`}
          className="inline-flex items-center w-full justify-center bg-gradient-to-r from-little-caesars-orange to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-little-caesars-orange transition-all duration-200 group"
        >
          Read Full Guide
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}
