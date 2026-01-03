import { NextRequest, NextResponse } from 'next/server'

// OneSignal configuration
const ONESIGNAL_APP_ID = '7629b842-fb4e-4821-a9dd-e60ca450a208'
const ONESIGNAL_REST_API_KEY = process.env.ONESIGNAL_REST_API_KEY || 'YOUR_TEMPORARY_API_KEY_HERE'

// Generate welcome email template
function generateWelcomeEmailTemplate(email: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Texas Roadhouse Menu Updates!</title>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5; }
        .container { max-width: 600px; margin: 0 auto; background: #fff; }
        .header { background: #110302; color: #FCD705; padding: 40px 20px; text-align: center; }
        .header h1 { margin: 0; font-size: 32px; font-weight: bold; }
        .header p { margin: 15px 0 0 0; font-size: 18px; color: #ffffff; opacity: 0.9; }
        .content { padding: 40px 30px; }
        .welcome-badge { background: #FCD705; color: #110302; padding: 15px 25px; border-radius: 8px; font-weight: bold; display: inline-block; margin: 20px 0; font-size: 18px; }
        .benefits { background: #f8f8f8; padding: 25px; border-radius: 8px; margin: 25px 0; }
        .benefit-item { display: flex; align-items: center; margin: 15px 0; }
        .benefit-icon { width: 24px; height: 24px; background: #FCD705; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; font-weight: bold; color: #110302; }
        .cta-section { text-align: center; margin: 30px 0; padding: 25px; background: #110302; border-radius: 8px; }
        .cta-button { display: inline-block; background: #FCD705; color: #110302; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 16px; margin: 10px; }
        .footer { background: #f8f8f8; padding: 30px 20px; text-align: center; font-size: 14px; color: #666; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🍖 Texas Roadhouse Menu</h1>
            <p>Welcome to the ultimate menu resource!</p>
        </div>
        
        <div class="content">
            <div class="welcome-badge">👋 Welcome Aboard!</div>
            
            <p>Hi there!</p>
            
            <p>Thank you for subscribing to <strong>Texas Roadhouse Menu Updates</strong>! You've just joined thousands of food lovers who stay up-to-date with the latest menu items, prices, and exclusive deals.</p>
            
            <div class="benefits">
                <h3>🎉 Here's what you'll get:</h3>
                <div class="benefit-item">
                    <div class="benefit-icon">🍽️</div>
                    <div>Latest menu updates and new items</div>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">💰</div>
                    <div>Current prices and value deals</div>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">🎫</div>
                    <div>Exclusive coupons and discounts</div>
                </div>
                <div class="benefit-item">
                    <div class="benefit-icon">📰</div>
                    <div>Food news and restaurant updates</div>
                </div>
            </div>
            
            <div class="cta-section">
                <h3 style="color: #FCD705; margin-top: 0;">🔥 Start Exploring Now!</h3>
                <a href="https://texasroadhouse-menus.us" class="cta-button">View Full Menu</a>
                <a href="https://texasroadhouse-menus.us/coupons" class="cta-button">Get Coupons</a>
            </div>
            
            <p>We're excited to have you as part of our community! Keep an eye on your inbox for the latest updates.</p>
            
            <p>Happy dining! 🍴</p>
            
            <p><strong>The Texas Roadhouse Menu Team</strong></p>
        </div>
        
        <div class="footer">
            <p>You're receiving this because you subscribed to Texas Roadhouse Menu Updates at <strong>texasroadhouse-menus.us</strong></p>
            <p>This is an independent informational site. We are not affiliated with Texas Roadhouse.</p>
            <p>© 2026 Texas Roadhouse Menu. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
  `
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
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

    // Add email subscriber to OneSignal
    const oneSignalResponse = await fetch('https://onesignal.com/api/v1/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
      },
      body: JSON.stringify({
        app_id: ONESIGNAL_APP_ID,
        device_type: 11, // Email device type
        identifier: email,
        email: email,
        tags: {
          subscription_source: 'footer_newsletter',
          subscription_date: new Date().toISOString(),
          site_section: 'footer'
        }
      })
    })

    if (!oneSignalResponse.ok) {
      const errorText = await oneSignalResponse.text()
      console.error('OneSignal API error:', errorText)
      
      // Check if email already exists (this is actually OK)
      if (errorText.includes('already exists') || errorText.includes('duplicate')) {
        return NextResponse.json({ 
          success: true, 
          message: 'You are already subscribed to our newsletter!' 
        })
      }
      
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      )
    }

    const result = await oneSignalResponse.json()
    console.log('OneSignal subscription successful:', result.id)

    // Send welcome email via OneSignal Email API
    try {
      const welcomeEmailResponse = await fetch('https://onesignal.com/api/v1/notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${ONESIGNAL_REST_API_KEY}`
        },
        body: JSON.stringify({
          app_id: ONESIGNAL_APP_ID,
          include_email_tokens: [email],
          email_subject: "Welcome to Texas Roadhouse Menu Updates! 🍖",
          email_body: generateWelcomeEmailTemplate(email),
          email_from_name: 'Texas Roadhouse Menu Updates',
          email_from_address: 'notifications@texasroadhouse-menus.us',
          email_preheader: 'Thank you for subscribing to Texas Roadhouse menu updates and exclusive offers!',
          email_reply_to_address: 'info@texasroadhouse-menus.us'
        })
      })

      if (welcomeEmailResponse.ok) {
        console.log('Welcome email sent successfully to:', email)
      } else {
        console.error('Failed to send welcome email:', await welcomeEmailResponse.text())
      }
    } catch (emailError) {
      console.error('Welcome email error:', emailError)
      // Don't fail the subscription if welcome email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to Texas Roadhouse Menu updates!',
      playerId: result.id
    })

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Optional: GET method to check subscription status
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')

  if (!email) {
    return NextResponse.json(
      { error: 'Email parameter required' },
      { status: 400 }
    )
  }

  // You could implement subscription status check here
  return NextResponse.json({
    message: 'Subscription status check not implemented yet'
  })
}
