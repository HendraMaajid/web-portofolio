import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'

const Navbar = () => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false)
  const handleMenuToggle = () => {
    sideMenuRef.current.style.transform = 'translateX(-14rem)';
  }
  const handleCloseMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(14rem)';
  }

  useEffect(() =>
    window.addEventListener('scroll', ()=>{
      if(scrollY > 50){
        setIsScroll(true)
      }
    },[])
  )
  
  return (
    <>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[5.5%] py-4 flex items-center justify-between z-5 ${isScroll ? "bg-white/50 backdrop-blur-md" : ""}`}>
        <a href="#top">
            <Image src={assets.logo} alt='logo' className='cursor-pointer w-28 mr-14'/>
        </a>
        <ul className='items-center hidden gap-6 px-12 py-3 bg-white bg-opacity-50 rounded-full shadow-md md:flex lg:gap-8'>
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
            <a href="#contact" className='items-center hidden gap-3 px-10 py-3 border border-gray-600 rounded-full lg:flex '>Contact <Image src={assets.arrow_icon} alt='arr-icon' className='w-3'/></a>
            <button onClick={handleMenuToggle} className='md:hidden'>
                <Image src={assets.menu_black} alt='menu-icon' className='block w-6 ml-3 md:hidden'/>
            </button>
        </div>
        
        {/* Mobile Menu Component*/ }
        <ul ref={sideMenuRef} className='fixed top-0 bottom-0 z-50 flex flex-col w-64 h-screen gap-4 px-10 py-20 transition duration-500 md:hidden -right-64 bg-indigo-50'>
            <div className='absolute top-6 right-15' onClick={handleCloseMenu}>
              <Image src={assets.close_black} alt='close-icon' className='w-5 cursor-pointer'/> 
            </div>
            <li><a href="#top" className='font-ovo' onClick={handleCloseMenu}>Home</a></li>
            <li><a href="#about" className='font-ovo' onClick={handleCloseMenu}>About</a></li>
            <li><a href="#services" className='font-ovo' onClick={handleCloseMenu}>Services</a></li>
            <li><a href="#work" className='font-ovo' onClick={handleCloseMenu}>My Works</a></li>
            <li><a href="#contact" className='font-ovo' onClick={handleCloseMenu}>Contact Me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
