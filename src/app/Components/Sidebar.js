import React from 'react'
import Image from 'next/image'

const categories = [
    { name: 'AI Music', count: 3 },
    { name: 'AI Video', count: 4 },
    { name: 'AI-Generated', count: 1 },
    { name: 'Blog', count: 3 },
    { name: 'Business', count: 3 },
    { name: 'Cases', count: 6 },
    { name: 'Featured', count: 4 },
    { name: 'Financial', count: 3 },
    { name: 'Ideas', count: 9 },
    { name: 'Mindset', count: 3 },
    { name: 'Modern', count: 4 },
    { name: 'News', count: 3 },
    { name: 'Post Types', count: 4 },
    { name: 'Spotlight', count: 2 },
    { name: 'Style', count: 3 },
    { name: 'Technology', count: 3 },
    { name: 'Top Rated', count: 2 },
    { name: 'Trends', count: 3 },
]

const recentPosts = [
    {
        id: 1,
        image: '/assets/img_13-840x473.jpg',
        category: 'TRENDS',
        date: 'November 9, 2022',
        title: 'What we like and dislike about AI',
    },
    {
        id: 2,
        image: '/assets/img_66-840x473.jpg',
        category: 'CASES',
        date: 'October 10, 2022',
        title: 'Top successful AI chatbots based on feedback',
    },

]

const tags = [
    'AI',
    'app',
    'artist',
    'chatbot',
    'creative',
    'design',
    'develop',
    'images',
    'portfolio',
    'technology',
    'web',
]

const Sidebar = () => {
    return (
        <div className='flex flex-col gap-10 lg:gap-14 lg:mt-10 mt-10 bg-[#0d111a] p-10'>
            {/* Search */}
            <div>
                <h1 className='text-[#fdfdfd] text-2xl lg:text-3xl font-bold mb-6'>
                    Search
                </h1>
                <div className='flex items-center gap-3 bg-[#0e0d14] border border-[#232229] rounded-xl px-6 py-4'>
                    <svg width='40' height='40' viewBox='0 0 24 24' fill='none'>
                        <circle cx='11' cy='11' r='7' stroke='#74727b' strokeWidth='2' />
                        <path d='M21 21L16.65 16.65' stroke='#74727b' strokeWidth='2' strokeLinecap='round' />
                    </svg>
                    <input
                        type='text'
                        placeholder='Search ...'
                        className='bg-transparent outline-none text-[#fdfdfd] text-base lg:text-lg placeholder:text-[#74727b] w-full'
                    />
                </div>
            </div>

            {/* Categories */}
            <div>
                <h1 className='text-[#fdfdfd] text-2xl lg:text-3xl font-bold mb-6'>
                    Categories
                </h1>
                <ul className='flex flex-col'>
                    {categories.map((cat, i) => (
                        <li key={i}>
                            <a
                                href="#"
                                className="flex items-center gap-3 py-3 text-[#fdfdfd] hover:text-[#a9a7b0] text-lg lg:text-xl font-medium transition-colors duration-300"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-[#a9a7b0]" />
                                {cat.name} ({cat.count})
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recent Posts */}
            <div>
                <h1 className='text-[#fdfdfd] text-2xl lg:text-2xl font-bold mb-6'>
                    Recent Posts
                </h1>
                <div className='flex flex-col gap-6'>
                    {recentPosts.map((post) => (
                        <div key={post.id} className='group flex items-center gap-4'>
                            <div className='relative w-[120px] h-[120px]  overflow-hidden flex-shrink-0'>
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className='object-cover group-hover:scale-105 transition-transform duration-500'
                                />
                            </div>
                            <div>
                                <p className='text-[#3ddc84] text-lg lg:text-2xl font-semibold tracking-wide'>
                                    {post.category}{' '}
                                    <span className='text-[#74727b] font-normal'>
                                        • {post.date}
                                    </span>
                                </p>
                                <h2 className='text-[#fdfdfd] text-base lg:text-2xl font-bold mt-1 group-hover:text-[#a9a7b0] transition-colors duration-300 cursor-pointer'>
                                    {post.title}
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Tags */}
            <div>
                <h1 className='text-[#fdfdfd] text-2xl lg:text-3xl font-bold mb-6'>
                    Tags
                </h1>
                <div className='flex flex-wrap gap-3'>
                    {tags.map((tag, i) => (
                        <a
                            key={i}
                            href="#"
                            className="border border-[#232229] text-[#a9a7b0] hover:text-[#fdfdfd] hover:border-[#3ddc84] text-sm lg:text-lg font-medium rounded-xl px-5 py-2.5 transition-colors duration-300"
                        >
                            {tag}
                        </a>
                    ))}
                </div>
            </div>
            <div className='w-full'>
                <div className='relative w-full h-[280px] lg:h-[350px]  overflow-hidden border border-[#232229]'>
                    <Image
                        src='/assets/banner-410x342.jpg'
                        alt='Banner AD 300x250'
                        fill
                        className='object-cover'
                    />
                </div>
            </div>

        </div >
    )
}

export default Sidebar