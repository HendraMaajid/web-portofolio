import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'

const Navbar = ({ language, onLanguageChange, theme, onThemeChange }) => {
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
  const isDark = theme === 'dark';

  const handleMenuToggle = () => {
    sideMenuRef.current.style.transform = 'translateX(-14rem)';
  }
  const handleCloseMenu = () => {
    sideMenuRef.current.style.transform = 'translateX(14rem)';
  }

  const handleThemeToggle = () => {
    onThemeChange(isDark ? 'light' : 'dark');
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
      <nav className={`w-full fixed px-5 lg:px-8 xl:px-[5.5%] py-4 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr] md:items-center z-50 transition-colors ${isScroll ? "bg-white/65 dark:bg-slate-900/70 backdrop-blur-md" : ""}`}>
        <a href="#top" className='md:justify-self-start'>
            <h1 className='text-3xl font-bold text-gray-900 dark:text-white'>My Portofolio </h1>
        </a>
        <ul className={`items-center hidden gap-6 px-12 py-3 rounded-full md:flex md:justify-self-center lg:gap-8 ${isScroll ? "" : "bg-white/60 dark:bg-slate-900/60 shadow-md"}`}>
            <li><a href="#top" className='font-ovo text-gray-800 dark:text-gray-100'>{text.home}</a></li>
            <li><a href="#about" className='font-ovo text-gray-800 dark:text-gray-100'>{text.about}</a></li>
            <li><a href="#work" className='font-ovo text-gray-800 dark:text-gray-100'>{text.work}</a></li>
            <li><a href="#contact" className='font-ovo text-gray-800 dark:text-gray-100'>{text.contact}</a></li>
        </ul>
        <div className='flex items-center gap-4 ml-auto lg:gap-6 md:ml-0 md:justify-self-end'>
            <button
              type='button'
              onClick={handleThemeToggle}
              className='items-center justify-center hidden w-10 h-10 border border-gray-400 rounded-full sm:flex dark:border-gray-600'
              aria-label='Toggle dark mode'
            >
              <Image src={isDark ? assets.sun_icon : assets.moon_icon} alt='theme-icon' className='w-5' />
            </button>
            <div className='items-center hidden p-1 border border-gray-400 rounded-full sm:flex dark:border-gray-600'>
                <button
                  type='button'
                  onClick={() => onLanguageChange('id')}
                  className={`px-3 py-1 text-sm rounded-full ${language === 'id' ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-gray-700 dark:text-gray-300'}`}
                >
                  ID
                </button>
                <button
                  type='button'
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 text-sm rounded-full ${language === 'en' ? 'bg-black text-white dark:bg-white dark:text-black' : 'text-gray-700 dark:text-gray-300'}`}
                >
                  EN
                </button>
            </div>
            <a href="#contact" className='items-center hidden gap-3 px-10 py-3 border border-gray-600 rounded-full lg:flex dark:border-gray-500 dark:text-gray-100'>{text.contact} <Image src={isDark ? assets.arrow_icon_dark : assets.arrow_icon} alt='arr-icon' className='w-3'/></a>
            <button onClick={handleMenuToggle} className='md:hidden'>
                <Image src={isDark ? assets.menu_white : assets.menu_black} alt='menu-icon' className='block w-6 ml-3 md:hidden'/>
            </button>
        </div>
        
        {/* Mobile Menu Component*/ }
        <ul ref={sideMenuRef} className='fixed top-0 bottom-0 z-50 flex flex-col w-64 h-screen gap-4 px-10 py-20 transition duration-500 bg-white dark:bg-slate-900 md:hidden -right-64'>
            <div className='absolute top-6 right-15' onClick={handleCloseMenu}>
              <Image src={isDark ? assets.close_white : assets.close_black} alt='close-icon' className='w-5 cursor-pointer'/> 
            </div>
            <li className='flex items-center gap-2 mb-2'>
                <button
                  type='button'
                  onClick={handleThemeToggle}
                  className='flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full dark:border-gray-600'
                  aria-label='Toggle dark mode'
                >
                  <Image src={isDark ? assets.sun_icon : assets.moon_icon} alt='theme-icon-mobile' className='w-4' />
                </button>
                <button
                  type='button'
                  onClick={() => onLanguageChange('id')}
                  className={`px-3 py-1 text-sm rounded-full border ${language === 'id' ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white' : 'border-gray-400 text-gray-700 dark:border-gray-600 dark:text-gray-300'}`}
                >
                  ID
                </button>
                <button
                  type='button'
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1 text-sm rounded-full border ${language === 'en' ? 'bg-black text-white border-black dark:bg-white dark:text-black dark:border-white' : 'border-gray-400 text-gray-700 dark:border-gray-600 dark:text-gray-300'}`}
                >
                  EN
                </button>
            </li>
            <li><a href="#top" className='font-ovo text-gray-800 dark:text-gray-100' onClick={handleCloseMenu}>{text.home}</a></li>
            <li><a href="#about" className='font-ovo text-gray-800 dark:text-gray-100' onClick={handleCloseMenu}>{text.about}</a></li>
            <li><a href="#work" className='font-ovo text-gray-800 dark:text-gray-100' onClick={handleCloseMenu}>{text.work}</a></li>
            <li><a href="#contact" className='font-ovo text-gray-800 dark:text-gray-100' onClick={handleCloseMenu}>{text.contact}</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
