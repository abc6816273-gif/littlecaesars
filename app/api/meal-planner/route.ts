import { NextRequest, NextResponse } from 'next/server'
import { 
  MEAL_TEMPLATES, 
  FAMILY_MEAL_SUGGESTIONS, 
  getTemplateByType, 
  getFamilySuggestion, 
  getBudgetRecommendations,
  getCalorieRecommendations 
} from '@/lib/meal-planner-templates'
import { getMenus } from '@/lib/data'

/**
 * GET /api/meal-planner
 * Get meal planning suggestions and templates
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const action = searchParams.get('action')
    const budget = searchParams.get('budget')
    const familySize = searchParams.get('familySize')
    const calories = searchParams.get('calories')
    const templateType = searchParams.get('type')

    switch (action) {
      case 'templates':
        if (templateType) {
          const templates = getTemplateByType(templateType)
          return NextResponse.json({
            success: true,
            data: templates,
            message: `Templates for ${templateType} retrieved successfully`
          })
        }
        return NextResponse.json({
          success: true,
          data: MEAL_TEMPLATES,
          message: 'All templates retrieved successfully'
        })

      case 'family-suggestions':
        if (!familySize) {
          return NextResponse.json({
            success: false,
            error: 'Family size is required for family suggestions'
          }, { status: 400 })
        }
        
        const suggestion = getFamilySuggestion(parseInt(familySize))
        return NextResponse.json({
          success: true,
          data: suggestion,
          message: `Family suggestions for ${familySize} people retrieved`
        })

      case 'budget-recommendations':
        if (!budget || !familySize) {
          return NextResponse.json({
            success: false,
            error: 'Budget and family size are required'
          }, { status: 400 })
        }
        
        const budgetRec = getBudgetRecommendations(parseInt(budget), parseInt(familySize))
        return NextResponse.json({
          success: true,
          data: budgetRec,
          message: 'Budget recommendations retrieved'
        })

      case 'calorie-breakdown':
        if (!calories) {
          return NextResponse.json({
            success: false,
            error: 'Target calories required'
          }, { status: 400 })
        }
        
        const calorieBreakdown = getCalorieRecommendations(parseInt(calories))
        return NextResponse.json({
          success: true,
          data: calorieBreakdown,
          message: 'Calorie breakdown retrieved'
        })

      case 'smart-suggestions':
        // AI-powered meal suggestions based on multiple criteria
        const menuData = await getMenus()
        const menuItems = menuData.menus?.nodes || []
        const smartSuggestions = generateSmartSuggestions({
          budget: budget ? parseInt(budget) : undefined,
          familySize: familySize ? parseInt(familySize) : undefined,
          calories: calories ? parseInt(calories) : undefined,
          menuItems
        })
        
        return NextResponse.json({
          success: true,
          data: smartSuggestions,
          message: 'Smart suggestions generated'
        })

      default:
        return NextResponse.json({
          success: true,
          data: {
            templates: MEAL_TEMPLATES.length,
            family_suggestions: Object.keys(FAMILY_MEAL_SUGGESTIONS).length,
            available_actions: [
              'templates',
              'family-suggestions', 
              'budget-recommendations',
              'calorie-breakdown',
              'smart-suggestions'
            ]
          },
          message: 'Meal planner API information'
        })
    }

  } catch (error) {
    console.error('❌ Error in meal planner API:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      message: 'Failed to process meal planner request'
    }, { status: 500 })
  }
}

/**
 * POST /api/meal-planner
 * Save or generate custom meal plans
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, planData, preferences } = body

    switch (action) {
      case 'save-plan':
        // In a real app, you'd save to database
        // For now, we'll just validate and return the plan
        if (!planData || !planData.meals) {
          return NextResponse.json({
            success: false,
            error: 'Invalid plan data'
          }, { status: 400 })
        }

        // Calculate totals
        const totals = calculatePlanTotals(planData.meals)
        
        return NextResponse.json({
          success: true,
          data: {
            plan: planData,
            totals,
            saved_at: new Date().toISOString()
          },
          message: 'Meal plan saved successfully'
        })

      case 'generate-plan':
        if (!preferences) {
          return NextResponse.json({
            success: false,
            error: 'Preferences required for plan generation'
          }, { status: 400 })
        }

        const menuData = await getMenus()
        const menuItems = menuData.menus?.nodes || []
        const generatedPlan = await generateCustomPlan(preferences, menuItems)
        
        return NextResponse.json({
          success: true,
          data: generatedPlan,
          message: 'Custom meal plan generated'
        })

      default:
        return NextResponse.json({
          success: false,
          error: 'Invalid action'
        }, { status: 400 })
    }

  } catch (error) {
    console.error('❌ Error in meal planner POST:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred'
    }, { status: 500 })
  }
}

// Helper functions
function generateSmartSuggestions({ budget, familySize, calories, menuItems }: any) {
  const suggestions = {
    budget_friendly: [],
    family_perfect: [],
    health_conscious: [],
    popular_choices: []
  }

  // Budget-friendly suggestions
  if (budget) {
    const perPersonBudget = familySize ? budget / familySize : budget
    suggestions.budget_friendly = menuItems
      .filter((item: any) => item.price <= perPersonBudget * 0.7)
      .sort((a: any, b: any) => a.price - b.price)
      .slice(0, 5)
  }

  // Family-perfect suggestions (shareable items)
  if (familySize && familySize > 2) {
    suggestions.family_perfect = menuItems
      .filter((item: any) => 
        item.category === 'Appetizers' || 
        item.category === 'Ribs' ||
        item.title.includes('Family') ||
        item.isPopular
      )
      .slice(0, 5)
  }

  // Health-conscious suggestions
  if (calories) {
    suggestions.health_conscious = menuItems
      .filter((item: any) => item.calories && item.calories < 600)
      .sort((a: any, b: any) => a.calories - b.calories)
      .slice(0, 5)
  }

  // Popular choices
  suggestions.popular_choices = menuItems
    .filter((item: any) => item.isPopular)
    .slice(0, 5)

  return suggestions
}

function calculatePlanTotals(meals: any[]) {
  const totals = {
    totalPrice: 0,
    totalCalories: 0,
    mealsCount: 0,
    averagePricePerMeal: 0,
    averageCaloriesPerDay: 0
  }

  meals.forEach(meal => {
    if (meal.items && meal.items.length > 0) {
      totals.totalPrice += meal.totalPrice || 0
      totals.totalCalories += meal.totalCalories || 0
      totals.mealsCount += 1
    }
  })

  totals.averagePricePerMeal = totals.mealsCount > 0 ? totals.totalPrice / totals.mealsCount : 0
  totals.averageCaloriesPerDay = totals.totalCalories / 7

  return totals
}

async function generateCustomPlan(preferences: any, menuItems: any[]) {
  const { budget, familySize, calories, dietaryRestrictions, occasion } = preferences
  
  // Start with a template based on preferences
  let baseTemplate = MEAL_TEMPLATES.find(t => {
    if (occasion && t.occasion === occasion) return true
    if (budget && t.targetBudget && budget <= t.targetBudget * 1.1) return true
    if (familySize && t.familySize === familySize) return true
    return false
  }) || MEAL_TEMPLATES[0]

  // Customize the template based on available menu items
  const customPlan = {
    ...baseTemplate,
    id: `custom-${Date.now()}`,
    name: 'Your Custom Plan',
    description: `Generated based on your preferences`,
    generatedAt: new Date().toISOString(),
    preferences
  }

  return customPlan
}
