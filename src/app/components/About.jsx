import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <motion.div className='w-full px-[12%] py-10 scroll-mt-20' id='about' initial={{ opacity: 0 }} whileInView={{ opacity:1 }} transition={{ duration: 0.7 }}>
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      className='mb-2 text-lg text-center font-ovo'>Introduction</motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      className='text-5xl text-center font-ovo'>About Me</motion.h2>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
       className='flex flex-col items-center w-full gap-20 my-20 lg:flex-row'>
        <motion.div
            initial={{ scale: 0.4 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className='w-64 rounded-3xl sm:w-80 max-w-none'>
            <Image src={assets.saya} alt='user-img' className='w-full rounded-3xl'/>
        </motion.div>
        <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.75 }}
        className='flex-1'>
            <p className='max-w-3xl mb-10 text-justify font-ovo'>
                Saya adalah mahasiswa Informatika di Universitas Jenderal Soedirman yang berminat terhadap dunia teknologi dan pemrograman. Selama perkuliahan, saya telah mengembangkan keahlian dalam berbagai bahasa pemrograman dan selalu antusias untuk mengeksplorasi tren teknologi terbaru. Melalui berbagai projek akademik dan personal, saya terus mengasah kemampuan problem-solving dan berpikir analitis
            </p>
            <motion.ul
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.9 }}
            className='grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'> 
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <motion.li
                     initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                     transition={{ duration: 0.2 }}
                     whileHover={{ scale: 1.1 }}
                    key={index} className='p-6 duration-500 border border-gray-400 cursor-pointer rounded-xl hover:bg-gray-100 hover:-translate-y-1'>
                        <Image src={icon} alt={title} className='mt-3 w-7'/>
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>
            <motion.h4
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 1.2 }}
            className='my-6 text-gray-700 font-ovo'>Tools</motion.h4>
            <motion.ul
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 1.1 }}
            className='flex items-center gap-4 sm:gap-5'>
                {toolsData.map((tool, index) => (
                    <motion.li
                    whileHover={{ scale: 1.1 }}
                    key={index} className='duration-500 hover:-translate-y-1'>
                        <Image src={tool} alt='tool-icon' className='w-8'/>
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
