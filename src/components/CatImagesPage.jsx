import React from "react";
import { useParams } from "react-router-dom";
import GetImages from "./GetImages";
import SectionHeader from "./SectionHeader";
// import { Slice } from "lucide-react";
import { ArrowLeft} from "lucide-react";
import {Link} from "react-router-dom"
// import { ArrowDown } from "lucide-react";

function CatImagesPage() {
  const { cat } = useParams();

  return (
    <div className="w-full bg-slate-950 pt-40 pb-7 px-5 flex flex-col gap-10 justify-center items-center">
      <SectionHeader title={"BROWSE"} subtitle={"Explore the Visuals of "} subtitle2={cat.charAt(0).toUpperCase() + cat.slice(1)} desc={"Curated By ZeeX Gallery"}/>
         <Link to="/categories" className='flex gap-3.5 cursor-pointer active:scale-95 text-cyan-500 px-6 py-4 justify-center items-center bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-full'>
                <ArrowLeft size={18} /> <h1 className='text-white'>Return</h1>
            </Link>
      <GetImages category={cat} />

    </div>
  );
}

export default CatImagesPage; 