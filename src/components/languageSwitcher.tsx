
import React, { useState } from "react";
import { useRouter } from "next/router";


export function LanguageSwitcher() {
  const router = useRouter();
  const [enActive, setEnActive] = useState <Boolean>(false)

  const handleLocaleChange = (language: string) => {
   language === 'pt-BR' ? setEnActive(false) : setEnActive(true)
    router.push(router.route, router.asPath, {
      locale: language,
    });
  };

  return (
    <div className="flex items-center gap-3">

      <img className={enActive ? "opacity-20 cursor-pointer" : ""}
        src="https://img.icons8.com/color/32/null/brazil.png"
        alt="Bandeira do brasil" title="Pt-BR"
        onClick={() => handleLocaleChange('pt-BR')} />

      <img className={enActive ? "" : "opacity-20 cursor-pointer"}
        src="https://img.icons8.com/color/32/null/usa.png"
        alt="Bandeira do brasil" title="Pt-BR"
        onClick={() => handleLocaleChange('en-US')} />

    </div>
  )
}
