'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Navbar } from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'
import {
    FaRegUser,
    FaPhoneAlt,
    FaRegEnvelope,
    FaInfoCircle,
    FaPen,
    FaPaperPlane,
} from 'react-icons/fa'

const formFields = [
    { icon: FaRegUser, name: 'name', type: 'text', placeholder: 'Name' },
    { icon: FaPhoneAlt, name: 'phone', type: 'tel', placeholder: 'Phone' },
    { icon: FaRegEnvelope, name: 'email', type: 'email', placeholder: 'Email Address' },
    { icon: FaInfoCircle, name: 'subject', type: 'text', placeholder: 'Subject' },
]

const infoItems = [
    { number: '01', lines: ['+1(800)123-4665'] },
    { number: '02', lines: ['785 15th Street, Office 478 Berlin,', 'De 81566'] },
    { number: '03', lines: ['info@example.com'] },
]

const ContactsPage = () => {
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
    }

    return (
        <>
            <Navbar />

            <div className='w-full px-6 lg:px-0 lg:mx-30 mt-12 overflow-x-hidden lg:overflow-visible'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-0 lg:mt-32 mt-16'>
                    {/* Left: heading + image */}
                    <div>
                        <p className='text-[#fdfdfd] uppercase tracking-widest text-sm lg:text-base font-semibold mb-4'>
                            Contact Us
                        </p>
                        <h1 className='text-[#fdfdfd] text-4xl lg:text-7xl font-bold leading-tight lg:leading-[90px]'>
                            Have a <span className='text-[#6c3ef4]'>Cool Project?</span>
                            <br />
                            Get in Touch!
                        </h1>

                        <div className='relative w-full h-[280px] lg:h-[700px] overflow-hidden mt-10 lg:mt-14'>
                            <Image
                                src='/assets/img_15.jpg'
                                alt='Have a cool project? Get in touch'
                                fill
                                className='object-cover'
                            />
                        </div>
                    </div>

                    {/* Right: form — lg:translate-y-40 lg:-translate-x-20 kept exactly as original */}
                    <div className='flex flex-col gap-2 mt-14 lg:mt-0 transform lg:translate-y-40 lg:-translate-x-20'>
                        {submitted ? (
                            <div className='flex flex-col justify-center h-full'>
                                <p className='text-[#fdfdfd] text-xl lg:text-2xl font-semibold'>
                                    Thanks — your message has been sent!
                                </p>
                                <p className='text-[#74727b] text-base lg:text-lg font-medium mt-2'>
                                    We&apos;ll get back to you as soon as possible.
                                </p>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className='flex flex-col bg-[#0d111a] p-6 lg:p-22'
                            >
                                {formFields.map(({ icon: Icon, name, type, placeholder }, i) => (
                                    <div
                                        key={i}
                                        className='flex items-center gap-4 border-b border-[#232229] focus-within:border-[#5ec900] transition-colors duration-300 py-4 mb-10'
                                    >
                                        <Icon className='text-[#fdfdfd]' size={28} />
                                        <input
                                            type={type}
                                            name={name}
                                            placeholder={placeholder}
                                            required={name !== 'subject'}
                                            className='w-full bg-transparent outline-none text-[#fdfdfd] placeholder:text-[#fdfdfd] placeholder:text-xl placeholder:font-light text-base lg:text-lg font-medium'
                                        />
                                    </div>
                                ))}

                                <div className='flex items-center gap-4 border-b border-[#232229] focus-within:border-[#5ec900] transition-colors duration-300 py-5'>
                                    <FaPen className='text-[#fdfdfd] flex-shrink-0' size={18} />
                                    <textarea
                                        name='message'
                                        placeholder='How can we help you? Feel free to get in touch!'
                                        rows={1}
                                        required
                                        className='w-full lg:py-10 bg-transparent outline-none text-[#fdfdfd] placeholder:text-[#fdfdfd] text-base lg:text-lg font-medium resize-none'
                                    />
                                </div>

                                <button
                                    type='submit'
                                    className='w-full sm:w-fit flex items-center justify-center gap-3 bg-[#5ec900] hover:bg-[#52b300] transition-colors duration-300 text-white font-semibold rounded-xl px-6 py-4 lg:px-10 lg:py-6 text-base lg:text-2xl lg:mt-12 mt-8'
                                >
                                    <FaPaperPlane size={20} />
                                    Get in Touch
                                </button>
                            </form>
                        )}
                    </div>
                </div>

                {/* Info row */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6 lg:mt-32 mt-20 pb-24'>
                    {infoItems.map(({ number, lines }, i) => (
                        <div
                            key={i}
                            className='relative flex flex-col items-center justify-center text-center py-8'
                        >
                            <span className='absolute text-7xl lg:text-[180px] font-extrabold text-white/[0.1] select-none pointer-events-none'>
                                {number}
                            </span>
                            <div className='relative z-10 px-4 lg:px-0'>
                                {lines.map((line, j) => (
                                    <p
                                        key={j}
                                        className='text-[#fdfdfd] text-lg lg:text-3xl font-bold leading-snug'
                                    >
                                        {line}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactsPage