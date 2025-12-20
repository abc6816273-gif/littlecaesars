'use client'

import Image from 'next/image'
import { DollarSign, Flame } from 'lucide-react'
import { useState } from 'react'

interface MenuCardProps {
  category: string
  title: string
  price: string
  calories: string
  description: string
  imagePath: string
  imageAlt: string
}

export default function MenuCard({
  category,
  title,
  price,
  calories,
  description,
  imagePath,
  imageAlt
}: MenuCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
      {/* Image Container */}
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-red-100">
        {!imageError ? (
          <Image
            src={imagePath}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <div className="w-16 h-16 bg-little-caesars-orange/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <DollarSign className="w-8 h-8 text-little-caesars-orange" />
              </div>
              <p className="text-sm font-medium">Image Coming Soon</p>
              <p className="text-xs">{title}</p>
            </div>
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-little-caesars-orange text-white px-3 py-1 rounded-full text-xs font-bold">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        
        {/* Price and Calories */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center text-little-caesars-orange font-bold text-lg">
            <DollarSign className="w-5 h-5 mr-1" />
            {price.replace('$', '')}
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <Flame className="w-4 h-4 mr-1 text-red-500" />
            {calories}
          </div>
        </div>

        {/* Action Button */}
        <button className="w-full bg-gradient-to-r from-little-caesars-orange to-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-red-600 hover:to-little-caesars-orange transition-all duration-200 transform hover:scale-105">
          Add to Order
        </button>
      </div>
    </div>
  )
}
