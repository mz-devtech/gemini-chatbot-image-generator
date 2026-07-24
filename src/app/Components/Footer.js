import React from 'react'
import Link from 'next/link'

const socials = ["Facebook", "Twitter", "Dribble", "Instagram"]

const menu = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Blogs", link: "/blogs" },
    { name: "Contacts", link: "/contacts" },
    { name: "Login", link: "/login" },
]

const Footer = () => {
    return (
        <footer className='bg-[#0d0f17]  w-full pt-20 lg:pt-28 pb-8 px-6 md:px-10 lg:px-20'>
            <div className='max-w-[1400px] mx-auto'>

                {/* Top: logo + headline */}
                <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 lg:gap-6'>
                    <h2 className='text-[#fdfdfd] text-3xl  lg:text-6xl font-bold tracking-wide'>
                        ANN
                    </h2>

                    <p className='text-[#fdfdfd] text-3xl  lg:text-7xl font-bold leading-tight lg:leading-[1.15] lg:max-w-3xl'>
                        AI art tips from the finest ANN artists.
                    </p>
                </div>

                {/* Middle: newsletter + link columns */}
                <div className='flex flex-col lg:flex-row lg:items-start lg:justify-between gap-14 lg:gap-10 mt-16 lg:mt-24'>

                    {/* Newsletter signup */}
                    <div className='w-full lg:max-w-md'>
                        <h4 className='text-[#fdfdfd] text-lg lg:text-3xl font-bold mb-6'>
                            Newsletter Signup
                        </h4>

                        <form className='w-full'>
                            <div className='flex items-center gap-3 border-b border-[#2a2d38] pb-4'>
                                <svg
                                    width='24' height='24' viewBox='0 0 24 24' fill='none'
                                    stroke='#74727b' strokeWidth={1.5}
                                    className='shrink-0'
                                >
                                    <rect x='3' y='5' width='18' height='14' rx='2' />
                                    <path d='m3 7 9 6 9-6' />
                                </svg>
                                <input
                                    type='email'
                                    placeholder='Enter Your Email Address'
                                    className='bg-transparent outline-none w-full text-[#74727b] placeholder:text-xl py-6 px-2 placeholder:text-[#74727b] text-xl'
                                />
                                <button
                                    type='submit'
                                    aria-label='Subscribe'
                                    className='shrink-0 text-[#fdfdfd] hover:translate-x-1 transition-transform duration-300'
                                >
                                    <svg width='28' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth={2}>
                                        <path d='M5 12h14M13 6l6 6-6 6' />
                                    </svg>
                                </button>
                            </div>

                            <label className='flex items-center gap-3 mt-6 cursor-pointer select-none'>
                                <input type='checkbox' className='w-4 h-4 accent-[#6600ff] rounded-sm' />
                                <span className='text-[#74727b] lg:text-xl text-lg'>
                                    I agree to the{' '}
                                    <a href='#' className='underline text-[#a9a7b0] hover:text-[#fdfdfd]'>
                                        Privacy Policy
                                    </a>.
                                </span>
                            </label>
                        </form>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className='text-[#fdfdfd] text-lg lg:text-3xl font-bold mb-6'>Socials</h4>
                        <ul className='space-y-3'>
                            {socials.map((item) => (
                                <li key={item}>
                                    <a href='#' className='text-[#a9a7b0] hover:text-[#fdfdfd] transition-colors duration-300 text-base lg:text-2xl'>
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Menu */}
                    <div>
                        <h4 className='text-[#fdfdfd] text-lg lg:text-3xl font-bold mb-6'>Menu</h4>
                        <ul className='space-y-3'>
                            {menu.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.link}
                                        className='text-[#a9a7b0] hover:text-[#fdfdfd] transition-colors duration-300 text-base lg:text-2xl'
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Say hello */}
                    <div>
                        <h4 className='text-[#fdfdfd] text-lg font-bold mb-6 lg:text-3xl'>Say Hello</h4>
                        <a
                            href='mailto:info@email.com'
                            className='text-[#a9a7b0] hover:text-[#fdfdfd] transition-colors duration-300 text-base lg:text-2xl'
                        >
                            info@email.com
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer