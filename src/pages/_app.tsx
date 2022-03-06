import Head from 'next/head'
import { useEffect } from 'react'
import { QueryClientProvider } from 'react-query'
import { StoreProvider, } from 'easy-peasy'
import type { AppProps } from 'next/app'

import NavBar from '../components/common/navbar'
import DrawerWrapper from '../components/common/drawer-wrapper'
import store from '../store'

import '../styles/globals.scss'
import { queryClient } from '../utils/react-query'
import { askForNotificationPermission } from '../utils/notification'

// TODO: Implement react-query
function MyApp({ Component, pageProps }: MyAppProps) {

  useEffect(() => {
    if (Notification.permission === 'default') {
      askForNotificationPermission()
    }
  }, [])

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
            <QueryClientProvider client={queryClient}>
              <Component {...(pageProps as any)} />
            </QueryClientProvider>
          </main>
        </DrawerWrapper>
      </StoreProvider>
    </>
  )
}

export default MyApp

interface MyAppProps extends AppProps {
  pageProps: {
  }
}
