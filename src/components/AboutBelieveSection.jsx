import React from 'react'
import { values } from '../data';
import AboutLabel from './AboutLabel';
export default function AboutBelieveSection() {
  return (
  <section className="relative px-6 py-20 sm:px-8 lg:px-12 flex items-center justify-center flex-col">
        <AboutLabel label="what we believe" />


        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className=" group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.03]">
                <div className=" absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-400/10 blur-3xl opacity-0 transition-opacity group-hover:opacity-100"/>
                <div className="relative flex gap-5">
                  <div className=" flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 transition-all duration-500 group-hover:border-cyan-400/30 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]">
                    <Icon size={25} strokeWidth={1.5} className="text-cyan-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className=" text-sm font-medium text-cyan-400">
                        {item.number}
                      </span>
                      <h3 className="text-lg font-semibold">
                        {item.title}
                      </h3>
                    </div>
                    <p className=" mt-3 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>
                    <div className=" mt-4 h-px w-8 bg-cyan-400/60"/>
                  </div>
                </div>

              </div>

            );

          })}

        </div>

      </section>


  )
}
