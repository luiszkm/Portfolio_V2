
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";


export function LanguageSwitcher() {
  const { query, push, asPath, route } = useRouter();
  const [enActive, setEnActive] = useState<Boolean>(false)
  // const langUrl = router.push(router.route)
  console.log(asPath);

  const handleLocaleChange = (language: string) => {
    language === 'pt-BR' ? setEnActive(false) : setEnActive(true)
    push(route, asPath, {
      locale: language,
    });
  };


  return (
    <div className="flex items-center gap-3">

      <img className={enActive ? "opacity-20 cursor-pointer" : ""}
        src="https://img.icons8.com/color/32/null/brazil.png"
        alt="Bandeira do brasil" title="Pt-BR" width={32} height={32}
        onClick={() => handleLocaleChange('pt-BR')} />

      <img className={enActive ? "" : "opacity-20 cursor-pointer"}
        src="https://img.icons8.com/color/32/null/usa.png"
        alt="Bandeira do EUA" title="Pt-BR" width={32} height={32}
        onClick={() => handleLocaleChange('en-US')} />

    </div>
  )
}
