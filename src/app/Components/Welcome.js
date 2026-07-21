import React from 'react'
import Image from 'next/image';

const Welcome = () => {
    return (
        <>
            <div className='w-[96%] mx-auto py-5 md:py-7 lg:py-10'>
                <div className='flex flex-col lg:flex-row gap-20'>
                    <div className="w-full lg:w-[45%]">
                        <div className="relative w-full lg:w-[85%] h-[400px] lg:h-[700px] mx-auto overflow-hidden group">
                            <Image
                                src="/assets/img_4.jpg"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-105"
                                alt="Image"
                            />
                            <Image
                                src="/assets/img_30.jpg"
                                fill
                                sizes="(max-width: 1024px) 100vw, 45vw"
                                className="object-cover transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100"
                                alt="Image hover"
                            />
                        </div>
                    </div>
                    <div className='w-full lg:w-[47%]'>
                        <h6 className='uppercase text-white font-bold text-xl leading-5 tracking-[0.9] opacity-100'>Welcome</h6>
                        <p className='relative text-white lg:leading-[80px] text-3xl lg:mt-7 mt-3 font-bold lg:text-7xl  '>
                            Easy ways to use  AI tools, and tools  to build AI.
                        </p>
                        <p className="text-[#a9a7b0] text-xl font-medium opacity-50 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
                            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia.
                        </p>

                        <div className="relative w-full h-[400px] lg:h-[650px] mt-10 overflow-hidden group">
                            <Image
                                src="/assets/img_3.jpg"
                                fill
                                sizes="(max-width: 1024px) 100vw, 47vw"
                                className="object-cover transition-all duration-700 ease-in-out group-hover:opacity-0 group-hover:scale-105"
                                alt="Image"
                            />
                            <Image
                                src="/assets/img_56.jpg"
                                fill
                                sizes="(max-width: 1024px) 100vw, 47vw"
                                className="object-cover transition-all duration-700 ease-in-out opacity-0 scale-105 group-hover:opacity-100 group-hover:scale-100"
                                alt="Image hover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Welcome