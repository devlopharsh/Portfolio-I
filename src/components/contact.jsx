import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'

//styles import 

const Contact = () => {
  return (
    <>
      <div className='w-full h-full bg-gradient-to-br min-h-screen flex flex-col md:flex-row items-center justify-around '>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeIn' }}
          viewport={{ once: true }}
          className='h-fit md:h-[80%] w-[90%] md:w-[40%] max-w-4xl bg-gradient-to-br backdrop-blur-md border border-white/15 rounded-2xl flex flex-col items-center justify-center mt-8 mb-3.5 md:mt-0 md:mb-0'
        >
          <h1 className='text-5xl text-white font-bold mt-5 md:mt-3'>Let's Connect</h1>

          <form className='w-4/5 h-fit py-5' action="URL" method='POST'>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-2xl bg-transparent border border-gray-500 text-white placeholder-gray-500 focus:outline-none mt-5"
            />

            <div className="flex gap-4 mt-5">
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 px-5 py-3 rounded-2xl bg-transparent border border-gray-500 text-white placeholder-gray-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 px-5 py-3 rounded-2xl bg-transparent border border-gray-500 text-white placeholder-gray-500 focus:outline-none"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-5 py-3 rounded-2xl bg-transparent border border-gray-500 text-white placeholder-gray-500 focus:outline-none resize-none mt-7"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 py-2 rounded-full shadow-md hover:scale-105 transition-transform mt-10"
            >
              Send
            </button>
          </form>
        </motion.div>
        <div className='h-[80%] w-[90%] md:w-[50%] max-w-4xl flex flex-col items-center justify-around md:justify-between '>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeIn', delay: '0.5' }}
            viewport={{ once: true }}
            className='h-[45%] w-full max-w-4xl bg-gradient-to-br backdrop-blur-md border border-white/15 rounded-2xl flex flex-col items-center justify-center'
          >
            <h1 className='text-5xl text-white font-bold mt-5 md:mt-3'>Contact Me</h1>
            <p className='text-gray-400 text-sm md:text-md w-[80%] mt-3 '>With young energy and eagerness to learn new tech and applying them in use, I’m always open to new opportunities, creative collaborations, or simply connecting with like-minded individuals. Whether you have a project in mind or just want to exchange ideas, feel free to reach out—I’d love to chat!</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeIn', delay: 1 }}
            viewport={{ once: true }}
            className='h-[45%] w-full max-w-4xl bg-gradient-to-br backdrop-blur-md border border-white/15 rounded-2xl flex flex-col items-center justify-center'
          >
            <div className='flex justify-center items-center gap-5 my-5'>
              <a href="https://www.linkedin.com/in/harsh-kumar-31391a31a/" target='blank'>
                <img src="./linkedin.svg" alt="linkedin" height={100} width={100} className='hover:invert duration-300' />
              </a>
              <a href="https://github.com/devlopharsh" target='blank'>
                <img src="./github.svg" alt="Github" height={100} width={100} className='hover:invert duration-300' />
              </a>
              <a href="https://github.com/devlopharsh" target='blank'>
                <img src="./mail.svg" alt="Github" height={100} width={100} className='hover:invert duration-300' />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default Contact;
