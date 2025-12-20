#!/usr/bin/env node

/**
 * Development Cache Clearer
 * Clears Next.js cache and restarts dev server for immediate updates
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🧹 Clearing development caches...')

try {
  // Clear Next.js cache
  const nextCacheDir = path.join(process.cwd(), '.next')
  if (fs.existsSync(nextCacheDir)) {
    fs.rmSync(nextCacheDir, { recursive: true, force: true })
    console.log('✅ Cleared .next directory')
  }

  // Clear node_modules/.cache if it exists
  const nodeCacheDir = path.join(process.cwd(), 'node_modules', '.cache')
  if (fs.existsSync(nodeCacheDir)) {
    fs.rmSync(nodeCacheDir, { recursive: true, force: true })
    console.log('✅ Cleared node_modules/.cache')
  }

  // Clear Vercel cache if it exists
  const vercelCacheDir = path.join(process.cwd(), '.vercel')
  if (fs.existsSync(vercelCacheDir)) {
    const vercelCacheSubDir = path.join(vercelCacheDir, 'cache')
    if (fs.existsSync(vercelCacheSubDir)) {
      fs.rmSync(vercelCacheSubDir, { recursive: true, force: true })
      console.log('✅ Cleared Vercel cache')
    }
  }

  console.log('🎉 All development caches cleared!')
  console.log('💡 Now run: npm run dev')
  console.log('💡 Or use: npm run dev:fresh (if you add it to package.json)')

} catch (error) {
  console.error('❌ Error clearing caches:', error.message)
  process.exit(1)
}
