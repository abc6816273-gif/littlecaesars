'use client'

import Script from 'next/script'

interface BlogPost {
  title: string
  excerpt: string
  slug: string
  date: string
  author?: {
    name: string
  }
  categories?: {
    nodes: Array<{
      name: string
      slug: string
    }>
  }
  featuredImage?: {
    node?: {
      sourceUrl: string
      altText?: string
    }
  }
}

interface BlogSEOEnhancerProps {
  post?: BlogPost
  posts?: BlogPost[]
  category?: string
}

export function BlogSEOEnhancer({ post, posts, category }: BlogSEOEnhancerProps) {
  const baseUrl = 'https://texasroadhouse-menus.us'

  // Individual blog post schema
  const generateBlogPostSchema = (post: BlogPost) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${baseUrl}/blog/${post.slug}`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt || `Read about ${post.title} at Texas Roadhouse`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Texas Roadhouse Menu Team",
      "url": `${baseUrl}/about`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Texas Roadhouse Menu",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/Our Own Logo.png`,
        "width": 300,
        "height": 100
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": post.featuredImage?.node?.sourceUrl || `${baseUrl}/texas-roadhouse-og.jpg`,
      "alt": post.featuredImage?.node?.altText || post.title
    },
    "articleSection": post.categories?.nodes?.[0]?.name || "Restaurant News",
    "keywords": [
      "Texas Roadhouse",
      "steakhouse",
      "menu",
      "prices",
      "restaurant",
      ...(post.categories?.nodes?.map(cat => cat.name) || [])
    ].join(", "),
    "about": {
      "@type": "Restaurant",
      "name": "Texas Roadhouse",
      "description": "American steakhouse chain serving hand-cut steaks, fall-off-the-bone ribs, and fresh-baked bread."
    },
    "mentions": [
      {
        "@type": "Restaurant",
        "name": "Texas Roadhouse"
      }
    ],
    "isPartOf": {
      "@type": "Blog",
      "@id": `${baseUrl}/blog`,
      "name": "Texas Roadhouse Menu Blog",
      "description": "Latest news, menu updates, and dining tips from Texas Roadhouse"
    }
  })

  // Blog listing schema
  const generateBlogSchema = (posts: BlogPost[]) => ({
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${baseUrl}/blog`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog`
    },
    "name": "Texas Roadhouse Menu Blog",
    "description": "Latest news, menu updates, dining tips, and restaurant information from Texas Roadhouse",
    "url": `${baseUrl}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": "Texas Roadhouse Menu",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/Our Own Logo.png`,
        "width": 300,
        "height": 100
      }
    },
    "blogPost": posts.slice(0, 10).map(post => ({
      "@type": "BlogPosting",
      "@id": `${baseUrl}/blog/${post.slug}`,
      "headline": post.title,
      "datePublished": post.date,
      "author": {
        "@type": "Person",
        "name": post.author?.name || "Texas Roadhouse Menu Team"
      },
      "url": `${baseUrl}/blog/${post.slug}`
    })),
    "about": {
      "@type": "Restaurant",
      "name": "Texas Roadhouse"
    }
  })

  // Category schema
  const generateCategorySchema = (category: string, posts: BlogPost[]) => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl}/blog/category/${category}`,
    "name": `${category} - Texas Roadhouse Blog`,
    "description": `Articles about ${category} from Texas Roadhouse Menu blog`,
    "url": `${baseUrl}/blog/category/${category}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": posts.length,
      "itemListElement": posts.map((post, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "BlogPosting",
          "@id": `${baseUrl}/blog/${post.slug}`,
          "name": post.title,
          "url": `${baseUrl}/blog/${post.slug}`
        }
      }))
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": baseUrl
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": `${baseUrl}/blog`
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": category,
          "item": `${baseUrl}/blog/category/${category}`
        }
      ]
    }
  })

  // FAQ Schema removed for blog posts - preventing duplicates with page-specific FAQs

  return (
    <>
      {/* Individual Blog Post Schema */}
      {post && (
        <Script
          id={`blog-post-${post.slug}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBlogPostSchema(post))
          }}
        />
      )}

      {/* Blog Listing Schema */}
      {posts && !post && !category && (
        <Script
          id="blog-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateBlogSchema(posts))
          }}
        />
      )}

      {/* Category Schema */}
      {category && posts && (
        <Script
          id={`category-${category}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateCategorySchema(category, posts))
          }}
        />
      )}

      {/* Content Marketing FAQ Schema */}
      {!post && (
        <Script
          id="content-faq-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateContentFAQSchema())
          }}
        />
      )}
    </>
  )
}
