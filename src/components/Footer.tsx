import { AiOutlineInstagram, AiOutlineWhatsApp, AiOutlineFacebook } from "react-icons/ai"

export function Footer() {
  return (
    <div className="w-full flex items-center justify-between">
      <footer className="w-full flex flex-col items-center gap-3 bg-gradient-to-tl from-cyan-900 via-cyan-600 to-cyan-200 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-400 dark:via-gray-700 ">
        <small>
        endereço
        </small>
        <ul className="flex items-center gap-3 cursor-pointer">
          <li><strong>Social</strong></li>
          <li><AiOutlineInstagram /></li>
          <li><AiOutlineWhatsApp /></li>
          <li><AiOutlineFacebook /></li>
        </ul>
      </footer>
    </div>
  )
}