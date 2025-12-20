import type { Metadata, Viewport } from 'next'
import { Inter, Roboto_Slab } from 'next/font/google'
import Script from 'next/script'
import { generateOrganizationSchema, generateWebSiteSchema } from './lib/seo'
import { defaultSEO, defaultViewport, pageSpeedOptimizations } from './lib/seo-config'
import { getSiteSEOSettings } from './lib/data'
import { YoastSEOHead } from './components/seo'
import { MobileOptimizer } from './components/performance/MobileOptimizer'
import { AutoCacheCleaner } from './components/performance/AutoCacheCleaner'
import { RealtimeAdBlockerDetector } from './components/ads/RealtimeAdBlockerDetector'
import { OptimizedScripts } from './components/performance/OptimizedScripts'
import { CriticalCSS } from './components/performance/CriticalCSS'
import { CSSOptimizer } from './components/performance/CSSOptimizer'
import { CriticalLCP } from './components/performance/CriticalLCP'
import { EmergencyFix } from './components/performance/EmergencyFix'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
// AdSense Auto Ads only - no manual components needed
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600'],
  display: 'swap',
  preload: true,
})

const robotoSlab = Roboto_Slab({ 
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: ['700', '800'],
  display: 'swap',
  preload: true,
})

// Generate dynamic metadata from WordPress/Yoast SEO
export async function generateMetadata(): Promise<Metadata> {
  try {
    const siteSEOResponse = await getSiteSEOSettings()
    const wpTitle = siteSEOResponse?.generalSettings?.title
    const wpDescription = siteSEOResponse?.generalSettings?.description
    const logoUrl = siteSEOResponse?.seo?.schema?.companyLogo?.sourceUrl

    const siteTitle = wpTitle || 'Little Caesars Menu & Prices 2025 - Official Menu'
    const siteDescription = wpDescription || 'Official Little Caesars Menu with Prices 2025. View complete menu, pizza, breadsticks, wings & find locations near you.'
    
    return {
      ...defaultSEO,
      title: {
        template: `%s | ${siteTitle}`,
        default: siteTitle,
      },
      description: siteDescription,
      // Always use local favicon files (your favicon)
      icons: {
        icon: [
          { url: '/favicon.ico', sizes: '16x16 32x32 48x48', type: 'image/x-icon' },
          { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
          { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        ],
        apple: [
          { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
          { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        ],
      },
    }
  } catch (error) {
    console.error('Error generating metadata from WordPress:', error)
    return defaultSEO
  }
}

export const viewport: Viewport = defaultViewport

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = generateOrganizationSchema()
  const websiteSchema = generateWebSiteSchema()
  
  // Fetch site-wide Yoast SEO settings
  const siteSEOResponse = await getSiteSEOSettings()
  
  // Check if we should exclude FAQ schema (for pages with custom FAQ schema)
  // Note: This is a server-side component, so we can't access pathname directly
  // We'll handle FAQ exclusion at the page level instead

  return (
    <html lang="en" className={`${inter.variable} ${robotoSlab.variable}`}>
      <head>
        {/* Titles and descriptions are handled by Next.js Metadata API above */}
        
        {/* Your Local Favicon - Always Used */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />
        <meta name="theme-color" content="#FF5A1F" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Google AdSense Verification */}
        <meta name="google-adsense-account" content="ca-pub-2413532455913207" />
        
        {/* Performance-optimized preconnects */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://www.littlecaesars.com" />
        
        {/* Google Analytics - Deferred */}
        
        {/* Google AdSense Auto Ads - FIXED Implementation */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2413532455913207" crossOrigin="anonymous"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.adsbygoogle = window.adsbygoogle || [];
              
              // Proper AdSense initialization
              window.addEventListener('load', function() {
                setTimeout(function() {
                  (adsbygoogle = window.adsbygoogle || []).push({
                    google_ad_client: "ca-pub-2413532455913207",
                    enable_page_level_ads: true,
                    overlays: {bottom: true}
                  });
                  console.log('✅ AdSense AUTO ADS loaded successfully');
                }, 2000);
              });
            `
          }}
        />
        
        {/* OneSignal Push Notifications - Performance Optimized */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.OneSignalDeferred = window.OneSignalDeferred || [];
              
              // Enhanced OneSignal initialization with error handling
              OneSignalDeferred.push(async function(OneSignal) {
                try {
                  await OneSignal.init({
                    appId: "7629b842-fb4e-4821-a9dd-e60ca450a208",
                    safari_web_id: "web.onesignal.auto.201c9c11-2835-4563-82b9-55a6f9094e87",
                    allowLocalhostAsSecureOrigin: true,
                    notifyButton: {
                      enable: true,
                      position: 'bottom-right',
                      size: 'large',
                      theme: 'default',
                      showCredit: false,
                      colors: {
                        'circle.background': '#FF5A1F',
                        'circle.foreground': 'white',
                        'badge.background': '#FF5A1F',
                        'badge.foreground': 'white',
                        'badge.bordercolor': 'white',
                        'pulse.color': '#FF5A1F'
                      },
                      offset: {
                        bottom: '20px',
                        right: '20px'
                      },
                      prenotify: true,
                      showLauncher: true,
                      displayPredicate: function() {
                        return true;
                      },
                      text: {
                        'tip.state.unsubscribed': 'Subscribe to notifications',
                        'tip.state.subscribed': "You're subscribed to notifications",
                        'tip.state.blocked': "You've blocked notifications",
                        'message.prenotify': 'Click to subscribe to notifications',
                        'message.action.subscribed': "Thanks! You'll receive notifications for new deals.",
                        'message.action.resubscribed': "You're subscribed to notifications",
                        'message.action.unsubscribed': "You won't receive notifications again",
                        'dialog.main.title': 'Manage Site Notifications',
                        'dialog.main.button.subscribe': 'SUBSCRIBE',
                        'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',
                        'dialog.blocked.title': 'Unblock Notifications',
                        'dialog.blocked.message': "Follow these instructions to allow notifications:"
                      }
                    },
                    promptOptions: {
                      slidedown: {
                        enabled: true,
                        autoPrompt: true,
                        timeDelay: 10,
                        pageViews: 1,
                        actionMessage: "Get notified about new Little Caesars menu items, prices, and exclusive deals!",
                        acceptButtonText: "Allow Notifications",
                        cancelButtonText: "Not Now"
                      }
                    },
                    welcomeNotification: {
                      title: "🔔 Little Caesars Updates",
                      message: "Thanks for subscribing! You'll get notified about new menu items, prices, and exclusive deals.",
                      url: "https://littlecaesarsmenu.us"
                    }
                  });
                  
                  console.log('✅ OneSignal initialized successfully');
                  
                  // Force show notification button
                  setTimeout(function() {
                    const button = document.querySelector('.onesignal-bell-launcher');
                    if (button) {
                      button.style.display = 'block !important';
                      button.style.visibility = 'visible !important';
                      button.style.opacity = '1 !important';
                      button.style.zIndex = '999999 !important';
                      console.log('✅ OneSignal bell button forced visible');
                    } else {
                      console.log('⚠️ OneSignal bell button not found');
                    }
                  }, 3000);
                  
                } catch (error) {
                  console.error('❌ OneSignal initialization failed:', error);
                }
              });
            `
          }}
        />

        
        {/* Preconnect to critical domains for faster loading */}
        {pageSpeedOptimizations.preconnect.map((url) => (
          <link key={url} rel="preconnect" href={url} />
        ))}
        {pageSpeedOptimizations.dnsPrefetch.map((url) => (
          <link key={url} rel="dns-prefetch" href={url} />
        ))}
        
        {/* Site-wide Yoast SEO Integration (FAQ schemas excluded - managed per page) */}
        <YoastSEOHead
          siteSEO={siteSEOResponse?.seo}
          fallbackTitle={siteSEOResponse?.generalSettings?.title || 'Little Caesars Menu'}
          fallbackDescription={siteSEOResponse?.generalSettings?.description || 'Little Caesars Menu with Prices'}
          excludeFAQSchema={true}
          fallbackFavicon="/favicon.ico"
          fallbackSchema={JSON.stringify(organizationSchema)}
        />
        
        {/* Fallback Structured Data (when no Yoast schema) */}
        {!siteSEOResponse?.seo && (
          <>
            <Script
              id="organization-schema"
              type="application/ld+json"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(organizationSchema),
              }}
            />
            <Script
              id="website-schema"
              type="application/ld+json"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(websiteSchema),
              }}
            />
          </>
        )}
        
        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Little Caesars Menu RSS Feed"
          href="/api/rss"
        />
        
        {/* Critical CSS for faster loading */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html { scroll-behavior: smooth; }
            body { font-family: var(--font-inter), sans-serif; }
            .font-slab { font-family: var(--font-roboto-slab), serif; }
            
            /* Global responsive images */
            img {
              max-width: 100%;
              height: auto;
              display: block;
            }
            
            /* Responsive image containers */
            .image-container, .wp-block-image, figure {
              width: 100%;
              max-width: 100%;
              overflow: hidden;
            }
            
            /* Ensure scripts are hidden */
            script {
              display: none !important;
            }
            
            /* Header Margin/Spacing Fixes */
            .smart-header {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              background-color: #FFFFFF !important;
              border-bottom: 2px solid #FF5A1F;
              box-shadow: 0 2px 8px rgba(0,0,0,0.1);
              position: relative;
              z-index: 50;
            }
            
            /* Ensure proper header spacing and background */
            header nav {
              margin: 0;
              padding: 0;
              width: 100%;
              background-color: transparent !important;
            }
            
            /* Force consistent white background on all devices and scroll states */
            .smart-header, 
            .smart-header header,
            .smart-header nav {
              background-color: #FFFFFF !important;
            }
            
            /* Override any backdrop or scroll-based background changes */
            .smart-header.backdrop-blur-sm,
            .smart-header[style*="background"],
            .smart-header.bg-black,
            .smart-header.bg-transparent {
              background-color: #FFFFFF !important;
            }
            
            /* Ensure background stays consistent during all transitions */
            .smart-header * {
              background-color: inherit;
            }
            
            /* Active menu item styling - only for active items */
            .smart-header nav a.bg-little-caesars-orange {
              background-color: #FF5A1F !important;
              color: white !important;
            }
            
            /* Active menu hover state */
            .smart-header nav a.bg-little-caesars-orange:hover {
              background-color: #E5511B !important;
              color: white !important;
            }
            
            /* Normal menu items should have no background */
            .smart-header nav a:not(.bg-little-caesars-orange) {
              background-color: transparent !important;
              color: #1C1C1C !important;
            }
            
            /* Normal menu hover state - exclude logo */
            .smart-header nav a:not(.bg-little-caesars-orange):not([href="/"]):hover {
              background-color: rgba(255, 90, 31, 0.1) !important;
              color: #FF5A1F !important;
            }
            
            /* Logo should never have hover background */
            .smart-header a[href="/"],
            .smart-header a[href="/"] *,
            .smart-header .flex-shrink-0 a,
            .smart-header .flex-shrink-0 a:hover {
              background-color: transparent !important;
            }
            
            /* Ensure View Coupons button is always visible */
            .smart-header button,
            .smart-header a[href*="coupons"],
            .smart-header a[href*="coupons"] button {
              display: flex !important;
              visibility: visible !important;
              opacity: 1 !important;
              z-index: 999 !important;
              color: white !important;
              background-color: #FF5A1F !important;
            }
            
            /* Button specific styling */
            .smart-header a[href*="coupons"] button:hover {
              background-color: #E5511B !important;
            }
            
            /* Mobile breadcrumb navigation improvements */
            .breadcrumb-container {
              scrollbar-width: none; /* Firefox */
              -ms-overflow-style: none; /* IE/Edge */
            }
            
            .breadcrumb-container::-webkit-scrollbar {
              display: none; /* Chrome/Safari */
            }
            
            /* Enhanced mobile touch targets for navigation */
            @media (max-width: 768px) {
              .breadcrumb-container {
                padding: 8px 0;
                scroll-behavior: smooth;
              }
              
              .breadcrumb-container button,
              .breadcrumb-container span {
                min-height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              
              /* Table of Contents mobile dropdown fixes */
              #mobile-sidebar {
                z-index: 10;
                position: relative;
              }
              
              #mobile-sidebar.block {
                display: block !important;
                animation: slideDown 0.3s ease-out;
              }
              
              @keyframes slideDown {
                from {
                  opacity: 0;
                  transform: translateY(-10px);
                }
                to {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            }
            
            /* Fix mobile header touch targets */
            @media (max-width: 767px) {
              .smart-header {
                position: fixed !important;
                top: 0;
                left: 0;
                right: 0;
                z-index: 50;
              }
              
              /* Add top padding to body to account for fixed header */
              main {
                padding-top: 68px; /* Account for larger header h-16 sm:h-18 lg:h-20 */
              }
            }
            
            /* Desktop header spacing */
            @media (min-width: 768px) {
              .smart-header {
                position: sticky;
                top: 0;
                margin: 0;
              }
              
              main {
                padding-top: 0;
              }
            }

            /* Mobile Performance Optimizations - Enhanced */
            @media (max-width: 768px) {
              /* Reduce animations on mobile for better performance */
              *, *::before, *::after {
                animation-duration: 0.1s !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.1s !important;
                scroll-behavior: auto !important;
              }
              
              /* Optimize scrolling performance */
              html {
                -webkit-overflow-scrolling: touch;
                overscroll-behavior: contain;
              }
              
              /* Optimize touch targets */
              button, a, [role="button"], input, select, textarea {
                min-height: 44px;
                min-width: 44px;
                -webkit-tap-highlight-color: transparent;
              }
              
              /* Reduce expensive effects on mobile */
              .backdrop-blur-sm {
                backdrop-filter: none !important;
                background-color: rgba(255, 255, 255, 0.95) !important;
              }
              
              /* Hardware acceleration for better performance */
              .animate-spin, .animate-pulse, .animate-bounce {
                transform: translateZ(0);
                will-change: transform;
              }
              
              /* Optimize images for mobile - minimal styling */
              img {
                image-rendering: optimizeSpeed;
                transform: translateZ(0);
                max-width: 100%;
                height: auto;
              }
              
              
              /* Remove hover effects on touch devices */
              .hover\\:scale-105:hover {
                transform: none !important;
              }
              
              /* Optimize form elements */
              input, textarea, select {
                font-size: 16px; /* Prevent zoom on iOS */
              }
            }
            
            /* Respect user's motion preferences */
            @media (prefers-reduced-motion: reduce) {
              *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
                scroll-behavior: auto !important;
              }
            }
            
            /* No custom OneSignal CSS - Let OneSignal handle its own styling */
          `
        }} />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-stone antialiased overflow-x-hidden">
        <MobileOptimizer>
          {children}
        </MobileOptimizer>
        
        
        {/* Performance Optimization */}
        <AutoCacheCleaner />
        
                {/* Realtime Ad Blocker Detection */}
                <RealtimeAdBlockerDetector />
                
                {/* Vercel Speed Insights - FORCE CACHE CLEAR: ${Date.now()} */}
                <SpeedInsights />
                
                {/* Vercel Analytics - Track Page Views & Visitors */}
                <Analytics />
                
              </body>
            </html>
          )
        }
