// Meal Planner Templates and Suggestion Engine

export interface MealTemplate {
  id: string
  name: string
  description: string
  type: 'budget' | 'health' | 'family' | 'occasion'
  targetBudget?: number
  targetCalories?: number
  familySize?: number
  occasion?: string
  meals: {
    day: string
    mealType: 'breakfast' | 'lunch' | 'dinner' | 'snack'
    items: string[] // menu item titles
    notes?: string
  }[]
}

export const MEAL_TEMPLATES: MealTemplate[] = [
  {
    id: 'budget-friendly-week',
    name: 'Budget-Friendly Week',
    description: '7 meals under $100 total for 2 people',
    type: 'budget',
    targetBudget: 100,
    familySize: 2,
    meals: [
      {
        day: 'Monday',
        mealType: 'dinner',
        items: ['Grilled Chicken Breast', 'Baked Sweet Potato', 'Green Beans'],
        notes: 'Healthy start to the week'
      },
      {
        day: 'Tuesday',
        mealType: 'dinner',
        items: ['Country Fried Steak', 'Mashed Potatoes', 'Corn'],
        notes: 'Comfort food day'
      },
      {
        day: 'Wednesday',
        mealType: 'dinner',
        items: ['Grilled Salmon', 'Rice Pilaf', 'Steamed Broccoli'],
        notes: 'Fish day for variety'
      },
      {
        day: 'Thursday',
        mealType: 'dinner',
        items: ['BBQ Chicken', 'Baked Potato', 'House Salad'],
        notes: 'BBQ night'
      },
      {
        day: 'Friday',
        mealType: 'dinner',
        items: ['Sirloin Steak 6oz', 'Loaded Sweet Potato', 'Caesar Salad'],
        notes: 'Friday night treat'
      },
      {
        day: 'Saturday',
        mealType: 'dinner',
        items: ['Fall-Off-The-Bone Ribs', 'Mac & Cheese', 'Coleslaw'],
        notes: 'Weekend indulgence'
      },
      {
        day: 'Sunday',
        mealType: 'dinner',
        items: ['Grilled Chicken Breast', 'Steamed Vegetables', 'Wild Rice'],
        notes: 'Light end to the week'
      }
    ]
  },
  {
    id: 'health-conscious-week',
    name: 'Health-Conscious Week',
    description: 'Balanced nutrition, ~2000 calories per day',
    type: 'health',
    targetCalories: 2000,
    familySize: 1,
    meals: [
      {
        day: 'Monday',
        mealType: 'lunch',
        items: ['Grilled Chicken Salad', 'House Dressing'],
        notes: 'Light protein-rich lunch'
      },
      {
        day: 'Monday',
        mealType: 'dinner',
        items: ['Grilled Salmon', 'Steamed Broccoli', 'Wild Rice'],
        notes: 'Omega-3 rich dinner'
      },
      {
        day: 'Tuesday',
        mealType: 'lunch',
        items: ['House Salad', 'Grilled Chicken'],
        notes: 'Fresh and light'
      },
      {
        day: 'Tuesday',
        mealType: 'dinner',
        items: ['Sirloin Steak 6oz', 'Steamed Vegetables', 'Baked Sweet Potato'],
        notes: 'Lean protein with complex carbs'
      },
      {
        day: 'Wednesday',
        mealType: 'lunch',
        items: ['Caesar Salad', 'Grilled Chicken'],
        notes: 'Classic healthy lunch'
      },
      {
        day: 'Wednesday',
        mealType: 'dinner',
        items: ['Grilled Chicken Breast', 'Green Beans', 'Rice Pilaf'],
        notes: 'Simple and nutritious'
      }
    ]
  },
  {
    id: 'family-fun-week',
    name: 'Family Fun Week',
    description: 'Perfect for 4+ people sharing',
    type: 'family',
    familySize: 4,
    meals: [
      {
        day: 'Friday',
        mealType: 'dinner',
        items: ['Cactus Blossom', 'Ribeye 12oz', 'Fall-Off-The-Bone Ribs', 'Loaded Baked Potato', 'Mac & Cheese', 'Green Beans'],
        notes: 'Big family feast night'
      },
      {
        day: 'Saturday',
        mealType: 'lunch',
        items: ['Buffalo Wings', 'Fried Mozzarella', 'Chicken Tenders', 'Fries'],
        notes: 'Kid-friendly lunch'
      },
      {
        day: 'Saturday',
        mealType: 'dinner',
        items: ['Prime Rib', 'Grilled Chicken Breast', 'Baked Sweet Potato', 'Mashed Potatoes', 'House Salad'],
        notes: 'Options for everyone'
      },
      {
        day: 'Sunday',
        mealType: 'lunch',
        items: ['Rattlesnake Bites', 'Chicken Caesar Wrap', 'House Salad'],
        notes: 'Sunday family lunch'
      }
    ]
  },
  {
    id: 'date-night-special',
    name: 'Romantic Date Night',
    description: 'Perfect for special romantic occasions',
    type: 'occasion',
    occasion: 'date night',
    familySize: 2,
    meals: [
      {
        day: 'Saturday',
        mealType: 'dinner',
        items: ['Cactus Blossom', 'Ribeye 12oz', 'Lobster Tail', 'Loaded Sweet Potato', 'Asparagus', 'House Salad'],
        notes: 'Share the appetizer, premium mains'
      }
    ]
  },
  {
    id: 'birthday-celebration',
    name: 'Birthday Celebration',
    description: 'Festive meal for birthday celebrations',
    type: 'occasion',
    occasion: 'birthday',
    familySize: 4,
    meals: [
      {
        day: 'Saturday',
        mealType: 'dinner',
        items: ['Fried Mozzarella', 'Rattlesnake Bites', 'Prime Rib', 'Fall-Off-The-Bone Ribs', 'Loaded Baked Potato', 'Mac & Cheese', 'Birthday Cake'],
        notes: 'Celebration feast with shared appetizers'
      }
    ]
  },
  {
    id: 'anniversary-dinner',
    name: 'Anniversary Dinner',
    description: 'Elegant meal for anniversary celebrations',
    type: 'occasion',
    occasion: 'anniversary',
    familySize: 2,
    meals: [
      {
        day: 'Saturday',
        mealType: 'dinner',
        items: ['Cactus Blossom', 'Filet Mignon', 'Grilled Salmon', 'Lobster Tail', 'Asparagus', 'Loaded Sweet Potato'],
        notes: 'Premium selections for special night'
      }
    ]
  }
]

