import React from 'react'
import { Sparkles } from "lucide-react";
import { CategoryHeader } from "../data";

function SectionHeader(elem) {
  return (
    <div className='relative py-6 flex rounded-xl w-full flex-col object-cover hover:scale-[1.01] transition-all duration-800 gap-5 overflow-hidden'>
      <div className="pointer-events-none absolute inset-12 rounded-xl bg-cyan-400 blur-3xl" />
      <img
        src={elem.image}
        alt="Creative landscape"
        className=" absolute inset-0 h-full w-full object-cover" />

      <div className=" absolute inset-0 bg-slate-950/70 backdrop-blur-[5px]" />
      <div className=" absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-slate-950/50" />
      <div className='relative z-20 flex items-center px-4 py-2 flex-col gap-3'>
        <div className='text-cyan-500 flex items-center justify-center gap-2'>
          <Sparkles size={14} className="text-cyan-400" />
          <h1 className='text-[14px] font-medium uppercase tracking-[0.35em] text-cyan-400'>{elem.title}</h1>
        </div>
        <h1 className='text-white lg:text-6xl md:text-6xl sm:text-5xl text-4xl font-semibold'>{elem.subtitle}<span className='bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 bg-clip-text text-transparent '>{elem.subtitle2}</span></h1>
        <p className='text-white/60 text-center'>{elem.desc}</p>
      </div>
    </div>
  )
}

export default SectionHeader  
