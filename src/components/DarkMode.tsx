import { useState } from "react"


import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'

export function DarkMode() {
  const [darkMode, setDarkMode] = useState(false)

  return (
    <div>
      {
      !darkMode ? 
      <HiOutlineSun className="cursor-pointer"
       onClick={()=> setDarkMode(true)} /> 
      : 
      <HiOutlineMoon className="cursor-pointer"
       onClick={()=> setDarkMode(false)} />
      }
    </div>
  )
}