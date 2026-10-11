import React from 'react'
import { Astroid } from "lucide-react";
import Card from "./Card";
import SectionHeader from './SectionHeader.jsx';
import {CollectionHeader} from "../data.js";

function Collection() {

    
    return (
        <section id='collection' className='w-full bg-slate-950 px-5 flex items-center justify-between text-center pt-40 pb-7 flex-col'>
           <SectionHeader title={CollectionHeader[0].title} subtitle={CollectionHeader[0].subtitle} subtitle2={CollectionHeader[0].subtitle2} desc={CollectionHeader[0].desc}/>
            <div className=' gap-6 pb-8 pt-8 items-center justify-center grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'>
                <Card/>
            </div>
            <div className='flex gap-3.5 text-cyan-500 px-6 py-4 justify-center items-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-full'>
                <Astroid size={18} /> <h1 className='text-white'>View All Collections</h1>
            </div>
        </section>

    )
}

export default Collection
