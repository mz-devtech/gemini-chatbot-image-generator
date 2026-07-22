import React from 'react'
import Image from 'next/image';

// simple inline camera icon (no external icon package needed)
const CameraIcon = (props) => (
    <svg
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
        {...props}
    >
        <path d='M4 8a2 2 0 0 1 2-2h1.2a1 1 0 0 0 .8-.4l1-1.2a1 1 0 0 1 .8-.4h4.4a1 1 0 0 1 .8.4l1 1.2a1 1 0 0 0 .8.4H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z' />
        <circle cx='12' cy='13' r='3.5' />
    </svg>
)

const images = [
    "/assets/img_5.jpg",
    "/assets/img_6-370x370.jpg",
    "/assets/img_7-370x370.jpg",
    "/assets/img_8-370x370.jpg",
    "/assets/img_9-370x370.jpg",
    "/assets/img_5.jpg",
]

const Gallery = () => {
    return (
        <>
            <div className='relative py-5 grid grid-cols-2 lg:flex lg:flex-row flex-col md:py-7 lg:py-10 w-[100%]'>

                {images.map((src, i) => (
                    <div
                        key={i}
                        className='relative h-[200px] lg:h-[300px] w-full lg:w-1/6 transition-shadow duration-500 hover:shadow-[0_0_40px_15px_rgba(0,0,0,0.8)]'
                    >
                        <Image className='object-cover' src={src} alt={`Gallery image ${i + 1}`} fill />
                    </div>
                ))}

                {/* Instagram badge, fixed at the center of the gallery */}
                <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                    className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10
                               w-16 h-16 lg:w-24 lg:h-24 rounded-full
                               bg-black/70 backdrop-blur-sm flex items-center justify-center
                               transition-transform duration-300 hover:scale-110'
                >
                    <CameraIcon className='w-6 h-6 lg:w-9 lg:h-9 text-white' />
                </a>
            </div>

        </>
    )
}

export default Gallery