import React from 'react'
import { Astroid, ShieldCheck } from "lucide-react";
import ImpactCard from './ImpactCard';
import SectionHeader from './SectionHeader.jsx';
import { ImpactHeader } from "../data.js";

function Impact() {
    return (
        <section id='impact' className='w-full pt-40 bg-slate-950 px-5 flex items-center justify-between text-center pb-7 flex-col'>
            <div>
                {console.log(ImpactHeader[0].image)
                }
                <SectionHeader title={ImpactHeader[0].title} subtitle={ImpactHeader[0].subtitle} subtitle2={ImpactHeader[0].subtitle2} desc={ImpactHeader[0].desc} image={ImpactHeader[0].image} />
                <div className=' gap-6 pb-8 pt-8 items-center justify-center flex flex-wrap'>
                    <ImpactCard />
                </div>
                <div className='flex gap-2 justify-center text-white mt-2.5'>
                    <ShieldCheck size={26} color='cyan' />
                    <p>Trusted by Photographers and creators worldwide</p>
                </div>
            </div>
        </section>
    )
}

export default Impact
