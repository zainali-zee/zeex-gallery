import React from 'react'
import { ChevronRight } from 'lucide-react'
function AboutBtn(elem) {
  return (
    <button className=" group flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/5">
             {elem.text}
                <ChevronRight size={16} className=" transition-transform duration-300 group-hover:translate-x-1"/>

              </button>
  )
}

export default AboutBtn
