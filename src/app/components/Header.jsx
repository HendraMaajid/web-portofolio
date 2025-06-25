import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-6 pt-20 mx-auto text-center'>
      <div>
        <Image src={assets.saya} alt='foto-profil' className='object-cover w-32 h-32 rounded-full'/>
      </div>
      <h3 className='flex mb-3 text-xl md:text-2xl font-ovo'>Hi! Saya Hendra Latieful Maajid </h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Full Stack Developer</h1>
      <p className='max-w-2xl mx-auto font-ovo'>
        Saya merupakan mahasiswa Informatika Universitas Jenderal Soedirman yang tertarik dengan teknologi khususnya dalam hal pengembangan website
      </p>
      <div className='flex flex-col items-center gap-4 mt-8 sm:flex-row'>
        <a href="contact" className='flex items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full'>Contact Me <Image src={assets.right_arrow_white} alt='arr-w-icon' className='w-4'/></a>
        <a href="/sample-resume.pdf" download className='flex items-center gap-2 px-10 py-3 border border-gray-500 rounded-full'>
            My CV <Image src={assets.download_icon} alt='download-icon' className='w-4'/>
        </a>
      </div>
    </div>
  )
}

export default Header
