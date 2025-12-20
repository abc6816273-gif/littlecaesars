#!/usr/bin/env node

/**
 * Comprehensive SEO Audit for Texas Roadhouse Menus Website
 * Checks: SEO, Performance, Indexing, Sitemap, Core Web Vitals
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

const WEBSITE_URL = 'https://texasroadhouse-menus.us';
const AUDIT_RESULTS = {
  seo: {},
  performance: {},
  indexing: {},
  sitemap: {},
  robots: {},
  security: {},
  accessibility: {},
  issues: [],
  recommendations: []
};

// Color codes for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

function log(color, message) {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve({
        statusCode: res.statusCode,
        headers: res.headers,
        data: data
      }));
    });
    req.on('error', reject);
    req.setTimeout(10000, () => {
      req.destroy();
      reject(new Error('Request timeout'));
    });
  });
}

async function checkSitemap() {
  log('cyan', '\n🗺️  Checking Sitemap...');
  
  try {
    const sitemapUrl = `${WEBSITE_URL}/sitemap.xml`;
    const response = await makeRequest(sitemapUrl);
    
    if (response.statusCode === 200) {
      log('green', '✅ Sitemap accessible');
      AUDIT_RESULTS.sitemap.accessible = true;
      
      // Check if sitemap contains URLs
      const urlCount = (response.data.match(/<url>/g) || []).length;
      log('blue', `📊 Found ${urlCount} URLs in sitemap`);
      AUDIT_RESULTS.sitemap.urlCount = urlCount;
      
      if (urlCount > 0) {
        log('green', '✅ Sitemap contains URLs');
      } else {
        log('red', '❌ Sitemap is empty');
        AUDIT_RESULTS.issues.push('Sitemap is empty');
      }
    } else {
      log('red', `❌ Sitemap not accessible (${response.statusCode})`);
      AUDIT_RESULTS.sitemap.accessible = false;
      AUDIT_RESULTS.issues.push('Sitemap not accessible');
    }
  } catch (error) {
    log('red', `❌ Error checking sitemap: ${error.message}`);
    AUDIT_RESULTS.sitemap.accessible = false;
    AUDIT_RESULTS.issues.push(`Sitemap error: ${error.message}`);
  }
}

async function checkRobotsTxt() {
  log('cyan', '\n🤖 Checking robots.txt...');
  
  try {
    const robotsUrl = `${WEBSITE_URL}/robots.txt`;
    const response = await makeRequest(robotsUrl);
    
    if (response.statusCode === 200) {
      log('green', '✅ robots.txt accessible');
      AUDIT_RESULTS.robots.accessible = true;
      
      // Check for sitemap directive
      if (response.data.includes('Sitemap:')) {
        log('green', '✅ Sitemap directive found in robots.txt');
        AUDIT_RESULTS.robots.hasSitemap = true;
      } else {
        log('yellow', '⚠️  No sitemap directive in robots.txt');
        AUDIT_RESULTS.robots.hasSitemap = false;
        AUDIT_RESULTS.recommendations.push('Add sitemap directive to robots.txt');
      }
      
      // Check for crawl directives
      if (response.data.includes('User-agent:')) {
        log('green', '✅ User-agent directives found');
        AUDIT_RESULTS.robots.hasUserAgent = true;
      }
    } else {
      log('red', `❌ robots.txt not accessible (${response.statusCode})`);
      AUDIT_RESULTS.robots.accessible = false;
      AUDIT_RESULTS.issues.push('robots.txt not accessible');
    }
  } catch (error) {
    log('red', `❌ Error checking robots.txt: ${error.message}`);
    AUDIT_RESULTS.robots.accessible = false;
    AUDIT_RESULTS.issues.push(`robots.txt error: ${error.message}`);
  }
}

async function checkHomepage() {
  log('cyan', '\n🏠 Checking Homepage SEO...');
  
  try {
    const response = await makeRequest(WEBSITE_URL);
    
    if (response.statusCode === 200) {
      log('green', '✅ Homepage accessible');
      AUDIT_RESULTS.seo.homepageAccessible = true;
      
      const html = response.data;
      
      // Check title tag
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      if (titleMatch) {
        const title = titleMatch[1].trim();
        log('green', `✅ Title tag found: "${title}"`);
        AUDIT_RESULTS.seo.title = title;
        
        if (title.length > 60) {
          log('yellow', '⚠️  Title tag is longer than 60 characters');
          AUDIT_RESULTS.recommendations.push('Shorten title tag to under 60 characters');
        }
      } else {
        log('red', '❌ No title tag found');
        AUDIT_RESULTS.issues.push('Missing title tag');
      }
      
      // Check meta description
      const descMatch = html.match(/<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']+)["\'][^>]*>/i);
      if (descMatch) {
        const description = descMatch[1].trim();
        log('green', `✅ Meta description found: "${description.substring(0, 100)}..."`);
        AUDIT_RESULTS.seo.description = description;
        
        if (description.length > 160) {
          log('yellow', '⚠️  Meta description is longer than 160 characters');
          AUDIT_RESULTS.recommendations.push('Shorten meta description to under 160 characters');
        }
      } else {
        log('red', '❌ No meta description found');
        AUDIT_RESULTS.issues.push('Missing meta description');
      }
      
      // Check H1 tag
      const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
      if (h1Match) {
        const h1 = h1Match[1].trim();
        log('green', `✅ H1 tag found: "${h1}"`);
        AUDIT_RESULTS.seo.h1 = h1;
      } else {
        log('red', '❌ No H1 tag found');
        AUDIT_RESULTS.issues.push('Missing H1 tag');
      }
      
      // Check structured data
      if (html.includes('application/ld+json')) {
        log('green', '✅ Structured data (JSON-LD) found');
        AUDIT_RESULTS.seo.hasStructuredData = true;
      } else {
        log('yellow', '⚠️  No structured data found');
        AUDIT_RESULTS.seo.hasStructuredData = false;
        AUDIT_RESULTS.recommendations.push('Add structured data markup');
      }
      
      // Check Open Graph tags
      if (html.includes('og:title') || html.includes('og:description')) {
        log('green', '✅ Open Graph tags found');
        AUDIT_RESULTS.seo.hasOpenGraph = true;
      } else {
        log('yellow', '⚠️  No Open Graph tags found');
        AUDIT_RESULTS.seo.hasOpenGraph = false;
        AUDIT_RESULTS.recommendations.push('Add Open Graph tags');
      }
      
      // Check mobile viewport
      if (html.includes('viewport')) {
        log('green', '✅ Mobile viewport meta tag found');
        AUDIT_RESULTS.seo.hasMobileViewport = true;
      } else {
        log('red', '❌ No mobile viewport meta tag found');
        AUDIT_RESULTS.seo.hasMobileViewport = false;
        AUDIT_RESULTS.issues.push('Missing mobile viewport meta tag');
      }
      
    } else {
      log('red', `❌ Homepage not accessible (${response.statusCode})`);
      AUDIT_RESULTS.seo.homepageAccessible = false;
      AUDIT_RESULTS.issues.push('Homepage not accessible');
    }
  } catch (error) {
    log('red', `❌ Error checking homepage: ${error.message}`);
    AUDIT_RESULTS.seo.homepageAccessible = false;
    AUDIT_RESULTS.issues.push(`Homepage error: ${error.message}`);
  }
}

async function checkStoreLocator() {
  log('cyan', '\n📍 Checking Store Locator Page...');
  
  try {
    const storeLocatorUrl = `${WEBSITE_URL}/store-locator`;
    const response = await makeRequest(storeLocatorUrl);
    
    if (response.statusCode === 200) {
      log('green', '✅ Store locator page accessible');
      AUDIT_RESULTS.seo.storeLocatorAccessible = true;
      
      const html = response.data;
      
      // Check for location-specific content
      if (html.includes('Texas Roadhouse Near')) {
        log('green', '✅ Location-specific content found');
      }
      
      // Check for map functionality
      if (html.includes('leaflet') || html.includes('google.maps') || html.includes('mapbox')) {
        log('green', '✅ Map functionality detected');
      } else {
        log('yellow', '⚠️  No map functionality detected');
        AUDIT_RESULTS.recommendations.push('Ensure map functionality is working');
      }
      
    } else {
      log('red', `❌ Store locator not accessible (${response.statusCode})`);
      AUDIT_RESULTS.seo.storeLocatorAccessible = false;
      AUDIT_RESULTS.issues.push('Store locator not accessible');
    }
  } catch (error) {
    log('red', `❌ Error checking store locator: ${error.message}`);
    AUDIT_RESULTS.seo.storeLocatorAccessible = false;
    AUDIT_RESULTS.issues.push(`Store locator error: ${error.message}`);
  }
}

async function checkSecurityHeaders() {
  log('cyan', '\n🔒 Checking Security Headers...');
  
  try {
    const response = await makeRequest(WEBSITE_URL);
    const headers = response.headers;
    
    // Check HTTPS
    if (WEBSITE_URL.startsWith('https://')) {
      log('green', '✅ HTTPS enabled');
      AUDIT_RESULTS.security.https = true;
    } else {
      log('red', '❌ HTTPS not enabled');
      AUDIT_RESULTS.security.https = false;
      AUDIT_RESULTS.issues.push('HTTPS not enabled');
    }
    
    // Check security headers
    const securityHeaders = [
      'strict-transport-security',
      'x-content-type-options',
      'x-frame-options',
      'x-xss-protection'
    ];
    
    securityHeaders.forEach(header => {
      if (headers[header]) {
        log('green', `✅ ${header} header found`);
      } else {
        log('yellow', `⚠️  ${header} header missing`);
        AUDIT_RESULTS.recommendations.push(`Add ${header} security header`);
      }
    });
    
  } catch (error) {
    log('red', `❌ Error checking security headers: ${error.message}`);
  }
}

function generateReport() {
  log('cyan', '\n📊 SEO Audit Report');
  log('cyan', '='.repeat(50));
  
  // Summary
  const totalIssues = AUDIT_RESULTS.issues.length;
  const totalRecommendations = AUDIT_RESULTS.recommendations.length;
  
  if (totalIssues === 0) {
    log('green', '🎉 No critical issues found!');
  } else {
    log('red', `❌ Found ${totalIssues} critical issue(s):`);
    AUDIT_RESULTS.issues.forEach((issue, index) => {
      log('red', `   ${index + 1}. ${issue}`);
    });
  }
  
  if (totalRecommendations > 0) {
    log('yellow', `\n💡 ${totalRecommendations} recommendation(s):`);
    AUDIT_RESULTS.recommendations.forEach((rec, index) => {
      log('yellow', `   ${index + 1}. ${rec}`);
    });
  }
  
  // Detailed results
  log('blue', '\n📋 Detailed Results:');
  log('blue', JSON.stringify(AUDIT_RESULTS, null, 2));
  
  // Overall score
  const maxScore = 100;
  const deductions = (totalIssues * 15) + (totalRecommendations * 5);
  const score = Math.max(0, maxScore - deductions);
  
  log('cyan', `\n🏆 Overall SEO Score: ${score}/100`);
  
  if (score >= 90) {
    log('green', '🎉 Excellent! Your website is well optimized.');
  } else if (score >= 70) {
    log('yellow', '👍 Good! Some improvements needed.');
  } else {
    log('red', '⚠️  Needs improvement. Address the issues above.');
  }
}

async function runAudit() {
  log('bright', '🚀 Starting Comprehensive SEO Audit for Texas Roadhouse Menus');
  log('bright', '='.repeat(60));
  
  await checkHomepage();
  await checkStoreLocator();
  await checkSitemap();
  await checkRobotsTxt();
  await checkSecurityHeaders();
  
  generateReport();
  
  // Save results to file
  const reportPath = path.join(__dirname, '../seo-audit-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(AUDIT_RESULTS, null, 2));
  log('cyan', `\n💾 Report saved to: ${reportPath}`);
}

// Run the audit
runAudit().catch(error => {
  log('red', `❌ Audit failed: ${error.message}`);
  process.exit(1);
});
