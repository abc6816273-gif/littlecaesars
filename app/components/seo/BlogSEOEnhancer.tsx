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
  const baseUrl = 'https://littlecaesarsmenu.us'

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
    "description": post.excerpt || `Read about ${post.title} at Little Caesars`,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": {
      "@type": "Person",
      "name": post.author?.name || "Little Caesars Menu Team",
      "url": `${baseUrl}/about`
    },
    "publisher": {
      "@type": "Organization",
      "name": "Little Caesars Menu Guide",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
        "width": 300,
        "height": 100
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": post.featuredImage?.node?.sourceUrl || `${baseUrl}/little-caesars-og.jpg`,
      "alt": post.featuredImage?.node?.altText || post.title
    },
    "articleSection": post.categories?.nodes?.[0]?.name || "Pizza News",
    "keywords": [
      "Little Caesars",
      "pizza",
      "menu",
      "prices",
      "Hot-N-Ready",
      ...(post.categories?.nodes?.map(cat => cat.name) || [])
    ].join(", "),
    "about": {
      "@type": "Restaurant",
      "name": "Little Caesars",
      "description": "America's best value pizza chain serving Hot-N-Ready pizza, Crazy Bread, and more."
    },
    "mentions": [
      {
        "@type": "Restaurant",
        "name": "Little Caesars"
      }
    ],
    "isPartOf": {
      "@type": "Blog",
      "@id": `${baseUrl}/blog`,
      "name": "Little Caesars Menu Blog",
      "description": "Latest news, menu updates, and pizza tips from Little Caesars"
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
    "name": "Little Caesars Menu Blog",
    "description": "Latest news, menu updates, pizza tips, and restaurant information from Little Caesars",
    "url": `${baseUrl}/blog`,
    "publisher": {
      "@type": "Organization",
      "name": "Little Caesars Menu Guide",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.png`,
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
        "name": post.author?.name || "Little Caesars Menu Team"
      },
      "url": `${baseUrl}/blog/${post.slug}`
    })),
    "about": {
      "@type": "Restaurant",
      "name": "Little Caesars"
    }
  })

  // Category schema
  const generateCategorySchema = (category: string, posts: BlogPost[]) => ({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${baseUrl}/blog/category/${category}`,
    "name": `${category} - Little Caesars Blog`,
    "description": `Articles about ${category} from Little Caesars Menu blog`,
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

  // Content FAQ Schema for Little Caesars
  const generateContentFAQSchema = () => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is on the Little Caesars menu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Little Caesars menu features Hot-N-Ready pizzas, specialty pizzas like ExtraMostBestest, Crazy Bread, wings, and various combo deals."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a Hot-N-Ready pizza cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The classic Hot-N-Ready pepperoni or cheese pizza typically costs around $5.99-$7.99 depending on location."
        }
      }
    ]
  })

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
