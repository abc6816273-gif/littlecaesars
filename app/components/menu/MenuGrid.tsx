import { Menu } from '@/lib/types'
import MenuCard from '@/components/ui/MenuCard'
import { MenuSkeleton } from '@/components/ui'
import { formatPrice } from '@/lib/format'

interface MenuGridProps {
  menus: Menu[]
  loading?: boolean
  viewMode?: 'grid' | 'list'
  showCategory?: boolean
}

export function MenuGrid({ 
  menus, 
  loading = false, 
  viewMode = 'grid',
  showCategory = false
}: MenuGridProps) {
  if (loading) {
    return (
      <div className={viewMode === 'grid' ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'space-y-4'}>
        {Array.from({ length: 6 }).map((_, index) => (
          <MenuSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (menus.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-slab font-slab-bold text-stone mb-2">
          No menu items found
        </h3>
        <p className="text-stone/60">
          Try adjusting your filters or check back later for new items.
        </p>
      </div>
    )
  }

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {menus.map((menu) => (
          <div key={menu.id} className="flex items-center gap-4 p-4 bg-white rounded-xl border shadow-sm">
            <img 
              src={menu.image || '/menu/fallback-image.webp'} 
              alt={menu.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold line-clamp-1">{menu.name}</h3>
              <p className="text-sm text-neutral-600 line-clamp-1">{menu.description}</p>
              <div className="flex items-center justify-between mt-2">
                {showCategory && menu.category && (
                  <span className="text-xs text-amber-700">{menu.category}</span>
                )}
                {menu.price && (
                  <span className="text-sm font-bold text-emerald-700">${formatPrice(menu.price)}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {menus.map((menu) => (
        <MenuCard
          key={menu.id}
          name={menu.name}
          imageUrl={menu.image || '/menu/fallback-image.webp'}
          price={menu.price ? formatPrice(menu.price) : undefined}
          calories={menu.calories ? `${menu.calories}` : undefined}
          category={showCategory ? menu.category : undefined}
          description={menu.description}
          tag={menu.popular ? 'POPULAR' : undefined}
        />
      ))}
    </div>
  )
}

interface FeaturedMenusProps {
  menus: Menu[]
  loading?: boolean
  title?: string
}

export function FeaturedMenus({ menus, loading = false, title = "Featured Items" }: FeaturedMenusProps) {
  if (loading) {
    return (
      <div>
        <h2 className="text-2xl font-slab font-slab-bold text-stone mb-6">
          {title}
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <MenuSkeleton key={index} />
          ))}
        </div>
      </div>
    )
  }

  if (menus.length === 0) {
    return null
  }

  return (
    <div>
      <h2 className="text-2xl font-slab font-slab-bold text-stone mb-6">
        {title}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {menus.map((menu) => (
          <MenuCard
            key={menu.id}
            name={menu.name}
            imageUrl={menu.image || '/menu/fallback-image.webp'}
            price={menu.price ? formatPrice(menu.price) : undefined}
            calories={menu.calories ? `${menu.calories}` : undefined}
            category={menu.category}
            description={menu.description}
            tag={menu.popular ? 'POPULAR' : undefined}
          />
        ))}
      </div>
    </div>
  )
}
