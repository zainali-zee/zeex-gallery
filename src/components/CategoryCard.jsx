import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Images } from "lucide-react";
import { categories } from "../data";
import { Link } from "react-router-dom";

function CategoryCard() {

    return (
        <>
            {categories.map((cat, index) => (
                <AnimatedCard
                    key={cat.id}
                    cat={cat}
                    index={index}
                />
            ))}
        </>
    );
}


function AnimatedCard({ cat, index }) {

    const cardRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {

        const observer = new IntersectionObserver(
            ([entry]) => {

                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Stop observing after animation happens
                    observer.unobserve(entry.target);
                }

            },
            {
                threshold: 0.15,
            }
        );


        if (cardRef.current) {
            observer.observe(cardRef.current);
        }


        return () => {
            observer.disconnect();
        };

    }, []);


    return (
        <div
            ref={cardRef}
            style={{
                backgroundImage: `url(${cat.image})`,
            }}
            className={` relative flex items-end pt-6 w-full max-w-sm overflow-hidden rounded-3xl border border-slate-800 bg-cover bg-center aspect-[1] transition-all duration-700 ease-out
            ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>

            <div className=" flex h-28 w-full items-end justify-between bg-gradient-to-b from-transparent via-black/80 to-black px-4 pb-4 sm:h-32 sm:px-5 sm:pb-5">

                <div className="flex flex-col gap-1.5 text-white">

                    <h1 className=" text-left text-xl font-semibold sm:text-2xl">
                        {cat.title}
                    </h1>


                    <p className=" flex gap-1 text-left text-lg text-white/70 sm:text-sm">
                        <Images size={16} />

                        {cat.imageCount}
                    </p>

                </div>
                <Link to={`/category/${cat.title.toLowerCase()}`}
                    className=" rounded-full border border-white/20 bg-white/10 p-2 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-400 sm:p-2.5">
                    <ArrowRight size={18} />
                </Link>

            </div>

        </div>
    );
}


export default CategoryCard;