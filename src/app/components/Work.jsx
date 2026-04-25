// work.jsx
import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = ({ language }) => {
    const content = {
        id: {
            intro: 'Portofolio Saya',
            title: 'Karya Terbaru',
            description: 'Pilih salah satu project untuk melihat fitur utama dan dampak yang saya kerjakan.',
            stack: 'Tech Stack',
            features: 'Fitur Utama',
            cta: 'Buka Project',
            noLink: 'Link project belum tersedia'
        },
        en: {
            intro: 'My Portfolio',
            title: 'My Latest Work',
            description: 'Pick any project to see key features and the impact I built.',
            stack: 'Tech Stack',
            features: 'Key Features',
            cta: 'Open Project',
            noLink: 'Project link is not available yet'
        }
    };

    const text = content[language] || content.id;

    const handleProjectClick = (githubLink) => {
        if (githubLink) {
            window.open(githubLink, '_blank');
        }
    };

    const renderProjectCard = (project, index, isFeatured) => (
        <motion.div
            layout
            key={index}
            className={`flex flex-col overflow-hidden bg-white/90 dark:bg-slate-900/85 border border-gray-200 dark:border-slate-700/80 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 ${isFeatured ? 'w-full max-w-3xl mx-auto ring-1 ring-cyan-300/30 dark:ring-cyan-400/30 shadow-lg' : ''}`}
        >
            {/* Header Image & Title */}
            <div className="relative group">
                <div 
                    className={`w-full bg-contain bg-no-repeat bg-center ${isFeatured ? 'aspect-[16/9] sm:aspect-[2/1]' : 'aspect-[16/9]'}`} 
                    style={{ backgroundImage: `url(${project.bgImage})` }} 
                />
                <div className='absolute inset-0 transition-opacity duration-300 opacity-100 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-90' />
                <div className='absolute bottom-0 left-0 right-0 flex items-end justify-between p-5'>
                    <div>
                        <h3 className={`font-semibold text-white ${isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{project.title}</h3>
                        <p className={`mt-1 text-gray-200 ${isFeatured ? 'text-base sm:text-lg' : 'text-sm'}`}>{project.description}</p>
                    </div>
                </div>
            </div>

            {/* Details (Always visible) */}
            <div className="overflow-hidden border-t border-gray-100 dark:border-slate-800">
                <div className="p-5 sm:p-6">
                    <p className={`leading-6 text-gray-700 dark:text-gray-300 ${isFeatured ? 'text-base' : 'text-sm'}`}>
                        {language === 'en' ? project.detailEn : project.detailId}
                    </p>

                    <div className='mt-5'>
                        <p className={`mb-2 font-semibold text-gray-800 dark:text-gray-200 ${isFeatured ? 'text-base' : 'text-sm'}`}>{text.features}</p>
                        <ul className='space-y-2'>
                            {(language === 'en' ? project.featuresEn : project.featuresId).map((feature, idx) => (
                                <li key={idx} className={`flex items-start gap-2 text-gray-700 dark:text-gray-300 ${isFeatured ? 'text-base' : 'text-sm'}`}>
                                    <span className='mt-2 inline-block h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0' />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {project.githubLink ? (
                        <button
                            type='button'
                            onClick={() => handleProjectClick(project.githubLink)}
                            className={`inline-flex items-center gap-2 px-5 py-2 mt-6 text-white transition rounded-full bg-slate-900 dark:bg-cyan-500 dark:text-slate-900 hover:opacity-90 ${isFeatured ? 'text-base' : 'text-sm'}`}
                        >
                            {text.cta}
                            <Image src={assets.right_arrow_white} alt='open-project' className='w-3' />
                        </button>
                    ) : (
                        <p className={`mt-6 text-gray-500 dark:text-gray-400 ${isFeatured ? 'text-base' : 'text-sm'}`}>{text.noLink}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className='w-full px-5 py-10 scroll-mt-20 sm:px-8 lg:px-[12%]' id='work'>
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

            <div className="flex flex-col gap-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                >
                    {workData.length > 0 && renderProjectCard(workData[0], 0, true)}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    className='grid items-start grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {workData.slice(1).map((project, idx) => renderProjectCard(project, idx + 1, false))}
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Work