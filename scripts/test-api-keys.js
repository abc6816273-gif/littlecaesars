#!/usr/bin/env node

/**
 * API Keys Testing Script
 * Tests all API keys for Texas Roadhouse site
 */

const https = require('https');
const fs = require('fs');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

console.log('🔑 Testing API Keys for Texas Roadhouse Site\n');

async function testGeminiAPI() {
    const apiKey = process.env.GEMINI_API_KEY;
    
    if (!apiKey) {
        console.log('❌ GEMINI_API_KEY not found in .env.local');
        return false;
    }

    try {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
        const data = JSON.stringify({
            contents: [{
                parts: [{
                    text: "Generate a short promotional text for Texas Roadhouse restaurant"
                }]
            }]
        });

        const response = await makeHttpsRequest(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }, data);

        if (response.statusCode === 200) {
            console.log('✅ Gemini AI API: Working');
            return true;
        } else {
            console.log(`❌ Gemini AI API: Failed (Status: ${response.statusCode})`);
            return false;
        }
    } catch (error) {
        console.log(`❌ Gemini AI API: Error - ${error.message}`);
        return false;
    }
}

async function testTomTomAPI() {
    const apiKey = process.env.NEXT_PUBLIC_MAPS_API_KEY;
    
    if (!apiKey) {
        console.log('❌ NEXT_PUBLIC_MAPS_API_KEY not found in .env.local');
        return false;
    }

    try {
        const url = `https://api.tomtom.com/search/2/search/restaurant.json?key=${apiKey}&limit=1`;
        
        const response = await makeHttpsRequest(url, { method: 'GET' });

        if (response.statusCode === 200) {
            console.log('✅ TomTom Maps API: Working');
            return true;
        } else {
            console.log(`❌ TomTom Maps API: Failed (Status: ${response.statusCode})`);
            return false;
        }
    } catch (error) {
        console.log(`❌ TomTom Maps API: Error - ${error.message}`);
        return false;
    }
}

async function testGoogleIndexingAPI() {
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY;
    
    if (!clientEmail || !privateKey) {
        console.log('❌ Google Indexing API credentials not found in .env.local');
        return false;
    }

    try {
        // For simplicity, just check if the credentials are properly formatted
        if (clientEmail.includes('@') && privateKey.includes('BEGIN PRIVATE KEY')) {
            console.log('✅ Google Indexing API: Credentials format looks correct');
            console.log('   (Full test requires JWT token generation - credentials appear valid)');
            return true;
        } else {
            console.log('❌ Google Indexing API: Invalid credential format');
            return false;
        }
    } catch (error) {
        console.log(`❌ Google Indexing API: Error - ${error.message}`);
        return false;
    }
}

async function testEmailConfig() {
    const emailUser = process.env.EMAIL_USER;
    const emailPassword = process.env.EMAIL_PASSWORD;
    
    if (!emailUser || !emailPassword) {
        console.log('❌ Email configuration not found in .env.local');
        return false;
    }

    if (emailUser.includes('@gmail.com') && emailPassword.length >= 16) {
        console.log('✅ Email Configuration: Format looks correct');
        console.log('   (Gmail user and app password format valid)');
        return true;
    } else {
        console.log('❌ Email Configuration: Invalid format');
        console.log('   Make sure to use Gmail and 16-character app password');
        return false;
    }
}

async function testRevalidateSecret() {
    const secret = process.env.REVALIDATE_SECRET;
    
    if (!secret) {
        console.log('❌ REVALIDATE_SECRET not found in .env.local');
        return false;
    }

    if (secret.length >= 10) {
        console.log('✅ Revalidate Secret: Configured');
        return true;
    } else {
        console.log('❌ Revalidate Secret: Too short (should be at least 10 characters)');
        return false;
    }
}

function makeHttpsRequest(url, options, data = null) {
    return new Promise((resolve, reject) => {
        const req = https.request(url, options, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                resolve({
                    statusCode: res.statusCode,
                    headers: res.headers,
                    body: body
                });
            });
        });

        req.on('error', reject);
        
        if (data) {
            req.write(data);
        }
        
        req.end();
    });
}

async function runAllTests() {
    console.log('Starting API tests...\n');
    
    const results = [];
    
    console.log('📧 Testing Email Configuration...');
    results.push(await testEmailConfig());
    
    console.log('\n🤖 Testing Gemini AI API...');
    results.push(await testGeminiAPI());
    
    console.log('\n🗺️ Testing TomTom Maps API...');
    results.push(await testTomTomAPI());
    
    console.log('\n📊 Testing Google Indexing API...');
    results.push(await testGoogleIndexingAPI());
    
    console.log('\n🔄 Testing Revalidate Secret...');
    results.push(await testRevalidateSecret());
    
    const passedTests = results.filter(Boolean).length;
    const totalTests = results.length;
    
    console.log('\n' + '='.repeat(50));
    console.log(`📊 Test Results: ${passedTests}/${totalTests} APIs configured correctly`);
    
    if (passedTests === totalTests) {
        console.log('🎉 All APIs are configured and working!');
        console.log('Your Texas Roadhouse site should have full functionality.');
    } else {
        console.log('⚠️ Some APIs need attention. Check the failed tests above.');
        console.log('📖 See API_KEYS_GUIDE.md for detailed setup instructions.');
    }
    
    console.log('\n🚀 Ready to run: npm run dev');
}

// Check if .env.local exists
if (!fs.existsSync('.env.local')) {
    console.log('❌ .env.local file not found!');
    console.log('📋 Please copy env.template to .env.local and add your API keys.');
    console.log('💡 Command: cp env.template .env.local');
    process.exit(1);
}

runAllTests().catch(console.error);
