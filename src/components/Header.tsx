import { NavMenu } from "./NavMenu";

import { LanguageSwitcher } from "./languageSwitcher";
import { DarkMode } from "./DarkMode";
import { useTranslation } from "next-i18next";


export function Header() {

  const { t } = useTranslation("header");


  return (
    <header className="w-full  h-12 flex items-center justify-between px-4 bg-cyan-300">
      <div className="flex items-center gap-4">
        <DarkMode />
        <LanguageSwitcher />
      </div>
      <nav className="hidden md:flex">
            <ul className='flex gap-6 text-center cursor-pointer'>
              <li className='hover:text-white'>{t("about")}</li>
              <li className='hover:text-white'>{t("skills")}</li>
              <li className='hover:text-white'>{t("hobbies")}</li>
              <li className='hover:text-white'>{t("formation")}</li>
              <li className='hover:text-white'>{t("projects")}</li>
            </ul>
          </nav>
      <NavMenu />
    </header>
  )
}