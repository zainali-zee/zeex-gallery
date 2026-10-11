import { Search, Moon, Menu, Briefcase, ArrowRight, BriefcaseBusiness } from "lucide-react";
import Logo from "../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    const [first, setfirst] = useState(false)
    const showMenu = () => {
        setfirst(!first)
    }
    const [showSearch, setshowSearch] = useState(false)
    const showSearchfun = () => {
        setshowSearch(!showSearch)
    }
    return (
        <div className="relative">
            <div className='fixed top-5 inset-x-4 z-50 flex justify-between items-center px-8 py-5 text-white bg-black/10 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl'>

                <div className='flex gap-3 justify-center items-center'>
                    <Link to="/" className='flex flex-col'>
                        <h1 className="text-2xl font-bold leading-none tracking-tight bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">ZeeX</h1>
                        <p className="text-[10px] tracking-[0.2em] text-white/60 font-semibold mt-0.5">GALLERY</p>
                    </Link>
                </div>


                <div className='hidden px-4 lg:flex justify-between items-center w-2xl text-base font-medium text-white/80'>
                    <Link to="/" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >Home</Link>
                    <Link to="/categories" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >Categories</Link>
                    <Link to="/impact" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >Impact</Link>
                    <Link to="/reviews" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >Reviews</Link>
                    <Link to="/about" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >About Us</Link>
                </div>

        


                <div className='flex gap-3 items-center relative'>
                    <a href="https://zainali-portfoliosite.netlify.app/" target="_blank" className='lg:flex hidden active:scale-92 items-center justify-center w-11 h-11 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-200 cursor-pointer'>
                        <BriefcaseBusiness size={18} />
                    </a>
                    <button onClick={showMenu} className='lg:hidden flex active:scale-92 items-center justify-center w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-white/20 transition-all duration-200 cursor-pointer'>
                        <Menu size={18} />
                    </button>
                </div>
            </div>
            <div className={`${first ? "block" : "hidden"} fixed top-30 z-50 lg:hidden pt-4 pb-0 flex flex-col gap-3 items-center inset-x-4 text-base font-medium text-white/80  bg-black/20 backdrop-blur-md border border-white/20 shadow-xl rounded-3xl`}>
                <Link to="/" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" href="#home">Home</Link>
                <Link to="/categories" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >Categories</Link>
                <Link to="/impact" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >Impact</Link>
                <Link to="/reviews" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >Reviews</Link>
                <Link to="/about" className="hover:text-cyan-400 active:scale-95 transition-colors duration-200" >About Us</Link>
                   <a className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-7 py-3.5 text-sm font-medium shadow-[0_0_35px_rgba(34,211,238,0.25)] transition-all duration-300 hover:scale-105"
                   href="https://zainali-portfoliosite.netlify.app/" target="_blank">
                My Portfolio
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1"/>
              </a>
                <div className="flex relative">
                 
                </div>
            </div>
        </div>
    )
}
