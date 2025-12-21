'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, Star } from 'lucide-react'
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
    <article className={`
      bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300
      ${featured ? 'lg:col-span-1' : ''}
    `}>
      {/* Image Container */}
      <div className="relative h-64 bg-gradient-to-br from-orange-100 to-red-100 overflow-hidden">
        {!imageError ? (
          <Image
            src={blog.image}
            alt={blog.imageAlt}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
            sizes={priority ? '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' : '(max-width: 768px) 100vw, 33vw'}
            priority={priority}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 bg-little-caesars-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Star className="w-8 h-8 text-little-caesars-orange" />
              </div>
              <p className="text-sm font-medium">Blog Image</p>
              <p className="text-xs">{blog.category}</p>
            </div>
          </div>
        )}

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-little-caesars-orange text-white px-3 py-1 rounded-full text-xs font-bold">
            {blog.category}
          </span>
        </div>

        {/* New Badge */}
        {blog.isNew && (
          <div className="absolute top-4 right-4">
            <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">
              NEW
            </span>
          </div>
        )}

        {/* Featured Badge */}
        {blog.featured && (
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="text-xs font-bold text-gray-900">Featured</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className={`font-bold text-gray-900 mb-3 hover:text-little-caesars-orange transition-colors ${featured ? 'text-xl md:text-2xl' : 'text-xl'
          }`}>
          <Link href={`/${blog.slug}`} className="line-clamp-2">
            {blog.title}
          </Link>
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {blog.excerpt}
        </p>

        {/* Meta Information */}
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

        {/* Read More Button */}
        <Link
          href={`/${blog.slug}`}
          className="inline-flex items-center w-full justify-center bg-gradient-to-r from-little-caesars-orange to-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-600 hover:to-little-caesars-orange transition-all duration-200 transform hover:scale-105 group"
        >
          Read Full Guide
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  )
}
