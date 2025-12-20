interface MenuItem {
  id: string
  name: string
  image?: string
  price: number
  category: string
  calories?: number
  isPopular?: boolean
  isSignature?: boolean
}

interface NewMealPlannerCardProps {
  item: MenuItem
  quantity: number
  onAdd: () => void
  onRemove: () => void
}

export function NewMealPlannerCard({ item, quantity, onAdd, onRemove }: NewMealPlannerCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
      <div className="relative bg-gray-100" style={{ height: '192px' }}>
        <img
          src={item.image || '/menu/default-item.webp'}
          alt={item.name}
          className="w-full h-full object-cover"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block'
          }}
          loading="lazy"
        />
        {item.isPopular && (
          <div className="absolute top-3 left-3 bg-texas-red text-white px-2 py-1 rounded-full text-xs font-semibold">
            Popular
          </div>
        )}
        {item.isSignature && (
          <div className="absolute top-3 right-3 bg-texas-yellow text-texas-black px-2 py-1 rounded-full text-xs font-semibold">
            Signature
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
          {item.name}
        </h3>
        
        <div className="flex items-center justify-between mb-3">
          <span className="text-2xl font-bold text-texas-green">
            ${item.price.toFixed(2)}
          </span>
          {item.calories && (
            <span className="text-sm text-gray-600">
              {item.calories} cal
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <button
              onClick={onRemove}
              disabled={quantity === 0}
              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-200"
            >
              <span className="text-lg font-semibold">-</span>
            </button>
            
            <span className="w-8 text-center font-semibold text-lg">
              {quantity}
            </span>
            
            <button
              onClick={onAdd}
              className="w-8 h-8 rounded-full bg-texas-red hover:bg-red-700 text-white flex items-center justify-center transition-colors duration-200"
            >
              <span className="text-lg font-semibold">+</span>
            </button>
          </div>
          
          <span className="text-sm text-gray-600 font-medium">
            {item.category}
          </span>
        </div>
      </div>
    </div>
  )
}
