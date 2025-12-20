'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd'
import { 
  Calendar, CalendarDays, ShoppingCart, Download, Mail, 
  Plus, Minus, DollarSign, Activity, Users, Clock,
  Search, Filter, Star, MapPin, Phone, ExternalLink,
  X, ChevronRight
} from 'lucide-react'

// Little Caesars Menu Data (sample - you can expand this)
const LITTLE_CAESARS_MENU = {
  pizzas: [
    {
      id: 'hot-n-ready-pepperoni',
      name: 'Hot-N-Ready Pepperoni',
      price: 5.99,
      calories: 280,
      description: 'Our classic pepperoni pizza ready when you are',
      category: 'pizzas',
      image: '/menu/pepperoni-pizza.webp',
      popular: true
    },
    {
      id: 'extramostbestest-pepperoni',
      name: 'ExtraMostBestest Pepperoni',
      price: 6.99,
      calories: 320,
      description: 'More cheese, more pepperoni, more delicious',
      category: 'pizzas',
      image: '/menu/extramostbestest-pepperoni.webp',
      popular: true
    },
    {
      id: '3-meat-treat',
      name: '3 Meat Treat Pizza',
      price: 9.99,
      calories: 350,
      description: 'Pepperoni, Italian sausage, and salami',
      category: 'pizzas',
      image: '/menu/3-meat-treat.webp'
    },
    {
      id: 'detroit-deep-dish',
      name: 'Detroit Deep Dish',
      price: 8.99,
      calories: 380,
      description: 'Square pizza with caramelized crust edges',
      category: 'pizzas',
      image: '/menu/detroit-deep-dish.webp',
      popular: true
    }
  ],
  wings: [
    {
      id: 'caesar-wings-8pc',
      name: '8 Piece Caesar Wings',
      price: 7.99,
      calories: 640,
      description: 'Oven-roasted wings with your choice of sauce',
      category: 'wings',
      image: '/menu/caesar-wings.webp',
      popular: true
    },
    {
      id: 'boneless-wings-10pc',
      name: '10 Piece Boneless Wings',
      price: 8.99,
      calories: 520,
      description: 'Tender boneless wings with your favorite sauce',
      category: 'wings',
      image: '/menu/boneless-wings.webp'
    }
  ],
  sides: [
    {
      id: 'crazy-bread',
      name: 'Crazy Bread',
      price: 3.99,
      calories: 100,
      description: 'Warm breadsticks sprinkled with Parmesan cheese',
      category: 'sides',
      image: '/menu/crazy-bread.webp',
      popular: true
    },
    {
      id: 'caesar-dips',
      name: 'Caesar Dips',
      price: 4.99,
      calories: 120,
      description: 'Warm bread with zesty sauce for dipping',
      category: 'sides',
      image: '/menu/caesar-dips.webp'
    }
  ],
  beverages: [
    {
      id: 'pepsi-2l',
      name: '2L Pepsi',
      price: 2.99,
      calories: 150,
      description: 'Ice-cold 2-liter Pepsi products',
      category: 'beverages',
      image: '/menu/pepsi-2l.webp'
    },
    {
      id: 'pepsi-20oz',
      name: '20oz Pepsi',
      price: 1.99,
      calories: 250,
      description: 'Refreshing 20oz Pepsi products',
      category: 'beverages',
      image: '/menu/pepsi-20oz.webp'
    }
  ]
}

const DAYS_OF_WEEK = [
  'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'
]

const MEAL_TYPES = ['lunch', 'dinner']

interface MealPlan {
  [key: string]: {
    lunch?: any
    dinner?: any
  }
}

interface PlannerState {
  mealPlan: MealPlan
  budget: number
  currentWeek: string
  email: string
  subscribeNewsletter: boolean
}

