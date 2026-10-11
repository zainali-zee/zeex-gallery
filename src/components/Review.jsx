import { ReviewBox } from './ReviewBox.jsx';
import { Astroid, ArrowRight, ArrowLeft } from "lucide-react";
import { ReviewCard } from './ReviewCard';
import { RiDoubleQuotesL } from "react-icons/ri"
import SectionHeader from './SectionHeader.jsx';
import { ReviewHeader } from "../data.js";
import { useRef } from 'react';


export const Review = () => {
      const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

    return (
        <section id='reviews' className='w-full pt-40 bg-slate-950 px-5 flex items-center justify-between text-center pb-7 flex-col'>
            <SectionHeader title={ReviewHeader[0].title} subtitle={ReviewHeader[0].subtitle} subtitle2={ReviewHeader[0].subtitle2} desc={ReviewHeader[0].desc} image={ReviewHeader[0].image} />
            <div className='gap-2 pb-8 pt-8 w-full overflow-auto flex flex-nowrap items-center justify-center'>
                <div onClick={scrollLeft} className='h-10 w-10 flex justify-center items-center active:-translate-x-2 rounded-full p-1 border border-white/60'>
                    <ArrowLeft color='white' />
                </div>
                <div ref={containerRef} className="w-full overflow-x-auto scrollbar-hide no-scrollbar">
                    <div className="flex flex-nowrap gap-6 pb-8 pt-8 w-max">
                        <ReviewCard />
                    </div>
                </div>
                <div onClick={scrollRight} className='h-10 w-10 flex justify-center items-center active:translate-x-2 rounded-full p-1 border border-white/60'>
                    <ArrowRight color='white' />
                </div>
            </div>
            <div className="w-full max-w-7xl mx-auto mt-8 px-4">
                <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-8 px-6 py-6 bg-white/[0.02] backdrop-blur-md border border-white/20 rounded-2xl shadow-xl">

                    {/* Left Content */}
                    <div className="flex items-start gap-4 w-full lg:w-auto">
                        <RiDoubleQuotesL
                            className="text-cyan-500 flex-shrink-0 mt-1"
                            size={34}
                        />

                        <div>
                            <p className="text-lg md:text-xl text-left font-medium text-white/90 leading-relaxed">
                                More than just a Gallery.
                                <br />
                                It's a home for your creativity.
                            </p>
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                        <div className="flex flex-wrap justify-start lg:justify-end gap-6">
                            <ReviewBox />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

