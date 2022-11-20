import type { AppProps } from 'next/app'
import { appWithTranslation } from "next-i18next";
import { Analytics } from '@vercel/analytics/react';


import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <div className=' min-h-screen w-full flex flex-col justify-between'>
      <Header />
      <Component {...pageProps} />
      <Analytics />

      <Footer />
    </div>
  )
}

export default appWithTranslation(MyApp)