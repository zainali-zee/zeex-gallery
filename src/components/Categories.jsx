import React, { useState } from 'react'

import Card from "./Card";
import Boxes from './Boxes'
import CategoryCard from './CategoryCard';
import SectionHeader from './SectionHeader.jsx';
import { CategoryHeader } from "../data.js";
// import { data, Outlet } from 'react-router-dom';

function Categories() {

    return (

        <section id='categories' className='w-full pt-40 bg-slate-950 px-5 flex items-center justify-between text-center pb-7 flex-col'>
            <div className='w-[80vw]'>
                <SectionHeader title={CategoryHeader[0].title} subtitle={CategoryHeader[0].subtitle} subtitle2={CategoryHeader[0].subtitle2} desc={CategoryHeader[0].desc} image={CategoryHeader[0].image} />
                <div className=' gap-6 pb-8 pt-8 flex flex-wrap items-center justify-center'>
                    <CategoryCard />
                    {/* {console.log(message)} */}
                </div>
                {/* <Outlet/> */}
            </div>
        </section>

    )
}

export default Categories
