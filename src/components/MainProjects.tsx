import Image from "next/image";
import { Button } from "./Button";



export function MainProjects() {

  return (
    <div className="w-full max-w-2xl flex flex-col items-center ">

      <Image className="rounded-t-2xl object-fill w-full h-80" width={265} height={256}
       src="https://portfolioluis.s3.sa-east-1.amazonaws.com/Cover-RocktNotes.png" alt="" />

  <div className="h-1 w-full  bg-gradient-to-tl from-cyan-900 via-cyan-600 to-cyan-200 
   dark:from-purple-800 dark:via-Fuchsia-800 dark:to-pink-700"></div>

      <div className="w-full flex flex-col items-center gap-4 p-3 rounded-b-2xl bg-gradient-to-t from-gray-800 via-gray-400 to-gray-100 
       dark:from-gray-800 dark:to-gray-700 dark:via-gray-800">

        <div>
          <h3 className="font-bold ">RocketNotes</h3>
          <span>Front-End:React | CSS com Styled_components | HTML</span>
          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore porro magni voluptatibus quas ipsam quod quasi, suscipit modi nemo aut alias, ipsum illo illum laborum. Optio dignissimos molestias nam quam.</span>
        </div>
      
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-8">
          <Button PRIMARY />
          <Button />
        </div>
      </div>

    </div>
  )
}