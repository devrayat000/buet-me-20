import '../styles/globals.css'
import type { AppProps } from 'next/app'

import CustomLink from '../components/common/link'
import NavBar from '../components/common/navbar'



function MyApp({ Component, pageProps }: AppProps) {
  return <main className='relative'>
    <NavBar/>
    <Component {...pageProps} />
    <footer className='flex flex-col justify-center items-center fixed bottom-0 inset-x-0'>
      <h4>&copy; COPYRIGHT 2022 - BUET&apos;XX</h4>
      <h4>Developed by <span className='text-red-500'>Zul Ikram musaddik Rayat</span></h4>
    </footer>
  </main>
}

export default MyApp
