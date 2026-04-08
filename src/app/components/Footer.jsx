import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({ language }) => {
    const content = {
        id: {
            title: 'Portofolio Saya',
            rights: 'Semua hak dilindungi'
        },
        en: {
            title: 'My Portfolio',
            rights: 'All rights reserved'
        }
    };

    const text = content[language] || content.id;

  return (
    <div className='mt-20'>
        <div className='text-center'>
                        <h1 className='mx-auto text-3xl font-bold text-center text-gray-900 dark:text-white'>{text.title}</h1>
            <div className='flex items-center gap-3 mx-auto w-max'>
                <Image src={assets.mail_icon} alt='email-icon' className='w-6'/>
                <span className='text-gray-700 dark:text-gray-300'>hendralatiefulm@gmail.com</span>
            </div>
        </div>
        <div className='items-center justify-between text-center border-t border-gray-400 mx-[10%] sm:flex mt-12 py-6 dark:border-slate-700'>
                        <p className='text-gray-700 dark:text-gray-300'>© 2025 Hendra Latieful Maajid. {text.rights}</p>
            <ul className='flex items-center justify-center gap-6 mt-4 sm:mt-0'>
                <li>
                    <a href="https://github.com/HendraMaajid" target='_blank' className='text-gray-700 dark:text-gray-300'>Github</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/hendramaajid/" target='_blank' className='text-gray-700 dark:text-gray-300'>Instagram</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/hendralatiefulm/" target='_blank' className='text-gray-700 dark:text-gray-300'>Linked In</a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
