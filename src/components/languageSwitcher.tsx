
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";



export  function LanguageSwitcher () {
  const router = useRouter();

  const handleLocaleChange = (event: any) => {
    const value = event.target.value;

    router.push(router.route, router.asPath, {
      locale: value,
    });
  };


  return(
    <div>
      <select onChange={handleLocaleChange} value={router.locale}>
        <option value="en-US">🇺🇸 English</option>
        <option value="pt-BR">pt Brasil</option>
      </select>
    </div>
  )
}
