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
        <div className='flex flex-col lg:flex-row w-full'>
            {/* Left Image with stat cards */}
            <div className='w-full lg:w-1/2 relative h-[400px] lg:h-[650px]'>
                <Image
                    src="/assets/img_49.jpg"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    alt="AI Generated"
                />
                <div className='absolute bottom-8 left-8 flex'>
                    <div className='bg-[#6d28ff] px-8 py-6 w-[220px]'>
                        <h4 className='text-white font-bold text-lg'>People</h4>
                        <p className='text-white font-bold text-4xl mt-3'>100+</p>
                        <p className='text-white/80 text-sm mt-2'>Adipiscing elit, do eiusm.</p>
                    </div>
                    <div className='bg-[#161616] px-8 py-6 w-[220px]'>
                        <h4 className='text-white font-bold text-lg'>World Offices</h4>
                        <p className='text-white font-bold text-4xl mt-3'>16</p>
                        <p className='text-white/80 text-sm mt-2'>Adipiscing elit, do eiusm.</p>
                    </div>
                </div>
            </div>

            {/* Right FAQ content */}
            <div className='w-full lg:w-1/2 relative px-6 py-10 lg:py-0 lg:pl-16 flex flex-col justify-center'>
                <button
                    type="button"
                    aria-label="Play video"
                    className='w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center mb-8'
                >
                    <FaPlay className='text-white text-sm ml-1' />
                </button>

                <h2 className='text-white font-bold text-4xl lg:text-5xl mb-8'>
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
                                    className='w-full flex items-center gap-4 text-left'
                                >
                                    <span className='shrink-0 w-6 h-6 flex items-center justify-center text-white'>
                                        {isActive ? <FaMinus /> : <FaPlus />}
                                    </span>
                                    <span className='text-white font-bold text-lg'>{faq.question}</span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isActive ? 'grid-rows-[1fr] opacity-100 mt-3' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className='overflow-hidden pl-10'>
                                        <p className='text-[#a9a7b0] text-base'>{faq.answer}</p>
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
                        <text fill="white" fontSize="9" letterSpacing="2">
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