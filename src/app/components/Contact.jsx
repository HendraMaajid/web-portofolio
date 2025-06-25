import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"
const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "933de32b-08d2-425c-a442-faa8206fed17");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.7 }}
    className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]' id='contact'>
       <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
       className='mb-2 text-lg text-center font-ovo'>Contact Me</motion.h4>
        <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className='text-5xl text-center font-ovo'>Get In Touch With me</motion.h2>
        <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className='max-w-2xl mx-auto mt-5 mb-12 text-center font-ovo'>
            If you have any questions, want to collaborate, or just want to say hi, feel free to reach out! I'm always open to new opportunities and connections.
        </motion.p>

        <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-1 gap-6 mb-6 sm:grid-cols-2'>
                <motion.input
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                name='name' type="text" placeholder='Enter Your Name' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' required/>
                <motion.input
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.5 }}
                name='email' type="email" placeholder='Enter Your Email' className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' required/>
            </div>
            <motion.textarea
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            name='message' placeholder="Enter Your Message" rows='6' id="" className='w-full p-4 border-[0.5px] outline-none border-gray-400 rounded-md bg-white mb-6' required></motion.textarea>
            <motion.button
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.9 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            type='submit' className='flex items-center justify-between gap-2 px-8 py-3 mx-auto text-white duration-500 rounded-full bg-black/80 w-max hover:bg-black'>
                Send Now <Image src={assets.right_arrow_white} alt='arr-w-r' className='w-4'/>
            </motion.button>

            <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact
