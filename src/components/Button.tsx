import { ReactNode } from "react"
import {AiOutlineGithub} from "react-icons/ai"
import {IoEyeSharp} from "react-icons/io5"
interface ButtonProps {
  children?: ReactNode
  PRIMARY?: boolean
}

export function Button({ children, PRIMARY = false }: ButtonProps) {

  return PRIMARY ? (
    <button className="w-64 p-5 border-2 bg-black rounded-2xl text-white flex items-center gap-4
    hover:bg-transparent hover:border-black hover:text-black">
      <AiOutlineGithub size={24} />
      GitHub
    </button>
  ) :
    (
      <button className=" w-64 p-5 border-2 border-black rounded-2xl flex items-center gap-4
       hover:bg-black  hover:text-white">
        <IoEyeSharp size={24} />
        Demo
      </button>
    )
}