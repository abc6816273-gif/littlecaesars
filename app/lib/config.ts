// WordPress Configuration - Updated to use Little Caesars GraphQL endpoint
export const WORDPRESS_CONFIG = {
  API_URL: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://admin.littlecaesarsmenu.us/graphql',
  SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'Little Caesars Menu',
  SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://littlecaesarsmenu.us'
}

// Domain configuration for URL sanitization
export const DOMAIN_CONFIG = {
  // Frontend domain (where Next.js is hosted)
  FRONTEND_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://littlecaesarsmenu.us',
  // WordPress backend domain (updated to Little Caesars endpoint)
  WORDPRESS_URL: 'https://admin.littlecaesarsmenu.us'
}
