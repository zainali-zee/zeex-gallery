import React from 'react'
import heroImage from "../assets/about.png"
import AboutLabel from "./AboutLabel";
import ExploreGbtn from "./ExploreGbtn";
import AboutBtn from "./AboutBtn";

function AboutHero() {
  return (
   <section className="relative flex min-h-[720px] items-center overflow-hidden">
        <div className="absolute inset-0">

          <img
            src={heroImage}
            alt="Photographer exploring the mountains"
            className="h-full w-full object-cover scale-150"/>

          <div className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/60  to-slate-600/1" />

        </div>
        <div className=" relative z-10 mx-auto w-full max-w-7xl px-6 pb-20 pt-32 sm:px-8 lg:px-12">

          <div className="max-w-2xl">

            <AboutLabel label="Our Story" />
            <h1 className=" text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              More Than Just a Gallery.

              <br />

              A Home for Visual{" "}

              <span className=" bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Creativity.
              </span>

            </h1>

            <p className=" mt-6 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
              Lumina Gallery is a creative space where photographers,
              explorers, and visual storytellers come together to
              discover, share, and inspire.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <ExploreGbtn />

              <AboutBtn text="Meet Our Creators" />

            </div>

          </div>

        </div>

      </section>
  )
}

export default AboutHero
