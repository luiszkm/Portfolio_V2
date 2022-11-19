import type { NextPage } from 'next'

import Head from 'next/head'
import { useRouter } from 'next/router';

import { useTranslation } from "next-i18next";



export default function Home() {

  const { locale } = useRouter();
  const { t } = useTranslation("home");


  return (
    <>
      <Head>
        <title>DevSoares</title>
      </Head>

      <main className='flex flex-col gap-4 max-w-7xl mx-auto items-center justify-center px-5 '>

        <img className='absolute top-10 w-full object-fill h-40'
          src="https://w0.peakpx.com/wallpaper/963/804/HD-wallpaper-programmer-eat-sleep-code-repeat.jpg" alt="" />
          
        <section className='flex flex-col gap-5 md:flex-row'>
          <Card />
          <About />
        </section>
        <MainProjects />

      </main>

    </>
  )
}


import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Card } from '../components/Card';
import { About } from '../components/About';
import { MainProjects } from '../components/MainProjects';

// export default function Home...

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home", "header"])),
      // Will be passed to the page component as props
    },
  };
}
