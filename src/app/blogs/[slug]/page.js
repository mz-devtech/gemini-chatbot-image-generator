import { notFound } from 'next/navigation'
import { posts } from '../../lib/posts'
import { Navbar } from '@/app/Components/Navbar'
import Sidebar from '@/app/Components/Sidebar'
import PostContent from '@/app/Components/PostContent'
import Footer from '@/app/Components/Footer'

export function generateStaticParams() {
    return posts.map((post) => ({ slug: post.slug }))
}

const page = async ({ params }) => {
    const { slug } = await params

    const index = posts.findIndex((p) => p.slug === slug)
    const post = posts[index]

    if (!post) return notFound()

    const prevPost = posts[index - 1] || posts[posts.length - 1]
    const nextPost = posts[index + 1] || posts[0]

    return (
        <>
            <Navbar />

            <div className='w-[90%] mx-auto'>
                <h1 className='relative text-center lg:mt-40 text-[#fdfdfd] lg:leading-[70px] text-3xl mt-20 font-bold lg:text-6xl max-w-4xl mx-auto'>
                    {post.title}
                </h1>

                <div className='flex items-center justify-center gap-4 lg:mt-8 mt-6'>
                    <p className='text-[#74727b] text-base lg:text-xl'>{post.date}</p>
                    <p className='text-[#74727b] text-base lg:text-xl'>.</p>
                    <p className='text-[#74727b] text-base lg:text-xl'>{post.comments}</p>
                </div>

                <div className='flex flex-col lg:flex-row lg:gap-x-16 lg:mt-16 mt-10 pb-20'>
                    <div className='lg:w-[65%] w-full'>
                        <PostContent post={post} prevPost={prevPost} nextPost={nextPost} />
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