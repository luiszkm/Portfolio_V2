import Image from "next/image";
import Head from 'next/head'



export default function Home() {



  return (
    <>
      <Head>
        <title>DevSoares</title>
        <meta name="description" content="Luis is a web developer with 1 year of experience in the market, focused on typescript, javascript, react, node, sql, html and css
"></meta>
      </Head>

      <main className='flex flex-col gap-4 max-w-7xl mx-auto items-center justify-center px-5 pb-8 '>

        <div className="w-full h-44 absolute top-16 flex items-center justify-center bg-[#070707] ">
          <Image className='relative top-0 h-44 object-cover md:object-fill' width={1280} height={176}
            src="https://portfolioluis.s3.sa-east-1.amazonaws.com/banner.png" alt="banner das stacks utilizadas" />
        </div>

        <section id="about" className='flex flex-col gap-5 md:flex-row'>
          <Card />
          <About />
        </section>

        <main className='flex flex-col gap-5 md:flex-row'>
          <section id="formation"
            className="flex flex-col items-center gap-5 w-full max-w-sm p-7 h-[360px] border border-black rounded-2xl ">
            <h3>Fromacao</h3>
            <Formation />
            <Formation />
            <Formation />
          </section>

          <section id="skills"
            className="flex flex-col items-center gap-5 w-full  p-7 h-[360px] border border-black rounded-2xl ">
            <h3>Skills</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eius et doloremque consequuntur delectus suscipit expedita temporibus molestias nulla deleniti totam, dolores aspernatur odit tenetur officia praesentium mollitia magnam culpa.</p>
          </section>
        </main>

        <section id="project"  >
          <h2 className="font-bold">Projetos</h2>
          <div className="grid  gap-5  md:grid-flow-col">

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