export const FAMILY_MEAL_SUGGESTIONS = {
  small_family: {
    size: '2-3 people',
    appetizers: ['Fried Mozzarella', 'Buffalo Wings'],
    mains: ['Grilled Chicken Breast', 'Sirloin Steak 6oz', 'BBQ Ribs'],
    sides: ['Baked Potato', 'Green Beans', 'House Salad'],
    budget_range: '$40-60'
  },
  medium_family: {
    size: '4-5 people',
    appetizers: ['Cactus Blossom', 'Rattlesnake Bites', 'Buffalo Wings'],
    mains: ['Ribeye 12oz', 'Fall-Off-The-Bone Ribs', 'Grilled Chicken Breast', 'Country Fried Steak'],
    sides: ['Loaded Baked Potato', 'Mac & Cheese', 'Steamed Broccoli', 'Mashed Potatoes'],
    budget_range: '$80-120'
  },
  large_family: {
    size: '6+ people',
    appetizers: ['Cactus Blossom', 'Fried Mozzarella', 'Buffalo Wings', 'Rattlesnake Bites'],
    mains: ['Prime Rib', 'Ribeye 12oz', 'Fall-Off-The-Bone Ribs', 'Grilled Chicken Breast', 'BBQ Chicken'],
    sides: ['Loaded Baked Potato', 'Mac & Cheese', 'Green Beans', 'Mashed Potatoes', 'House Salad', 'Coleslaw'],
    budget_range: '$150-200'
  }
}

export const DIETARY_FILTERS = {
  low_calorie: {
    max_calories: 600,
    recommended_items: ['Grilled Chicken Breast', 'Grilled Salmon', 'House Salad', 'Steamed Vegetables']
  },
  high_protein: {
    min_protein: 30,
    recommended_items: ['Ribeye 12oz', 'Grilled Chicken Breast', 'Prime Rib', 'Sirloin Steak']
  },
  vegetarian_friendly: {
    recommended_items: ['House Salad', 'Baked Sweet Potato', 'Steamed Broccoli', 'Mac & Cheese', 'Loaded Baked Potato']
  },
  gluten_conscious: {
    avoid_items: ['Fried items', 'Breaded items'],
    recommended_items: ['Grilled Chicken Breast', 'Steaks', 'Salads', 'Steamed Vegetables']
  }
}

export function getTemplateByType(type: string): MealTemplate[] {
  return MEAL_TEMPLATES.filter(template => template.type === type)
}

export function getFamilySuggestion(familySize: number) {
  if (familySize <= 3) return FAMILY_MEAL_SUGGESTIONS.small_family
  if (familySize <= 5) return FAMILY_MEAL_SUGGESTIONS.medium_family
  return FAMILY_MEAL_SUGGESTIONS.large_family
}

export function getBudgetRecommendations(budget: number, familySize: number) {
  const perPersonBudget = budget / familySize
  
  if (perPersonBudget < 15) {
    return {
      category: 'budget',
      recommendations: ['Grilled Chicken options', 'Single side dishes', 'Water instead of drinks'],
      maxMealsPerWeek: 3
    }
  } else if (perPersonBudget < 25) {
    return {
      category: 'moderate',
      recommendations: ['Mix of chicken and beef', 'Shared appetizers', 'Some premium sides'],
      maxMealsPerWeek: 5
    }
  } else {
    return {
      category: 'premium',
      recommendations: ['Steaks and ribs', 'Multiple appetizers', 'Premium sides and drinks'],
      maxMealsPerWeek: 7
    }
  }
}

export function getCalorieRecommendations(targetCalories: number) {
  return {
    breakfast: Math.floor(targetCalories * 0.25),
    lunch: Math.floor(targetCalories * 0.35),
    dinner: Math.floor(targetCalories * 0.35),
    snack: Math.floor(targetCalories * 0.05)
  }
}
