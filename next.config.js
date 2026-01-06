/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'littlecaesarsmenu.us',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'admin.littlecaesarsmenu.us',
        port: '',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'], // ✅ Modern formats for better performance
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year cache for better performance
    dangerouslyAllowSVG: false, // Security: disable SVG for remote images
    unoptimized: false, // Enable Next.js image optimization
    loader: 'default'
  },

  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  experimental: {
    optimizePackageImports: ['lucide-react'],
    scrollRestoration: true,
    optimizeCss: true,
    forceSwcTransforms: true
  },

  // CSS and static asset configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Remove legacy polyfills and optimize bundle splitting
      config.resolve.alias = {
        ...config.resolve.alias,
        'core-js': false,
        'regenerator-runtime': false,
      }

      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 10000,
        maxSize: 100000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
            maxSize: 50000,
          },
          lib: {
            test: /[\\/]node_modules[\\/]/,
            name: 'lib',
            priority: 30,
            chunks: 'all',
            minChunks: 1,
            maxSize: 30000,
          },
        },
      }
    }
    return config
  },

  // Headers for caching and security
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: process.env.NODE_ENV === 'development'
              ? 'no-cache, no-store, must-revalidate'
              : 'public, max-age=31536000, immutable',
          },
          {
            key: 'Vary',
            value: 'Accept',
          },
        ],
      },
      {
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: process.env.NODE_ENV === 'development'
              ? 'no-cache, no-store, must-revalidate'
              : 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/chunks/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: process.env.NODE_ENV === 'development'
              ? 'no-cache, no-store, must-revalidate'
              : 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=300, s-maxage=3600' },
        ],
      },
      {
        source: '/_next/static/media/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/favicon.ico',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          { key: 'X-DNS-Prefetch-Control', value: 'on' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Cache-Control',
            value: process.env.NODE_ENV === 'development'
              ? 'no-cache, no-store, must-revalidate'
              : 'public, max-age=0, s-maxage=86400, stale-while-revalidate=86400'
          },
        ],
      },
    ]
  },

  async redirects() {
    return [
      // ✅ SEO FIX: Consolidate duplicate menu URLs
      {
        source: '/menu',
        destination: '/little-caesars-menu',
        permanent: true, // 301 redirect
      },
      {
        source: '/menus-prices',
        destination: '/little-caesars-menu',
        permanent: true, // 301 redirect
      },

      // ✅ 2025 → 2026 URL MIGRATIONS (SEO-friendly 301 redirects)
      {
        source: '/happy-christmas-2025',
        destination: '/happy-christmas-2026',
        permanent: true, // 301 redirect
      },
      {
        source: '/little-caesars-coupons-january-2025',
        destination: '/little-caesars-coupons-january-2026',
        permanent: true, // 301 redirect
      },
      {
        source: '/little-caesars-new-items-2025',
        destination: '/little-caesars-new-items-2026',
        permanent: true, // 301 redirect
      },
      {
        source: '/little-caesars-pretzel-crust-pizza-2025',
        destination: '/little-caesars-pretzel-crust-pizza-2026',
        permanent: true, // 301 redirect
      },
      // Add more custom redirects if needed
    ]
  },
}

module.exports = nextConfig