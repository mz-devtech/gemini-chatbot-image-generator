'use client'

import React from 'react'
import Link from 'next/link'
import { Navbar } from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'
import { FaHome, FaSearch } from 'react-icons/fa'

const NotFound = () => {
    return (
        <>
            <Navbar />

            <div className='w-[90%] mx-auto flex flex-col items-center justify-center text-center lg:mt-40 mt-20 lg:pb-32 pb-20'>
                <span className='text-[#fdfdfd] text-[120px] lg:text-[260px] font-extrabold leading-none tracking-tight'>
                    404
                </span>

                <h1 className='text-[#fdfdfd] text-2xl lg:text-5xl font-bold lg:-mt-6 -mt-4'>
                    Page Not Found
                </h1>

                <p className='text-[#a9a7b0] text-lg lg:text-xl font-medium mt-6 max-w-xl'>
                    Sorry, the page you&apos;re looking for doesn&apos;t exist or has
                    been moved. Let&apos;s get you back on track.
                </p>

                <div className='flex items-center gap-3 bg-[#0e0d14] border border-[#232229] rounded-full px-6 py-4 mt-10 w-full max-w-md focus-within:border-[#5ec900] transition-colors duration-300'>
                    <FaSearch className='text-[#74727b]' size={16} />
                    <input
                        type='text'
                        placeholder='Search the site...'
                        className='w-full bg-transparent outline-none text-[#fdfdfd] placeholder:text-[#74727b] text-base'
                    />
                </div>

                <Link
                    href='/'
                    className='flex items-center gap-3 bg-[#5ec900] hover:bg-[#52b300] transition-colors duration-300 text-white font-semibold rounded-full px-10 py-4 text-base lg:text-lg mt-8'
                >
                    <FaHome size={16} />
                    Back to Home
                </Link>
            </div>

            <Footer />
        </>
    )
}

export default NotFound