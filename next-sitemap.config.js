/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://littlecaesarsmenu.us',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*', '/_next/*', '/admin/*'],
  generateIndexSitemap: false,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/']
      },
      {
        userAgent: 'OAI-SearchBot',
        allow: '/'
      },
      {
        userAgent: 'GPTBot',
        allow: '/'
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/'
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/'
      }
    ],
    additionalSitemaps: [
      'https://littlecaesarsmenu.us/sitemap.xml'
    ]
  },

  transform: async (config, path) => {
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }

    if (path.startsWith('/blog/')) {
      // Transform /blog/slug to /slug for clean URLs in sitemap
      const cleanPath = path.replace('/blog/', '/')
      return {
        loc: cleanPath,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }

    if (path.startsWith('/menus-prices')) {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }

    // High-traffic SEO pages - maximum priority
    const highPriorityPages = [
      '/little-caesars-menu-2026',
      '/little-caesars-secret-menu',
      '/best-little-caesars-pizza-ranked',
      '/little-caesars-delivery',
      '/little-caesars-coupons-january-2025',
      '/little-caesars-pretzel-crust-pizza-2025',
      '/little-caesars-9-99-menu',
      '/crazy-puffs',
      '/little-caesars-new-items-2025',
      '/little-caesars-nutrition-calories',
      '/menu'
    ]

    if (highPriorityPages.includes(path)) {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 0.95,
        lastmod: new Date().toISOString(),
      }
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },

  // 👇 Yeh add karna hai: WordPress se blog slugs fetch kar ke sitemap me inject karega
  additionalPaths: async (config) => {
    const res = await fetch('https://admin.littlecaesarsmenu.us/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
          {
            posts(first: 1000) {
              nodes {
                slug
              }
            }
          }
        `
      }),
    });

    const { data } = await res.json();

    return data.posts.nodes.map((post) => ({
      loc: `/${post.slug}`,
      changefreq: 'weekly',
      priority: 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
};
