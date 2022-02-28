import {
    dedupExchange,
    cacheExchange,
    fetchExchange,
    ssrExchange,
  } from '@urql/core'
  import { createClient } from 'urql'
  import type { SSRData } from '@urql/core/dist/types/exchanges/ssr'
  
  export const ssrCache = ssrExchange({
    isClient: process.browser,
    initialState: process.browser ? window.__URQL_DATA__ : undefined,
  })
  
  export const client = createClient({
    url: 'http://localhost:3001/api/graphql',
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
  })
  
  declare global {
    interface Window {
      __URQL_DATA__: SSRData
    }
  }