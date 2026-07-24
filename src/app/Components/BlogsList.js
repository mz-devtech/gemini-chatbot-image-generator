import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { posts } from '../lib/posts'
import { Carousel, VideoBlock, AudioBlock, QuoteBlock, ReadMore } from './PostBlocks'

const BlogsList = () => {
    return (
        <div className='flex flex-col gap-14 lg:gap-20 lg:mt-10 mt-10'>
            {posts.map((post) => (
                <Link key={post.id} href={`/blogs/${post.slug}`} className='group flex flex-col'>
                    {(post.type === 'quote' || post.type === 'audio') && (
                        <>
                            <h1 className='text-[#fdfdfd] text-2xl lg:text-5xl font-bold lg:leading-[55px] group-hover:text-[#a9a7b0] transition-colors duration-300'>
                                {post.title}
                            </h1>
                            <div className='flex items-center justify-start gap-4 mt-4 mb-6 lg:mb-8'>
                                <p className='text-[#74727b] group-hover:text-white transition-colors duration-500 text-base lg:text-xl'>{post.date}</p>
                                <p className='text-[#74727b] group-hover:text-white transition-colors duration-500 text-base lg:text-xl'>.</p>
                                <p className='text-[#74727b] group-hover:text-white transition-colors duration-500 text-base lg:text-xl'>{post.comments}</p>
                            </div>
                        </>
                    )}

                    {post.type === 'standard' && (
                        <div className='relative w-full h-[240px] lg:h-[530px] overflow-hidden'>
                            <Image src={post.image} alt={post.title} fill className='object-cover group-hover:scale-105 transition-transform duration-500' />
                        </div>
                    )}

                    {post.type === 'video' && <VideoBlock image={post.image} title={post.title} />}
                    {post.type === 'gallery' && <Carousel images={post.images} />}
                    {post.type === 'audio' && <AudioBlock author={post.author} title={post.title} />}
                    {post.type === 'quote' && <QuoteBlock quote={post.quote} />}

                    {(post.type === 'standard' || post.type === 'video' || post.type === 'gallery') && (
                        <>
                            <h1 className='text-[#fdfdfd] text-2xl lg:text-5xl font-bold lg:mt-8 mt-6 lg:leading-[55px] group-hover:text-[#a9a7b0] transition-colors duration-300'>
                                {post.title}
                            </h1>
                            <div className='flex items-center justify-start gap-4 lg:mt-6 mt-4'>
                                <p className='text-[#74727b] group-hover:text-white transition-colors duration-500 text-base lg:text-xl'>{post.date}</p>
                                <p className='text-[#74727b] group-hover:text-white transition-colors duration-500 text-base lg:text-xl'>.</p>
                                <p className='text-[#74727b] group-hover:text-white transition-colors duration-500 text-base lg:text-xl'>{post.comments}</p>
                            </div>
                            <p className='text-[#a9a7b0] text-lg lg:text-2xl font-medium group-hover:text-[#fdfdfd] transition-all duration-300 lg:mt-6 mt-4'>
                                {post.excerpt}
                            </p>
                        </>
                    )}

                    <ReadMore />
                </Link>
            ))}

            <div className='flex items-center justify-start gap-3 lg:mt-6'>
                {['1', '2', '3', '...', '6'].map((num, i) => (
                    <button
                        key={i}
                        className={`w-12 h-12 lg:w-18 lg:h-18 rounded-xl flex items-center justify-center text-lg font-semibold transition-colors duration-300 ${
                            num === '1' ? 'bg-[#5ec900] text-white' : num === '...' ? 'text-[#74727b] cursor-default' : 'bg-[#141319] text-[#fdfdfd] hover:bg-[#5ec900] hover:text-black'
                        }`}
                    >
                        {num}
                    </button>
                ))}
                <button className='w-12 h-12 lg:w-18 lg:h-18 rounded-xl flex items-center justify-center bg-[#141319] text-[#fdfdfd] hover:bg-[#5ec900] hover:text-black transition-colors duration-300'>
                    →
                </button>
            </div>
        </div>
    )
}

export default BlogsList