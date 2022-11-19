import { NavMenu } from "./NavMenu";

import { useRouter } from 'next/router'
import { LanguageSwitcher } from "./languageSwitcher";
import { DarkMode } from "./DarkMode";


export function Header() {

  const { locales } = useRouter()


  return (
    <header className="w-full  h-12 flex items-center justify-between px-4 bg-cyan-300">
      <div className="flex items-center gap-4">
        <DarkMode />
        <LanguageSwitcher />
      </div>
      <NavMenu />
    </header>
  )
}