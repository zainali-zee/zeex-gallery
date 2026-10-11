import React, { useEffect } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import { MdOutlineStar } from "react-icons/md";
import { testimonials } from "../data";

export const ReviewCard = () => {

  useEffect(() => {

    const reviewCards = document.querySelectorAll(".review-card");

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }

        });

      },
      {
        threshold: 0.2,
      }
    );

    reviewCards.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();

  }, []);

  return (
    <>
      {testimonials.map((testimonial, index) => {

        return (
          <div
            key={testimonial.id}

            className="
              review-card

              relative
              flex
              lg:w-76
              w-45
              lg:h-80
              sm:w-58
              sm:h-76

              overflow-hidden
              rounded-3xl
              border
              border-slate-800
              bg-cover
              bg-center

              opacity-0
              translate-y-10

              transition-all
              duration-700
              ease-out

              [&.show]:opacity-100
              [&.show]:translate-y-0

              hover:-translate-y-2
              hover:scale-[1.02]
              hover:border-cyan-500/50
            "

            style={{
              backgroundImage: `url(${testimonial.bgImage})`,
              transitionDelay: `${index * 150}ms`,
            }}
          >

            {/* Overlay */}
            <div
              className="
                flex
                flex-col
                w-full
                justify-between
                h-full
                text-white
                bg-gradient-to-b
                p-3
                sm:p-5
                lg:p-6
                from-transparent
                via-black/90
                to-black
              "
            >

              {/* Quote */}
              <RiDoubleQuotesL
                className="
                  text-cyan-500

                  transition-all
                  duration-500

                  hover:scale-110
                "
                size={34}
              />

              {/* Review */}
              <h1
                className="
                  mb-2
                  text-white/80
                  text-xs
                  lg:text-[16px]
                  sm:text-[14px]
                  text-left
                "
              >
                {testimonial.review}
              </h1>

              {/* User */}
              <div className="flex gap-1 items-center justify-between">

                <img
                  className="
                    rounded-full
                    w-14
                    h-14
                    lg:w-20
                    lg:h-20
                    object-cover

                    transition-transform
                    duration-500

                    hover:scale-110
                  "
                  src={testimonial.image}
                  alt={testimonial.name}
                />

                <div className="flex gap-2 text-left flex-col">

                  <h2 className="font-bold sm:text-lg text-xs lg:text-lg">
                    {testimonial.name}
                  </h2>

                  <p className="text-white/70 sm:text-[12px] text-[10px] lg:text-xs">
                    {testimonial.profession}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 text-cyan-500">

                    {Array.from(
                      { length: testimonial.rating },
                      (_, i) => (
                        <div
                          key={i}
                          className="
                            transition-all
                            duration-300
                            hover:scale-125
                          "
                        >
                          <MdOutlineStar size={14} />
                        </div>
                      )
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>
        );

      })}
    </>
  );
};