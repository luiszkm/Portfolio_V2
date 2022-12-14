import { NavMenu } from "./NavMenu";

import { LanguageSwitcher } from "./languageSwitcher";
import { DarkMode } from "./DarkMode";
import { useTranslation } from "next-i18next";


export function Header() {

  const { t } = useTranslation("header");


  return (
    <header className="w-full  h-16 flex items-center justify-between px-4 bg-gradient-to-tl from-cyan-900 via-cyan-600 to-cyan-200 dark:from-gray-900">
      <div className="flex items-center gap-4">
        <DarkMode />
        <LanguageSwitcher />
      </div>
      <nav className="hidden md:flex">
            <ul className='flex gap-6 font-bold text-center cursor-pointer'>
              <li className='hover:text-white'><a href="#about">{t("about")}</a></li>
              <li className='hover:text-white'><a href="#skills">{t("skills")}</a></li>
              <li className='hover:text-white'><a href="#formation">{t("formation")}</a></li>
              <li className='hover:text-white'><a href="#project">{t("projects")}</a></li>
            </ul>
          </nav>
      <NavMenu />
    </header>
  )
}