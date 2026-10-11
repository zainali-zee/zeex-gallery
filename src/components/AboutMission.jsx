import React from 'react'
import AboutLabel from './AboutLabel';
import AboutBtn from './AboutBtn';
const missionImage ="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=85";
function AboutMission() {
  return (
    <section className="relative px-6 py-24 sm:px-8 lg:px-12">

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="group relative">
          <div className=" absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/20 to-blue-600/10 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />
          <div className=" relative overflow-hidden rounded-3xl border border-cyan-400/30 bg-white/5">
            <img src={missionImage}
              alt="Photographer under the night sky"
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

          </div>

        </div>

        <div>

          <AboutLabel label="Our Mission" />

          <h2 className=" text-3xl font-bold leading-tight sm:text-4xl">
            We Preserve
            <br />
            Moments That{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Matter.
            </span>
          </h2>


          <p className="mt-6 text-sm leading-7 text-slate-400">
            We believe photography is more than capturing an image.
            It's about preserving emotions, experiences, places, and
            stories that deserve to be remembered.
          </p>


          <p className="mt-4 mb-4 text-sm leading-7 text-slate-400">
            Lumina Gallery connects creators with a global audience
            who appreciate authentic visual storytelling. We provide
            the tools, the stage, and the community to help creativity
            thrive.
          </p>
          <AboutBtn text="Learn more about us" />
        </div>

      </div>

    </section>
  )
}

export default AboutMission
