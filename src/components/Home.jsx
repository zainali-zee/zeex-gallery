import { useState } from "react";
import Hero from "./Hero";
import Gallery from "./Gallery";
import "../index.css"



function Home() {
  const [category, setCategory] = useState("nature");

  return (
    <div className="bg-slate-900 min-h-screen w-full">
      <Hero setCategory={setCategory} />
      <Gallery category={category} />


    </div>
  );
}

export default Home;