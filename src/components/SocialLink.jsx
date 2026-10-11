import React from 'react'
import { social } from '../data'
function SocialLink() {
    return (
        <>
        {social.map((soc) => {
                const Icon = soc.icon
                return (
                    <a href={soc.link} target='_blank' key={soc.id} className='hover:bg-cyan-400 active:scale-95 transition-colors duration-200 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-full h-12 w-12 flex items-center justify-center'>
                        <Icon size={24} />
                    </a>
                )
            })
        }
</>
    )
}

export default SocialLink
