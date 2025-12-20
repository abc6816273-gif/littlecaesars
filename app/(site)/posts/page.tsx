import { Suspense } from 'react'
import { Metadata } from 'next'
import { PageHero } from '@/components/layout'
import { PostGrid, CategoryPills, Pagination, PaginationSkeleton } from '@/components/blog'
import { getPosts, getCategories } from '@/lib/data'

// Enable ISR with longer revalidation for better performance
export const revalidate = 3600 // Cache for 1 hour to reduce loading

interface PostsContentProps {
  searchParams: { after?: string; before?: string }
}

async function PostsContent({ searchParams }: PostsContentProps) {
  const postsPerPage = 12
  const { after, before } = searchParams

  try {
    // Fetch posts and categories with better error handling
    const [postsResponse, categories] = await Promise.all([
      getPosts(postsPerPage, after).catch(error => {
        console.error('❌ ERROR FETCHING POSTS:', error)
        return {
          posts: { nodes: [] },
          pageInfo: { hasNextPage: false, hasPreviousPage: false, startCursor: null, endCursor: null }
        }
      }),
      getCategories().catch(error => {
        console.error('❌ ERROR FETCHING CATEGORIES:', error)
        return []
      })
    ])

    console.log('📊 POSTS FETCHED:', postsResponse.posts.nodes.length)
    console.log('📂 CATEGORIES FETCHED:', categories.length, categories)

    const { posts, pageInfo } = postsResponse
    const postNodes = posts.nodes

  return (
    <>
      {/* Category filter pills - SAFE ERROR HANDLING: ${new Date().toISOString()} */}
      {Array.isArray(categories) && categories.length > 0 && (
        <div className="mb-6">
          <CategoryPills categories={categories} />
        </div>
      )}

      {/* Posts grid */}
      <PostGrid posts={postNodes} />
      
      {postNodes.length === 0 && (
        <div className="text-center py-12">
          <h3 className="text-2xl font-slab font-slab-bold text-stone mb-4">
            No Posts Found
          </h3>
          <p className="text-stone/70 max-w-md mx-auto">
            No posts were found in the current category or search results. Try adjusting your filters or check back later.
          </p>
        </div>
      )}

      {/* Pagination */}
      {postNodes.length > 0 && (
        <Pagination
          hasNextPage={pageInfo.hasNextPage}
          hasPreviousPage={pageInfo.hasPreviousPage}
          nextCursor={pageInfo.endCursor}
          previousCursor={pageInfo.startCursor}
          basePath="/posts"
        />
      )}
    </>
  )
  } catch (error) {
    console.error('Error loading posts:', error)
    return (
      <div className="text-center py-12">
        <h3 className="text-2xl font-slab font-bold text-stone mb-4">
          Unable to Load Posts
        </h3>
        <p className="text-stone/70 max-w-md mx-auto">
          We're having trouble loading the blog posts right now. Please try refreshing the page or check back later.
        </p>
      </div>
    )
  }
}

function PostsContentSkeleton() {
  return (
    <>
      <div className="mb-8">
        <div className="flex flex-wrap gap-3">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="h-8 w-20 bg-stone/10 rounded-full animate-pulse" />
          ))}
        </div>
      </div>
      <PostGrid posts={[]} loading />
      <PaginationSkeleton />
    </>
  )
}

interface PostsPageProps {
  searchParams: Promise<{ after?: string; before?: string }>
}

// Generate metadata with SEO-friendly pagination links
export async function generateMetadata({ searchParams }: PostsPageProps): Promise<Metadata> {
  const params = await searchParams
  const { after, before } = params
  
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://littlecaesarsmenu.us'
  const basePath = '/posts'
  
  let title = 'Blog & News | Little Caesars Menu'
  let description = 'Stay updated with the latest menu additions, cooking tips, and restaurant news from Little Caesars.'
  
  // Adjust title and description for paginated pages
  if (after || before) {
    title = 'Blog & News - Page 2+ | Little Caesars Menu'
    description = 'Browse more articles about Little Caesars menu items, cooking tips, and restaurant news.'
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
    twitter: {
      title,
      description,
    },
    alternates: {
      canonical: `${baseUrl}${basePath}`,
    },
  }

  // Add SEO pagination links
  try {
    // Get current page info to determine prev/next links
    const postsResponse = await getPosts(
      12,
      after
    )
    
    const { pageInfo } = postsResponse
    
    if (pageInfo.hasNextPage && pageInfo.endCursor) {
      if (!metadata.alternates) metadata.alternates = {}
      // @ts-ignore - Next.js types don't include this but it's valid
      metadata.alternates.next = `${baseUrl}${basePath}?after=${encodeURIComponent(pageInfo.endCursor)}`
    }
    
    if (pageInfo.hasPreviousPage && pageInfo.startCursor) {
      if (!metadata.alternates) metadata.alternates = {}
      // @ts-ignore - Next.js types don't include this but it's valid  
      metadata.alternates.prev = `${baseUrl}${basePath}?before=${encodeURIComponent(pageInfo.startCursor)}`
    }
    
    // If we're on a paginated page but there's no previous cursor, link back to first page
    if ((after || before) && !pageInfo.hasPreviousPage) {
      if (!metadata.alternates) metadata.alternates = {}
      // @ts-ignore
      metadata.alternates.prev = `${baseUrl}${basePath}`
    }
  } catch (error) {
    // Fail gracefully if we can't determine pagination info
    console.error('Error generating pagination metadata:', error)
  }

  return metadata
}

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const params = await searchParams
  
  return (
    <>
      <PageHero
        title="Blog & News"
        subtitle="Stay updated with the latest pizza recipes, deals, and Little Caesars news"
      />
      
      <div className="pt-6 pb-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<PostsContentSkeleton />}>
            <PostsContent searchParams={params} />
          </Suspense>
        </div>
      </div>
    </>
  )
}