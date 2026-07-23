import React from 'react'
import { Navbar } from '../Components/Navbar'
import Welcome from '../Components/Welcome'
import Subscribe from '../Components/Subscribe'
import ImageCarousel from '../Components/Imagecarousel'
import SkillsSection from '../Components/Skillssection'
import Gallery from '../Components/Gallery'
import Footer from '../Components/Footer'

const page = () => {



    const images = [
        { src: '/assets/img_32.jpg', alt: 'Slide 1' },
        { src: '/assets/img_33.jpg', alt: 'Slide 2' },
        { src: '/assets/img_42.jpg', alt: 'Slide 3' },
    ]
    return (
        <>
            <Navbar />
            <div className='lg:mt-20 mt-7'>
                <Welcome />
            </div>
            <div className='lg:mt-20 mt-7 py-5'>
                <Subscribe />
            </div>
            <div className='py-10'>
                <ImageCarousel images={images} />
            </div>
            <div className='lg:mt-20 mt-7 py-5'>
                <SkillsSection />
            </div>
            <div className='lg:mt-20 mt-7 py-5'>
                <Gallery />
            </div>
            <div className='lg:mt-20 mt-7 py-5'>
                <Footer />
            </div>
        </>
    )
}

export default page
