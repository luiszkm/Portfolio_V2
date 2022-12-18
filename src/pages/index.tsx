import Image from "next/image";
import Head from 'next/head'
import { useTranslation } from "next-i18next";



export default function Home() {
  const { t } = useTranslation("header");



  return (
    <>
      <Head>
        <title>DevSoares</title>

      </Head>

      <main className='flex flex-col gap-4 w-full max-w-7xl mx-auto items-center justify-center pb-8 '>

        <div className="w-full h-60 absolute top-16 flex items-center justify-center bg-[#070707] ">
          <Image className='relative h-60 top-0 object-cover md:object-fill' width={1280} height={208}
            src="https://portfolioluis.s3.sa-east-1.amazonaws.com/banner.png" alt="banner das stacks utilizadas" />
        </div>

        <section id="about" className='flex flex-col items-center mt-48 gap-5 md:flex-row'>
          <Card />
          <About />
        </section>

        <main className='flex flex-col items-center gap-5 md:flex-row '>

          <div className="flex w-96 items-center justify-center rounded-2xl p-2 bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-200 first-letter: dark:from-purple-800 dark:via-Fuchsia-800 dark:to-pink-700">
            <section id="formation"
              className="flex flex-col items-center gap-5 w-full  p-7 h-[360px] bg-white rounded-2xl 
              dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:via-gray-800">
              <h3 className="font-extrabold text-xl bg-gradient-to-tl from-cyan-900 via-cyan-600 to-cyan-200 bg-clip-text text-transparent"
              >{t("formation")}</h3>
              <Formation />
              <Formation />
              <Formation />
            </section>
          </div>

          <div className="flex items-center justify-center rounded-2xl p-2 bg-gradient-to-br from-cyan-900 via-cyan-700 to-cyan-200 
           dark:from-purple-800 dark:via-Fuchsia-800 dark:to-pink-700">

            <section id="skills"
              className="flex flex-col items-center gap-5 w-full  p-7 h-[360px] rounded-2xl  bg-white
              dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-700 dark:via-gray-800">
              <h3 className="font-extrabold text-2xl bg-gradient-to-tl from-cyan-900 via-cyan-600 to-cyan-200 bg-clip-text text-transparent">{t("skills")}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eius et doloremque consequuntur delectus suscipit expedita temporibus molestias nulla deleniti totam, dolores aspernatur odit tenetur officia praesentium mollitia magnam culpa.</p>
            </section>
          </div>

        </main>

        <section id="project"  >
          <h2 className="font-extrabold text-xl  bg-gradient-to-tl from-cyan-900 via-cyan-600 to-cyan-200 bg-clip-text text-transparent">{t("projects")}</h2>
          <div className="grid w-full  gap-5  xl:grid-flow-col">

            <MainProjects />
            <MainProjects />
          </div>
        </section>

      </main>

    </>
  )
}


import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Card } from '../components/Card';
import { About } from '../components/About';
import { MainProjects } from '../components/MainProjects';
import { Formation } from "../components/Formation";

// export default function Home...

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home", "header"])),
      // Will be passed to the page component as props
    },
  };
}
