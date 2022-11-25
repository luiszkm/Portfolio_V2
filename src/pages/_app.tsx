import type { AppProps } from 'next/app'
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";


import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import "tailwindcss/tailwind.css";

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className=' min-h-screen w-full flex flex-col justify-between bg-gradient-to-tr from-gray-400 via-gray-100 to-cyan-100 
       dark:from-gray-900 dark:to-gray-700 dark:via-gray-900
      '>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)