import { useEffect } from "react";
import { cards } from "../data";
import { TrendingUp } from "lucide-react";

function ImpactCard() {

  useEffect(() => {
    const impactCards = document.querySelectorAll(".impact-card");

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

    impactCards.forEach((card) => {
      observer.observe(card);
    });

    return () => observer.disconnect();

  }, []);

  return (
    <>
      {cards.map((cat) => {

        const Icon = cat.icon;

        return (
          <div
            key={cat.id}
            className="impact-card group relative flex w-56 sm:w-66 lg:w-76 lg:h-80 sm:h-76 overflow-hidden rounded-3xl border border-slate-800 opacity-0 translate-y-10 transition-all duration-700 ease-out [&.show]:opacity-100 [&.show]:translate-y-0 hover:-translate-y-3 hover:scale-[1.02] hover:border-cyan-500/50 bg-center"
            style={{
              backgroundImage: `url(${cat.image})`,
            }}>

            <div className=" flex flex-col p-6 w-full h-full justify-end text-white items-center bg-gradient-to-b from-transparent via-black/90 to-black">
              <div className=" text-cyan-500 mb-4 p-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-full transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <Icon size={42} />
              </div>

              <h1 className="text-5xl font-semibold mb-2 sm:text-6xl transition-all duration-50 group-hover:text-cyan-400">
                {cat.count}
              </h1>

              <div className="text-2xl mb-2.5 text-white/70 sm:text-xl">
                {cat.title}
              </div>

              <p className="flex gap-2 text-cyan-500">
                <TrendingUp />
                {cat.percent}

                <span className="text-white/70">
                  this month.
                </span>
              </p>

            </div>

          </div>
        );
      })}
    </>
  );
}

export default ImpactCard;