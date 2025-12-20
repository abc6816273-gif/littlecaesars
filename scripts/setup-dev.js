#!/usr/bin/env node

/**
 * Development Setup Script
 * Initializes the development environment for Texas Roadhouse Headless
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🤠 Texas Roadhouse Headless - Development Setup\n');

// Check Node.js version
const nodeVersion = process.version;
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);

if (majorVersion < 18) {
  console.error('❌ Node.js 18+ is required. Current version:', nodeVersion);
  process.exit(1);
}

console.log('✅ Node.js version check passed:', nodeVersion);

// Check if .env.local exists
const envPath = path.join(process.cwd(), '.env.local');
if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env.local from template...');
  const templatePath = path.join(process.cwd(), 'env.template');
  
  if (fs.existsSync(templatePath)) {
    fs.copyFileSync(templatePath, envPath);
    console.log('✅ .env.local created from template');
    console.log('📝 Please edit .env.local with your configuration');
  } else {
    console.log('⚠️  env.template not found, creating basic .env.local...');
    const basicEnv = `# Texas Roadhouse Headless - Environment Variables

# Optional: External menu API endpoint
NEXT_PUBLIC_MENU_API=

# WordPress Integration (optional)
WORDPRESS_API_URL=
WORDPRESS_USERNAME=
WORDPRESS_PASSWORD=

# Email Configuration (for contact forms)
SMTP_HOST=
SMTP_PORT=587
SMTP_USER=
SMTP_PASS=

# Development
NODE_ENV=development
`;
    fs.writeFileSync(envPath, basicEnv);
    console.log('✅ Basic .env.local created');
  }
}

// Check if node_modules exists
if (!fs.existsSync(path.join(process.cwd(), 'node_modules'))) {
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { stdio: 'inherit' });
    console.log('✅ Dependencies installed');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }
}

// Create necessary directories
const directories = [
  'backup',
  'assets/images',
  'docs/archived',
  'scripts/utilities',
  'config'
];

directories.forEach(dir => {
  const fullPath = path.join(process.cwd(), dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log('📁 Created directory:', dir);
  }
});

// Check if menu fallback data exists
const menuFallbackPath = path.join(process.cwd(), 'public', 'menu-fallback.json');
if (!fs.existsSync(menuFallbackPath)) {
  console.log('⚠️  Menu fallback data not found at:', menuFallbackPath);
  console.log('📝 This file should be created by the meal planner setup');
}

// Verify Next.js configuration
try {
  require(path.join(process.cwd(), 'next.config.js'));
  console.log('✅ Next.js configuration verified');
} catch (error) {
  console.error('❌ Next.js configuration error:', error.message);
}

console.log('\n🎉 Development setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Edit .env.local with your configuration');
console.log('2. Run: npm run dev');
console.log('3. Open: http://localhost:3002');
console.log('\n📚 Documentation: ./docs/');
console.log('🤝 Need help? Check the README.md or create an issue');


