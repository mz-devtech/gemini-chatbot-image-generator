import React from 'react'
import { LuSend } from "react-icons/lu";

const Subscribe = () => {
    return (
        <>
            <div className='py-5 md:py-7 lg:py-10 w-[92%] mx-auto'>

                <h6 className='uppercase text-white font-bold text-xl text-center leading-5 tracking-[0.9] opacity-100'>
                    Newsletter Signup
                </h6>

                <p className='relative text-white lg:leading-[80px] text-center text-3xl lg:mt-7 mt-3 font-bold lg:text-7xl'>
                    Subscribe for the updates!
                </p>

                <div className='flex flex-col items-center justify-center mt-8 lg:mt-10'>
                    <div className='w-full sm:w-[500px] flex items-center justify-between border-b-2 border-white border-solid pb-3'>
                        <input
                            type="text"
                            className='w-full bg-transparent outline-0 text-white placeholder-white/70 text-base'
                            placeholder='Enter Your Email Address'
                        />
                        <button type="button" aria-label="Subscribe">
                            <LuSend className="text-2xl text-white shrink-0 ml-4" />
                        </button>
                    </div>

                    <label className='flex items-center gap-2 mt-5 cursor-pointer'>
                        <input type="checkbox" className='w-4 h-4 accent-white cursor-pointer' />
                        <span className='text-white/70 text-sm'>
                            I agree to the <a href="#" className='underline text-white'>Privacy Policy</a>.
                        </span>
                    </label>
                </div>

            </div>
        </>
    )
}

export default Subscribe