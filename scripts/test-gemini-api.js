#!/usr/bin/env node

/**
 * Test script to diagnose Gemini API issues
 * Run with: node scripts/test-gemini-api.js
 */

const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env.local' });

async function testGeminiAPI() {
  console.log('🔍 Testing Gemini API Configuration...\n');
  
  // 1. Check environment variables
  console.log('1. Environment Variables:');
  const apiKey = process.env.GEMINI_API_KEY;
  console.log(`   GEMINI_API_KEY: ${apiKey ? '✅ Set (length: ' + apiKey.length + ')' : '❌ Not set'}`);
  
  if (!apiKey) {
    console.log('\n❌ GEMINI_API_KEY is missing!');
    console.log('📝 To fix this:');
    console.log('   1. Copy env.template to .env.local');
    console.log('   2. Get API key from: https://aistudio.google.com/');
    console.log('   3. Add: GEMINI_API_KEY=your-api-key-here');
    return;
  }
  
  // 2. Test API initialization
  console.log('\n2. API Initialization:');
  let genAI;
  try {
    genAI = new GoogleGenerativeAI(apiKey);
    console.log('   ✅ GoogleGenerativeAI initialized successfully');
  } catch (error) {
    console.log('   ❌ Failed to initialize:', error.message);
    return;
  }
  
  // 3. Test model access
  console.log('\n3. Model Access:');
  let model;
  try {
    model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    console.log('   ✅ Model accessed successfully');
  } catch (error) {
    console.log('   ❌ Failed to access model:', error.message);
    return;
  }
  
  // 4. Test simple API call
  console.log('\n4. API Call Test:');
  try {
    const prompt = "Generate a simple test response with just the word 'SUCCESS'";
    console.log('   📤 Sending test prompt...');
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('   ✅ API call successful');
    console.log('   📥 Response:', text.trim());
  } catch (error) {
    console.log('   ❌ API call failed:', error.message);
    
    if (error.message.includes('API_KEY_INVALID')) {
      console.log('\n🔧 API key appears to be invalid');
      console.log('   1. Check your API key at: https://aistudio.google.com/');
      console.log('   2. Make sure it\'s copied correctly');
      console.log('   3. Check if the key has expired');
    } else if (error.message.includes('PERMISSION_DENIED')) {
      console.log('\n🔧 Permission denied - check API key permissions');
    } else if (error.message.includes('QUOTA_EXCEEDED')) {
      console.log('\n🔧 Quota exceeded - check your API usage limits');
    }
    return;
  }
  
  // 5. Test coupon generation
  console.log('\n5. Coupon Generation Test:');
  try {
    const couponPrompt = `Generate 1 realistic Texas Roadhouse coupon in JSON format:
{
  "code": "EXAMPLE25",
  "title": "25% Off Entire Order",
  "description": "Save 25% on your entire order this August",
  "discount": "25% OFF",
  "expiryDate": "August 31, 2025",
  "terms": "Valid on orders $30+. Cannot be combined with other offers.",
  "type": "code",
  "verified": "Verified August 2025",
  "validUntil": "August 31, 2025"
}

Return only valid JSON, no additional text.`;
    
    console.log('   📤 Testing coupon generation...');
    
    const result = await model.generateContent(couponPrompt);
    const response = await result.response;
    const text = response.text();
    
    // Try to parse JSON
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      const couponData = JSON.parse(jsonMatch[0]);
      console.log('   ✅ Coupon generation successful');
      console.log('   📥 Generated coupon:', couponData.code, '-', couponData.discount);
    } else {
      console.log('   ⚠️ Response not in expected JSON format');
      console.log('   📥 Raw response:', text.trim());
    }
  } catch (error) {
    console.log('   ❌ Coupon generation failed:', error.message);
    return;
  }
  
  console.log('\n🎉 All tests passed! Gemini API is working correctly.');
  console.log('\n📝 Next steps:');
  console.log('   1. Test the /api/update-coupons endpoint');
  console.log('   2. Check browser console for any frontend errors');
  console.log('   3. Verify the CouponSection component is loading correctly');
}

// Run the test
testGeminiAPI().catch(console.error);
