import axios from 'axios'
import { QueryCache, QueryClient } from 'react-query'
import qs from 'qs'

const queryCache = new QueryCache()

export const queryClient = new QueryClient({
    queryCache,
    defaultOptions: { queries: { refetchOnWindowFocus: false } }
})

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT!,
})

api.interceptors.request.use((config) => {
    // Do something before request is sent
    const qp = qs.stringify(config.params, { encodeValuesOnly: false })
    config.url += '?' + qp
    config.params = {}
    return config;
}, Promise.reject);