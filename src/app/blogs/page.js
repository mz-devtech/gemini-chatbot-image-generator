import React from 'react'
import { Navbar } from '../Components/Navbar'
import Footer from '../Components/Footer'
import BlogsList from '../Components/BlogsList'
import Sidebar from '../Components/Sidebar'

const page = () => {
    return (
        <>
            <Navbar />

            <div className='w-[90%] mx-auto'>
                <h1 className='relative text-center lg:mt-40 text-[#fdfdfd] lg:leading-[80px] text-3xl mt-20 font-bold lg:text-7xl'>
                    Blog Standard
                </h1>

                <div className='flex flex-col lg:flex-row lg:gap-x-16 lg:mt-20 mt-10 pb-20'>
                    <div className='lg:w-[65%] w-full'>
                        <BlogsList />
                    </div>
                    <div className='lg:w-[35%] w-full'>
                        <Sidebar />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default page