import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { WORDPRESS_CONFIG } from './config'

// Create HTTP link to GraphQL endpoint
const httpLink = createHttpLink({
  uri: WORDPRESS_CONFIG.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'User-Agent': 'Little-Caesars-Menu-App/2.0',
  }
})

// Create Apollo Client instance
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: {
            // Cache posts with cursor-based pagination
            keyArgs: ['where'],
            merge(existing = { nodes: [], pageInfo: {} }, incoming) {
              return {
                ...incoming,
                nodes: [...(existing.nodes || []), ...incoming.nodes],
                pageInfo: incoming.pageInfo,
              }
            },
          },
        },
      },
    },
  }),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first', // Prioritize cache for faster loading
    },
    query: {
      errorPolicy: 'all',
      fetchPolicy: 'cache-first', // Always use cache first
    },
  },
  // Add connection timeout and performance settings
  connectToDevTools: process.env.NODE_ENV === 'development',
})

// Export a function to get client for server-side usage
export function getApolloClient() {
  return apolloClient
}
