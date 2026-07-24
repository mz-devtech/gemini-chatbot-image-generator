'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPaperPlane,
} from 'react-icons/fa'

const getTimeLeft = (target) => {
    const diff = Math.max(target - Date.now(), 0)
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    }
}

const socials = [
    { icon: FaFacebookF, label: 'Facebook' },
    { icon: FaTwitter, label: 'Twitter' },
    { icon: FaInstagram, label: 'Instagram' },
    { icon: FaLinkedinIn, label: 'LinkedIn' },
]

const ComingSoon = () => {
    const [target] = useState(() => Date.now() + 12 * 24 * 60 * 60 * 1000)
    const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(target))
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000)
        return () => clearInterval(timer)
    }, [target])

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    const units = [
        { label: 'Days', value: timeLeft.days },
        { label: 'Hours', value: timeLeft.hours },
        { label: 'Minutes', value: timeLeft.minutes },
        { label: 'Seconds', value: timeLeft.seconds },
    ]

    return (
        <div className='min-h-screen flex flex-col items-center justify-center text-center px-6 py-10'>
            <Link href='/' className='text-[#fdfdfd] text-3xl lg:text-4xl font-bold mb-10 lg:mb-14'>
                ANN
            </Link>

            <p className='text-[#74727b] uppercase tracking-widest text-sm lg:text-base font-semibold mb-4'>
                Launching Soon
            </p>

            <h1 className='text-[#fdfdfd] text-4xl lg:text-7xl font-bold leading-tight lg:leading-[80px] max-w-3xl'>
                Something <span className='text-[#6c3ef4]'>Big</span> Is Coming
            </h1>

            <p className='text-[#a9a7b0] text-lg lg:text-xl font-medium mt-6 max-w-xl'>
                We&apos;re working hard to launch our brand new site. Leave your
                email below and we&apos;ll let you know the moment we go live.
            </p>

            {/* Countdown */}
            <div className='grid grid-cols-4 gap-4 lg:gap-8 mt-12 lg:mt-16'>
                {units.map(({ label, value }, i) => (
                    <div
                        key={i}
                        className='bg-[#0e0d14] border border-[#232229] rounded-2xl px-4 py-6 lg:px-10 lg:py-10 min-w-[70px] lg:min-w-[140px]'
                    >
                        <p className='text-[#fdfdfd] text-3xl lg:text-6xl font-bold'>
                            {String(value).padStart(2, '0')}
                        </p>
                        <p className='text-[#74727b] text-xs lg:text-base font-medium mt-2 uppercase tracking-wide'>
                            {label}
                        </p>
                    </div>
                ))}
            </div>

            {/* Notify form */}
            <div className='w-full max-w-md mt-14 lg:mt-16'>
                {submitted ? (
                    <p className='text-[#5ec900] text-lg lg:text-xl font-semibold'>
                        Thanks — we&apos;ll notify you at launch!
                    </p>
                ) : (
                    <form
                        onSubmit={handleSubmit}
                        className='flex items-center gap-3 bg-[#0e0d14] border border-[#232229] rounded-full pl-6 pr-2 py-2 focus-within:border-[#5ec900] transition-colors duration-300'
                    >
                        <input
                            type='email'
                            required
                            placeholder='Email Address'
                            className='w-full bg-transparent outline-none text-[#fdfdfd] placeholder:text-[#74727b] text-base lg:text-lg'
                        />
                        <button
                            type='submit'
                            className='flex items-center gap-2 bg-[#6c3ef4] hover:bg-[#5b2fe0] transition-colors duration-300 text-white font-semibold rounded-full px-6 py-3 text-sm lg:text-base flex-shrink-0'
                        >
                            <FaPaperPlane size={14} />
                            Notify Me
                        </button>
                    </form>
                )}
            </div>

            {/* Socials */}
            <div className='flex items-center gap-4 mt-14 lg:mt-16 pb-16'>
                {socials.map(({ icon: Icon, label }, i) => (
                    <a
                        key={i}
                        href='#'
                        aria-label={label}
                        className='w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-[#232229] flex items-center justify-center text-[#a9a7b0] hover:text-[#fdfdfd] hover:border-[#5ec900] hover:bg-[#5ec900]/10 transition-colors duration-300'
                    >
                        <Icon size={16} />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ComingSoon