export default function MealPlannerApp() {
  const [state, setState] = useState<PlannerState>({
    mealPlan: {},
    budget: 200,
    currentWeek: 'Week of ' + new Date().toLocaleDateString(),
    email: '',
    subscribeNewsletter: false
  })
  
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [showEmailModal, setShowEmailModal] = useState(false)
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false)
  const [notification, setNotification] = useState<{type: 'success' | 'error' | null, message: string} | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [selectedMealForMobile, setSelectedMealForMobile] = useState<any>(null)
  const [showMobileMealSelector, setShowMobileMealSelector] = useState(false)
  const [mobileDaySelection, setMobileDaySelection] = useState('')
  
  // Mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  // Auto-dismiss notifications
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null)
      }, 5000) // Auto dismiss after 5 seconds
      
      return () => clearTimeout(timer)
    }
  }, [notification])
  
  // Get all menu items
  const getAllMenuItems = () => {
    return [
      ...LITTLE_CAESARS_MENU.pizzas,
      ...LITTLE_CAESARS_MENU.wings,
      ...LITTLE_CAESARS_MENU.sides,
      ...LITTLE_CAESARS_MENU.beverages
    ]
  }
  
  // Filter menu items
  const getFilteredMenuItems = () => {
    let items = getAllMenuItems()
    
    if (selectedCategory !== 'all') {
      items = items.filter(item => item.category === selectedCategory)
    }
    
    if (searchTerm) {
      items = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    return items
  }
  
  // Calculate totals
  const calculateTotals = () => {
    let totalCost = 0
    let totalCalories = 0
    
    DAYS_OF_WEEK.forEach(day => {
      const dayMeals = state.mealPlan[day]
      if (dayMeals) {
        if (dayMeals.lunch) {
          totalCost += dayMeals.lunch.price
          totalCalories += dayMeals.lunch.calories
        }
        if (dayMeals.dinner) {
          totalCost += dayMeals.dinner.price
          totalCalories += dayMeals.dinner.calories
        }
      }
    })
    
    return { totalCost, totalCalories }
  }
  
  // Handle drag and drop
  const handleDragEnd = (result: any) => {
    if (!result.destination) return
    
    const { source, destination, draggableId } = result
    
    // Find the menu item
    const menuItem = getAllMenuItems().find(item => item.id === draggableId)
    if (!menuItem) return
    
    // Parse destination
    const [day, mealType] = destination.droppableId.split('-')
    
    setState(prev => ({
      ...prev,
      mealPlan: {
        ...prev.mealPlan,
        [day]: {
          ...prev.mealPlan[day],
          [mealType]: menuItem
        }
      }
    }))
  }
  
  // Mobile: Add meal to selected day and meal type
  const addMealToDay = (meal: any, day: string, mealType: string) => {
    try {
      if (!meal || !day || !mealType) {
        setNotification({
          type: 'error',
          message: 'Please select a meal, day, and meal type!'
        })
        return
      }

      setState(prev => ({
        ...prev,
        mealPlan: {
          ...prev.mealPlan,
          [day]: {
            ...prev.mealPlan[day],
            [mealType]: meal
          }
        }
      }))
      
      setShowMobileMealSelector(false)
      setSelectedMealForMobile(null)
      setMobileDaySelection('')
      
      setNotification({
        type: 'success',
        message: `🍽️ ${meal.name} added to ${day} ${mealType}!`
      })
    } catch (error) {
      console.error('Error adding meal:', error)
      setNotification({
        type: 'error',
        message: 'Sorry, there was an error adding this meal. Please try again.'
      })
    }
  }
  
  // Mobile: Select meal and show day picker
  const selectMealForMobile = (meal: any) => {
    try {
      if (!meal) {
        console.error('No meal selected')
        return
      }
      
      setSelectedMealForMobile(meal)
      setShowMobileMealSelector(true)
    } catch (error) {
      console.error('Error selecting meal:', error)
      setNotification({
        type: 'error',
        message: 'Sorry, there was an error selecting this meal. Please try again.'
      })
    }
  }
  
  // Remove meal from plan
  const removeMeal = (day: string, mealType: string) => {
    setState(prev => ({
      ...prev,
      mealPlan: {
        ...prev.mealPlan,
        [day]: {
          ...prev.mealPlan[day],
          [mealType]: undefined
        }
      }
    }))
  }
  
  // Generate PDF (placeholder for now)
  const generatePDF = async () => {
    if (Object.keys(state.mealPlan).length === 0) {
      setNotification({ type: 'error', message: 'Please add some meals to your plan before downloading!' })
      return
    }

    setIsGeneratingPDF(true)
    
    // Simulate PDF generation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Create a simple HTML version for PDF
    const pdfContent = createPDFContent()
    
    // In a real implementation, you'd use a library like jsPDF or Puppeteer
    // For now, we'll create a downloadable HTML file
    const blob = new Blob([pdfContent], { type: 'text/html' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `little-caesars-meal-plan-${new Date().toLocaleDateString()}.html`
    a.click()
    
    setNotification({ 
      type: 'success', 
      message: '📄 Your meal plan PDF has been downloaded successfully! Check your downloads folder.'
    })
    
    setIsGeneratingPDF(false)
  }
  
  // Email PDF function
  const emailPDF = async () => {
    if (!state.email) {
      setNotification({ type: 'error', message: 'Please enter your email address first!' })
      return
    }
    
    setIsGeneratingPDF(true)
    
    try {
      // In a real implementation, you'd send this to your email API
      const response = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: state.email,
          subscribe: state.subscribeNewsletter,
          mealPlan: state.mealPlan,
          week: state.currentWeek,
          totals: calculateTotals()
        })
      })
      
      if (response.ok) {
        setNotification({ 
          type: 'success', 
          message: `🎉 Your meal plan has been emailed to ${state.email}! Check your inbox for the PDF.`
        })
        setShowEmailModal(false)
        
        // Clear form
        setState(prev => ({ ...prev, email: '', subscribeNewsletter: false }))
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Email error:', error)
      setNotification({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your meal plan. Please try again or contact support.'
      })
    }
    
    setIsGeneratingPDF(false)
  }
  
  // Create PDF content
  const createPDFContent = () => {
    const { totalCost, totalCalories } = calculateTotals()
    
    return `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Little Caesars Meal Plan - ${state.currentWeek}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #fff; }
        .header { text-align: center; color: #f97316; border-bottom: 3px solid #f97316; padding-bottom: 20px; margin-bottom: 30px; }
        .week-title { color: #f97316; font-size: 24px; margin-bottom: 10px; }
        .totals { background: #fff7ed; padding: 15px; border-radius: 8px; margin-bottom: 30px; }
        .day-section { margin-bottom: 25px; page-break-inside: avoid; }
        .day-title { background: #f97316; color: white; padding: 10px; border-radius: 5px; font-weight: bold; }
        .meal { margin: 10px 0; padding: 10px; background: #f9f9f9; border-radius: 5px; }
        .meal-type { font-weight: bold; color: #f97316; margin-bottom: 5px; }
        .meal-details { color: #666; }
        .footer { margin-top: 40px; text-align: center; color: #666; border-top: 1px solid #ddd; padding-top: 20px; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🍕 Little Caesars Meal Plan</h1>
        <div class="week-title">${state.currentWeek}</div>
      </div>
      
      <div class="totals">
        <h3>📊 Week Summary</h3>
        <p><strong>Total Budget:</strong> $${totalCost.toFixed(2)} / $${state.budget.toFixed(2)}</p>
        <p><strong>Total Calories:</strong> ${totalCalories.toLocaleString()}</p>
        <p><strong>Average per Day:</strong> ${Math.round(totalCalories / 7).toLocaleString()} calories</p>
      </div>
      
      ${DAYS_OF_WEEK.map(day => {
        const dayMeals = state.mealPlan[day]
        return `
          <div class="day-section">
            <div class="day-title">${day}</div>
            ${dayMeals?.lunch ? `
              <div class="meal">
                <div class="meal-type">🍽️ Lunch</div>
                <div><strong>${dayMeals.lunch.name}</strong> - $${dayMeals.lunch.price}</div>
                <div class="meal-details">${dayMeals.lunch.description}</div>
                <div class="meal-details">${dayMeals.lunch.calories} calories</div>
              </div>
            ` : ''}
            ${dayMeals?.dinner ? `
              <div class="meal">
                <div class="meal-type">🌙 Dinner</div>
                <div><strong>${dayMeals.dinner.name}</strong> - $${dayMeals.dinner.price}</div>
                <div class="meal-details">${dayMeals.dinner.description}</div>
                <div class="meal-details">${dayMeals.dinner.calories} calories</div>
              </div>
            ` : ''}
            ${!dayMeals?.lunch && !dayMeals?.dinner ? '<div class="meal">No meals planned for this day</div>' : ''}
          </div>
        `
      }).join('')}
      
      <div class="footer">
        <p>Generated by Little Caesars Meal Planner</p>
        <p>Visit <strong>littlecaesarsmenu.us</strong> for more meal planning tools</p>
        <p>Plan created on ${new Date().toLocaleDateString()}</p>
      </div>
    </body>
    </html>
    `
  }
  
  const { totalCost, totalCalories } = calculateTotals()
  const isOverBudget = totalCost > state.budget
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream to-white">
      <DragDropContext onDragEnd={handleDragEnd}>
        {/* Planning Header */}
        <section className="py-6 md:py-12 bg-white shadow-lg relative z-10 mx-2 sm:mx-4 lg:mx-8 rounded-xl md:rounded-2xl mt-4 md:mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 bg-texas-yellow/10 rounded-full px-3 md:px-4 py-2 border border-texas-yellow/20 mb-3 md:mb-4">
                <Calendar className="h-4 w-4 md:h-5 md:w-5 text-little-caesars-orange" />
                <span className="text-stone-700 font-medium text-sm md:text-base">Interactive Meal Planner</span>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto">
                {/* Budget Tracker */}
                <div className="bg-gradient-to-br from-texas-red/10 to-texas-red/5 rounded-xl p-4 sm:p-5 lg:p-6 border border-texas-red/20">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <DollarSign className="h-5 w-5 sm:h-6 sm:w-6 text-little-caesars-orange" />
                    <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Weekly Budget</h3>
                  </div>
                  <div className="space-y-2">
                    <input
                      type="number"
                      value={state.budget}
                      onChange={(e) => setState(prev => ({ ...prev, budget: parseFloat(e.target.value) || 0 }))}
                      className="w-full px-3 py-2 text-sm sm:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-little-caesars-orange focus:border-transparent"
                      placeholder="Set budget..."
                    />
                    <div className={`text-xs sm:text-sm font-medium ${isOverBudget ? 'text-red-600' : 'text-green-600'}`}>
                      Spent: ${totalCost.toFixed(2)} / ${state.budget.toFixed(2)}
                    </div>
                    <div className="w-full bg-stone-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full transition-all duration-300 ${isOverBudget ? 'bg-red-500' : 'bg-green-500'}`}
                        style={{ width: `${Math.min(100, (totalCost / state.budget) * 100)}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                {/* Calorie Tracker */}
                <div className="bg-gradient-to-br from-texas-green/10 to-texas-green/5 rounded-xl p-4 sm:p-5 lg:p-6 border border-texas-green/20">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Activity className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Nutrition</h3>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <div className="text-xl sm:text-2xl font-bold text-green-600">
                      {totalCalories.toLocaleString()}
                    </div>
                    <div className="text-xs sm:text-sm text-stone-600">Total Calories</div>
                    <div className="text-xs sm:text-sm text-stone-600">
                      Avg: {Math.round(totalCalories / 7).toLocaleString()}/day
                    </div>
                  </div>
                </div>
                
                {/* Export Options */}
                <div className="bg-gradient-to-br from-texas-yellow/10 to-texas-yellow/5 rounded-xl p-4 sm:p-5 lg:p-6 border border-texas-yellow/20 sm:col-span-2 lg:col-span-1">
                  <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                    <Download className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500" />
                    <h3 className="font-semibold text-stone-800 text-sm sm:text-base">Export Plan</h3>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-2">
                    <button
                      onClick={generatePDF}
                      disabled={isGeneratingPDF}
                      className="w-full px-3 sm:px-4 py-2 bg-little-caesars-orange text-white rounded-lg hover:bg-little-caesars-orange/90 transition-colors text-xs sm:text-sm font-medium"
                    >
                      {isGeneratingPDF ? 'Generating...' : 'Download PDF'}
                    </button>
                    <button
                      onClick={() => setShowEmailModal(true)}
                      className="w-full px-3 sm:px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-600/90 transition-colors text-xs sm:text-sm font-medium"
                    >
                      Email Plan
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Instructions */}
        {isMobile && (
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mt-6 mb-4">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-blue-800 text-sm sm:text-base">📱 Mobile Touch Mode</h4>
                  <p className="text-blue-600 text-xs sm:text-sm">Simply tap any menu item to add it to your weekly plan!</p>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Desktop Instructions */}
        {!isMobile && (
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 mt-6 mb-4">
            <div className="bg-gradient-to-r from-texas-red/5 via-texas-yellow/5 to-texas-green/5 border-2 border-texas-red/20 rounded-2xl p-4 shadow-lg">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="bg-texas-red/10 p-3 rounded-full border border-texas-red/20 shadow-sm">
                  <Search className="h-4 w-4 sm:h-5 sm:w-5 text-texas-red" />
                </div>
                <div>
                  <h4 className="font-bold text-texas-red text-sm sm:text-base flex items-center gap-2">
                    🖱️ Desktop Drag Mode
                    <span className="bg-texas-red text-white px-2 py-1 rounded-full text-xs">ACTIVE</span>
                  </h4>
                  <p className="text-stone-700 text-xs sm:text-sm font-medium">Drag menu items from the left panel to your weekly calendar! Hover for preview.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Planner Interface */}
        <section className="py-4 sm:py-6 md:py-8">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
            <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${isMobile ? 'grid-cols-1' : 'lg:grid-cols-3'}`}>
              
              {/* Menu Items Panel */}
              <div className="lg:col-span-1">
                <div className={`bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 ${!isMobile ? 'lg:sticky lg:top-4' : ''}`}>
                  <h3 className="text-lg sm:text-xl font-slab font-bold text-stone-800 mb-3 sm:mb-4 flex items-center gap-2">
                    <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5 text-little-caesars-orange" />
                    Little Caesars Menu
                    {!isMobile && (
                      <span className="bg-little-caesars-orange/20 text-stone-800 px-2 py-1 rounded-full text-xs font-medium">
                        🖱️ Drag & Drop
                      </span>
                    )}
                  </h3>
                  
                  {/* Search and Filter */}
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-stone-400" />
                      <input
                        type="text"
                        placeholder="Search menu items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-little-caesars-orange focus:border-transparent"
                      />
                    </div>
                    
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 sm:py-3 text-sm sm:text-base border border-stone-300 rounded-lg focus:ring-2 focus:ring-little-caesars-orange focus:border-transparent"
                    >
                      <option value="all">All Categories</option>
                      <option value="pizzas">Pizzas</option>
                      <option value="wings">Wings</option>
                      <option value="sides">Sides</option>
                      <option value="beverages">Beverages</option>
                    </select>
                  </div>
                  
                  {/* Menu Items */}
                  <Droppable droppableId="menu-items" isDropDisabled={true}>
                    {(provided) => (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-2 sm:space-y-3 max-h-64 sm:max-h-80 lg:max-h-96 overflow-y-auto"
                      >
                        {getFilteredMenuItems().map((item, index) => (
                          <Draggable key={item.id} draggableId={item.id} index={index} isDragDisabled={isMobile}>
                            {(provided, snapshot) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...(!isMobile ? provided.dragHandleProps : {})}
                                onClick={isMobile ? (e) => {
                                  e.preventDefault()
                                  e.stopPropagation()
                                  selectMealForMobile(item)
                                } : undefined}
                                className={`
                                  bg-stone-50 border border-stone-200 rounded-lg p-3 sm:p-4 transition-all duration-300
                                  ${isMobile 
                                    ? 'cursor-pointer hover:bg-blue-50 hover:border-blue-300 active:scale-95 hover:shadow-lg' 
                                    : 'cursor-grab hover:shadow-xl hover:bg-white hover:border-texas-red/30 hover:scale-102 active:cursor-grabbing'
                                  }
                                  ${snapshot.isDragging ? 'rotate-3 scale-110 shadow-2xl bg-white border-texas-red z-50 ring-2 ring-texas-red/30' : ''}
                                  ${item.popular ? 'border-texas-yellow border-2 shadow-md' : ''}
                                `}
                              >
                                <div className="flex justify-between items-start mb-2">
                                  <h4 className="font-semibold text-stone-800 text-xs sm:text-sm flex-1 pr-2">
                                    {item.name}
                                    {item.popular && <Star className="inline h-3 w-3 sm:h-4 sm:w-4 text-texas-yellow ml-1 fill-current" />}
                                  </h4>
                                  <span className="text-texas-red font-bold text-xs sm:text-sm">${item.price}</span>
                                </div>
                                <p className="text-stone-600 text-xs mb-2 line-clamp-2">{item.description}</p>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 text-xs text-stone-500">
                                  <span>{item.calories} cal</span>
                                  <div className="flex items-center gap-1 sm:gap-2 flex-wrap">
                                    <span className="capitalize bg-stone-200 px-2 py-1 rounded text-xs">{item.category}</span>
                                    {isMobile && (
                                      <span className="text-blue-600 font-medium bg-blue-100 px-2 py-1 rounded text-xs">📱 Tap</span>
                                    )}
                                    {!isMobile && (
                                      <span className="text-gray-600 font-medium bg-gray-100 px-2 py-1 rounded text-xs">🖱️ Drag</span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        ))}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                  
                  {/* Menu Links */}
                  <div className="mt-6 pt-6 border-t border-stone-200">
                    <h4 className="font-semibold text-stone-800 mb-3">Quick Links</h4>
                    <div className="space-y-2 text-sm">
                      <Link 
                        href="/little-caesars-menu" 
                        className="flex items-center gap-2 text-little-caesars-orange hover:text-little-caesars-orange/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Complete Menu & Prices
                      </Link>
                      <Link 
                        href="/store-locator" 
                        className="flex items-center gap-2 text-little-caesars-orange hover:text-little-caesars-orange/80 transition-colors"
                      >
                        <MapPin className="h-4 w-4" />
                        Find Little Caesars Near You
                      </Link>
                      <a 
                        href="https://www.littlecaesars.com" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-little-caesars-orange hover:text-little-caesars-orange/80 transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Official Little Caesars Website
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Weekly Calendar */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
                    <h3 className="text-lg sm:text-xl font-slab font-bold text-stone-800 flex items-center gap-2">
                      <CalendarDays className="h-4 w-4 sm:h-5 sm:w-5 text-texas-red" />
                      <span className="truncate">{state.currentWeek}</span>
                    </h3>
                    <input
                      type="text"
                      value={state.currentWeek}
                      onChange={(e) => setState(prev => ({ ...prev, currentWeek: e.target.value }))}
                      className="px-3 py-2 border border-stone-300 rounded text-sm focus:ring-2 focus:ring-texas-red focus:border-transparent max-w-48"
                    />
                  </div>
                  
                  <div className="space-y-3 sm:space-y-4">
                    {DAYS_OF_WEEK.map(day => (
                      <div key={day} className="border border-stone-200 rounded-lg p-3 sm:p-4">
                        <h4 className="font-semibold text-stone-800 mb-2 sm:mb-3 flex items-center gap-2 text-sm sm:text-base">
                          <Clock className="h-4 w-4 text-texas-red" />
                          {day}
                        </h4>
                        
                        <div className={`grid gap-3 sm:gap-4 ${isMobile ? 'grid-cols-1' : 'sm:grid-cols-2'}`}>
                          {/* Lunch Slot */}
                          <Droppable droppableId={`${day}-lunch`}>
                            {(provided, snapshot) => (
                              <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={`
                                  min-h-20 sm:min-h-24 border-2 border-dashed border-stone-300 rounded-lg p-2 sm:p-3 transition-all duration-300
                                  ${snapshot.isDraggingOver ? 'border-texas-red bg-texas-red/10 shadow-lg scale-105 ring-2 ring-texas-red/20' : 'hover:border-texas-red/50 hover:bg-texas-red/5'}
                                  ${state.mealPlan[day]?.lunch ? 'border-solid border-texas-green bg-texas-green/5 shadow-sm' : ''}
                                `}
                              >
                                <div className="text-xs sm:text-sm font-medium text-stone-600 mb-2">🍽️ Lunch</div>
                                {state.mealPlan[day]?.lunch ? (
                                  <div className="bg-white rounded-lg p-2 sm:p-3 border border-stone-200">
                                    <div className="flex justify-between items-start mb-1">
                                      <h5 className="font-semibold text-stone-800 text-xs sm:text-sm flex-1 pr-2">
                                        {state.mealPlan[day].lunch.name}
                                      </h5>
                                      <button
                                        onClick={() => removeMeal(day, 'lunch')}
                                        className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0"
                                      >
                                        <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                                      </button>
                                    </div>
                                    <div className="text-xs text-stone-600">
                                      ${state.mealPlan[day].lunch.price} • {state.mealPlan[day].lunch.calories} cal
                                    </div>
                                  </div>
                                ) : (
                                  <div className="text-center text-stone-400 text-xs sm:text-sm py-3 sm:py-4 flex flex-col items-center gap-2">
                                    {!isMobile ? (
                                      <>
                                        <div className="w-8 h-8 border-2 border-dashed border-stone-300 rounded-full flex items-center justify-center">
                                          <span className="text-lg">🍽️</span>
                                        </div>
                                        <div className="text-stone-500 font-medium">Drop your lunch here</div>
                                        <div className="text-xs text-stone-400">Drag any menu item from the left</div>
                                      </>
                                    ) : (
                                      '📱 Tap menu item to add'
                                    )}
                                  </div>
                                )}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                          
                          {/* Dinner Slot */}
                          <Droppable droppableId={`${day}-dinner`}>
                            {(provided, snapshot) => (
                              <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                className={`
                                  min-h-20 sm:min-h-24 border-2 border-dashed border-stone-300 rounded-lg p-2 sm:p-3 transition-all duration-300
                                  ${snapshot.isDraggingOver ? 'border-texas-red bg-texas-red/10 shadow-lg scale-105 ring-2 ring-texas-red/20' : 'hover:border-texas-red/50 hover:bg-texas-red/5'}
                                  ${state.mealPlan[day]?.dinner ? 'border-solid border-texas-green bg-texas-green/5 shadow-sm' : ''}
                                `}
                              >
                                <div className="text-xs sm:text-sm font-medium text-stone-600 mb-2">🌙 Dinner</div>
                                {state.mealPlan[day]?.dinner ? (
                                  <div className="bg-white rounded-lg p-2 sm:p-3 border border-stone-200">
                                    <div className="flex justify-between items-start mb-1">
                                      <h5 className="font-semibold text-stone-800 text-xs sm:text-sm flex-1 pr-2">
                                        {state.mealPlan[day].dinner.name}
                                      </h5>
                                      <button
                                        onClick={() => removeMeal(day, 'dinner')}
                                        className="text-red-500 hover:text-red-700 transition-colors flex-shrink-0"
                                      >
                                        <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                                      </button>
                                    </div>
                                    <div className="text-xs text-stone-600">
                                      ${state.mealPlan[day].dinner.price} • {state.mealPlan[day].dinner.calories} cal
                                    </div>
                                  </div>
                                ) : (
                                  <div className="text-center text-stone-400 text-xs sm:text-sm py-3 sm:py-4 flex flex-col items-center gap-2">
                                    {!isMobile ? (
                                      <>
                                        <div className="w-8 h-8 border-2 border-dashed border-stone-300 rounded-full flex items-center justify-center">
                                          <span className="text-lg">🌙</span>
                                        </div>
                                        <div className="text-stone-500 font-medium">Drop your dinner here</div>
                                        <div className="text-xs text-stone-400">Drag any menu item from the left</div>
                                      </>
                                    ) : (
                                      '📱 Tap menu item to add'
                                    )}
                                  </div>
                                )}
                                {provided.placeholder}
                              </div>
                            )}
                          </Droppable>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Email Modal */}
        {showEmailModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl p-6 max-w-md w-full">
              <h3 className="text-xl font-slab font-bold text-stone-800 mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-texas-red" />
                Email Your Meal Plan
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={state.email}
                    onChange={(e) => setState(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 border border-stone-300 rounded-lg focus:ring-2 focus:ring-texas-red focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    checked={state.subscribeNewsletter}
                    onChange={(e) => setState(prev => ({ ...prev, subscribeNewsletter: e.target.checked }))}
                    className="h-4 w-4 text-texas-red focus:ring-texas-red border-stone-300 rounded"
                  />
                  <label htmlFor="newsletter" className="text-sm text-stone-700">
                    Subscribe to our newsletter for meal planning tips and deals
                  </label>
                </div>
                
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowEmailModal(false)}
                    className="flex-1 px-4 py-2 border border-stone-300 text-stone-700 rounded-lg hover:bg-stone-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={emailPDF}
                    disabled={isGeneratingPDF || !state.email}
                    className="flex-1 px-4 py-2 bg-texas-red text-white rounded-lg hover:bg-texas-red/90 transition-colors disabled:opacity-50"
                  >
                    {isGeneratingPDF ? 'Sending...' : 'Send Plan'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Mobile Meal Selector Modal */}
        {isMobile && showMobileMealSelector && selectedMealForMobile && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-y-auto">
              {/* Header */}
              <div className="bg-gradient-to-r from-texas-red to-red-600 text-white p-6 rounded-t-2xl">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-slab font-bold text-xl mb-1">Add to Plan</h3>
                    <p className="text-white/90 text-sm">{selectedMealForMobile.name}</p>
                    <p className="text-texas-yellow font-bold">${selectedMealForMobile.price}</p>
                  </div>
                  <button
                    onClick={() => setShowMobileMealSelector(false)}
                    className="text-white/80 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>
              
              {/* Day & Meal Type Selection */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Select Day</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {DAYS_OF_WEEK.map(day => (
                      <button
                        key={day}
                        onClick={() => setMobileDaySelection(day)}
                        className={`
                          p-3 rounded-lg border-2 transition-all text-sm font-medium
                          ${mobileDaySelection === day
                            ? 'border-texas-red bg-texas-red text-white'
                            : 'border-gray-200 hover:border-texas-red hover:bg-texas-red/5'
                          }
                        `}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>
                
                {mobileDaySelection && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Select Meal Time</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {MEAL_TYPES.map(mealType => (
                        <button
                          key={mealType}
                          onClick={() => addMealToDay(selectedMealForMobile, mobileDaySelection, mealType)}
                          className="p-4 rounded-lg border-2 border-gray-200 hover:border-texas-green hover:bg-texas-green/5 transition-all text-left"
                        >
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium text-gray-800 capitalize">{mealType}</p>
                              <p className="text-sm text-gray-600">
                                {state.mealPlan[mobileDaySelection]?.[mealType] 
                                  ? `Replace: ${state.mealPlan[mobileDaySelection][mealType].name}`
                                  : 'Empty slot'
                                }
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                
                {!mobileDaySelection && (
                  <div className="text-center py-8">
                    <Calendar className="h-12 w-12 text-gray-300 mx-auto mb-3" />
                    <p className="text-gray-500">Please select a day first</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Beautiful Notification Popup */}
        {notification && (
          <div className="fixed top-20 right-4 left-4 md:left-auto md:top-4 md:right-4 z-[9999] animate-slide-in-right animate-notification-pulse">
            <div className={`
              w-full md:max-w-md rounded-2xl shadow-2xl border-2 overflow-hidden backdrop-blur-sm
              ${notification.type === 'success' 
                ? 'bg-gradient-to-r from-texas-green to-green-600 border-green-300 shadow-green-500/25' 
                : 'bg-gradient-to-r from-red-500 to-red-600 border-red-300 shadow-red-500/25'
              }
            `}>
              <div className="p-4 md:p-6 text-white">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className={`
                    w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0
                    ${notification.type === 'success' ? 'bg-white/25 ring-2 ring-white/30' : 'bg-white/25 ring-2 ring-white/30'}
                  `}>
                    {notification.type === 'success' ? (
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-slab font-bold text-lg md:text-xl mb-1 text-white">
                      {notification.type === 'success' ? '🎉 Success!' : '⚠️ Oops!'}
                    </h4>
                    <p className="text-white text-sm md:text-base leading-relaxed break-words">
                      {notification.message}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => setNotification(null)}
                    className="text-white/80 hover:text-white transition-colors p-2 rounded-full hover:bg-white/10 flex-shrink-0"
                    aria-label="Close notification"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              
              {/* Progress bar for auto-dismiss */}
              <div className="h-2 bg-white/20">
                <div 
                  className="h-full bg-white/60 animate-progress-bar rounded-b-2xl"
                  style={{ animationDuration: '5s' }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </DragDropContext>
    </div>
  )
}
