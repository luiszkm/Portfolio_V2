import { SiTypescript, SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiStyledcomponents, SiReact, SiPrisma, SiNodedotjs, SiMysql } from 'react-icons/si'

export function Stacks() {

  return (
    <div className='flex gap-4 w-full flex-wrap items-center  justify-center '>

      <div>
        <SiTypescript className='hover:animate-pulse' size={24}
          title='TypeScript' />
      </div>
      
      <div>
        <SiJavascript className='hover:animate-pulse' size={24}
          title='JavaScript' />
      </div>

      <div>
        <SiTailwindcss className='hover:animate-pulse' size={24}
          title='Tailwind ' />
      </div>

      <div>
        <SiHtml5 className='hover:animate-pulse' size={24}
          title='HTML5' />
      </div>

      <div>
        <SiCss3 className='hover:animate-pulse' size={24}
          title='CSS3' />
      </div>

      <div>
        <SiStyledcomponents className='hover:animate-pulse' size={24}
          title='Styled Components' />
      </div>


      <div>
        <SiReact className='hover:animate-pulse' size={24}
          title='ReactJs' />
      </div>

      <div>
        <SiNodedotjs className='hover:animate-pulse' size={24}
          title='NodeJS' />
      </div>

      <div>
        <SiMysql className='hover:animate-pulse' size={24}
          title='MySQL' />
      </div>


      <div>
        <SiPrisma className='hover:animate-pulse' size={24}
          title='Prisma' />
      </div>
    </div>
  )
}