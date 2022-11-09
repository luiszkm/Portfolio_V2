import { useState } from 'react'
import { useTranslation } from "next-i18next";

import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'


export function NavMenu() {
  const [showMenu, setShowMenu] = useState(false)
  const { t } = useTranslation("header");


  return (
    <div>
      {!showMenu ?
        <div>
          <GiHamburgerMenu className='cursor-pointer' onClick={() => setShowMenu(true)} />
        </div> :
        <div>
          <nav className="w-full h-screen absolute top-0 left-0 bg-cyan-500 flex justify-center items-start py-16 z-10">
          <AiOutlineClose className='cursor-pointer absolute top-3 right-3' onClick={() => setShowMenu(false)} />
            <ul className='flex flex-col gap-4 text-center cursor-pointer'>
              <li className='hover:text-white'>{t("about")}</li>
              <li className='hover:text-white'>{t("skills")}</li>
              <li className='hover:text-white'>{t("hobbies")}</li>
              <li className='hover:text-white'>{t("formation")}</li>
              <li className='hover:text-white'>{t("projects")}</li>
            </ul>
          </nav>
        </div>
      }
    </div>
  )

}

