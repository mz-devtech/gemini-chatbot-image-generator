import Image from "next/image";
import { Navbar } from "./Components/Navbar";
import Hero from "./Components/Hero";
import Buttons from "./Components/Buttons";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="-translate-16 md:-translate-16 lg:-translate-y-22 z-20">
        <Buttons />

      </div>
    </>
  );
}
