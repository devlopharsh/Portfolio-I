import React from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <>
      <div className='h-screen w-screen relative top-0 left-0 flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeIn' }}
          viewport={{ once: true }}
          className='absolute h-10/12 w-9/12 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/15 rounded-2xl flex flex-col items-center justify-center'>
          <h1 className='text-5xl text-white font-bold mt-10 '>Let's Connect</h1>
          <form className='w-4/5 h-11/12 py-10' action="URL" method='POST'>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-1/8 px-5 py-3 rounded-2xl bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none mt-5"
            />

            <div className="flex gap-4 h-1/8 mt-7">
              <input
                type="email"
                placeholder="Email"
                className="w-1/2  px-5 py-3 rounded-2xl bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none "
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2  px-5 py-3 rounded-2xl bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none "
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-5 py-3 rounded-2xl bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none resize-none mt-7"
            />

            <button
              type="submit"
              className="w-1/5 h-1/9 bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 py-2 rounded-full font-medium text-2xl shadow-md hover:scale-105 transition-transform mt-10"
            >
              Send
            </button>
            <div className=' flex justify-center items-center gap-5 my-12'>
              <a href="https://www.linkedin.com/in/harsh-kumar-31391a31a/" target='blank' ><img src="./linkedin.svg" alt="linkedin" height={50} width={50} className='hover:invert duration-300'/></a>
              <a href="https://github.com/devlopharsh" target='blank' ><img src="./github.svg" alt="Github" height={50} width={50} className='hover:invert duration-300' /></a>
              {/* <a href="" target='blank' height={50} width={50} ><img src="" alt="Discord" /></a> */}
            </div>
          </form>
        </motion.div>
      </div>
    </>
  )
}

export default Contact
