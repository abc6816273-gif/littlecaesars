import { Metadata } from 'next'
import LittleCaesarsMenuContent from './content'

// Little Caesars Menu Data with Real Images
const littleCaesarsMenuData = [
  // Hot-N-Ready Pizzas
  {
    id: 1,
    name: "Hot-N-Ready Pepperoni Pizza",
    price: 5.55,
    description: "Classic pepperoni pizza made fresh daily with our signature sauce and 100% mozzarella cheese. Ready when you walk in - no waiting required!",
    category: "Hot-N-Ready",
    calories: 280,
    isPopular: true,
    image: "/menu/Homepage-menus/Classic-Pepperoni-Pizza-Little-Caesars-Menu.webp"
  },
  {
    id: 2,
    name: "Hot-N-Ready Cheese Pizza",
    price: 5.55,
    description: "Delicious cheese pizza with our signature sauce and 100% mozzarella cheese. Perfect for cheese lovers and ready to go!",
    category: "Hot-N-Ready",
    calories: 250,
    isPopular: true,
    image: "/menu/Homepage-menus/Classic-Cheese-Pizza-Little-Caesars-Menu.webp"
  },
  {
    id: 3,
    name: "Hot-N-Ready Italian Sausage Pizza",
    price: 6.00,
    description: "Savory Italian sausage pizza with premium sausage, signature sauce, and 100% mozzarella cheese. A hearty favorite!",
    category: "Hot-N-Ready",
    calories: 290,
    isPopular: true,
    image: "/menu/Homepage-menus/Classic-Italian-Sausage-Pizza-Little-Caesars-Menu.webp"
  },

  // ExtraMostBest Pizzas
  {
    id: 4,
    name: "ExtraMostBestest Pepperoni Pizza",
    price: 6.00,
    description: "Our most popular pizza! Extra pepperoni and extra cheese for the ultimate pizza experience. More of what you love!",
    category: "Large Round Pizzas",
    calories: 320,
    isPopular: true,
    image: "/menu/Homepage-menus/ExtraMostBestest-Pepperoni-Pizza-Little-Caesars-Menu.webp"
  },
  {
    id: 5,
    name: "ExtraMostBestest Cheese Pizza",
    price: 6.00,
    description: "Extra cheese pizza with our signature sauce and even more 100% mozzarella cheese. Perfect for cheese enthusiasts!",
    category: "Large Round Pizzas",
    calories: 290,
    isPopular: true,
    image: "/menu/Homepage-menus/ExtraMostBestest-Cheese-Pizza-Little-Caesars-Menu.webp"
  },
  {
    id: 6,
    name: "ExtraMostBestest Italian Sausage Pizza",
    price: 6.50,
    description: "Extra Italian sausage and extra cheese for a hearty, satisfying pizza experience. Premium sausage in every bite!",
    category: "Large Round Pizzas",
    calories: 330,
    isPopular: false,
    image: "/menu/Homepage-menus/ExtraMostBestest-Italian-Sausage-Pizza-Little-Caesars-Menu.webp"
  },

  // Specialty Pizzas
  {
    id: 7,
    name: "3 Meat Treat Pizza",
    price: 9.99,
    description: "Triple meat pizza loaded with pepperoni, Italian sausage, and bacon. A meat lover's dream with three delicious proteins!",
    category: "Large Round Pizzas",
    calories: 350,
    isPopular: true,
    image: "/menu/Homepage-menus/3-Meat-Treat-Pizza-Little-Caesars-Menu.webp"
  },
  {
    id: 8,
    name: "5 Meat Feast Pizza",
    price: 10.99,
    description: "Ultimate meat pizza with pepperoni, Italian sausage, bacon, ham, and beef. Five premium meats for the ultimate feast!",
    category: "Large Round Pizzas",
    calories: 380,
    isPopular: true,
    image: "/menu/Homepage-menus/5-Meat-Feast-Pizza-Little-Caesars-Menu.webp"
  },
  {
    id: 9,
    name: "Ultimate Supreme Pizza",
    price: 10.99,
    description: "Loaded with pepperoni, Italian sausage, mushrooms, green peppers, and onions. The ultimate combination of meats and vegetables!",
    category: "Large Round Pizzas",
    calories: 320,
    isPopular: false,
    image: "/menu/Homepage-menus/Ultimate-Supreme-Pizza-Little-Caesars-Menu.webp"
  },
  {
    id: 10,
    name: "Hula Hawaiian Pizza",
    price: 9.49,
    description: "Sweet and savory combination of ham and pineapple with our signature sauce and 100% mozzarella cheese. A tropical favorite!",
    category: "Large Round Pizzas",
    calories: 280,
    isPopular: false,
    image: "/menu/Homepage-menus/Hula-Hawaiian-Pizza-Little-Caesars-Menu.webp"
  },
  {
    id: 11,
    name: "Veggie Pizza",
    price: 9.49,
    description: "Fresh vegetable pizza with mushrooms, green peppers, onions, and black olives. Perfect for vegetarian pizza lovers!",
    category: "Large Round Pizzas",
    calories: 240,
    isPopular: false,
    image: "/menu/Homepage-menus/Veggie-Pizza-Little-Caesars-Menu.webp"
  },

  // Detroit-Style Deep Dish
  {
    id: 12,
    name: "Detroit-Style Deep Dish Pepperoni",
    price: 8.49,
    description: "Square deep dish pizza with pepperoni, signature sauce, and cheese baked to perfection with crispy, buttery crust edges.",
    category: "Deep Dish Pizza",
    calories: 320,
    isPopular: true,
    image: "/menu/Homepage-menus/Detroit-Style-Deep-Dish-Pepperoni-Little-Caesars-Menu.webp"
  },
  {
    id: 13,
    name: "Detroit-Style Deep Dish Cheese",
    price: 8.49,
    description: "Classic deep dish cheese pizza with our signature sauce and 100% mozzarella cheese. Detroit-style square cut with crispy edges!",
    category: "Deep Dish Pizza",
    calories: 290,
    isPopular: true,
    image: "/menu/Homepage-menus/Detroit-Style-Deep-Dish-Cheese-Little-Caesars-Menu.webp"
  },
  {
    id: 14,
    name: "Detroit-Style Deep Dish 3 Meat Treat",
    price: 10.99,
    description: "Deep dish pizza loaded with pepperoni, Italian sausage, and bacon. Detroit-style thick crust with crispy, buttery edges.",
    category: "Deep Dish Pizza",
    calories: 370,
    isPopular: false,
    image: "/menu/Homepage-menus/Detroit-Style-Deep-Dish-3-Meat-Treat-Little-Caesars-Menu.webp"
  },
  {
    id: 15,
    name: "Detroit-Style Deep Dish Sausage",
    price: 8.99,
    description: "Deep dish pizza with premium Italian sausage, signature sauce, and cheese. Square cut with signature crispy crust edges.",
    category: "Deep Dish Pizza",
    calories: 310,
    isPopular: false,
    image: "/menu/Homepage-menus/Detroit-Style-Deep-Dish-Sausage-Little-Caesars-Menu.webp"
  },
  {
    id: 16,
    name: "Detroit-Style Deep Dish Veggie",
    price: 9.49,
    description: "Vegetarian deep dish pizza with mushrooms, green peppers, onions, and black olives. Detroit-style thick crust perfection!",
    category: "Deep Dish Pizza",
    calories: 270,
    isPopular: false,
    image: "/menu/Homepage-menus/Detroit-Style-Deep-Dish-Veggie-Little-Caesars-Menu.webp"
  },

  // Wings
  {
    id: 17,
    name: "Caesar Wings",
    price: 8.49,
    description: "Tender, juicy chicken wings seasoned with our signature Caesar seasoning. Available in 8-piece portions for sharing!",
    category: "Wings",
    calories: 480,
    isPopular: true,
    image: "/menu/Homepage-menus/Caesar-Wings-Little-Caesars-Menu.webp"
  },

  // Sides & Bread
  {
    id: 18,
    name: "Crazy Bread (8-piece)",
    price: 3.49,
    description: "Our famous Crazy Bread! Freshly baked bread sticks brushed with garlic butter and sprinkled with parmesan cheese. Served with Crazy Sauce!",
    category: "Sides & Bread",
    calories: 100,
    isPopular: true,
    image: "/menu/Homepage-menus/Crazy-Bread-Little-Caesars-Menu.webp"
  },
  {
    id: 19,
    name: "Crazy Combo (Crazy Bread + Crazy Sauce)",
    price: 3.99,
    description: "Perfect combo of our famous Crazy Bread with warm Crazy Sauce for dipping. The ultimate side for any pizza order!",
    category: "Sides & Bread",
    calories: 120,
    isPopular: true,
    image: "/menu/Homepage-menus/Crazy-Combo-Crazy-Bread-Crazy-Sauce-Little-Caesars-Menu.webp"
  },
  {
    id: 20,
    name: "Italian Cheese Bread",
    price: 4.49,
    description: "Freshly baked bread topped with cheese and Italian seasoning. Served warm and perfect for sharing with your favorite pizza!",
    category: "Sides & Bread",
    calories: 140,
    isPopular: false,
    image: "/menu/Homepage-menus/Italian-Cheese-Bread-Little-Caesars-Menu.webp"
  },

  // Beverages
  {
    id: 21,
    name: "20 oz Pepsi Products",
    price: 1.99,
    description: "Ice-cold 20 oz Pepsi products including Pepsi, Diet Pepsi, Mountain Dew, and more. Perfect complement to any meal!",
    category: "Beverages",
    calories: 250,
    isPopular: true,
    image: "/menu/Homepage-menus/20-oz.-Pepsi-Products-Little-Caesars-Menu.webp"
  },
  {
    id: 22,
    name: "2L Pepsi Products",
    price: 2.99,
    description: "Family-size 2-liter Pepsi products perfect for sharing. Great value for families and groups enjoying pizza together!",
    category: "Beverages",
    calories: 140,
    isPopular: false,
    image: "/menu/Homepage-menus/2L-Pepsi-Products-Little-Caesars-Menu.webp"
  },

  // Lunch Combo
  {
    id: 23,
    name: "Lunch Combo",
    price: 5.99,
    description: "Perfect lunch deal with four slices of Hot-N-Ready pizza and a 20 oz drink. Quick, convenient, and delicious!",
    category: "Lunch Combo",
    calories: 280,
    isPopular: true,
    image: "/menu/Homepage-menus/Lunch-Combo-Little-Caesars-Menu.webp"
  },

  // Desserts
  {
    id: 24,
    name: "Cookie Dough Brownie with M&M's MINIS",
    price: 4.99,
    description: "Decadent brownie made with cookie dough and M&M's MINIS chocolate candies. The perfect sweet ending to your meal!",
    category: "Desserts",
    calories: 420,
    isPopular: true,
    image: "/menu/Homepage-menus/Cookie-Dough-Brownie-made-with-MMS-MINIS-Chocolate-Candies-Little-Caesars-Menu.webp"
  }
]

