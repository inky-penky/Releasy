'use client'

import Image from "next/image"
import Logo from "@/public/vectors/images/logo-no-background 1.png"
import Link from "next/link"
import { useState } from "react"
import Hamburger from "@/public/vectors/svg/hamburger.svg"
import Cancel from "@/public/vectors/svg/cancel.svg"





type LinkItem ={
    text: string;
    link: string;
}

const links: LinkItem[] = [
    {
        text: 'Features',
        link: '/features'
    },
    {
        text: 'Use Cases',
        link: '/usecases'
    },
    {
        text: 'Blog',
        link: '/blog'
    },
    {
        text: 'Pricing',
        link: '/pricing'
    },
    {
        text: 'Login',
        link: '/login'
    }
];

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle(prevToggle => !prevToggle);
    }


    return (
      <div className='flex justify-between lg:py-8 lg:px-20 items-center p-5'>
          <div className="w-[5rem] lg:w-[7rem]">
            <Link href="/">
                <Image src={Logo} alt="logo" />
            </Link>
          </div>

        <div className="flex flex-col justify-center lg:hidden gap-5 w-full">
            <div className="flex justify-end">
                <div className={`${toggle? 'hidden':'block'}`} onClick={handleClick}>
                    <Image src={Hamburger} alt="hamburger" />
                </div>
                <div className={`${toggle? 'block':'hidden'}`} onClick={handleClick}>
                    <Image src={Cancel} alt="cancel" />
                </div>
            </div>

            <div className={`${toggle? 'block': 'hidden'} flex flex-col items-center gap-5`}>
                <div className="flex flex-col gap-3">
                    {links.map((item, index) => (
                        <Link href={item.link} key={index}>{item.text}</Link>
                    ))}
                </div>
                <a href="" className="bg-black p-3 rounded-lg text-white text-xs cursor-pointer">Signup for Free</a>
            </div>
        </div>

          <div className="lg:flex items-center text-sm gap-10 hidden">
            <div className="flex gap-5">
                {links.map((item, index) => (
                    <Link href={item.link} key={index}>{item.text}</Link>
                ))}
            </div>
            <a href="" className="bg-black p-3 rounded-lg text-white text-xs cursor-pointer">Signup for Free</a>
          </div>
      </div>
    )
  }
  
  export default Navbar