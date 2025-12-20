#!/usr/bin/env node

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');
const fs = require('fs');
const path = require('path');

// Mobile performance testing for Texas Roadhouse website
async function runMobilePerformanceTest() {
  console.log('🚀 Starting Mobile Performance Test for Texas Roadhouse Website...\n');
  
  const urls = [
    'http://localhost:3000',
    'http://localhost:3000/store-locator',
    'http://localhost:3000/menus-prices',
    'http://localhost:3000/blog'
  ];
  
  // Mobile device configuration
  const mobileConfig = {
    extends: 'lighthouse:default',
    settings: {
      formFactor: 'mobile',
      throttling: {
        rttMs: 150,
        throughputKbps: 1.6 * 1024, // 3G connection
        cpuSlowdownMultiplier: 4,
        requestLatencyMs: 150,
        downloadThroughputKbps: 1.6 * 1024,
        uploadThroughputKbps: 750,
      },
      screenEmulation: {
        mobile: true,
        width: 375,
        height: 667,
        deviceScaleFactor: 2,
        disabled: false,
      },
      emulatedUserAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1',
    },
  };
  
  const chrome = await chromeLauncher.launch({
    chromeFlags: [
      '--headless',
      '--disable-gpu',
      '--no-sandbox',
      '--disable-dev-shm-usage',
    ]
  });
  
  const results = [];
  
  for (const url of urls) {
    console.log(`📱 Testing: ${url}`);
    
    try {
      const runnerResult = await lighthouse(url, {
        port: chrome.port,
        disableDeviceEmulation: false,
        chromeFlags: ['--disable-mobile-emulation-override-checks']
      }, mobileConfig);
      
      const { lhr } = runnerResult;
      
      // Extract key mobile performance metrics
      const metrics = {
        url,
        timestamp: new Date().toISOString(),
        scores: {
          performance: Math.round(lhr.categories.performance.score * 100),
          accessibility: Math.round(lhr.categories.accessibility.score * 100),
          bestPractices: Math.round(lhr.categories['best-practices'].score * 100),
          seo: Math.round(lhr.categories.seo.score * 100),
        },
        coreWebVitals: {
          fcp: lhr.audits['first-contentful-paint'].displayValue,
          lcp: lhr.audits['largest-contentful-paint'].displayValue,
          cls: lhr.audits['cumulative-layout-shift'].displayValue,
          fid: lhr.audits['max-potential-fid'] ? lhr.audits['max-potential-fid'].displayValue : 'N/A',
          tti: lhr.audits['interactive'].displayValue,
          tbt: lhr.audits['total-blocking-time'].displayValue,
          si: lhr.audits['speed-index'].displayValue,
        },
        opportunities: lhr.audits['diagnostics'] ? 
          Object.keys(lhr.audits)
            .filter(key => lhr.audits[key].scoreDisplayMode === 'binary' && lhr.audits[key].score < 1)
            .map(key => ({
              audit: key,
              title: lhr.audits[key].title,
              description: lhr.audits[key].description,
              score: lhr.audits[key].score
            }))
            .slice(0, 5) // Top 5 opportunities
          : [],
        mobileSpecific: {
          touchTargets: lhr.audits['tap-targets'] ? lhr.audits['tap-targets'].score : null,
          viewport: lhr.audits['viewport'] ? lhr.audits['viewport'].score : null,
          fontSizes: lhr.audits['font-size'] ? lhr.audits['font-size'].score : null,
        }
      };
      
      results.push(metrics);
      
      // Console output
      console.log(`✅ Performance Score: ${metrics.scores.performance}/100`);
      console.log(`📊 Core Web Vitals:`);
      console.log(`   FCP: ${metrics.coreWebVitals.fcp}`);
      console.log(`   LCP: ${metrics.coreWebVitals.lcp}`);
      console.log(`   CLS: ${metrics.coreWebVitals.cls}`);
      console.log(`   TTI: ${metrics.coreWebVitals.tti}`);
      console.log(`   TBT: ${metrics.coreWebVitals.tbt}\n`);
      
    } catch (error) {
      console.error(`❌ Error testing ${url}:`, error.message);
      results.push({
        url,
        error: error.message,
        timestamp: new Date().toISOString()
      });
    }
  }
  
  await chrome.kill();
  
  // Generate report
  const reportPath = path.join(__dirname, '../mobile-performance-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  
  console.log(`📄 Full report saved to: ${reportPath}`);
  
  // Summary
  console.log('\n📈 MOBILE PERFORMANCE SUMMARY');
  console.log('================================');
  
  const validResults = results.filter(r => !r.error);
  if (validResults.length > 0) {
    const avgPerformance = Math.round(
      validResults.reduce((sum, r) => sum + r.scores.performance, 0) / validResults.length
    );
    
    console.log(`Average Performance Score: ${avgPerformance}/100`);
    
    // Check Core Web Vitals targets
    console.log('\nCore Web Vitals Status:');
    validResults.forEach(result => {
      console.log(`\n${result.url}:`);
      
      // Parse FCP (should be < 1.8s)
      const fcpValue = parseFloat(result.coreWebVitals.fcp);
      const fcpStatus = fcpValue < 1.8 ? '✅' : '❌';
      console.log(`  FCP: ${result.coreWebVitals.fcp} ${fcpStatus}`);
      
      // Parse LCP (should be < 2.5s)  
      const lcpValue = parseFloat(result.coreWebVitals.lcp);
      const lcpStatus = lcpValue < 2.5 ? '✅' : '❌';
      console.log(`  LCP: ${result.coreWebVitals.lcp} ${lcpStatus}`);
      
      // Parse CLS (should be < 0.1)
      const clsValue = parseFloat(result.coreWebVitals.cls);
      const clsStatus = clsValue < 0.1 ? '✅' : '❌';
      console.log(`  CLS: ${result.coreWebVitals.cls} ${clsStatus}`);
    });
    
    // OneSignal Mobile Test
    console.log('\n🔔 OneSignal Mobile Test:');
    console.log('Please manually verify that the bell icon appears on mobile devices.');
    console.log('The enhanced mobile fixes should ensure visibility across all mobile browsers.');
    
    // Recommendations
    console.log('\n💡 MOBILE OPTIMIZATION RECOMMENDATIONS:');
    if (avgPerformance < 90) {
      console.log('- Consider further image optimization for mobile');
      console.log('- Reduce JavaScript bundle size');
      console.log('- Implement service worker for caching');
    }
    if (avgPerformance >= 90) {
      console.log('🎉 Excellent mobile performance! Your optimizations are working well.');
    }
    
  } else {
    console.log('❌ No valid results to analyze. Please check your server is running on localhost:3000');
  }
}

// OneSignal mobile test function
function testOneSignalMobile() {
  console.log('\n🔔 ONESIGNAL MOBILE TEST CHECKLIST:');
  console.log('==================================');
  console.log('1. Open website on mobile device or mobile emulator');
  console.log('2. Check bottom-right corner for notification bell icon');
  console.log('3. Verify icon is visible and clickable');
  console.log('4. Test on different mobile browsers (Chrome, Safari, Firefox)');
  console.log('5. Test on different screen sizes (iPhone, Android)');
  console.log('\nEnhanced mobile fixes implemented:');
  console.log('✅ Mobile-specific OneSignal configuration');
  console.log('✅ Enhanced CSS visibility rules');
  console.log('✅ JavaScript mutation observer for dynamic fixes');
  console.log('✅ Orientation change handling');
  console.log('✅ Touch-optimized sizing (50px x 50px)');
  console.log('✅ Improved z-index and positioning');
}

// Run the test
if (require.main === module) {
  runMobilePerformanceTest()
    .then(() => {
      testOneSignalMobile();
      console.log('\n✅ Mobile performance test completed!');
    })
    .catch(console.error);
}

module.exports = { runMobilePerformanceTest, testOneSignalMobile };
