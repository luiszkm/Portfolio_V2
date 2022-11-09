import type { AppProps } from 'next/app'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className=' min-h-screen w-full flex flex-col justify-between'>
    <Component {...pageProps} />
    </div>
  )
}

export default MyApp 