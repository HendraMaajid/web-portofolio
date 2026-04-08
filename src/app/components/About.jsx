import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"
import Image from 'next/image'
import React from 'react'

const About = ({ language }) => {
  const content = {
    id: {
      intro: 'Perkenalan',
      title: 'Tentang Saya',
      bio: 'Saya adalah fresh graduate Informatika Universitas Jenderal Soedirman dan saat ini aktif sebagai freelancer Full Stack Developer. Saya berpengalaman membangun aplikasi web berbasis Laravel, React, dan AI integration melalui berbagai proyek nyata, termasuk sistem informasi rumah sakit, learning management system berbasis RAG, serta platform manajemen turnamen. Saya menikmati proses problem-solving, kolaborasi tim, dan pengembangan solusi digital yang berdampak.',
      tools: 'Tools',
      info: {
        languages: 'HTML, CSS, JavaScript, PHP, React Js, Next.js, Laravel, PostgreSQL, MySQL',
        education: 'Universitas Jenderal Soedirman',
        projects: 'Membangun lebih dari 7 proyek'
      }
    },
    en: {
      intro: 'Introduction',
      title: 'About Me',
      bio: 'I am an Informatics fresh graduate from Jenderal Soedirman University and currently working as a freelance Full Stack Developer. I have hands-on experience building web applications with Laravel, React, and AI integration through real projects, including a hospital information system, an RAG-based learning management system, and a tournament management platform. I enjoy problem-solving, team collaboration, and delivering impactful digital solutions.',
      tools: 'Tools',
      info: {
        languages: 'HTML, CSS, JavaScript, PHP, React Js, Next.js, Laravel, PostgreSQL, MySQL',
        education: 'Jenderal Soedirman University',
        projects: 'Built more than 7 projects'
      }
    }
  };

  const text = content[language] || content.id;

  const localizedInfo = infoList.map((item) => {
    if (item.title === 'Languages') {
      return { ...item, title: language === 'id' ? 'Bahasa' : 'Languages', description: text.info.languages };
    }
    if (item.title === 'Education') {
      return { ...item, title: language === 'id' ? 'Pendidikan' : 'Education', description: text.info.education };
    }
    if (item.title === 'Projects') {
      return { ...item, title: language === 'id' ? 'Proyek' : 'Projects', description: text.info.projects };
    }
    return item;
  });

  return (
    <motion.div className='w-full px-[12%] py-10 scroll-mt-20' id='about' initial={{ opacity: 0 }} whileInView={{ opacity:1 }} transition={{ duration: 0.7 }}>
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      className='mb-2 text-lg text-center text-gray-700 font-ovo dark:text-gray-300'>{text.intro}</motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.45 }}
      className='text-5xl text-center text-gray-900 font-ovo dark:text-white'>{text.title}</motion.h2>
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
            <p className='max-w-3xl mb-10 text-justify text-gray-700 font-ovo dark:text-gray-300'>
              {text.bio}
            </p>
            <motion.ul
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 0.9 }}
            className='grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'> 
              {localizedInfo.map(({icon, iconDark, title, description}, index) => (
                    <motion.li
                     initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                     transition={{ duration: 0.2 }}
                     whileHover={{ scale: 1.1 }}
                    key={index} className='p-6 duration-500 border border-gray-400 cursor-pointer rounded-xl hover:bg-gray-100 dark:border-slate-700 dark:bg-slate-900/50 dark:hover:bg-slate-800 hover:-translate-y-1'>
                        <Image src={icon} alt={title} className='mt-3 w-7'/>
                      <h3 className='my-4 font-semibold text-gray-700 dark:text-gray-200'>{title}</h3>
                      <p className='text-sm text-gray-600 dark:text-gray-400'>{description}</p>
                    </motion.li>
                ))}
            </motion.ul>
            <motion.h4
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 1.2 }}
                className='my-6 text-gray-700 font-ovo dark:text-gray-300'>{text.tools}</motion.h4>
            <motion.ul
             initial={{ y: 20, opacity: 0 }}
             whileInView={{ y: 0, opacity: 1 }}
             transition={{ duration: 0.5, delay: 1.1 }}
            className='flex flex-wrap items-center gap-3 sm:gap-4'>
                {toolsData.map((tool, index) => (
                    <motion.li
                    whileHover={{ scale: 1.1 }}
                    key={index} className='duration-500 hover:-translate-y-1'>
                        {tool.icon ? (
                          <Image src={tool.icon} alt={tool.name} className='w-8'/>
                        ) : (
                          <span className='px-3 py-1 text-sm text-gray-700 border border-gray-300 rounded-full dark:border-slate-600 dark:text-gray-300'>
                            {tool.name}
                          </span>
                        )}
                    </motion.li>
                ))}
            </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default About
