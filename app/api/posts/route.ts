import { NextRequest, NextResponse } from 'next/server'
import { getPosts } from '@/lib/data'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const limit = parseInt(searchParams.get('limit') || '10', 10)
    const after = searchParams.get('after') || undefined

    // Fetch posts with limit
    const postsResponse = await getPosts(limit, after)
    
    return NextResponse.json({
      posts: postsResponse.posts,
      pageInfo: postsResponse.pageInfo,
      success: true
    })
  } catch (error) {
    console.error('Error in posts API:', error)
    return NextResponse.json({
      posts: { nodes: [] },
      pageInfo: {
        hasNextPage: false,
        hasPreviousPage: false,
        startCursor: null,
        endCursor: null
      },
      success: false,
      error: 'Failed to fetch posts'
    }, { status: 500 })
  }
}
