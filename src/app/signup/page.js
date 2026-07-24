'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Navbar } from '@/app/Components/Navbar'
import Footer from '@/app/Components/Footer'
import { FaGoogle, FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa'

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)

    return (
        <>
            <Navbar />

            <div className='w-[90%] mx-auto'>
                <h1 className='relative text-center lg:mt-40 text-[#fdfdfd] lg:leading-[80px] text-3xl mt-20 font-bold lg:text-7xl'>
                    Sign Up
                </h1>
                <p className='text-[#a9a7b0] text-lg lg:text-xl font-medium text-center mt-6 max-w-xl mx-auto'>
                    Create a free account to get started — it only takes a minute.
                </p>

                <div className='max-w-xl mx-auto w-full lg:mt-16 mt-10 pb-20'>
                    <div className='bg-[#0d111a] border border-[#232229] rounded-2xl p-8 lg:p-12'>
                        <form className='flex flex-col gap-6'>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                                <div className='flex flex-col gap-3'>
                                    <label className='text-[#fdfdfd] text-base lg:text-lg font-semibold'>
                                        First Name
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='John'
                                        className='w-full bg-transparent border border-[#232229] rounded-full px-6 py-4 outline-none text-[#fdfdfd] placeholder:text-[#74727b] text-base lg:text-lg focus:border-[#3ddc84] transition-colors duration-300'
                                    />
                                </div>
                                <div className='flex flex-col gap-3'>
                                    <label className='text-[#fdfdfd] text-base lg:text-lg font-semibold'>
                                        Last Name
                                    </label>
                                    <input
                                        type='text'
                                        placeholder='Doe'
                                        className='w-full bg-transparent border border-[#232229] rounded-full px-6 py-4 outline-none text-[#fdfdfd] placeholder:text-[#74727b] text-base lg:text-lg focus:border-[#3ddc84] transition-colors duration-300'
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <label className='text-[#fdfdfd] text-base lg:text-lg font-semibold'>
                                    Email Address
                                </label>
                                <input
                                    type='email'
                                    placeholder='you@example.com'
                                    className='w-full bg-transparent border border-[#232229] rounded-full px-6 py-4 outline-none text-[#fdfdfd] placeholder:text-[#74727b] text-base lg:text-lg focus:border-[#3ddc84] transition-colors duration-300'
                                />
                            </div>

                            <div className='flex flex-col gap-3'>
                                <label className='text-[#fdfdfd] text-base lg:text-lg font-semibold'>
                                    Password
                                </label>
                                <div className='relative'>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder='Create a password'
                                        className='w-full bg-transparent border border-[#232229] rounded-full px-6 py-4 pr-14 outline-none text-[#fdfdfd] placeholder:text-[#74727b] text-base lg:text-lg focus:border-[#3ddc84] transition-colors duration-300'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => setShowPassword((s) => !s)}
                                        className='absolute right-5 top-1/2 -translate-y-1/2 text-[#74727b] hover:text-[#fdfdfd] transition-colors duration-300'
                                    >
                                        {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <label className='text-[#fdfdfd] text-base lg:text-lg font-semibold'>
                                    Confirm Password
                                </label>
                                <div className='relative'>
                                    <input
                                        type={showConfirm ? 'text' : 'password'}
                                        placeholder='Re-enter your password'
                                        className='w-full bg-transparent border border-[#232229] rounded-full px-6 py-4 pr-14 outline-none text-[#fdfdfd] placeholder:text-[#74727b] text-base lg:text-lg focus:border-[#3ddc84] transition-colors duration-300'
                                    />
                                    <button
                                        type='button'
                                        onClick={() => setShowConfirm((s) => !s)}
                                        className='absolute right-5 top-1/2 -translate-y-1/2 text-[#74727b] hover:text-[#fdfdfd] transition-colors duration-300'
                                    >
                                        {showConfirm ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                                    </button>
                                </div>
                            </div>

                            <label className='flex items-start gap-3 cursor-pointer'>
                                <input
                                    type='checkbox'
                                    className='w-4 h-4 mt-1 accent-[#3ddc84] cursor-pointer'
                                />
                                <span className='text-[#a9a7b0] text-sm lg:text-base font-medium'>
                                    I agree to the{' '}
                                    <a href='#' className='text-[#3ddc84] font-semibold hover:underline'>
                                        Terms of Service
                                    </a>{' '}
                                    and{' '}
                                    <a href='#' className='text-[#3ddc84] font-semibold hover:underline'>
                                        Privacy Policy
                                    </a>
                                </span>
                            </label>

                            <button
                                type='submit'
                                className='w-full bg-[#6c3ef4] hover:bg-[#5b2fe0] transition-colors duration-300 text-white font-semibold rounded-full py-4 text-base lg:text-lg mt-2'
                            >
                                Create Account
                            </button>
                        </form>

                        <div className='flex items-center gap-4 my-8'>
                            <div className='flex-1 h-[1px] bg-[#232229]' />
                            <span className='text-[#74727b] text-sm lg:text-base'>or continue with</span>
                            <div className='flex-1 h-[1px] bg-[#232229]' />
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                            <button className='flex items-center justify-center gap-3 border border-[#232229] rounded-full py-3.5 text-[#fdfdfd] text-sm lg:text-base font-medium hover:border-[#3ddc84] hover:bg-[#3ddc84]/10 transition-colors duration-300'>
                                <FaGoogle size={16} />
                                Google
                            </button>
                            <button className='flex items-center justify-center gap-3 border border-[#232229] rounded-full py-3.5 text-[#fdfdfd] text-sm lg:text-base font-medium hover:border-[#3ddc84] hover:bg-[#3ddc84]/10 transition-colors duration-300'>
                                <FaFacebookF size={16} />
                                Facebook
                            </button>
                        </div>
                    </div>

                    <p className='text-[#a9a7b0] text-base lg:text-lg font-medium text-center mt-8'>
                        Already have an account?{' '}
                        <Link
                            href='/login'
                            className='text-[#3ddc84] font-semibold hover:underline transition-colors duration-300'
                        >
                            Log In
                        </Link>
                    </p>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default SignupPage