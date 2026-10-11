import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Collection from "./components/Collection"
import Categories from "./components/Categories";
import { Review } from "./components/Review"
import { Navbar } from "./components/Navbar";
import Impact from "./components/Impact";
import Footer from "./components/Footer"
import CatImagesPage from "./components/CatImagesPage";
import About from "./components/About";
// import ZoomImage from "./components/ZoomImage";

function App() {
  return (
    <>
      {/* <ZoomImage/> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/category/:cat" element={<CatImagesPage />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/reviews" element={<Review />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App; 