// work.jsx
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = () => {
    const handleProjectClick = (githubLink) => {
        if (githubLink) {
            window.open(githubLink, '_blank');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='w-full px-[12%] py-10 scroll-mt-20' id='work'>
            <motion.h4
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='mb-2 text-lg text-center font-ovo'>My Portofolio</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-5xl text-center font-ovo'>My Latest Work</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='max-w-2xl mx-auto mt-5 mb-12 text-center font-ovo'>
                Here are some of my latest works that showcase my skills and creativity.
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className='grid grid-cols-1 gap-5 my-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {workData.map((project, index) => (
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                        key={index}
                        style={{ backgroundImage: `url(${project.bgImage})` }}
                        className='relative bg-center bg-no-repeat bg-cover rounded cursor-pointer aspect-square group'
                        onClick={() => handleProjectClick(project.githubLink)}>
                        <div className='absolute flex items-center justify-between w-10/12 px-5 py-3 duration-500 -translate-x-1/2 bg-white rounded-md bottom-5 left-1/2 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                            <div className='flex items-center justify-center transition border border-black rounded-full shadow-[2px_2px_0_#000] w-9 aspect-square group-hover:bg-lime-300'>
                                <Image src={assets.send_icon} alt='send-icon' className='w-5' />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>

    )
}

export default Work