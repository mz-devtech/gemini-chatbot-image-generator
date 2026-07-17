"use client"

import { useState } from "react"

import Link from "next/link"
import Image from 'next/image';



export const Navbar = () => {

    const [count, setCount] = useState(4)

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
        }, {
            id: 4,
            name: "Shop",
            link: "/about",
        }, {
            id: 5,
            name: "Contacts",
            link: "/about",
        },

    ]


    return (
        <>
            <div className="navbar py-5    p-5 bg-transparent z-10">

                <div className="flex items-center justify-between mx-8">
                    <div className="h-8 w-20 relative" >
                        <Image
                            src="/assets/logo-inverse-retina.png"
                            alt="Logo"
                            fill

                        />
                    </div>
                    <div>
                        <ul className="flex gap-10 ">
                            {
                                navLinks.map((page) => (
                                    <li key={page.id}>
                                        <Link className="text-[18px] font-bold text-[#FDFDFD]" href={page.link}>{page.name}</Link>
                                    </li>
                                ))
                            }

                        </ul>
                    </div>
                    <div>
                        <button className="bg-[#6600ff] font-bold text-4 py-4 px-8 rounded-sm text-white">Get Started</button>
                    </div>
                </div>
            </div>


        </>
    )

}