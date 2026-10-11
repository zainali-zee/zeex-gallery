import React from 'react'
import { Sparkles } from 'lucide-react'

function AboutLabel(elem) {
  return (
    
            <div className="mb-5 flex items-center gap-2">

              <Sparkles size={14} className="text-cyan-400"/>

              <span className=" text-[14px] font-medium uppercase tracking-[0.35em] text-cyan-400">
                {elem.label}
              </span>

            </div>
  )
}

export default AboutLabel
