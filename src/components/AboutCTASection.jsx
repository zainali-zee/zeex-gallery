import React from 'react'
import ExploreGbtn from './ExploreGbtn'
import AboutBtn from './AboutBtn'
const ctaImage ="https://plus.unsplash.com/premium_photo-1686157758105-b100bd44945c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

function AboutCTASection() {
  return (
 
      <section className="px-6 py-20 sm:px-8 lg:px-12">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl border border-white/10">

          <img
            src={ctaImage}
            alt="Creative landscape"
            className="
              absolute inset-0
              h-full w-full
              object-cover
            "
          />
          <div
            className="
              absolute inset-0
              bg-slate-950/75
              backdrop-blur-[1px]
            "
          />
          <div
            className="
              absolute inset-0
              bg-gradient-to-r
              from-slate-950/95
              via-slate-950/60
              to-slate-950/30
            "
          />

          <div
            className="
              relative z-10
              flex flex-col
              gap-8
              px-7 py-12
              lg:flex-row
              lg:items-center
              lg:justify-between
              lg:px-12
            "
          >

            <div>

              <p className="text-sm text-slate-300">
                Join Our Creative Community
              </p>


              <h2 className=" mt-3 text-3xl font-bold sm:text-4xl">
                Your Vision Deserves to Be{" "}
                <span className=" bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Seen.
                </span>

              </h2>


              <p className=" mt-4 max-w-lg text-sm leading-6 text-slate-400">
                Whether you're a photographer, explorer,
                or dreamer, there's a place for you here.
              </p>

            </div>

            <div className=" flex shrink-0 flex-col items-start gap-4">
              <ExploreGbtn />
              <AboutBtn text="Become a Creator" />
            </div>


          </div>
        </div>
</section>


  )
}

export default AboutCTASection
