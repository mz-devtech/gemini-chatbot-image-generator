'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export const Carousel = ({ images }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length)
        }, 3500)
        return () => clearInterval(timer)
    }, [images.length])

    const goTo = (e, i) => {
        e.preventDefault()
        e.stopPropagation()
        setIndex(i)
    }
    const prev = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIndex((i) => (i - 1 + images.length) % images.length)
    }
    const next = (e) => {
        e.preventDefault()
        e.stopPropagation()
        setIndex((i) => (i + 1) % images.length)
    }

    return (
        <div className='relative w-full h-[240px] lg:h-[530px] overflow-hidden'>
            {images.map((img, i) => (
                <Image
                    key={i}
                    src={img}
                    alt=''
                    fill
                    className={`object-cover transition-opacity duration-700 ${
                        i === index ? 'opacity-100' : 'opacity-0'
                    }`}
                />
            ))}
            <button
                onClick={prev}
                className='absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-14 lg:h-14 rounded-xl bg-black/70 hover:bg-black flex items-center justify-center text-white transition-colors duration-300 z-10'
            >
                ←
            </button>
            <button
                onClick={next}
                className='absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-11 h-11 lg:w-14 lg:h-14 rounded-xl bg-black/70 hover:bg-black flex items-center justify-center text-white transition-colors duration-300 z-10'
            >
                →
            </button>
            <div className='absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-10'>
                {images.map((_, i) => (
                    <button
                        key={i}
                        onClick={(e) => goTo(e, i)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                            i === index ? 'bg-[#5ec900]' : 'bg-white/40'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}

export const VideoBlock = ({ image, title }) => (
    <div className='relative w-full h-[240px] lg:h-[530px] overflow-hidden'>
        <Image
            src={image}
            alt={title}
            fill
            className='object-cover group-hover:scale-105 transition-transform duration-500'
        />
        <div className='absolute inset-0 flex items-center justify-center'>
            <div className='w-16 h-16 lg:w-24 lg:h-24 rounded-full bg-white/95 flex items-center justify-center group-hover:scale-110 transition-transform duration-300'>
                <svg className='ml-1' width='22' height='26' viewBox='0 0 22 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path d='M21 13L0.75 25.0574L0.75 0.942602L21 13Z' fill='#0a0a0f' />
                </svg>
            </div>
        </div>
    </div>
)

export const AudioBlock = ({ author, title }) => (
    <div className='w-full bg-[#0d111a] border border-[#0d111a] px-6 py-8 lg:px-10 lg:py-20'>
        <p className='text-[#fdfdfd] text-sm lg:text-lg font-semibold tracking-widest uppercase mb-3'>
            {author}
        </p>
        <h2 className='text-[#fdfdfd] text-2xl lg:text-5xl font-bold mb-8 lg:mb-10'>
            {title}
        </h2>
        <div className='flex items-center gap-3 lg:gap-5'>
            <button className='w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#3a3942] flex items-center justify-center text-white flex-shrink-0 hover:bg-[#3a3942] transition-colors duration-300'>
                <svg width='20' height='20' viewBox='0 0 14 16' fill='none'>
                    <path d='M13 8L0.25 15.0622L0.25 0.937822L13 8Z' fill='white' />
                </svg>
            </button>
            <span className='text-[#74727b] text-sm lg:text-base'>00:00</span>
            <div className='flex-1 h-[2px] bg-[#2a2930] rounded-full' />
            <span className='text-[#74727b] text-sm lg:text-base'>00:00</span>
            <button className='w-9 h-9 lg:w-14 lg:h-14 rounded-full border border-[#3a3942] flex items-center justify-center text-white flex-shrink-0 hover:bg-[#3a3942] transition-colors duration-300'>
                <svg width='22' height='22' viewBox='0 0 24 24' fill='white'>
                    <path d='M3 9v6h4l5 5V4L7 9H3z' />
                </svg>
            </button>
            <div className='w-20 h-[6px] bg-[#5ec900] hidden lg:block' />
        </div>
    </div>
)

export const QuoteBlock = ({ quote }) => (
    <div className='w-full bg-[#0d111a] border-l-4 border-[#6c3ef4] px-8 py-8 lg:px-10 lg:py-12'>
        <span className='text-[#6c3ef4] text-4xl lg:text-5xl font-bold leading-none'>&ldquo;</span>
        <p className='text-[#fdfdfd] text-xl lg:text-2xl font-medium leading-relaxed mt-2'>
            {quote}
        </p>
    </div>
)

export const ReadMore = () => (
    <div className='lg:mt-6 mt-4 inline-flex items-center gap-3 w-fit'>
        <span className='max-w-0 group-hover:max-w-[140px] overflow-hidden whitespace-nowrap transition-all duration-500 text-[#fdfdfd] text-lg lg:text-xl font-semibold'>
            Read More
        </span>
        <svg
            className='group-hover:translate-x-2 transition-transform duration-300 flex-shrink-0'
            width='34' height='14' viewBox='0 0 34 14' fill='none' xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M33.7071 7.70711C34.0976 7.31658 34.0976 6.68342 33.7071 6.29289L27.3431 -0.0710678C26.9526 -0.461592 26.3195 -0.461592 25.9289 -0.0710678C25.5384 0.319458 25.5384 0.952623 25.9289 1.34315L31.5858 7L25.9289 12.6569C25.5384 13.0474 25.5384 13.6805 25.9289 14.0711C26.3195 14.4616 26.9526 14.4616 27.3431 14.0711L33.7071 7.70711ZM0 8H33V6H0V8Z'
                fill='#fdfdfd'
            />
        </svg>
    </div>
)