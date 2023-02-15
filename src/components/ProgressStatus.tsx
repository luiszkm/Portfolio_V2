import { useEffect, useState } from "react"




export function ProgressStatus() {
  const [progress, setProgress] = useState(1340)
  if (progress === 70) {
    setProgress(70)
  }

  let initialProgress = 1240
  

 
  
  async function handleSetProgressBar(progressValue: number) {
    setProgress(1340)
    let stop = 0
    const startProgress = setInterval(() => {
      setProgress(preState => preState + 10)
      console.log(progress);
      stop += 10
      stop === progressValue && clearInterval(startProgress)
    },10)
    
   
  }

  useEffect(() => {

  },[])
  return (
    <section className=" w-full flex flex-col  sm:flex-row sm:px-6 items-center gap-20">
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => handleSetProgressBar(400)}
        >Html</button>
        <button
          onClick={() => handleSetProgressBar(500)}
        >CSS</button>
        <button
          onClick={() => handleSetProgressBar(600)}
        >JS</button>
        <button
          onClick={() => handleSetProgressBar(650)}
        >TS</button>
   
      </div>

      <div className=" flex items-center w-full justify-center ">
        <svg className="transform -rotate-90 w-72 h-72 ">
          <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent"
            className="text-gray-700" />

          <circle cx="145" cy="145" r="120" stroke="currentColor" stroke-width="30" fill="transparent"
            stroke-dasharray={progress}
            stroke-dashoffset={initialProgress}
            className="text-blue-800" />
        </svg>
        <span className="absolute text-5xl" x-text="`${currentSkill.percent}%`">20%</span>


      </div>
    </section>
  )
}