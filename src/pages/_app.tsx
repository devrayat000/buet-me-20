import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SSRData } from '@urql/core/dist/types/exchanges/ssr'
import { Provider } from 'urql'

import NavBar from '../components/common/navbar'
import { client, ssrCache } from '../utils/urql'



function MyApp({ Component, pageProps }: MyAppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return <main className='relative'>
    <NavBar />
    <Provider value={client}>
      <Component {...(pageProps as any)} />
    </Provider>
    <footer className='flex flex-col justify-center items-center fixed bottom-0 inset-x-0'>
      <h4>&copy; COPYRIGHT 2022 - BUET&apos;XX</h4>
      <h4>Developed by <span className='text-red-500'>Zul Ikram musaddik Rayat</span></h4>
    </footer>
  </main>
}

export default MyApp

interface MyAppProps extends AppProps {
  pageProps: {
    urqlState?: SSRData
  }
}
