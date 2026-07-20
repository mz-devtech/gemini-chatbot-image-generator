"use client";

import React, { useState } from 'react'
import Link from 'next/link';
import Image from "next/image";
import { CloverIcon, SpiralWaveIcon, NestedDiamondIcon, ScatteredSquaresIcon } from "../Icons/Icons";

const cards = [
    { id: 1, Icon: CloverIcon, title: "Excellent Support" },
    { id: 2, Icon: SpiralWaveIcon, title: "Reliable Experts" },
    { id: 3, Icon: NestedDiamondIcon, title: "Endless Possibilities" },
    { id: 4, Icon: ScatteredSquaresIcon, title: "Unique Technologies" },
];

const WhatWeDo = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <>
            <div className='py-3 lg:py-8 md:py-5'>
                <h6 className='uppercase text-center text-white font-bold text-xl leading-5 tracking-[0.9] opacity-100'>what we do</h6>

                <div
                    className='lg:w-6xl mx-auto relative overflow-hidden'
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                    onMouseMove={handleMouseMove}
                >
                    {/* Cursor-follow circle */}
                    <div
                        className="pointer-events-none absolute rounded-full bg-[#6600ff] blur-2xl transition-opacity duration-300"
                        style={{
                            width: "200px",
                            height: "200px",
                            left: mousePos.x - 100,
                            top: mousePos.y - 100,
                            opacity: isHovering ? 1 : 0,
                        }}
                    />

                    <p className='relative text-white lg:leading-[80px] text-3xl mx-6 lg:mt-9 mt-4 font-bold text-center lg:text-7xl lg:w-full opacity-50 hover:opacity-100 transition-opacity duration-300'>
                        Explore the power of AI development tools, crafted with brilliance, style, quality and creativity.
                    </p>
                </div>

                <h6 className='text-sm  lg:text-3xl text-white font-bold text-center lg:mt-8 mt-3'>Peter Bowman</h6>
                <p className='text-white text-center opacity-50 text-2xl '>
                    Creative Director</p>

                <div className='w-[100%] flex flex-wrap items-stretch justify-center gap-2 mt-5'>
                    {cards.map(({ id, Icon, title }) => (
                        <div
                            key={id}
                            className="group py-16 px-12 flex flex-col items-center justify-center gap-5 bg-[#171a24] hover:bg-[#6600ff] transition-all duration-300 w-full sm:w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(25%-0.6rem)]"
                        >
                            <div className="relative w-28 h-28 rounded-full border-2 border-[#6600ff] group-hover:border-white flex items-center justify-center transition-all duration-300">
                                <Icon className="w-14 h-14 text-[#6600ff] group-hover:text-white transition-all duration-300" />
                            </div>

                            <Link
                                href="#"
                                className="text-white text-center font-bold text-2xl"
                            >
                                {title}
                            </Link>

                            <p className="text-[#a9a7b0] text-xl font-medium text-center opacity-50 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
                                Consectetur adipiscing elit, sed do eiusmod tempo.
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            
        </>
    )
}

export default WhatWeDo