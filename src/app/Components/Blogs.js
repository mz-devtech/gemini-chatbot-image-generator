import React from 'react'
import Image from 'next/image'

const cards = [
    {
        img: "/assets/img_4.jpg",

        title: "The actual history of machine intelligence",
        date: "March 18 , 2022",
    },
    {
        img: "/assets/img_79.jpg",

        title: "All the greatest ideas come unexpectedly",
        date: "March 18 , 2022",
    },
    {
        img: "/assets/img_42.jpg",
        title: "Why is the next-level art called intelligent?",
        date: "March 18 , 2022",
    },
]

const Blogs = () => {
    return (
        <div className='py-5 md:py-7 lg:py-10 w-[92%] mx-auto mt-20 lg:mt-40'>
            <h6 className='uppercase text-[#fdfdfd] font-medium text-xl text-center leading-5 tracking-[0.9] opacity-100'>
                from our blog
            </h6>

            <p className='relative text-[#fdfdfd] lg:leading-[70px] text-center text-xl lg:mt-7 mt-3 font-bold lg:text-7xl'>
                News & Articles
            </p>

            <div className='w-full flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-10 mt-10'>
                {cards.map((card, i) => (
                    <div
                        key={i}
                        className='group relative w-full lg:w-1/3 py-14 px-4 lg:py-22 lg:px-10 bg-[#0d111a] overflow-hidden isolate'
                    >
                        {/* hover background image */}
                        <Image
                            src={card.img}
                            alt="Blog cover"
                            fill
                            sizes='(max-width: 1024px) 100vw, 33vw'
                            className='z-0 object-cover opacity-0 scale-110 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100'
                        />
                        {/* dark overlay so text stays readable over the image */}
                        <div className='absolute inset-0 z-0 bg-black/0 group-hover:bg-black/60 transition-all duration-500 ease-in-out' />

                        {/* content, always above image + overlay */}
                        <div className='relative z-10'>
                            <button className='px-4 font-normal py-1  lg:px-6 lg:py-1 uppercase bg-[#6600ff] text-[#fdfdfd] lg:font-medium rounded-lg'>
                                news
                            </button>
                            <h5 className='text-[#fdfdfd] text-xl lg:text-4xl font-bold mx-auto lg:leading-14 mt-20 lg:mt-32'>
                                {card.title}
                            </h5>
                            <div className='flex items-center justify-start gap-4 lg:mt-6'>
                                <p className='text-[#74727b] group-hover:text-white transition-colors duration-500 text-base lg:text-xl'>{card.date}</p>
                                <p className='text-[#74727b] group-hover:text-white transition-colors duration-500 text-base lg:text-xl'>.</p>
                                <p className='text-[#74727b] group-hover:text-white transition-colors duration-500 text-base lg:text-xl'>0 Comments</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex items-center justify-center'    >
                <button className='bg-[#5ec900] cursor-pointer text-white rounded-xl lg:rounded-2xl lg:px-16 py-3 px-12 text-xl lg:py-6 font-bold lg:text-2xl mx-auto my-0 mt-5 lg:mt-10'>View More</button>

            </div>
        </div>
    )
}

export default Blogs