// work.jsx
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import { motion } from "motion/react"

const Work = ({ language }) => {
    const content = {
        id: {
            intro: 'Portofolio Saya',
            title: 'Karya Terbaru',
            description: 'Pilih salah satu project untuk melihat fitur utama dan dampak yang saya kerjakan.',
            spotlight: 'Project Spotlight',
            stack: 'Tech Stack',
            features: 'Fitur Utama',
            cta: 'Buka Project',
            noLink: 'Link project belum tersedia'
        },
        en: {
            intro: 'My Portfolio',
            title: 'My Latest Work',
            description: 'Pick any project to see key features and the impact I built.',
            spotlight: 'Project Spotlight',
            stack: 'Tech Stack',
            features: 'Key Features',
            cta: 'Open Project',
            noLink: 'Project link is not available yet'
        }
    };

    const text = content[language] || content.id;
    const [activeIndex, setActiveIndex] = useState(0);
    const activeProject = useMemo(() => workData[activeIndex] || workData[0], [activeIndex]);

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
                className='mb-2 text-lg text-center font-ovo'>{text.intro}</motion.h4>
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-5xl text-center font-ovo'>{text.title}</motion.h2>
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className='max-w-2xl mx-auto mt-5 mb-12 text-center text-gray-700 font-ovo dark:text-gray-300'>
                {text.description}
            </motion.p>

            <div className='grid items-start grid-cols-1 gap-6 my-10 lg:grid-cols-3'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:col-span-2'>
                    {workData.map((project, index) => (
                        <motion.button
                            whileHover={{ y: -6 }}
                            transition={{ duration: 0.2 }}
                            type='button'
                            key={index}
                            style={{ backgroundImage: `linear-gradient(to top, rgba(7, 10, 20, 0.68), rgba(7, 10, 20, 0.08)), url(${project.bgImage})` }}
                            className={`relative p-5 text-left bg-center bg-no-repeat bg-cover rounded-2xl cursor-pointer aspect-[4/3] overflow-hidden border ${activeIndex === index ? 'border-cyan-400 ring-2 ring-cyan-300/40 dark:ring-cyan-400/40' : 'border-white/60 dark:border-slate-700/80'}`}
                            onClick={() => setActiveIndex(index)}>
                            <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/65 via-black/20 to-transparent' />
                            <div className='absolute bottom-0 left-0 right-0 z-10 p-4'>
                                <h3 className='text-xl font-semibold text-white'>{project.title}</h3>
                                <p className='text-sm text-gray-100'>{project.description}</p>
                            </div>
                        </motion.button>
                    ))}
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.8 }}
                    className='sticky top-24 p-6 border shadow-xl lg:col-span-1 rounded-2xl bg-white/85 border-white/70 dark:bg-slate-900/80 dark:border-slate-700'>
                    <p className='text-xs tracking-[0.2em] uppercase text-cyan-700 dark:text-cyan-300'>{text.spotlight}</p>
                    <h3 className='mt-2 text-2xl font-semibold text-gray-900 dark:text-white'>{activeProject.title}</h3>
                    <p className='mt-3 text-sm leading-6 text-gray-700 dark:text-gray-300'>
                        {language === 'en' ? activeProject.detailEn : activeProject.detailId}
                    </p>

                    <div className='mt-5'>
                        <p className='text-sm font-semibold text-gray-800 dark:text-gray-200'>{text.stack}</p>
                        <p className='text-sm text-gray-600 dark:text-gray-400'>{activeProject.description}</p>
                    </div>

                    <div className='mt-5'>
                        <p className='mb-2 text-sm font-semibold text-gray-800 dark:text-gray-200'>{text.features}</p>
                        <ul className='space-y-2'>
                            {(language === 'en' ? activeProject.featuresEn : activeProject.featuresId).map((feature, idx) => (
                                <li key={idx} className='flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300'>
                                    <span className='mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-500' />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {activeProject.githubLink ? (
                        <button
                            type='button'
                            onClick={() => handleProjectClick(activeProject.githubLink)}
                            className='inline-flex items-center gap-2 px-5 py-2 mt-6 text-sm text-white transition rounded-full bg-slate-900 dark:bg-cyan-500 dark:text-slate-900 hover:opacity-90'
                        >
                            {text.cta}
                            <Image src={assets.right_arrow_white} alt='open-project' className='w-3' />
                        </button>
                    ) : (
                        <p className='mt-6 text-sm text-gray-500 dark:text-gray-400'>{text.noLink}</p>
                    )}
                </motion.aside>
            </div>
        </motion.div>

    )
}

export default Work