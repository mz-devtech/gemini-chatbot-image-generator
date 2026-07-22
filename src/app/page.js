import Image from "next/image";
import { Navbar } from "./Components/Navbar";
import Hero from "./Components/Hero";
import Buttons from "./Components/Buttons";
import WhatWeDo from "./Components/WhatWeDo";
import AiImage from "./Components/AiImage";
import Welcome from "./Components/Welcome";
import Portfolio from "./Components/Portfolio";
import Subscribe from "./Components/Subscribe";
import { FaQ } from "react-icons/fa6";
import FaqSection from "./Components/Faq";
import Blogs from "./Components/Blogs";
import Gallery from "./Components/Gallery";
import Footer from "./Components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="-translate-16 md:-translate-16 lg:-translate-y-22 z-20">
        <Buttons />

      </div>
      <WhatWeDo />
      <AiImage />
      <Welcome />
      <AiImage />
      <Portfolio />
      <Subscribe />
      <FaqSection />
      <Blogs />
      <Gallery />
      <Footer />

    </>
  );
}
