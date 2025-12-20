#!/usr/bin/env node

/**
 * 🚀 FORCE GOOGLE REINDEXING SCRIPT
 * 
 * This script triggers immediate Google reindexing for all important pages
 * Use this after major content updates like homepage restructuring
 */

const BASE_URL = 'https://texasroadhouse-menus.us'

// ⭐ CRITICAL PAGES TO REINDEX IMMEDIATELY
const PRIORITY_URLS = [
  BASE_URL,                              // Homepage - HIGHEST PRIORITY
  `${BASE_URL}/sitemap.xml`,            // Sitemap 
  `${BASE_URL}/menus-prices`,           // Menu page
  `${BASE_URL}/coupons`,                // Coupons page
  `${BASE_URL}/meal-planner`,           // New meal planner
  `${BASE_URL}/store-locator`,          // Store locator
]

// 📄 ADDITIONAL PAGES FOR COMPREHENSIVE REINDEXING
const SECONDARY_URLS = [
  `${BASE_URL}/about`,
  `${BASE_URL}/contact`,
  `${BASE_URL}/gift-cards`,
  `${BASE_URL}/posts`,
  `${BASE_URL}/privacy-policy`,
  `${BASE_URL}/terms-and-conditions`,
]

/**
 * 🔥 TRIGGER GOOGLE INDEXING API
 */
async function triggerGoogleIndexing(urls) {
  console.log('🚀 Starting Google Indexing API requests...\n')
  
  try {
    const response = await fetch(`${BASE_URL}/api/revalidate-sitemap`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'comprehensive_reindex',
        urls: urls,
        source: 'manual_script'
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    
    console.log('✅ Google Indexing API Response:')
    console.log(JSON.stringify(result, null, 2))
    
    return result

  } catch (error) {
    console.error('❌ Error triggering Google Indexing API:', error)
    throw error
  }
}

/**
 * 🔍 VALIDATE SITEMAP ACCESSIBILITY
 */
async function validateSitemap() {
  console.log('🔍 Validating sitemap accessibility...\n')
  
  try {
    const response = await fetch(`${BASE_URL}/sitemap.xml`)
    
    if (!response.ok) {
      throw new Error(`Sitemap not accessible: ${response.status}`)
    }
    
    const sitemapContent = await response.text()
    const urlCount = (sitemapContent.match(/<loc>/g) || []).length
    
    console.log(`✅ Sitemap accessible with ${urlCount} URLs`)
    console.log(`📅 Last modified: ${response.headers.get('last-modified') || 'Unknown'}`)
    
    return true

  } catch (error) {
    console.error('❌ Sitemap validation failed:', error)
    return false
  }
}

/**
 * 📊 CHECK PAGE SPEED AND ACCESSIBILITY
 */
async function validatePageHealth(url) {
  try {
    const startTime = Date.now()
    const response = await fetch(url, { method: 'HEAD' })
    const loadTime = Date.now() - startTime
    
    if (response.ok) {
      console.log(`✅ ${url} - Status: ${response.status} - Load Time: ${loadTime}ms`)
      return true
    } else {
      console.log(`⚠️ ${url} - Status: ${response.status}`)
      return false
    }
    
  } catch (error) {
    console.log(`❌ ${url} - Error: ${error.message}`)
    return false
  }
}

/**
 * 🎯 MAIN EXECUTION FUNCTION
 */
async function main() {
  console.log('🔥 TEXAS ROADHOUSE - FORCE GOOGLE REINDEXING\n')
  console.log('=' .repeat(60))
  console.log('📋 SCOPE: Homepage restructure + complete site reindex')
  console.log('🎯 TARGET: All critical pages + sitemap')
  console.log('=' .repeat(60))
  console.log()

  // Step 1: Validate sitemap
  console.log('📋 STEP 1: SITEMAP VALIDATION')
  const sitemapValid = await validateSitemap()
  if (!sitemapValid) {
    console.error('❌ Cannot proceed without valid sitemap')
    process.exit(1)
  }
  console.log()

  // Step 2: Check page health
  console.log('📋 STEP 2: PAGE HEALTH CHECK')
  const allUrls = [...PRIORITY_URLS, ...SECONDARY_URLS]
  const healthChecks = await Promise.all(
    allUrls.map(url => validatePageHealth(url))
  )
  
  const healthyPages = healthChecks.filter(Boolean).length
  console.log(`📊 Page Health: ${healthyPages}/${allUrls.length} pages accessible`)
  console.log()

  // Step 3: Trigger Google indexing for priority pages
  console.log('📋 STEP 3: PRIORITY PAGES INDEXING')
  try {
    await triggerGoogleIndexing(PRIORITY_URLS)
    console.log('✅ Priority pages submitted to Google')
  } catch (error) {
    console.error('❌ Priority indexing failed:', error)
  }
  console.log()

  // Step 4: Trigger indexing for secondary pages
  console.log('📋 STEP 4: SECONDARY PAGES INDEXING')
  try {
    await triggerGoogleIndexing(SECONDARY_URLS)
    console.log('✅ Secondary pages submitted to Google')
  } catch (error) {
    console.error('❌ Secondary indexing failed:', error)
  }
  console.log()

  // Summary
  console.log('🎉 REINDEXING COMPLETE!')
  console.log('=' .repeat(60))
  console.log('📈 NEXT STEPS:')
  console.log('1. Monitor Google Search Console for indexing status')
  console.log('2. Check rankings for "Texas Roadhouse Menu" keyword')
  console.log('3. Verify homepage appears in search results')
  console.log('4. Monitor Core Web Vitals performance')
  console.log()
  console.log('⏰ Expected indexing time: 1-24 hours')
  console.log('🔍 Check status: https://search.google.com/search-console')
  console.log('=' .repeat(60))
}

// Execute if run directly
if (require.main === module) {
  main().catch(error => {
    console.error('💥 Script failed:', error)
    process.exit(1)
  })
}

module.exports = { main, triggerGoogleIndexing, validateSitemap }
