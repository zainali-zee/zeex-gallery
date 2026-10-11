import React from "react";
import { ArrowRight, Camera, Heart, Sparkles, ChevronRight } from "lucide-react";
import { journey, values } from "../data";
import AboutHero from "./AboutHero";
import AboutCTASection from "./AboutCTASection";
import AboutLabel from "./AboutLabel";
import AboutBtn from "./AboutBtn";
import AboutMission from "./AboutMission";
import AboutBelieveSection from "./AboutBelieveSection";
import AboutJSection from "./AboutJSection";



function About() {

  return (

    <div className="min-h-screen overflow-hidden bg-slate-950 text-white">

      <AboutHero />

      <AboutMission />

      <AboutBelieveSection />

      <AboutJSection/>
      
      <AboutCTASection />


    </div>
  );
}


export default About;