import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='flex flex-col items-center justify-center w-11/12 h-screen max-w-3xl gap-6 pt-20 mx-auto text-center'>
      <motion.div 
        initial={{ scale:0 }}
        whileInView={{ scale:1 }}
        transition={{ duration: 0.5, type:"spring", stiffness:100 }}
      >
        <Image src={assets.saya} alt='foto-profil' className='object-cover w-32 h-32 rounded-full'/>
      </motion.div>
      <motion.h3
        initial={{ y:-20, opacity:0 }}
        whileInView={{ y:0, opacity:1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
       className='flex mb-3 text-xl md:text-2xl font-ovo'>Hi! Saya Hendra Latieful Maajid </motion.h3>
      <motion.h1
        initial={{ y:-20, opacity:0 }}
        whileInView={{ y:0, opacity:1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Full Stack Developer</motion.h1>
      <motion.p
        initial={{ y:-20, opacity:0 }}
        whileInView={{ y:0, opacity:1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      className='max-w-2xl mx-auto font-ovo'>
        Saya merupakan mahasiswa Informatika Universitas Jenderal Soedirman yang tertarik dengan teknologi khususnya dalam hal pengembangan website
      </motion.p>
      <div className='flex flex-col items-center gap-4 mt-8 sm:flex-row'>
        <motion.a
          initial={{ y:20, opacity:0 }}
          whileInView={{ y:0, opacity:1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        href="#contact" className='flex items-center gap-2 px-10 py-3 text-white bg-black border border-white rounded-full'>Contact Me <Image src={assets.right_arrow_white} alt='arr-w-icon' className='w-4'/></motion.a>
        <motion.a
          initial={{ y:20, opacity:0 }}
          whileInView={{ y:0, opacity:1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        href="/hendralm-resume.pdf" download className='flex items-center gap-2 px-10 py-3 border border-gray-500 rounded-full'>
            My CV <Image src={assets.download_icon} alt='download-icon' className='w-4'/>
        </motion.a>
      </div>
    </div>
  )
}

export default Header
