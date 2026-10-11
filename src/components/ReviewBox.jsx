// import CountUp from "./CountUp";

import { elements } from "../data";
export const ReviewBox = () => {

  return (
    <>
      {elements.map((elem) => {
        const Icon = elem.icon
  
        return (
          <div key={elem.id} className='flex text-white/90 gap-3.5 px-4 sm:pb-3 text-left py-1.5 lg:border-l justify-center items-center border-white/20'>
            <Icon className='text-cyan-500' size={56} />
            <div>
              <h1 className='font-semibold text-2xl'>{elem.count}</h1>
              <p>{elem.title}</p>
            </div>

          </div>
        )
      }
      )}
    </>
  )
}
