import React from "react";
import { Navbar } from "./Navbar";
import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative h-screen ">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/assets/video-main-bg.mp4" type="video/mp4" />
            </video>

            <div className="relative z-10">
                <Navbar />

            </div>

            {/* Hero Content */}
            <div className="relative z-10 h-full ">
               <h1 className="font-bold leading-[0.9] tracking-[-3px] text-[clamp(3.5rem,8vw,106px)] text-white">
  <span className="block">Generate Amazing</span>

  <span className="block">
    Images and Intelligent
  </span>

  <span className="flex flex-wrap items-end gap-4">
    <span>Text with AI</span>

    <span className="relative w-40 h-14 sm:w-52 sm:h-16 md:w-64 md:h-20 lg:w-72 lg:h-24 xl:w-80 xl:h-28">
      <Image
        src="/assets/future.png"
        alt="Future"
        fill
        className="object-contain"
      />
    </span>
  </span>
</h1>
            </div>
        </div>
    );
};

export default Hero;