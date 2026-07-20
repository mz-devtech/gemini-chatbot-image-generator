"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

export const Navbar = () => {
    const [count, setCount] = useState(4);
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "Pages",
            link: "/about",
        },
        {
            id: 3,
            name: "Blogs",
            link: "/about",
        },
        {
            id: 4,
            name: "Shop",
            link: "/about",
        },
        {
            id: 5,
            name: "Contacts",
            link: "/about",
        },
    ];

    return (
        <>
            <div className="navbar py-6 md:py-9 p-5 bg-transparent z-50 relative">
                <div className="flex items-center justify-between mx-5 md:mx-12">
                    {/* Logo */}
                    <div className="h-11 w-28 relative shrink-0">
                        <Image src="/assets/logo-inverse-retina.png" alt="Logo" fill />
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden lg:block">
                        <ul className="flex gap-10">
                            {navLinks.map((page) => (
                                <li key={page.id}>
                                    <Link
                                        className="text-2xl text-[#FDFDFD] tracking-widest"
                                        href={page.link}
                                    >
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop Get Started Button */}
                    <div className="hidden lg:block">
                        <button className="bg-[#6600ff] text-xl py-4 px-10 rounded-2xl text-white">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Hamburger Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex flex-col justify-center items-center gap-1.5 w-10 h-10 z-50"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`block h-0.5 w-7 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-7 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-7 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed inset-0 top-0 left-0 w-full h-screen bg-[#0b0b14]/98 backdrop-blur-md
                      transition-all duration-300 ease-in-out z-40
                      ${isOpen
                            ? "opacity-100 pointer-events-auto"
                            : "opacity-0 pointer-events-none"
                        }`}
                >
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        <ul className="flex flex-col items-center gap-8">
                            {navLinks.map((page) => (
                                <li key={page.id}>
                                    <Link
                                        className="text-3xl text-[#FDFDFD] tracking-widest"
                                        href={page.link}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {page.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        <button className="bg-[#6600ff] text-xl py-4 px-10 rounded-2xl text-white mt-4">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};