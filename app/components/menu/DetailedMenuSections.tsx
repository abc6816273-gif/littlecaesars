'use client'

import Image from 'next/image'

interface MenuItem {
  name: string
  description: string
  price: string
}

interface MenuSection {
  title: string
  subtitle: string
  icon: string
  items: MenuItem[]
  imagePlaceholder: string
  imageUrl: string
}

const menuSections: MenuSection[] = [
  {
    title: "🔥 Hot N Ready",
    subtitle: "Fresh, hot pizzas ready when you walk in - no waiting!",
    icon: "🔥",
    imagePlaceholder: "Hot-N-Ready Pizza Image",
    imageUrl: "/menu/IMG-20250920-WA0001.jpg",
    items: [
      {
        name: "Hot-N-Ready Pepperoni",
        description: "Classic pepperoni pizza made with fresh ingredients",
        price: "$5.55"
      },
      {
        name: "Hot-N-Ready Cheese", 
        description: "Fresh cheese pizza with our signature sauce",
        price: "$5.55"
      },
      {
        name: "Hot-N-Ready Sausage",
        description: "Italian sausage pizza with premium toppings",
        price: "$6.00"
      }
    ]
  },
  {
    title: "🍕 Large Round Pizzas",
    subtitle: "Classic round pizzas perfect for families and groups",
    icon: "🍕",
    imagePlaceholder: "Large Round Pizza Image",
    imageUrl: "/menu/IMG-20250920-WA0002.jpg",
    items: [
      {
        name: "ExtraMostBest Pepperoni",
        description: "Extra cheese and extra pepperoni for extra flavor",
        price: "$6.00"
      },
      {
        name: "Supreme Pizza",
        description: "Loaded with pepperoni, sausage, mushrooms, and peppers",
        price: "$9.49"
      },
      {
        name: "3 Meat Treat",
        description: "Pepperoni, Italian sausage, and ham",
        price: "$9.99"
      }
    ]
  },
  {
    title: "🍰 Detroit-Style Deep Dish Pizzas",
    subtitle: "Thick, buttery crust with cheese baked to perfection",
    icon: "🍰",
    imagePlaceholder: "Deep Dish Pizza Image",
    imageUrl: "/menu/IMG-20250920-WA0003.jpg",
    items: [
      {
        name: "Deep Deep Dish Pepperoni",
        description: "Signature deep dish with pepperoni and extra cheese",
        price: "$8.49"
      },
      {
        name: "Deep Deep Dish Combo",
        description: "Loaded with multiple toppings on thick crust",
        price: "$10.99"
      }
    ]
  },
  {
    title: "🥖 Sides & Appetizers",
    subtitle: "Famous Crazy Bread and delicious sides",
    icon: "🥖",
    imagePlaceholder: "Crazy Bread Image",
    imageUrl: "/menu/IMG-20250920-WA0004.jpg",
    items: [
      {
        name: "Crazy Bread 8-piece",
        description: "Famous breadsticks with garlic butter and parmesan",
        price: "$3.49"
      },
      {
        name: "Italian Cheese Bread",
        description: "Cheesy bread with Italian seasonings",
        price: "$4.49"
      },
      {
        name: "Caesar Dips",
        description: "Perfect dipping sauces for your bread and pizza",
        price: "$0.59"
      }
    ]
  },
  {
    title: "🍗 Wings & Chicken",
    subtitle: "Buffalo wings and crispy chicken in multiple flavors",
    icon: "🍗",
    imagePlaceholder: "Wings Image",
    imageUrl: "/menu/IMG-20250920-WA0005.jpg",
    items: [
      {
        name: "Buffalo Wings 8-piece",
        description: "Crispy wings tossed in buffalo sauce",
        price: "$8.49"
      },
      {
        name: "BBQ Wings 8-piece",
        description: "Wings with smoky BBQ flavor",
        price: "$8.49"
      }
    ]
  },
  {
    title: "🥤 Beverages & Desserts",
    subtitle: "Refreshing drinks and sweet treats",
    icon: "🥤",
    imagePlaceholder: "Beverages Image",
    imageUrl: "/menu/IMG-20250920-WA0006.jpg",
    items: [
      {
        name: "Pepsi Products",
        description: "20oz bottles - Pepsi, Diet Pepsi, Mountain Dew",
        price: "$1.99"
      },
      {
        name: "Chocolate Chip Cookies",
        description: "Fresh baked cookies for the perfect finish",
        price: "$2.49"
      }
    ]
  }
]

export function DetailedMenuSections() {
  return (
    <div className="mb-12">
      {/* 3-Column Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
            
            {/* Menu Image */}
            <div className="relative h-96 lg:h-[420px]">
              <Image
                src={section.imageUrl}
                alt={section.imagePlaceholder}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={sectionIndex < 3}
              />
            </div>
            
            {/* Section Title */}
            <div className="bg-little-caesars-black p-6 border-t-4 border-little-caesars-orange">
              <div className="text-center">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2 drop-shadow-lg">{section.title}</h2>
                <p className="text-gray-300 text-base lg:text-lg font-medium">{section.subtitle}</p>
              </div>
            </div>
            
            {/* Menu Items */}
            <div className="p-4 lg:p-5">
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group/item">
                    <div className="border-b border-gray-200 pb-3">
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="text-sm lg:text-base font-bold text-little-caesars-black group-hover/item:text-little-caesars-orange transition-colors duration-200 leading-tight">
                          {item.name}
                        </h3>
                        <span className="text-lg font-bold text-little-caesars-orange ml-2 flex-shrink-0">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-gray-600 text-xs lg:text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                        ))}
                      </div>
                      
                      {/* View More Button */}
                      <div className="mt-4 pt-3 border-t border-gray-200">
                        <button className="w-full bg-little-caesars-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-lg">
                          <span className="flex items-center justify-center gap-2">
                            <span>View Full {section.title.replace('🔥', '').replace('🍕', '').replace('🍰', '').replace('🥖', '').replace('🍗', '').replace('🥤', '').trim()} Menu</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </button>
                      </div>
                    </div>
                    
                  </div>
        ))}
      </div>
    </div>
  )
}
