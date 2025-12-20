# 🧹 Texas Roadhouse Cache Cleaner Plugin Setup

## Overview
This WordPress plugin provides comprehensive cache management for your Texas Roadhouse headless site, integrating WordPress backend cache with Next.js/Vercel frontend cache clearing.

## Features
- ✅ **WordPress Cache Clearing** (Object cache, transients, popular cache plugins)
- ✅ **Vercel Cache Integration** (Deploy hooks, CDN cache)
- ✅ **Next.js Revalidation** (ISR cache, static pages)
- ✅ **Admin Interface** with beautiful dashboard
- ✅ **Admin Bar Integration** for quick access
- ✅ **Automatic Cache Clearing** on content updates
- ✅ **Background Processing** to avoid blocking UI

## Installation

### 1. Upload Plugin Files
```bash
# Upload these files to your WordPress plugins directory:
/wp-content/plugins/texas-roadhouse-cache-cleaner/
├── texas-roadhouse-cache-cleaner.php
├── cache-cleaner.js
├── cache-cleaner.css
└── CACHE_PLUGIN_SETUP.md
```

### 2. Activate Plugin
1. Go to **WordPress Admin → Plugins**
2. Find "Texas Roadhouse Cache Cleaner"
3. Click **Activate**

### 3. Configure Settings
Go to **Tools → Cache Cleaner** and configure:

#### Frontend URL
```
https://texasroadhouse-menus.us
```

#### Vercel Webhook URL (Optional)
1. Go to your Vercel project dashboard
2. Navigate to **Settings → Git**
3. Create a **Deploy Hook**
4. Copy the webhook URL and paste it in the plugin settings

#### Revalidate Secret
Add this to your `.env.local` file:
```env
REVALIDATE_SECRET=texas-roadhouse-revalidate-2024
```

## Next.js Integration

### 1. Add Revalidate API Endpoint
The plugin created: `app/api/revalidate/route.ts`

### 2. Update Environment Variables
Add to your `.env.local`:
```env
# Cache Revalidation
REVALIDATE_SECRET=texas-roadhouse-revalidate-2024
```

### 3. Deploy to Vercel
```bash
git add app/api/revalidate/route.ts
git commit -m "Add cache revalidation API endpoint"
git push origin main
```

## Usage

### Admin Dashboard
- Go to **Tools → Cache Cleaner**
- Use the dashboard to clear different types of cache
- Monitor cache status in real-time

### Admin Bar Quick Access
- Look for **🧹 Clear Cache** in the admin bar
- Quick actions:
  - **🔥 Clear All Cache**
  - **☁️ Clear Vercel Cache**

### Automatic Cache Clearing
The plugin automatically clears cache when:
- ✅ Posts/pages are published or updated
- ✅ Menus are modified
- ✅ Customizer settings are saved
- ✅ Theme changes are made

## Cache Types Supported

### WordPress Cache
- **Object Cache** (Redis, Memcached)
- **Transients** (Database cached data)
- **W3 Total Cache**
- **WP Super Cache**
- **WP Rocket**
- **WP Engine Cache**

### Vercel/Frontend Cache
- **CDN Cache** (Edge cache)
- **Static Assets** (Images, CSS, JS)
- **Deploy Triggers** (Force rebuild)

### Next.js Cache
- **ISR Cache** (Incremental Static Regeneration)
- **Page Cache** (Static pages)
- **API Routes** (Dynamic routes)
- **Data Cache** (Fetch cache)

## API Endpoints

### WordPress AJAX Endpoints
```php
// Clear all cache
wp_ajax_tr_clear_cache

// Clear Vercel cache only
wp_ajax_tr_clear_vercel_cache

// Revalidate frontend only
wp_ajax_tr_revalidate_frontend
```

### Next.js Revalidation API
```bash
# POST request
POST /api/revalidate
{
  "secret": "texas-roadhouse-revalidate-2024",
  "paths": ["/", "/menu-prices", "/meal-planner"],
  "tags": ["menu", "blog"]
}

# GET request (for testing)
GET /api/revalidate?secret=texas-roadhouse-revalidate-2024&path=/menu-prices
```

## Troubleshooting

### Plugin Not Working
1. Check if plugin is activated
2. Verify user has `manage_options` capability
3. Check browser console for JavaScript errors

### Vercel Cache Not Clearing
1. Verify webhook URL is correct
2. Check Vercel deployment logs
3. Test webhook manually with curl:
```bash
curl -X POST "YOUR_VERCEL_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{"action":"clear_cache","source":"manual"}'
```

### Frontend Revalidation Not Working
1. Check `REVALIDATE_SECRET` environment variable
2. Verify API endpoint is deployed
3. Test API endpoint manually:
```bash
curl -X POST "https://texasroadhouse-menus.us/api/revalidate" \
  -H "Content-Type: application/json" \
  -d '{"secret":"texas-roadhouse-revalidate-2024","paths":["/"]}'
```

### Performance Issues
1. Enable **Background Processing** in settings
2. Disable **Auto Clear** for high-traffic sites
3. Use **Selective Clearing** instead of clearing all cache

## Security Notes

### Access Control
- Only users with `manage_options` capability can clear cache
- AJAX requests are nonce-protected
- Revalidation API requires secret token

### Rate Limiting
- Consider adding rate limiting for cache clearing
- Background processing prevents UI blocking
- Webhook calls have 30-second timeout

## Advanced Configuration

### Custom Cache Plugins
Add support for additional cache plugins:
```php
// Add to functions.php or custom plugin
add_action('tr_auto_cache_clear', function() {
    // Your custom cache clearing logic
    if (function_exists('your_cache_clear_function')) {
        your_cache_clear_function();
    }
});
```

### Custom Revalidation Paths
Modify the revalidation paths:
```php
// Add to functions.php
add_filter('tr_revalidation_paths', function($paths) {
    $paths[] = '/custom-page';
    $paths[] = '/special-section';
    return $paths;
});
```

## Support
For issues or questions:
1. Check WordPress error logs
2. Check Vercel deployment logs
3. Test individual components (WordPress cache, Vercel webhook, Next.js API)
4. Review browser console for JavaScript errors

## Version History
- **v1.0.0** - Initial release with full cache management features
