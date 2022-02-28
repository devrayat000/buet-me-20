import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { SSRData } from '@urql/core/dist/types/exchanges/ssr'
import { Provider } from 'urql'

import NavBar from '../components/common/navbar'
import { client, ssrCache } from '../utils/urql'
import Drawer from '../components/common/drawer'
import DrawerWrapper from '../components/common/drawer-wrapper'
import { StoreProvider } from 'easy-peasy'
import store from '../store'



function MyApp({ Component, pageProps }: MyAppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState)
  }

  return (
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
  )
}

export default MyApp

interface MyAppProps extends AppProps {
  pageProps: {
    urqlState?: SSRData
  }
}
