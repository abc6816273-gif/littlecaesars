import { MetadataRoute } from 'next'

// Enable ISR for sitemap - revalidates every hour
export const revalidate = 3600

interface WordPressPost {
  slug: string
  modifiedGmt: string
  status: string
}

interface WordPressPage {
  slug: string
  modifiedGmt: string
  status: string
}

interface WordPressCategory {
  slug: string
  count: number
}

interface SitemapResponse {
  posts: { nodes: WordPressPost[] }
  pages: { nodes: WordPressPage[] }
  categories: { nodes: WordPressCategory[] }
}

async function fetchWordPressContent(): Promise<SitemapResponse | null> {
  try {
    console.log('🗺️ Fetching WordPress content for sitemap...')

    const query = `
      query SitemapQuery {
        posts(first: 1000, where: { status: PUBLISH }) {
          nodes {
            slug
            modifiedGmt
            status
          }
        }
        pages(first: 1000, where: { status: PUBLISH }) {
          nodes {
            slug
            modifiedGmt
            status
          }
        }
        categories(first: 100, where: { hideEmpty: true }) {
          nodes {
            slug
            count
          }
        }
      }
    `

    const graphqlEndpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT || 'https://admin.littlecaesarsmenu.us/graphql'

    const response = await fetch(graphqlEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
      next: {
        revalidate: 900,
        tags: ['sitemap', 'posts', 'pages', 'categories']
      }
    })

    if (!response.ok) {
      console.error('❌ WordPress GraphQL request failed:', response.status, response.statusText)
      return null
    }

    const result = await response.json()

    if (result.errors) {
      console.error('❌ GraphQL errors:', result.errors)
      return null
    }

    console.log('✅ WordPress content fetched for sitemap')
    return result.data

  } catch (error) {
    console.error('❌ Error fetching WordPress content for sitemap:', error)
    return null
  }
}

function formatSitemapDate(dateString: string | null | undefined): string {
  if (!dateString) {
    return new Date().toISOString()
  }

  try {
    const date = new Date(dateString)
    if (isNaN(date.getTime())) {
      return new Date().toISOString()
    }
    return date.toISOString()
  } catch (error) {
    return new Date().toISOString()
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://littlecaesarsmenu.us'
  const currentDate = new Date().toISOString()

  console.log('🗺️ Generating sitemap with ALL 51 pages...')

  // 🚀 COMPLETE LIST OF ALL 51 PAGES - MANUALLY ADDED FOR RELIABILITY
  const allStaticPages: MetadataRoute.Sitemap = [
    // 1. Homepage
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },

    // 2-8. Core Pages
    {
      url: `${baseUrl}/little-caesars-menu`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/menu`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/menus-prices`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/coupons`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/store-locator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/meal-planner`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gift-cards`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // 9-12. Location Pages
    {
      url: `${baseUrl}/little-caesars-california`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/little-caesars-texas`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/little-caesars-florida`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.88,
    },
    {
      url: `${baseUrl}/little-caesars-new-york`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.88,
    },

    // 13-15. Menu Item Pages
    {
      url: `${baseUrl}/little-caesars-pepperoni-pizza`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.92,
    },
    {
      url: `${baseUrl}/little-caesars-crazy-bread`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.87,
    },
    {
      url: `${baseUrl}/little-caesars-wings`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.87,
    },

    // 16-22. Deals & Pricing Pages
    {
      url: `${baseUrl}/little-caesars-deals-today`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/little-caesars-9-99-menu`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/little-caesars-coupons-january-2025`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/little-caesars-february-2026-deals`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/little-caesars-menu-2026`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/little-caesars-new-items-2025`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/crazy-puffs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // 23-28. Information Pages
    {
      url: `${baseUrl}/little-caesars-hours`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/little-caesars-near-me`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/little-caesars-delivery`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/little-caesars-delivery-near-me`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.90,
    },
    {
      url: `${baseUrl}/little-caesars-nutrition-calories`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/little-caesars-calorie-calculator`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // 29-31. Special Features
    {
      url: `${baseUrl}/little-caesars-secret-menu`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/little-caesars-pretzel-crust-pizza-2025`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/little-caesars-christmas-hours`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // 32-33. Comparison Pages
    {
      url: `${baseUrl}/little-caesars-vs-dominos`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/little-caesars-vs-pizza-hut`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // 34-37. Editorial/Blog Pages
    {
      url: `${baseUrl}/best-little-caesars-pizza-ranked`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/happy-christmas-2025`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/little-caesars-super-bowl-2026`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.97,
    },
    {
      url: `${baseUrl}/important-blogs`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // 38-40. Blog System
    {
      url: `${baseUrl}/posts`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // 41-49. Legal & Info Pages
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cookies-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/legal`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ]

  let dynamicPages: MetadataRoute.Sitemap = []

  // Try to fetch WordPress content (non-blocking)
  try {
    const wordpressContent = await fetchWordPressContent()

    if (wordpressContent) {
      // Add blog posts
      const blogPosts = wordpressContent.posts?.nodes
        ?.filter(post => post.status === 'publish')
        ?.map(post => ({
          url: `${baseUrl}/${post.slug}`,
          lastModified: formatSitemapDate(post.modifiedGmt),
          changeFrequency: 'weekly' as const,
          priority: 0.8,
        })) || []

      // Add WordPress pages
      const wpPages = wordpressContent.pages?.nodes
        ?.filter(page => page.status === 'publish')
        ?.map(page => ({
          url: `${baseUrl}/${page.slug}`,
          lastModified: formatSitemapDate(page.modifiedGmt),
          changeFrequency: 'monthly' as const,
          priority: 0.6,
        })) || []

      // Add category pages
      const categoryPages = wordpressContent.categories?.nodes
        ?.filter(category => category.count > 0)
        ?.map(category => ({
          url: `${baseUrl}/category/${category.slug}`,
          lastModified: currentDate,
          changeFrequency: 'weekly' as const,
          priority: 0.7,
        })) || []

      dynamicPages = [...blogPosts, ...wpPages, ...categoryPages]

      console.log(`📝 Added ${blogPosts.length} blog posts`)
      console.log(`📄 Added ${wpPages.length} WordPress pages`)
      console.log(`🏷️ Added ${categoryPages.length} category pages`)
    }
  } catch (error) {
    console.warn('⚠️ WordPress fetch failed, using static sitemap only:', error)
  }

  // Combine static and dynamic pages
  const allPages = [...allStaticPages, ...dynamicPages]

  // Remove duplicates by URL
  const uniquePages = Array.from(
    new Map(allPages.map(page => [page.url, page])).values()
  )

  console.log(`✅ Sitemap generated with ${uniquePages.length} total URLs (${allStaticPages.length} static + ${dynamicPages.length} dynamic)`)

  return uniquePages
}
