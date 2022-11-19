import Image from "next/image";



export function Avatar () {

  return(
    <div className=" p-1 flex items-center justify-center rounded-full border-4 border-cyan-500 " >
      <Image  className= 'w-44 h-44 rounded-full '
      src="https:www.github.com/luiszkm.png" alt="" />
    </div>
  )
}