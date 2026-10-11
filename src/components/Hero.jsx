import React, { useState } from "react";
import { Astroid, Search, ArrowRight } from "lucide-react";
import Boxes from "./Boxes";
import { ChevronRight } from "lucide-react";
import SearchBar from "./SearchBar";

function Hero({ setCategory }) {

    return (
        <section id="home" className='relative min-h-screen overflow-hidden'>
            {/* Background */}
            <div
                className='absolute inset-0 bg-cover bg-center bg-no-repeat'
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1509565840034-3c385bbe6451?q=80&w=1632&auto=format&fit=crop")',
                }}
            />

            {/* Overlay */}
            <div className='absolute inset-0 bg-slate-950/70'></div>

            {/* Content */}
            <div className='mt-50 relative z-10 flex flex-col items-center justify-center px-6 text-center text-white'>

                {/* Badge */}
                <div className='mb-6 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs backdrop-blur-md shadow-xl sm:text-sm'>
                    <Astroid size={16} />
                    <p>EXPLORE. INSPIRE. CREATE.</p>
                </div>

                {/* Heading */}
                <h1 className='text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-7xl'>
                    Discover{" "}
                    <span className="bg-gradient-to-r from-blue-700 via-sky-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
                        Beautiful
                    </span>
                    <br />
                    Photography
                </h1>

                {/* Description */}
                <p className='mt-6 max-w-3xl px-4 text-sm leading-relaxed text-white/70 sm:text-base md:text-lg'>
                    Explore millions of high-quality images from talented photographers
                    around the world. Find the perfect shot for your next project.
                </p>
                <SearchBar/>

                {/* Categories */}
                <div className='mt-8 w-full max-w-6xl flex gap-3 flex-wrap justify-center '>

                    <Boxes setCategory={setCategory} />


                </div>


            </div>
        </section>
    );
}

export default Hero;