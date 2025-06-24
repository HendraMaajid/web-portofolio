import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='w-full fixed px-5 lg:px-8 xl:px-[5.5%] py-4 flex items-center justify-between z-50'>
        <a href="#top">
            <Image src={assets.logo} alt='logo' className='w-28 cursor-pointer mr-14'/>
        </a>
        <ul className='hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 rounded-full bg-white shadow-md bg-opacity-50'>
            <li><a href="#top" className='font-ovo'>Home</a></li>
            <li><a href="#about" className='font-ovo'>About</a></li>
            <li><a href="#services" className='font-ovo'>Services</a></li>
            <li><a href="#work" className='font-ovo'>My Works</a></li>
            <li><a href="#contact" className='font-ovo'>Contact Me</a></li>
        </ul>
        <div className='flex items-center gap-4 lg:gap-6'>
            <button>
                <Image src={assets.moon_icon} alt='moon-icon' className='w-6'/>
            </button>
            <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-3 border border-gray-600 rounded-full '>Contact <Image src={assets.arrow_icon} alt='arr-icon' className='w-3'/></a>
            <button>
                <Image src={assets.menu_black} alt='menu-icon' className='block md:hidden ml-3 w-6'/>
            </button>
        </div>
      </nav>
    </>
  )
}

export default Navbar
