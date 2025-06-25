import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='w-full px-[12%] py-10 scroll-mt-20' id='about'>
      <h4 className='mb-2 text-lg text-center font-ovo'>Introduction</h4>
      <h2 className='text-5xl text-center font-ovo'>About Me</h2>
      <div className='flex flex-col items-center w-full gap-20 my-20 lg:flex-row'>
        <div className='w-64 rounded-3xl sm:w-80 max-w-none'>
            <Image src={assets.saya} alt='user-img' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='max-w-3xl mb-10 text-justify font-ovo'>
                Saya adalah mahasiswa Informatika di Universitas Jenderal Soedirman yang berminat terhadap dunia teknologi dan pemrograman. Selama perkuliahan, saya telah mengembangkan keahlian dalam berbagai bahasa pemrograman dan selalu antusias untuk mengeksplorasi tren teknologi terbaru. Melalui berbagai projek akademik dan personal, saya terus mengasah kemampuan problem-solving dan berpikir analitis
            </p>
            <ul className='grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3'> 
                {infoList.map(({icon, iconDark, title, description}, index) => (
                    <li key={index} className='p-6 duration-500 border border-gray-400 cursor-pointer rounded-xl hover:bg-gray-100 hover:-translate-y-1'>
                        <Image src={icon} alt={title} className='mt-3 w-7'/>
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600'>{description}</p>
                    </li>
                ))}
            </ul>
            <h4 className='my-6 text-gray-700 font-ovo'>Tools</h4>
            <ul className='flex items-center gap-4 sm:gap-5'>
                {toolsData.map((tool, index) => (
                    <li key={index} className='hover:-translate-y-1 duration-500'>
                        <Image src={tool} alt='tool-icon' className='w-8'/>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
