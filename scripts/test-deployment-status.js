#!/usr/bin/env node

/**
 * Check deployment status and test API step by step
 */

async function testDeploymentStatus() {
  const liveUrl = 'https://texasroadhouse-menus.us';
  
  console.log('🚀 Checking deployment status...\n');
  
  try {
    // First, test if the site is accessible
    console.log('1. 🌐 Testing site accessibility...');
    const siteResponse = await fetch(liveUrl);
    console.log(`   Status: ${siteResponse.status} ${siteResponse.statusText}`);
    
    if (!siteResponse.ok) {
      console.log('❌ Site is not accessible. Deployment might be in progress.');
      return;
    }
    
    console.log('✅ Site is accessible\n');
    
    // Test a simple API endpoint first
    console.log('2. 🔍 Testing health check...');
    try {
      const healthResponse = await fetch(`${liveUrl}/api/health`, { method: 'GET' });
      console.log(`   Health check: ${healthResponse.status}`);
    } catch (e) {
      console.log('   No health endpoint (normal)');
    }
    
    // Wait a moment for deployment
    console.log('3. ⏳ Waiting 10 seconds for deployment to complete...');
    await new Promise(resolve => setTimeout(resolve, 10000));
    
    // Test the coupon API with more details
    console.log('4. 🎫 Testing coupon API with verbose logging...');
    
    const response = await fetch(`${liveUrl}/api/update-coupons?test=true`, {
      method: 'GET',
      headers: {
        'User-Agent': 'deployment-test',
        'Cache-Control': 'no-cache'
      }
    });
    
    console.log(`   Response status: ${response.status}`);
    console.log(`   Response headers:`, Object.fromEntries(response.headers.entries()));
    
    const responseText = await response.text();
    console.log(`   Response body: ${responseText.substring(0, 500)}...`);
    
    if (response.ok) {
      try {
        const data = JSON.parse(responseText);
        console.log('\n✅ API is working!');
        console.log(`📊 Coupons: ${data.data?.coupons?.length || 0}`);
        console.log(`🏷️ Source: ${data.data?.metadata?.source || 'Unknown'}`);
      } catch (parseError) {
        console.log('⚠️ Response is not valid JSON');
      }
    } else {
      console.log('\n❌ API is still failing');
      console.log('💡 This might indicate:');
      console.log('   - Deployment is still in progress');
      console.log('   - Environment variables are not set');
      console.log('   - Code changes are not yet live');
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

testDeploymentStatus().catch(console.error);
