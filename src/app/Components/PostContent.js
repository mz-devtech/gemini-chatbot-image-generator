import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Carousel, VideoBlock, AudioBlock, QuoteBlock } from './PostBlocks'

const tags = ['AI', 'chatbot', 'technology', 'design']

const socials = [
    { icon: FaFacebookF, label: 'Facebook' },
    { icon: FaTwitter, label: 'Twitter' },
    { icon: FaInstagram, label: 'Instagram' },
    { icon: FaLinkedinIn, label: 'LinkedIn' },
]

const PostContent = ({ post, prevPost, nextPost }) => {
    return (
        <div className='flex flex-col'>
            {/* Hero — matches type from the listing page */}
            {post.type === 'standard' && (
                <div className='relative w-full h-[260px] lg:h-[560px] overflow-hidden'>
                    <Image src={post.image} alt={post.title} fill className='object-cover' />
                </div>
            )}
            {post.type === 'video' && <VideoBlock image={post.image} title={post.title} />}
            {post.type === 'gallery' && <Carousel images={post.images} />}
            {post.type === 'audio' && <AudioBlock author={post.author} title={post.title} />}
            {post.type === 'quote' && <QuoteBlock quote={post.quote} />}

            {/* Body content */}
            <div className='flex flex-col gap-6 lg:gap-8 lg:mt-12 mt-8'>
                {post.content?.map((para, i) => (
                    <p key={i} className='text-[#a9a7b0] text-lg lg:text-2xl font-medium leading-relaxed'>
                        {para}
                    </p>
                ))}
            </div>

            {/* Tags */}
            <div className='flex flex-wrap items-center gap-3 lg:mt-12 mt-8'>
                {tags.map((tag, i) => (
                    <a
                        key={i}
                        href='#'
                        className='border border-[#232229] text-[#a9a7b0] hover:text-[#fdfdfd] hover:border-[#3ddc84] text-sm lg:text-lg font-medium rounded-xl px-5 py-2.5 transition-colors duration-300'
                    >
                        {tag}
                    </a>
                ))}
            </div>

            {/* Share */}
            <div className='flex items-center gap-4 lg:mt-10 mt-6 lg:pb-10 pb-6 border-b border-[#232229]'>
                <p className='text-[#fdfdfd] text-lg lg:text-xl font-bold mr-2'>Share:</p>
                {socials.map(({ icon: Icon, label }, i) => (
                    <a
                        key={i}
                        href='#'
                        aria-label={label}
                        className='w-11 h-11 lg:w-12 lg:h-12 rounded-full border border-[#232229] flex items-center justify-center text-[#a9a7b0] hover:text-[#fdfdfd] hover:border-[#3ddc84] hover:bg-[#3ddc84]/10 transition-colors duration-300'
                    >
                        <Icon size={16} className='lg:w-[18px] lg:h-[18px]' />
                    </a>
                ))}
            </div>

            {/* Author box */}
            <div className='flex items-center gap-6 bg-[#0e0d14] border border-[#232229] rounded-2xl p-6 lg:p-10 lg:mt-10 mt-8'>
                <div className='relative w-[80px] h-[80px] lg:w-[110px] lg:h-[110px] rounded-full overflow-hidden flex-shrink-0'>
                    <Image src='/assets/author-avatar.jpg' alt='Author' fill className='object-cover' />
                </div>
                <div>
                    <h3 className='text-[#fdfdfd] text-xl lg:text-2xl font-bold'>Amber Nelson</h3>
                    <p className='text-[#a9a7b0] text-base lg:text-lg font-medium mt-2 leading-relaxed'>
                        There are many variations of passages of lorem ipsum available, but the majority have suffered alteration.
                    </p>
                </div>
            </div>

            {/* Prev / Next navigation */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:mt-10 mt-8'>
                <Link
                    href={`/blogs/${prevPost.slug}`}
                    className='group flex flex-col border border-[#232229] rounded-2xl p-6 lg:p-8 hover:border-[#3ddc84] transition-colors duration-300'
                >
                    <p className='text-[#74727b] text-sm lg:text-base font-semibold tracking-wide mb-3'>← PREVIOUS POST</p>
                    <h3 className='text-[#fdfdfd] text-lg lg:text-2xl font-bold group-hover:text-[#3ddc84] transition-colors duration-300'>
                        {prevPost.title}
                    </h3>
                </Link>

                <Link
                    href={`/blogs/${nextPost.slug}`}
                    className='group flex flex-col items-end text-right border border-[#232229] rounded-2xl p-6 lg:p-8 hover:border-[#3ddc84] transition-colors duration-300'
                >
                    <p className='text-[#74727b] text-sm lg:text-base font-semibold tracking-wide mb-3'>NEXT POST →</p>
                    <h3 className='text-[#fdfdfd] text-lg lg:text-2xl font-bold group-hover:text-[#3ddc84] transition-colors duration-300'>
                        {nextPost.title}
                    </h3>
                </Link>
            </div>

            {/* Comments */}
            <div className='lg:mt-16 mt-10'>
                <h2 className='text-[#fdfdfd] text-2xl lg:text-4xl font-bold mb-8 lg:mb-10'>0 Comments</h2>
                <form className='flex flex-col gap-6'>
                    <textarea
                        placeholder='Write your comment...'
                        rows={6}
                        className='w-full bg-transparent border border-[#232229] rounded-2xl px-6 py-4 outline-none text-[#fdfdfd] placeholder:text-[#74727b] text-base lg:text-lg resize-none focus:border-[#3ddc84] transition-colors duration-300'
                    />
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                        <input
                            type='text'
                            placeholder='Name'
                            className='w-full bg-transparent border border-[#232229] rounded-full px-6 py-4 outline-none text-[#fdfdfd] placeholder:text-[#74727b] text-base focus:border-[#3ddc84] transition-colors duration-300'
                        />
                        <input
                            type='email'
                            placeholder='Email'
                            className='w-full bg-transparent border border-[#232229] rounded-full px-6 py-4 outline-none text-[#fdfdfd] placeholder:text-[#74727b] text-base focus:border-[#3ddc84] transition-colors duration-300'
                        />
                    </div>
                    <button
                        type='submit'
                        className='w-fit bg-[#6c3ef4] hover:bg-[#5b2fe0] transition-colors duration-300 text-white font-semibold rounded-full px-10 py-4'
                    >
                        Post Comment
                    </button>
                </form>
            </div>
        </div>
    )
}

export default PostContent