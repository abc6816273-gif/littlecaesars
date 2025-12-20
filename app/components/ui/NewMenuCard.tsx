import Image from 'next/image'
import Link from 'next/link'
import { Badge } from './Badge'
import { formatPrice } from '@/lib/format'
import { Menu } from '@/lib/types'
import { Flame, Star } from 'lucide-react'

interface NewMenuCardProps {
  menu: Menu
  showCategory?: boolean
}

export function NewMenuCard({ menu, showCategory = false }: NewMenuCardProps) {
  // Force rebuild - new perfect image cards
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {menu.featuredImage && (
        <div className="relative w-full bg-gray-100" style={{ height: '800px' }}>
          <Link href="/menus-prices">
            <img
              src={menu.featuredImage.node.sourceUrl}
              alt={menu.featuredImage.node.altText || menu.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          </Link>
          
          {/* Price badge overlay */}
          <div className="absolute top-3 right-3">
            <div className="bg-orange text-white px-2 py-1 rounded-md font-slab font-slab-bold text-sm shadow-lg">
              {formatPrice(menu.menuFields.price)}
            </div>
          </div>
        </div>
      )}
      
      <div className="p-4">
        {/* Title and badges */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-slab font-slab-bold text-lg text-stone line-clamp-2 flex-1">
            <Link 
              href="/menus-prices"
              className="hover:text-orange transition-colors duration-200"
            >
              {menu.title}
            </Link>
          </h3>
          
          <div className="flex gap-1 ml-2">
            {menu.menuFields.isNew && (
              <Badge variant="new" size="sm">
                <Flame className="h-3 w-3 mr-1" />
                New
              </Badge>
            )}
            {menu.menuFields.isPopular && (
              <Badge variant="popular" size="sm">
                <Star className="h-3 w-3 mr-1" />
                Popular
              </Badge>
            )}
          </div>
        </div>
        
        {/* Category */}
        {showCategory && (
          <div className="mb-2">
            <Badge variant="category" size="sm">
              {menu.menuFields.category}
            </Badge>
          </div>
        )}
        
        {/* Description */}
        <p className="text-stone/70 text-sm mb-3 line-clamp-3">
          {menu.menuFields.description}
        </p>
        
        {/* Bottom row: Calories and Price */}
        <div className="flex justify-between items-center">
          <div className="text-xs text-stone/60">
            {menu.menuFields.calories && (
              <span>{menu.menuFields.calories} cal</span>
            )}
          </div>
          
          {!menu.featuredImage && (
            <div className="font-slab font-slab-bold text-orange">
              {formatPrice(menu.menuFields.price)}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

interface NewMenuListItemProps {
  menu: Menu
}

export function NewMenuListItem({ menu }: NewMenuListItemProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-stone/10 p-6 transition-all duration-300 hover:shadow-md">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-start gap-4">
            {menu.featuredImage && (
              <div className="relative flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden" style={{ width: '80px', height: '80px' }}>
                <img
                  src={menu.featuredImage.node.sourceUrl}
                  alt={menu.featuredImage.node.altText || menu.title}
                  className="w-full h-full object-cover"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
              </div>
            )}
            
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-slab font-slab-bold text-lg text-stone">
                  <Link 
                    href="/menus-prices"
                    className="hover:text-orange transition-colors duration-200"
                  >
                    {menu.title}
                  </Link>
                </h3>
                
                <div className="flex gap-1 ml-2">
                  {menu.menuFields.isNew && (
                    <Badge variant="new" size="sm">
                      <Flame className="h-3 w-3 mr-1" />
                      New
                    </Badge>
                  )}
                  {menu.menuFields.isPopular && (
                    <Badge variant="popular" size="sm">
                      <Star className="h-3 w-3 mr-1" />
                      Popular
                    </Badge>
                  )}
                </div>
              </div>
              
              <p className="text-stone/70 text-sm mb-3">
                {menu.menuFields.description}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="text-xs text-stone/60">
                  {menu.menuFields.calories && (
                    <span>{menu.menuFields.calories} cal</span>
                  )}
                </div>
                
                <div className="font-slab font-slab-bold text-orange text-lg">
                  {formatPrice(menu.menuFields.price)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
