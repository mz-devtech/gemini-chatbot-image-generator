'use client'

import React, { useState } from 'react'
import {
    FaSearch,
    FaPlus,
    FaComments,
    FaFolder,
    FaBook,
    FaCog,
    FaMicrophone,
    FaArrowUp,
    FaBars,
    FaRegImage,
    FaRegEdit,
    FaGlobe,
    FaLightbulb,
} from 'react-icons/fa'

const navItems = [
    { icon: FaComments, label: 'Chats' },
    { icon: FaFolder, label: 'Projects' },
    { icon: FaBook, label: 'Library' },
]

const recents = [
    'Landing page redesign ideas',
    'Next.js image carousel component',
    'Fix responsive layout bug',
    'Weekly report summary',
]

const suggestions = [
    { icon: FaRegImage, label: 'Create an image' },
    { icon: FaRegEdit, label: 'Write or edit' },
    { icon: FaGlobe, label: 'Look something up' },
    { icon: FaLightbulb, label: 'Brainstorm ideas' },
]

const AiChatPage = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const [message, setMessage] = useState('')

    return (
        <div className='flex h-screen bg-[#0a0910] overflow-hidden'>
            {/* Sidebar */}
            <aside
                className={`${
                    sidebarOpen ? 'w-[280px]' : 'w-0'
                } shrink-0 overflow-hidden transition-all duration-300 bg-[#0d0f17] border-r border-[#232229] flex flex-col`}
            >
                <div className='flex items-center justify-between px-6 py-6'>
                    <h1 className='text-[#fdfdfd] text-2xl font-bold tracking-wide'>ANN AI</h1>
                    <button className='text-[#74727b] hover:text-[#fdfdfd] transition-colors duration-300'>
                        <FaSearch size={16} />
                    </button>
                </div>

                <div className='px-4'>
                    <button className='w-full flex items-center gap-3 bg-[#6c3ef4] hover:bg-[#5b2fe0] transition-colors duration-300 text-white font-semibold rounded-full px-5 py-3 text-sm lg:text-base'>
                        <FaPlus size={14} />
                        New Chat
                    </button>
                </div>

                <nav className='px-4 mt-8'>
                    <ul className='flex flex-col gap-1'>
                        {navItems.map(({ icon: Icon, label }, i) => (
                            <li key={i}>
                               <a 
                                    href='#'
                                    className='flex items-center gap-3 text-[#a9a7b0] hover:text-[#fdfdfd] hover:bg-[#151420] rounded-xl px-4 py-3 text-base font-medium transition-colors duration-300'
                                >
                                    <Icon size={16} />
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className='px-6 mt-10'>
                    <p className='text-[#74727b] text-xs font-semibold uppercase tracking-widest mb-3'>
                        Recents
                    </p>
                    <ul className='flex flex-col gap-1'>
                        {recents.map((item, i) => (
                            <li key={i}>
                               <a 
                                    href='#'
                                    className='block text-[#a9a7b0] hover:text-[#fdfdfd] transition-colors duration-300 text-sm lg:text-base py-2.5 truncate'
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='mt-auto flex items-center gap-3 px-6 py-6 border-t border-[#232229]'>
                    <div className='w-9 h-9 rounded-full bg-[#6c3ef4] flex items-center justify-center text-white text-sm font-bold flex-shrink-0'>
                        A
                    </div>
                    <div className='flex-1 min-w-0'>
                        <p className='text-[#fdfdfd] text-sm font-semibold truncate'>Amber Nelson</p>
                        <p className='text-[#74727b] text-xs'>Free plan</p>
                    </div>
                    <button className='text-[#74727b] hover:text-[#fdfdfd] transition-colors duration-300 flex-shrink-0'>
                        <FaCog size={16} />
                    </button>
                </div>
            </aside>

            {/* Main */}
            <main className='flex-1 flex flex-col'>
                {/* Top bar */}
                <div className='flex items-center justify-between px-6 lg:px-10 py-6'>
                    <button
                        onClick={() => setSidebarOpen((s) => !s)}
                        className='text-[#74727b] hover:text-[#fdfdfd] transition-colors duration-300'
                    >
                        <FaBars size={18} />
                    </button>

                    <div className='flex items-center gap-4'>
                        <span className='text-[#74727b] text-sm lg:text-base'>Free plan</span>
                        <button className='text-[#6c3ef4] hover:underline text-sm lg:text-base font-semibold'>
                            Upgrade
                        </button>
                        <div className='w-9 h-9 rounded-full bg-[#0e0d14] border border-[#232229] flex items-center justify-center text-[#fdfdfd] text-sm font-bold'>
                            A
                        </div>
                    </div>
                </div>

                {/* Center content */}
                <div className='flex-1 flex flex-col items-center justify-center px-6 -mt-16'>
                    <h2 className='text-[#fdfdfd] text-3xl lg:text-5xl font-bold mb-10 text-center'>
                        Good afternoon, Amber
                    </h2>

                    <div className='w-full max-w-3xl bg-[#0e0d14] border border-[#232229] rounded-3xl p-4 lg:p-6 focus-within:border-[#6c3ef4] transition-colors duration-300'>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder='How can I help you today?'
                            rows={2}
                            className='w-full bg-transparent outline-none text-[#fdfdfd] placeholder:text-[#74727b] text-lg lg:text-xl font-medium resize-none'
                        />

                        <div className='flex items-center justify-between mt-4'>
                            <button className='w-10 h-10 rounded-full border border-[#232229] flex items-center justify-center text-[#74727b] hover:text-[#fdfdfd] hover:border-[#6c3ef4] transition-colors duration-300'>
                                <FaPlus size={14} />
                            </button>

                            <div className='flex items-center gap-3'>
                                <button className='text-[#74727b] hover:text-[#fdfdfd] transition-colors duration-300'>
                                    <FaMicrophone size={18} />
                                </button>
                                <button
                                    disabled={!message.trim()}
                                    className='w-10 h-10 rounded-full bg-[#6c3ef4] hover:bg-[#5b2fe0] disabled:bg-[#232229] disabled:cursor-not-allowed flex items-center justify-center text-white transition-colors duration-300'
                                >
                                    <FaArrowUp size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Suggestions */}
                    <div className='flex flex-wrap items-center justify-center gap-3 mt-8 max-w-3xl'>
                        {suggestions.map(({ icon: Icon, label }, i) => (
                            <button
                                key={i}
                                className='flex items-center gap-2 border border-[#232229] hover:border-[#6c3ef4] hover:bg-[#6c3ef4]/10 transition-colors duration-300 rounded-full px-5 py-3 text-[#a9a7b0] hover:text-[#fdfdfd] text-sm lg:text-base font-medium'
                            >
                                <Icon size={14} />
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AiChatPage