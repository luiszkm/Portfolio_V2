import { AiFillGithub, AiOutlineLinkedin, AiOutlineInstagram ,AiOutlineFileDone} from 'react-icons/ai'
import { Avatar } from './Avatar'



export function Card (){
  return(
    <div>
      <Avatar />
      <span>Desenvolvedor Web </span>


    
      <nav className='flex items-center gap-4'>
       <a href="#"><AiFillGithub /></a>
       <a href="#"><AiOutlineLinkedin /></a>
       <a href="#"><AiOutlineInstagram /></a>
       <a href="#"><AiOutlineFileDone /></a>
      </nav>
    </div>
  )
}