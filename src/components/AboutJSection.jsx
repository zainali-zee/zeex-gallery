import React from 'react'
import AboutLabel from './AboutLabel'
import { journey } from '../data'

function AboutJSection() {
    return (
        <section className="px-6 py-20 sm:px-8 lg:px-12 flex flex-col justify-center items-center">
            <AboutLabel label="our journey" />
            <div className="relative mx-auto max-w-7xl rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-10">
                <div className=" absolute left-10 right-10 top-[72px] hidden h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent lg:block" />
                <div className=" grid gap-10 lg:grid-cols-5">

                    {journey.map((item, index) => (
                        <div
                            key={item.year}
                            className="relative text-center">
                            <div className=" relative z-10 mx-auto mb-6 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/60 bg-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)]">

                                <div className=" h-2.5 w-2.5 rounded-full bg-cyan-400" />

                            </div>
                            <h3 className={`text-lg font-semibold ${index === journey.length - 1 ? "text-cyan-400" : "text-white"}`}>
                                {item.year}
                            </h3>
                            <h4 className=" mt-4 text-sm font-medium text-slate-200">
                                {item.title}
                            </h4>
                            <p className=" mx-auto mt-3 max-w-[180px] text-xs leading-5 text-slate-500">
                                {item.description}
                            </p>

                        </div>

                    ))}

                </div>
            </div>

        </section>
    )
}

export default AboutJSection
