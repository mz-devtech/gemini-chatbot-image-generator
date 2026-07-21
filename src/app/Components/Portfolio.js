import Image from 'next/image';

import { FaArrowRight } from "react-icons/fa";


const Portfolio = () => {
    return (
        <>

            <div className="w-[92%] mx-auto py-5 md:py-7 lg:py-10">
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-6 lg:gap-0">
                    <div className='w-full lg:w-1/3'>
                        <h6 className='uppercase text-white font-bold text-xl leading-5 tracking-[0.9] opacity-100'>our portfolio</h6>

                        <p className='relative text-white lg:leading-[80px] text-3xl lg:mt-7 mt-3 font-bold lg:text-7xl  '>
                            AI Images
                        </p>

                    </div>
                    <div className='w-full lg:flex-1 group'>
                        <p className="text-[#a9a7b0] text-xl font-medium opacity-50 group-hover:opacity-100 group-hover:text-white transition-all duration-300">
                            Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aut odit aut fugit, sed quia consequuntur. Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.
                        </p>
                    </div>
                    <div className='flex w-full lg:w-1/3 justify-end'>
                        <span className='uppercase text-white font-bold text-xl leading-5 tracking-[0.9] opacity-100 flex items-center gap-2 whitespace-nowrap'>
                            View More <FaArrowRight />
                        </span>
                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-10 mt-16">
                    <div className="w-full lg:w-[46%] relative h-[400px] lg:h-[700px] group overflow-hidden">
                        <Image
                            src="/assets/img_32.jpg"
                            fill
                            sizes="(max-width: 1024px) 100vw, 46vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            alt="Image"
                        />
                        <div className='absolute bottom-6 left-6 z-20 flex flex-col gap-2'>
                            <h1 className='text-white text-3xl lg:text-4xl font-bold bg-black inline-block rounded-lg px-6 py-3 w-fit opacity-0 -translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out'>
                                In the Jungle
                            </h1>
                            <h6 className='text-white/70 text-lg lg:text-xl bg-black inline-block rounded-lg px-6 py-2 w-fit opacity-0 -translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-out'>
                                Illustration
                            </h6>
                        </div>
                    </div>
                    <div className="w-full lg:w-[52%] relative h-[400px] lg:h-[700px] group overflow-hidden">
                        <Image
                            src="/assets/img_33.jpg"
                            fill
                            sizes="(max-width: 1024px) 100vw, 52vw"
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            alt="Image"
                        />
                        <div className='absolute bottom-6 left-6 z-20 flex flex-col gap-2'>
                            <h1 className='text-white text-3xl lg:text-4xl font-bold bg-black inline-block rounded-lg px-6 py-3 w-fit opacity-0 -translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 ease-out'>
                                Stars and Planets
                            </h1>
                            <h6 className='text-white/70 text-lg lg:text-xl bg-black inline-block rounded-lg px-6 py-2 w-fit opacity-0 -translate-x-12 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-150 ease-out'>
                                Illustration
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio