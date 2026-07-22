'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { FaPlay, FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
    {
        question: "What It Takes to Create an Image?",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
    },
    {
        question: "What's the Standard Image Size?",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
    },
    {
        question: "Can I Create Multiple Images at Once?",
        answer: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim."
    },
]

const FaqSection = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index)
    }

    return (
        <div className='flex flex-col lg:flex-row w-[96%] py-5 md:py-7 lg:py-10 mt-16 lg:gap-40 gap-10'>
            {/* Left Image with stat cards */}
            <div className='w-full lg:w-[48%] relative h-[400px] lg:h-[750px] lg:scale-125 mx-auto'>
                <Image
                    src="/assets/img_49.jpg"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    alt="AI Generated"
                />
                <div className='absolute bottom-4 -right-6 lg:bottom-30 lg:-right-8 mx-5 justify-center  flex gap-2 lg:gap-6 rounded-2xl'>
                    <div className='bg-[#6d28ff] lg:px-6 lg:py-8 w-[150px] lg:w-[230px] h-auto p-4'>
                        <h4 className='text-[#fdfdfd]  lg:font-bold text-sm lg:text-xl '>People</h4>
                        <p className='text-[#fdfdfd] font-bold text-3xl lg:text-7xl mt-3'>100+</p>
                        <p className='text-amber-50 text-base mt-2'>Adipiscing elit, do eiusm.</p>
                    </div>
                    <div className='bg-[#161616] lg:px-8 lg:py-8 p-4 w-[150px] lg:w-[230px] h-auto'>
                        <h4 className='text-[#fdfdfd] lg:font-bold text-sm lg:text-lg'>World Offices</h4>
                        <p className='text-[#fdfdfd] font-bold text-3xl lg:text-7xl mt-3'>16</p>
                        <p className='text-[#fdfdfd] text-base mt-2'>Adipiscing elit, do eiusm.</p>
                    </div>
                </div>
            </div>

            {/* Right FAQ content */}
            <div className='w-full lg:w-[46%] relative flex flex-col justify-center'>
                <button
                    type="button"
                    aria-label="Play video"
                    className="
        lg:w-20 lg:h-20
        w-14 h-14
        rounded-full
        bg-white/10 hover:bg-white/20
        transition-colors duration-300
        flex items-center justify-center
        mb-8
        mx-auto lg:mx-0
    "
                >
                    <FaPlay className="text-[#fdfdfd] text-xl ml-1" />
                </button>

                <h2 className='relative text-[#fdfdfd] lg:leading-[80px] mx-5 text-3xl lg:mt-7 mt-3 font-bold lg:text-7xl'>
                    AI Image Generator FAQs
                </h2>

                <div className='flex flex-col'>
                    {faqs.map((faq, index) => {
                        const isActive = activeIndex === index
                        return (
                            <div key={index} className='border-b border-white/20 py-5'>
                                <button
                                    type="button"
                                    onClick={() => toggleFaq(index)}
                                    className='w-full flex items-center gap-0 lg:gap-4 text-left'
                                >
                                    <span className='shrink-0 w-6 h-6 flex items-center justify-center text-[#fdfdfd]'>
                                        {isActive ? <FaMinus /> : <FaPlus />}
                                    </span>
                                    <span className='text-[#fdfdfd] mx-5 font-bold tex-sm lg:text-2xl py-0 lg:py-5'>{faq.question}</span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className='overflow-hidden pl-10'>
                                        <p className='text-[#a9a7b0] text-lg lg:text-2xl font-medium opacity-50 group-hover:opacity-100'>{faq.answer}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>

                {/* Rotating badge */}
                <div className='hidden lg:flex absolute bottom-10 right-6 w-24 h-24 items-center justify-center'>
                    <svg viewBox="0 0 100 100" className='w-full h-full animate-[spin_10s_linear_infinite]'>
                        <defs>
                            <path
                                id="circlePath"
                                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                            />
                        </defs>
                        <text fill="white" fontSize="14" letterSpacing="3">
                            <textPath href="#circlePath" startOffset="0%">
                                START CREATING • START CREATING •
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default FaqSection