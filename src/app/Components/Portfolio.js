import Image from 'next/image';




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
                    <div className='w-full lg:shrink-0'>
                        <h6 className='uppercase text-white font-bold text-xl leading-5 tracking-[0.9] opacity-100'>View More </h6>

                    </div>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-10 mt-16">
                    <div className="w-full lg:w-[46%] relative h-[400px] lg:h-[700px]">
                        <Image
                            src="/assets/img_32.jpg"
                            fill
                            sizes="(max-width: 1024px) 100vw, 46vw"
                            className="object-cover"
                            alt="Image"
                        />
                    </div>
                    <div className="w-full lg:w-[52%] relative h-[400px] lg:h-[700px]">
                        <Image
                            src="/assets/img_33.jpg"
                            fill
                            sizes="(max-width: 1024px) 100vw, 52vw"
                            className="object-cover"
                            alt="Image"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Portfolio