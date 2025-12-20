import { Metadata } from 'next'
import { PageHero } from '@/components/layout'
import { PostGrid, CategoryPills } from '@/components/blog'
import { getCategories, getPosts } from '@/lib/data'

// Enable ISR with longer cache for better performance
export const revalidate = 3600 // Cache for 1 hour

interface CategoryPageProps {
  params: Promise<{
    slug: string
  }>
  searchParams: Promise<{ after?: string; before?: string }>
}

export async function generateStaticParams() {
  try {
    const categories = await getCategories()
    console.log('📂 Static params for categories:', categories.length)
    return categories.slice(0, 10).map((category) => ({ // Limit to 10 most important
      slug: category.slug,
    }))
  } catch (error) {
    console.error('Error generating static params:', error)
    return [] // Return empty array on error
  }
}

export async function generateMetadata({ params, searchParams }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const { after, before } = await searchParams
  const categories = await getCategories()
  const category = categories.find(cat => cat.slug === slug)
  
  if (!category) {
    return {
      title: 'Category Not Found',
    }
  }

  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Texas Roadhouse Menu'
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://texasroadhouse-menus.us'
  const basePath = `/categories/${slug}`
  
  let title = `${category.name} Articles | ${siteName}`
  let description = `Browse all articles in the ${category.name} category on ${siteName}`
  
  if (after || before) {
    title = `${category.name} Articles - Page 2+ | ${siteName}`
    description = `Browse more articles in the ${category.name} category`
  }

  const metadata: Metadata = {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}${basePath}`,
      type: 'website',
    },
    alternates: {
      canonical: `${baseUrl}${basePath}`,
    },
  }

  // Add SEO pagination links for category pages
  try {
    const postsResponse = await getPostsByCategory(
      slug,
      12,
      after
    )
    
    const { pageInfo } = postsResponse
    
    if (pageInfo.hasNextPage && pageInfo.endCursor) {
      if (!metadata.alternates) metadata.alternates = {}
      // @ts-ignore
      metadata.alternates.next = `${baseUrl}${basePath}?after=${encodeURIComponent(pageInfo.endCursor)}`
    }
    
    if (pageInfo.hasPreviousPage && pageInfo.startCursor) {
      if (!metadata.alternates) metadata.alternates = {}
      // @ts-ignore
      metadata.alternates.prev = `${baseUrl}${basePath}?before=${encodeURIComponent(pageInfo.startCursor)}`
    }
    
    if ((after || before) && !pageInfo.hasPreviousPage) {
      if (!metadata.alternates) metadata.alternates = {}
      // @ts-ignore
      metadata.alternates.prev = `${baseUrl}${basePath}`
    }
  } catch (error) {
    console.error('Error generating category pagination metadata:', error)
  }

  return metadata
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const { slug } = await params
  const { after } = await searchParams || {}

  try {
    // Fetch real WordPress data
    const [categories, allPosts] = await Promise.all([
      getCategories(),
      getPosts(50) // Get more posts to filter from
    ])

    // Find the category
    const category = categories.find(cat => cat.slug === slug) || {
      id: slug,
      name: slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' '),
      slug: slug,
      count: 0
    }

    // Filter posts by category (client-side filtering for reliability)
    const allPostNodes = allPosts.posts.nodes
    const postNodes = allPostNodes.filter(post => 
      post.categories?.nodes?.some(cat => cat.slug === slug)
    )

    console.log('✅ CATEGORY PAGE SUCCESS:', { 
      slug, 
      categoryFound: !!categories.find(cat => cat.slug === slug),
      totalPosts: allPostNodes.length,
      filteredPosts: postNodes.length,
      categories: categories.length
    })

    return (
      <>
        <PageHero
          title={`${category.name} Articles`}
          subtitle={`Browse all articles in the ${category.name} category`}
        />
        
        <div className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Pills */}
            {categories.length > 0 && (
              <div className="mb-8">
                <CategoryPills categories={categories} activeCategory={slug} />
              </div>
            )}

            {/* Posts Grid */}
            {postNodes.length > 0 ? (
              <PostGrid posts={postNodes} />
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-slab font-slab-bold text-stone mb-4">
                  No articles found in {category.name}
                </h3>
                <p className="text-stone/70 max-w-md mx-auto mb-6">
                  There are no articles in this category yet. Check back soon for new content!
                </p>
                <Link 
                  href="/posts" 
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  View All Posts
                </Link>
              </div>
            )}
          </div>
        </div>
      </>
    )
  } catch (error) {
    console.error('❌ CATEGORY PAGE ERROR:', error)
    
    return (
      <>
        <PageHero
          title="Category Articles"
          subtitle="Browse articles in this category"
        />
        
        <div className="py-12">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center py-12">
              <h3 className="text-2xl font-slab font-slab-bold text-stone mb-4">
                Unable to load category
              </h3>
              <p className="text-stone/70 max-w-md mx-auto mb-6">
                We're having trouble loading this category right now. Please try again later.
              </p>
              <Link 
                href="/posts" 
                className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </div>
      </>
    )
  }
}
