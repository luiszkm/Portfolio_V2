import Image from "next/image";
import { Button } from "./Button";



export function MainProjects() {

  return (
    <div className="w-full max-w-xl  flex flex-col items-center ">

      <Image className="rounded-t-2xl w-full h-64" width={265} height={256}
       src="https://portfolioluis.s3.sa-east-1.amazonaws.com/Cover-RocktNotes.png" alt="" />


      <div className="w-full flex flex-col items-center gap-4 p-3 border-black border-2 rounded-b-2xl">

        <div>
          <h3 className="font-bold">RocketNotes</h3>
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