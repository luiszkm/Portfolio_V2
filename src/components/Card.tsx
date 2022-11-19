import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'
import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFileDone } from 'react-icons/ai'
import { HiLocationMarker } from 'react-icons/hi'
import { Avatar } from './Avatar'
import { Stacks } from './Stacks';



export function Card() {

  const { t } = useTranslation("common");


  return (
    <div className='w-full max-w-sm p-7 h-[480px] flex flex-col items-center justify-between rounded-2xl border-2 border-black'>
      <Avatar />

      <div className='flex flex-col'>
        <span>{t("role")} <span>JavaScrip</span>|<span>TypeScript</span>  </span>

      </div>

      <span className='flex items-center gap-4'><HiLocationMarker /> {t("location")} </span>

      <Stacks />
      <nav className=' w-full flex items-center justify-center py-2 gap-4 border-t-2 border-black'>
        <a href="https://github.com/luiszkm" className='hover:animate-bounce' target={'_blank'}><AiFillGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/luis-soares-64b0a6227/" className='hover:animate-bounce' target={'_blank'}><AiOutlineLinkedin size={24} /></a>
        <a href="https://www.instagram.com/luis_yoshi/?next=%2F" className='hover:animate-bounce' target={'_blank'}><AiOutlineInstagram size={24} /></a>
        <a href="#" className='hover:animate-bounce' target={'_blank'}><AiOutlineFileDone size={24} /></a>
      </nav>
    </div>
  )
}