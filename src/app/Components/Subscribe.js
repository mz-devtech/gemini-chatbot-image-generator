import React from 'react'
import { LuSend } from "react-icons/lu";

const Subscribe = () => {
    return (
        <>
            <div className=''>

                <h6 className='uppercase text-[#fdfdfd] font-medium text-xl text-center leading-5 tracking-[0.9] opacity-100'>
                    Newsletter Signup
                </h6>

                <p className='relative text-[#fdfdfd] lg:leading-[80px] text-center text-3xl lg:mt-7 mt-3 font-bold lg:text-6xl'>
                    Subscribe for the updates!
                </p>

                <div className='flex flex-col items-center justify-center mt-8 lg:mt-10'>
                    <div className='w-full sm:w-[500px] flex items-center justify-between border-b-2 border-white border-solid pb-3'>
                        <input
                            type="text"
                            className='w-full bg-transparent outline-0 text-[#fdfdfd] placeholder-white/70 text-xl lg:placeholder:text-2xl py-4'
                            placeholder='Enter Your Email Address'
                        />
                        <button type="button" aria-label="Subscribe">
                            <LuSend className="text-2xl text-[#fdfdfd] shrink-0 ml-4" />
                        </button>
                    </div>

                    <label className='w-full sm:w-[500px] flex items-center justify-start gap-2 mt-5 cursor-pointer'>
                        <input
                            type="checkbox"
                            className='lg:w-6 lg:h-6  cursor-pointer mt-5 accent-white'
                        />
                        <span className='text-white/70 lg:text-lg tracking-widest mt-5'>
                            I agree to the <a href="#" className='underline text-[#fdfdfd]'>Privacy Policy</a>.
                        </span>
                    </label>
                </div>

            </div>
        </>
    )
}

export default Subscribe