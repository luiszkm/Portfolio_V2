import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineFileDone } from 'react-icons/ai'
import { Avatar } from './Avatar'



export function Card() {
  return (
    <div>
      <Avatar />
      <div className='flex flex-col'>
      <span>Desenvolvedor Web <span>JavaScrip</span>|<span>TypeScript</span>  </span>
      
      </div>
     



      <nav className='flex items-center gap-4'>
        <a href="#"><AiFillGithub /></a>
        <a href="#"><AiOutlineLinkedin /></a>
        <a href="#"><AiOutlineInstagram /></a>
        <a href="#"><AiOutlineFileDone /></a>
      </nav>
    </div>
  )
}