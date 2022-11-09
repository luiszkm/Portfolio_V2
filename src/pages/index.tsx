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

      <main className='flex items-center justify-center'>

        {t("greeting")}
      </main>

    </>
  )
}


import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// export default function Home...

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}
