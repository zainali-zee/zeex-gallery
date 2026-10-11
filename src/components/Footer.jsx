import React from "react";
import {
  Heart,
  Copyright,
  Astroid,
  ChevronDown,
  ArrowUp,
  Moon,
} from "lucide-react";
import { Link } from "react-router-dom";

import SocialLink from "./SocialLink";

function Footer() {
  return (
    <footer className="w-full bg-slate-900 border-t border-white/10 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

          {/* Left */}

          <div className="space-y-8">

            <div>
              <h1 className="text-4xl font-bold text-cyan-500 leading-none">
                ZeeX
              </h1>

              <p className="tracking-[0.25em] text-white/60 font-semibold text-sm mt-1">
                GALLERY
              </p>
            </div>

            <p className="text-white/60 leading-8 max-w-sm">
              A premium photography gallery for creators and dreamers.
              <br />
              Discover. Inspire. Share.
            </p>

            <div className="flex gap-4 flex-wrap">
              <SocialLink />
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 w-fit">
              <Astroid
                size={22}
                className="text-cyan-500 shrink-0 mt-1"
              />

              <p className="text-white/60 text-sm leading-6">
                Made for photographers.
                <br />
                Built for everyone.
              </p>
            </div>
          </div>


          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">

            <div>
              <h3 className="font-semibold text-white mb-5 tracking-wide">
                EXPLORE
              </h3>

              <ul className="space-y-3 text-white/60 flex flex-col">
                <Link to="/" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >Home</Link>
                <Link to="/categories" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >Categories</Link>
                <Link to="/impact" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >Impact</Link>
                <Link to="/reviews" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >Reviews</Link>
                 <Link to="/about" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >About Us</Link>
              </ul>
            </div>

            {/* Community */}

            <div>
              <h3 className="font-semibold text-white mb-5 tracking-wide">
                COMMUNITY
              </h3>

              <ul className="space-y-3 text-white/60">
                {[
                  "Creators",
                  "Leaderboards",
                  "Challenges",
                  "Forums",
                  "Blog",
                  "Events",
                  "Shop",
                ].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}

            <div>
              <h3 className="font-semibold text-white mb-5 tracking-wide">
                COMPANY
              </h3>

              <ul className="space-y-3 text-white/60">
                {[
                  "About Us",
                  "Careers",
                  "Press Kit",
                  "Partners",
                  "Contact",
                  "Terms of Service",
                  "Privacy Policy",
                ].map((item) => (
                  <li
                    key={item}
                    className="cursor-pointer hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10 my-12"></div>

        {/* =================== BOTTOM =================== */}

        <div className="flex flex-col xl:flex-row items-center justify-between gap-8">

          <div className="flex flex-col md:flex-row items-center gap-6 text-white/60 text-sm text-center md:text-left">

            <p className="flex items-center gap-2">
              <Copyright size={16} />
              {new Date().getFullYear()} ZeeX Gallery. All rights reserved.
            </p>

            <p className="flex items-center gap-2">
              <Heart
                size={16}
                className="text-cyan-500 fill-cyan-500"
              />
              Proudly supporting creators worldwide.
            </p>

          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">

            <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all">
              English
              <ChevronDown size={18} />
            </button>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all"
            >
              <ArrowUp size={18} />
              Back to Top
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;