export interface MenuItem {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  calories?: number;
  description?: string;
  image?: string;
  tags?: string[];
  isPopular?: boolean;
  isSignature?: boolean;
  isNew?: boolean;
  spiceLevel?: number;
  allergens?: string[];
  nutritionFacts?: {
    calories: number;
    fat: number;
    saturatedFat: number;
    cholesterol: number;
    sodium: number;
    carbs: number;
    fiber: number;
    sugars: number;
    protein: number;
  };
}

export interface MenuCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  featured?: boolean;
  image?: string;
}

export interface MenuPage {
  items: MenuItem[];
  total: number;
  hasMore: boolean;
}

export interface MenuData {
  lastUpdated: string;
  metadata: {
    source: string;
    version: string;
    totalItems: number;
    categories: number;
  };
  categories: MenuCategory[];
  menuItems: MenuItem[];
}

// Cache for menu data
let cachedMenuData: MenuData | null = null;
let cachedCategories: MenuCategory[] | null = null;

/**
 * Load menu data from the local JSON file or API
 */
async function loadMenuData(): Promise<MenuData> {
  if (cachedMenuData) {
    return cachedMenuData;
  }

  try {
    // Try to use API endpoint if available
    if (process.env.NEXT_PUBLIC_MENU_API) {
      const response = await fetch(process.env.NEXT_PUBLIC_MENU_API);
      if (response.ok) {
        const data = await response.json();
        cachedMenuData = data;
        return data;
      }
    }

    // Fallback to local data
    const enhancedMenuModule = await import('@/data/enhanced-menu-2025.json');
    const data = enhancedMenuModule.default as MenuData;
    cachedMenuData = data;
    return data;
  } catch (error) {
    console.warn('Failed to load enhanced menu, falling back to basic menu data:', error);
    
    // Final fallback to basic menu
    try {
      const basicMenuModule = await import('@/data/menus.json');
      const basicData = basicMenuModule.default;
      
      // Transform basic data to match our interface
      const transformedData: MenuData = {
        lastUpdated: new Date().toISOString(),
        metadata: {
          source: 'Basic Menu Data',
          version: '1.0',
          totalItems: Array.isArray(basicData) ? basicData.length : 0,
          categories: 0
        },
        categories: [],
        menuItems: Array.isArray(basicData) ? basicData.map((item: any, index: number) => ({
          id: item.id || `item-${index}`,
          name: item.name || 'Unknown Item',
          slug: item.slug || `item-${index}`,
          category: item.category || 'other',
          price: parseFloat(item.price) || 0,
          calories: item.calories || undefined,
          description: item.description || '',
          image: item.image || '/menu/default-item.webp',
          tags: item.tags || [],
          isPopular: item.isPopular || false,
          isSignature: item.isSignature || false,
          isNew: item.isNew || false
        })) : []
      };
      
      cachedMenuData = transformedData;
      return transformedData;
    } catch (fallbackError) {
      console.error('All menu data sources failed:', fallbackError);
      
      // Return empty data structure
      const emptyData: MenuData = {
        lastUpdated: new Date().toISOString(),
        metadata: {
          source: 'Fallback',
          version: '1.0',
          totalItems: 0,
          categories: 0
        },
        categories: [],
        menuItems: []
      };
      
      return emptyData;
    }
  }
}

/**
 * Get paginated menu items with optional filtering
 */
export async function getMenuItems(
  limit: number = 74,
  offset: number = 0,
  searchQuery?: string,
  categoryFilter?: string
): Promise<MenuPage> {
  try {
    const menuData = await loadMenuData();
    let filteredItems = [...menuData.menuItems];

    // Apply search filter
    if (searchQuery && searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filteredItems = filteredItems.filter(item => 
        item.name.toLowerCase().includes(query) ||
        item.description?.toLowerCase().includes(query) ||
        item.tags?.some(tag => tag.toLowerCase().includes(query)) ||
        item.category.toLowerCase().includes(query)
      );
    }

    // Apply category filter
    if (categoryFilter && categoryFilter !== 'all') {
      filteredItems = filteredItems.filter(item => 
        item.category === categoryFilter
      );
    }

    // Sort items: popular/signature first, then by name
    filteredItems.sort((a, b) => {
      if (a.isPopular && !b.isPopular) return -1;
      if (!a.isPopular && b.isPopular) return 1;
      if (a.isSignature && !b.isSignature) return -1;
      if (!a.isSignature && b.isSignature) return 1;
      return a.name.localeCompare(b.name);
    });

    const total = filteredItems.length;
    const paginatedItems = filteredItems.slice(offset, offset + limit);
    const hasMore = offset + limit < total;

    return {
      items: paginatedItems,
      total,
      hasMore
    };
  } catch (error) {
    console.error('Error fetching menu items:', error);
    return {
      items: [],
      total: 0,
      hasMore: false
    };
  }
}

/**
 * Get all unique categories
 */
export async function getMenuCategories(): Promise<MenuCategory[]> {
  if (cachedCategories) {
    return cachedCategories;
  }

  try {
    const menuData = await loadMenuData();
    
    if (menuData.categories && menuData.categories.length > 0) {
      cachedCategories = menuData.categories;
      return menuData.categories;
    }

    // Generate categories from menu items if not provided
    const categoryMap = new Map<string, MenuCategory>();
    
    menuData.menuItems.forEach(item => {
      if (!categoryMap.has(item.category)) {
        categoryMap.set(item.category, {
          id: item.category,
          name: item.category.charAt(0).toUpperCase() + item.category.slice(1).replace(/-/g, ' '),
          slug: item.category
        });
      }
    });

    const categories = Array.from(categoryMap.values()).sort((a, b) => a.name.localeCompare(b.name));
    cachedCategories = categories;
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

/**
 * Get a single menu item by ID
 */
export async function getMenuItem(id: string): Promise<MenuItem | null> {
  try {
    const menuData = await loadMenuData();
    return menuData.menuItems.find(item => item.id === id) || null;
  } catch (error) {
    console.error('Error fetching menu item:', error);
    return null;
  }
}

/**
 * Clear cached data (useful for development)
 */
export function clearMenuCache(): void {
  cachedMenuData = null;
  cachedCategories = null;
}