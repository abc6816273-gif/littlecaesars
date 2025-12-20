import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath, revalidateTag } from 'next/cache'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { secret, paths, tags } = body

    // Verify the secret token
    if (secret !== process.env.REVALIDATE_SECRET) {
      return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
    }

    // Revalidate specific paths
    if (paths && Array.isArray(paths)) {
      for (const path of paths) {
        try {
          revalidatePath(path)
          console.log(`✅ Revalidated path: ${path}`)
        } catch (error) {
          console.error(`❌ Failed to revalidate path ${path}:`, error)
        }
      }
    }

    // Revalidate specific tags
    if (tags && Array.isArray(tags)) {
      for (const tag of tags) {
        try {
          revalidateTag(tag)
          console.log(`✅ Revalidated tag: ${tag}`)
        } catch (error) {
          console.error(`❌ Failed to revalidate tag ${tag}:`, error)
        }
      }
    }

    // If no specific paths or tags provided, revalidate common pages
    if (!paths && !tags) {
      const commonPaths = [
        '/',
        '/menu-prices',
        '/meal-planner',
        '/blog',
        '/about',
        '/contact',
        '/store-locator',
        '/gift-cards',
        '/coupons'
      ]

      for (const path of commonPaths) {
        try {
          revalidatePath(path)
          console.log(`✅ Revalidated common path: ${path}`)
        } catch (error) {
          console.error(`❌ Failed to revalidate common path ${path}:`, error)
        }
      }

      // Revalidate common tags
      const commonTags = ['menu', 'blog', 'pages', 'coupons']
      for (const tag of commonTags) {
        try {
          revalidateTag(tag)
          console.log(`✅ Revalidated common tag: ${tag}`)
        } catch (error) {
          console.error(`❌ Failed to revalidate common tag ${tag}:`, error)
        }
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Cache revalidated successfully',
      timestamp: new Date().toISOString(),
      revalidated: {
        paths: paths || 'common paths',
        tags: tags || 'common tags'
      }
    })

  } catch (error) {
    console.error('❌ Revalidation error:', error)
    return NextResponse.json({
      success: false,
      message: 'Failed to revalidate cache',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Also support GET requests for testing
export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const secret = url.searchParams.get('secret')
  const path = url.searchParams.get('path')

  if (secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  if (path) {
    try {
      revalidatePath(path)
      return NextResponse.json({
        success: true,
        message: `Path ${path} revalidated successfully`,
        timestamp: new Date().toISOString()
      })
    } catch (error) {
      return NextResponse.json({
        success: false,
        message: 'Failed to revalidate path',
        error: error instanceof Error ? error.message : 'Unknown error'
      }, { status: 500 })
    }
  }

  return NextResponse.json({
    message: 'Revalidate API endpoint',
    usage: {
      POST: 'Send { secret, paths?, tags? } to revalidate',
      GET: 'Use ?secret=xxx&path=/path/to/revalidate'
    }
  })
}
