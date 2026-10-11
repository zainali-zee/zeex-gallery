import React from 'react'
import { Images, ArrowRight } from "lucide-react";
import { featuredCollections } from "../data";
function Card() {
  return (
    <>
    {featuredCollections.map((coll)=> {
        return(
              <div
    key={coll.id}
    className="relative  flex flex-col justify-between pt-6 w-full max-w-sm overflow-hidden rounded-3xl border border-slate-800 bg-cover bg-center aspect-[3/4]"
    style={{ backgroundImage: `url(${coll.image})` }}>
    <div className="flex items-center w-fit ml-6 gap-2 rounded-full border border-white/20 bg-white/10 px-2.5 py-1.5 sm:px-3 sm:py-2 text-xs text-white backdrop-blur-md">
        <Images size={16} />
        {coll.totalPhotos} Photos
    </div>
        
    <div className="flex h-28 w-full items-end justify-between bg-gradient-to-b from-transparent via-black/80 to-black px-4 pb-4 sm:h-32 sm:px-5 sm:pb-5">
        <div className="text-white">
            <h1 className="text-xl font-semibold sm:text-2xl text-left">{coll.title}</h1>

            <p className="text-xs text-left text-white/70 sm:text-sm">
                {coll.description}
            </p>
        </div>

        <button className="rounded-full text-white border border-white/20 bg-white/10 p-2 backdrop-blur-md sm:p-2.5">
            <ArrowRight size={18} />
        </button>
    </div>
</div>
        )
    })}
    
    </>
  
  )
}

export default Card
