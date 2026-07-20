"use client";

import React from "react";
import { Navbar } from "./Navbar";
import Image from "next/image";
import styles from "../Hero.module.css";

const images = [
  "/assets/img_5.jpg",
  "/assets/img_42.jpg",
  "/assets/img_49.jpg",
  "/assets/img_52.jpg",
  "/assets/img_56.jpg",
  "/assets/img_77.jpg",
  "/assets/img_78.jpg",
  "/assets/img_79.jpg",
];
// duplicated so the loop is seamless
const loopImages = [...images, ...images];

const Hero = () => {
  return (
    <div className="relative h-screen lg:h-screen  overflow-hidden pb-40">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/assets/video-main-bg.mp4" type="video/mp4" />
      </video>

      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full items-center flex z-20">
        <div className="px-4 lg:px-30">
          <h1 className=" font-bold lg:leading-32 text-6xl  lg:text-[126px] md:text-7xl  text-white">
            <span className="block">Generate</span>
            <span className="block">AI Images & Text</span>

            <span className="flex flex-wrap items-end gap-4">
              <span>In</span>

              <span className="relative w-30 h-10 sm:w-52 sm:h-16 md:w-64 md:h-20 lg:w-72 lg:h-24 xl:w-80 xl:h-28">
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

      {/* Diagonal image cascade - continuous vertical marquee */}
      <div
        className={`absolute -right-4  lg:right-32 md:right-16 top-1/2 -translate-y-1/2 z-10 h-screen lg:h-auto
                    rotate-[-30deg] ${styles.marqueeWrapper}`}
      >
        <div className={styles.marqueeTrack}>
          {loopImages.map((image, index) => (
            <div
              key={index}
              className="relative w-[150px] h-[170px] md:w-[300px] md:h-[350px] lg:w-[470px] lg:h-[500px] overflow-hidden shrink-0"
            >
              <Image
                src={image}
                alt={`Image ${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;