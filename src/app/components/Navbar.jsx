import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'

const Navbar = ({ language, onLanguageChange }) => {
  const sideMenuRef = useRef();
  const [isScroll, setIsScroll] = useState(false)

  const navText = {
    id: {
      home: 'Beranda',
      about: 'Tentang',
      work: 'Karya',
      contact: 'Kontak'
    },
    en: {
      home: 'Home',
      about: 'About',
      work: 'My Works',
      contact: 'Contact Me'
    }
  };

  const text = navText[language] || navText.id;

  const handleMenuToggle = () => {
    sideMenuRef.current.style.transform = 'translateX(-14rem)';
  }
  const handleCloseMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(14rem)';
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <>
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[5.5%] py-4 flex items-center justify-between z-5 ${isScroll ? "bg-white/50 backdrop-blur-md" : ""}`}>
        <a href="#top">
            <h1 className='text-3xl font-bold'>My Portofolio </h1>
        </a>
        <ul className={`items-center hidden gap-6 px-12 py-3 rounded-full md:flex lg:gap-8 ${isScroll ? "" : "bg-white bg-opacity-50 shadow-md"}`}>
            <li><a href="#top" className='font-ovo'>{text.home}</a></li>
            <li><a href="#about" className='font-ovo'>{text.about}</a></li>
            <li><a href="#work" className='font-ovo'>{text.work}</a></li>
            <li><a href="#contact" className='font-ovo'>{text.contact}</a></li>
        </ul>
        <div className='flex items-center gap-4 lg:gap-6'>
            <div className='items-center hidden p-1 border border-gray-400 rounded-full sm:flex'>
                <button
                  type='button'
                  onClick={() => onLanguageChange('id')}
                  className={`px-3 py-1 text-sm rounded-full ${language === 'id' ? 'bg-black text-white' : 'text-gray-700'}`}
                >
                  ID
                </button>
                <button
                  type='button'
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 text-sm rounded-full ${language === 'en' ? 'bg-black text-white' : 'text-gray-700'}`}
                >
                  EN
                </button>
            </div>
            <a href="#contact" className='items-center hidden gap-3 px-10 py-3 border border-gray-600 rounded-full lg:flex '>{text.contact} <Image src={assets.arrow_icon} alt='arr-icon' className='w-3'/></a>
            <button onClick={handleMenuToggle} className='md:hidden'>
                <Image src={assets.menu_black} alt='menu-icon' className='block w-6 ml-3 md:hidden'/>
            </button>
        </div>
        
        {/* Mobile Menu Component*/ }
        <ul ref={sideMenuRef} className='fixed top-0 bottom-0 z-50 flex flex-col w-64 h-screen gap-4 px-10 py-20 transition duration-500 bg-white md:hidden -right-64'>
            <div className='absolute top-6 right-15' onClick={handleCloseMenu}>
              <Image src={assets.close_black} alt='close-icon' className='w-5 cursor-pointer'/> 
            </div>
            <li className='flex items-center gap-2 mb-2'>
                <button
                  type='button'
                  onClick={() => onLanguageChange('id')}
                  className={`px-3 py-1 text-sm rounded-full border ${language === 'id' ? 'bg-black text-white border-black' : 'border-gray-400 text-gray-700'}`}
                >
                  ID
                </button>
                <button
                  type='button'
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 text-sm rounded-full border ${language === 'en' ? 'bg-black text-white border-black' : 'border-gray-400 text-gray-700'}`}
                >
                  EN
                </button>
            </li>
            <li><a href="#top" className='font-ovo' onClick={handleCloseMenu}>{text.home}</a></li>
            <li><a href="#about" className='font-ovo' onClick={handleCloseMenu}>{text.about}</a></li>
            <li><a href="#work" className='font-ovo' onClick={handleCloseMenu}>{text.work}</a></li>
            <li><a href="#contact" className='font-ovo' onClick={handleCloseMenu}>{text.contact}</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
