import { useState, useEffect } from "react";
import { useTheme } from "next-themes";


import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

export function DarkMode() {
  const { systemTheme, theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <HiOutlineSun className="" role="button" onClick={() => setTheme('light')} />
      )
    }

    else {
      return (
        <HiOutlineMoon className="" role="button" onClick={() => setTheme('dark')} />
      )
    }
  };
  return (
    <div>
      {/* {
      !darkMode ? 
      <HiOutlineSun className="cursor-pointer"
       onClick={()=> setDarkMode(true)} /> 
      : 
      <HiOutlineMoon className="cursor-pointer"
       onClick={()=> setDarkMode(false)} />
      } */}
      {renderThemeChanger()}
    </div>
  )
}