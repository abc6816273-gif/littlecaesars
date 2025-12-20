import { NextRequest, NextResponse } from 'next/server'

// OneSignal configuration
const ONESIGNAL_APP_ID = '7629b842-fb4e-4821-a9dd-e60ca450a208'
const ONESIGNAL_REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY || 'YOUR_TEMPORARY_API_KEY_HERE'

interface MealItem {
  title: string
  price: number
  calories: number
  description: string
}

interface PlannedMeal {
  menuItem: MealItem
  day: string
  mealType: string
}

interface MealPlanData {
  mealPlan: PlannedMeal[]
  totalBudget: number
  totalCalories: number
  familySize: number
  currentDate: string
}

function generateMealPlanEmailTemplate(data: MealPlanData, email: string): string {
  const { mealPlan, totalBudget, totalCalories, familySize, currentDate } = data
  
  const DAYS_OF_WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  
  let mealPlanHTML = ''
  
  DAYS_OF_WEEK.forEach(day => {
    const dayMeals = mealPlan.filter(meal => meal.day === day)
    
    mealPlanHTML += `
      <div style="margin: 20px 0; background: #f8f9fa; padding: 15px; border-radius: 8px;">
        <h3 style="color: #110302; margin: 0 0 15px 0; font-size: 18px; border-bottom: 2px solid #FCD705; padding-bottom: 5px;">
          📆 ${day}
        </h3>
    `
    
    if (dayMeals.length === 0) {
      mealPlanHTML += '<p style="color: #666; font-style: italic; margin: 10px 0;">No meals planned</p>'
    } else {
      const mealTypes = ['breakfast', 'lunch', 'dinner']
      mealTypes.forEach(mealType => {
        const meal = dayMeals.find(m => m.mealType === mealType)
        if (meal) {
          mealPlanHTML += `
            <div style="margin: 10px 0; padding: 10px; background: white; border-radius: 6px; border-left: 4px solid #FCD705;">
              <div style="font-weight: bold; color: #110302; text-transform: capitalize;">${mealType}:</div>
              <div style="font-size: 16px; color: #333; margin: 5px 0;">${meal.menuItem.title}</div>
              <div style="font-size: 14px; color: #666;">
                💲 $${meal.menuItem.price.toFixed(2)} | 🔥 ${meal.menuItem.calories} cal
              </div>
              ${meal.menuItem.description ? `<div style="font-size: 12px; color: #888; margin-top: 5px;">${meal.menuItem.description}</div>` : ''}
            </div>
          `
        }
      })
    }
    
    mealPlanHTML += '</div>'
  })

  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Texas Roadhouse Weekly Meal Plan</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; }
        .header { background: #110302; color: #FCD705; padding: 40px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: bold; }
        .header p { margin: 15px 0 0 0; font-size: 16px; color: #ffffff; opacity: 0.9; }
        .content { padding: 30px; }
        .summary { background: #FCD705; color: #110302; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
        .summary h3 { margin: 0 0 15px 0; font-size: 20px; }
        .summary-stats { display: flex; justify-content: space-around; flex-wrap: wrap; }
        .stat { margin: 5px; }
        .stat strong { display: block; font-size: 18px; }
        .cta-section { text-align: center; margin: 30px 0; padding: 25px; background: #110302; border-radius: 8px; }
        .cta-button { display: inline-block; background: #FCD705; color: #110302; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; margin: 10px; }
        .footer { background: #f8f8f8; padding: 20px; text-align: center; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🍽️ Your Texas Roadhouse</h1>
            <h1>Weekly Meal Plan</h1>
            <p>Week of ${new Date(currentDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
        </div>
        
        <div class="content">
            <div class="summary">
                <h3>📊 Meal Plan Summary</h3>
                <div class="summary-stats">
                    <div class="stat">
                        <strong>$${totalBudget.toFixed(2)}</strong>
                        Total Budget
                    </div>
                    <div class="stat">
                        <strong>${totalCalories}</strong>
                        Total Calories
                    </div>
                    <div class="stat">
                        <strong>${familySize}</strong>
                        Family Size
                    </div>
                </div>
            </div>
            
            <h2 style="color: #110302; border-bottom: 3px solid #FCD705; padding-bottom: 10px;">Your Weekly Dining Plan</h2>
            
            ${mealPlanHTML}
            
            <div class="cta-section">
                <h3 style="color: #FCD705; margin-top: 0;">🔥 Ready to Dine?</h3>
                <a href="https://texasroadhouse-menus.us/store-locator" class="cta-button">Find Location</a>
                <a href="https://texasroadhouse-menus.us/meal-planner" class="cta-button">Update Plan</a>
            </div>
            
            <p>Enjoy your delicious week of Texas Roadhouse dining! 🤠</p>
            
            <p><strong>The Texas Roadhouse Menu Team</strong></p>
        </div>
        
        <div class="footer">
            <p>Generated by Texas Roadhouse Menu Planner at <strong>texasroadhouse-menus.us</strong></p>
            <p>📞 Find your local Texas Roadhouse for reservations and current hours</p>
            <p>This is an independent informational site. We are not affiliated with Texas Roadhouse.</p>
        </div>
    </div>
</body>
</html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const { email, mealPlanData } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    // Validate meal plan data
    if (!mealPlanData || !mealPlanData.mealPlan || mealPlanData.mealPlan.length === 0) {
      return NextResponse.json(
        { error: 'Meal plan data is required' },
        { status: 400 }
      )
    }

    // Check if OneSignal API key is configured
    if (!ONESIGNAL_REST_API_KEY) {
      console.error('OneSignal REST API key not configured')
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      )
    }

    // Send meal plan email via OneSignal
    const emailResponse = await fetch('https://onesignal.com/api/v1/notifications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
      },
      body: JSON.stringify({
        app_id: ONESIGNAL_APP_ID,
        include_email_tokens: [email],
        email_subject: `Your Texas Roadhouse Weekly Meal Plan - ${new Date(mealPlanData.currentDate).toLocaleDateString()}`,
        email_body: generateMealPlanEmailTemplate(mealPlanData, email),
        email_from_name: 'Texas Roadhouse Menu Planner',
        email_from_address: 'mealplans@texasroadhouse-menus.us',
        email_preheader: `Your personalized meal plan with ${mealPlanData.mealPlan.length} delicious meals planned!`,
        email_reply_to_address: 'info@texasroadhouse-menus.us'
      })
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('OneSignal email API error:', errorText)
      return NextResponse.json(
        { error: 'Failed to send meal plan email' },
        { status: 500 }
      )
    }

    const result = await emailResponse.json()
    console.log('Meal plan email sent successfully:', result.id)

    return NextResponse.json({
      success: true,
      message: 'Meal plan sent to your email successfully!',
      notificationId: result.id
    })

  } catch (error) {
    console.error('Send meal plan email error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
