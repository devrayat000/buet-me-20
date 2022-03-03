import { Provider } from 'urql'
import { StoreProvider } from 'easy-peasy'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import type { SSRData } from '@urql/core/dist/types/exchanges/ssr'

import NavBar from '../components/common/navbar'
import { client, ssrCache } from '../utils/urql'
import DrawerWrapper from '../components/common/drawer-wrapper'
import store from '../store'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: MyAppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>
      <StoreProvider store={store} >
        <DrawerWrapper>
          <main className='relative drawer-content'>
            <NavBar />
            <Provider value={client}>
              <Component {...(pageProps as any)} />
            </Provider>
            <footer className='flex flex-col justify-center items-center fixed bottom-0 inset-x-0 text-sm md:text-base'>
              <h4>&copy; COPYRIGHT 2022 - BUET&apos;XX</h4>
              <h4>Developed by <span className='text-red-500'>Zul Ikram musaddik Rayat</span></h4>
            </footer>
          </main>
        </DrawerWrapper>
      </StoreProvider>
    </>
  )
}

export default MyApp

interface MyAppProps extends AppProps {
  pageProps: {
    urqlState?: SSRData
  }
}
