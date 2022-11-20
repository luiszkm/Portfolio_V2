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
        <meta name="description" content="Luis is a web developer with 1 year of experience in the market, focused on typescript, javascript, react, node, sql, html and css
"></meta>
      </Head>

      <main className='flex flex-col gap-4 max-w-7xl mx-auto items-center justify-center px-5 '>

        <img className='absolute top-10 w-full h-44 object-cover md:object-fill '
          src="https://portfolioluis.s3.sa-east-1.amazonaws.com/banner.png" alt="banner das stacks utilizadas" />

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
import Image from 'next/image';

// export default function Home...

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home", "header"])),
      // Will be passed to the page component as props
    },
  };
}
