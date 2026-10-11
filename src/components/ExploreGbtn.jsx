import React from 'react'
import { ArrowRight } from 'lucide-react'

function ExploreGbtn() {
  return (
            <button className="group flex min-w-[210px] items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-7 py-3.5 text-sm font-medium shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300 hover:scale-105">
                Explore Gallery
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/>
              </button>
  )
}

export default ExploreGbtn
