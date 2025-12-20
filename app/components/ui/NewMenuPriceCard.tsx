interface MenuPriceItem {
  id: string
  name: string
  image?: string
  price: number
  category: string
  calories?: number
  description?: string
  isPopular?: boolean
  isNew?: boolean
}

interface NewMenuPriceCardProps {
  item: MenuPriceItem
}

export function NewMenuPriceCard({ item }: NewMenuPriceCardProps) {
  // FORCE CACHE CLEAR - Build: ${Date.now()}
  return (
    <article className="group bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 md:hover:-translate-y-2 border border-stone-100">
      <div className="relative bg-gray-100" style={{ height: '800px' }}>
        {item.image ? (
          <img
            src={item.image}
            alt={`${item.name} - Texas Roadhouse Menu ${item.category} - $${item.price.toFixed(2)}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            loading={item.isPopular ? "eager" : "lazy"}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 flex items-center justify-center border-2 border-dashed border-amber-200">
            <div className="text-center p-4">
              <div className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-texas-yellow to-amber-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">🍽️</span>
              </div>
              <p className="text-amber-700 font-medium text-sm">
                {item.name}
              </p>
            </div>
          </div>
        )}
        
        {/* Badges */}
        {item.isPopular && (
          <div className="absolute top-3 left-3 bg-texas-red text-white px-2 py-1 rounded-md text-xs font-bold">
            POPULAR
          </div>
        )}
        {item.isNew && (
          <div className="absolute top-3 right-3 bg-texas-green text-white px-2 py-1 rounded-md text-xs font-bold">
            NEW
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h4 className="font-slab text-lg font-bold text-stone-900 line-clamp-2 flex-1">
            {item.name}
          </h4>
          <span className="text-xl font-bold text-texas-green ml-2">
            ${item.price.toFixed(2)}
          </span>
        </div>
        
        {item.description && (
          <p className="text-stone-600 text-sm mb-3 line-clamp-2">
            {item.description}
          </p>
        )}
        
        <div className="flex justify-between items-center text-sm">
          {item.calories && (
            <span className="bg-stone-100 text-stone-700 px-2 py-1 rounded-full">
              {item.calories} calories
            </span>
          )}
          <span className="text-texas-yellow font-medium">
            {item.category}
          </span>
        </div>
      </div>
    </article>
  )
}
