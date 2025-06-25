import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <h1 className='mx-auto text-3xl font-bold text-center'>My Portofolio </h1>
            <div className='flex items-center gap-3 mx-auto w-max'>
                <Image src={assets.mail_icon} alt='email-icon' className='w-6'/>
                hendralatiefulm@gmail.com
            </div>
        </div>
        <div className='items-center justify-between text-center border-t border-gray-400 mx-[10%] sm:flex mt-12 py-6'>
            <p>© 2025 Hendra Latieful Maajid. All rights reserved</p>
            <ul className='flex items-center justify-center gap-6 mt-4 sm:mt-0'>
                <li>
                    <a href="https://github.com/HendraMaajid" target='_blank'>Github</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/hendramaajid/" target='_blank'>Instagram</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/hendralatiefulm/" target='_blank'>Linked In</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
