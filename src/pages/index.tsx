import type { NextPage } from 'next'
import Head from 'next/head'
import {  GetStaticProps } from 'next'



interface HomeProps {
  product: {
    priceId: string,
    priceAmount: number,
  }
}


export default function Home() {



  return (
    <>
      <Head>
        <title>IgNews</title>
      </Head>

      <main className='flex items-center justify-center'>

        <div className='flex flex-col items-center gap-14 mt-4 md:flex-row w-full justify-between max-w-screen-lg'>

          <section className='text-white px-5 py-5'>
            <span>Hey, Welcome</span>
            <h1 className='text-2xl font-black '>News about the <span className='text-cyan-500 '>React</span> world.</h1>

         

          </section>
          <img src="/images/avatar.svg" alt="foto de uma mulher com um notebook" />

        </div>
      </main>

    </>
  )
}