// Generate comprehensive SEO metadata
export async function generateMetadata(): Promise<Metadata> {
  const title = "Little Caesars Menu Prices 2026 | Complete Menu with Photos & Latest Prices"
  const description = "🍕 Official Little Caesars Menu Prices 2026! ✅ Hot-N-Ready Pizza $5.55 ✅ Crazy Bread $3.49 ✅ Deep Dish Pizza ✅ Wings ✅ Real Photos ✅ Updated Daily"
  
  return {
    title,
    description,
    keywords: [
      'Little Caesars menu',
      'Little Caesars prices 2026', 
      'Little Caesars pizza menu',
      'Hot-N-Ready pizza',
      'Crazy Bread',
      'Deep Dish pizza',
      'Little Caesars menu with photos'
    ].join(', '),
    openGraph: {
      title,
      description,
      url: 'https://littlecaesarsmenu.us/little-caesars-menu',
      siteName: 'Little Caesars Menu',
      images: [
        {
          url: 'https://littlecaesarsmenu.us/littlecaesars-menu-prices-logo.png',
          width: 1200,
          height: 630,
          alt: 'Little Caesars Menu Prices 2026'
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['https://littlecaesarsmenu.us/littlecaesars-menu-prices-logo.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: 'https://littlecaesarsmenu.us/little-caesars-menu',
    }
  }
}

export default function LittleCaesarsMenuPage() {
  return <LittleCaesarsMenuContent menuItems={littleCaesarsMenuData} />
}
