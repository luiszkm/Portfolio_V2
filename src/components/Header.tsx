import { NavMenu } from "./NavMenu";

import { useRouter } from 'next/router'
import { LanguageSwitcher } from "./languageSwitcher";


export function Header() {

  const { locales } = useRouter()


  return (
    <header className="w-full  h-12 flex items-center justify-between px-4 bg-cyan-300">
      <h3 className="text-lg"> </h3>
      <LanguageSwitcher />
      <NavMenu />
    </header>
  )
}