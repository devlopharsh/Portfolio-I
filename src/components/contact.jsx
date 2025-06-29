import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'

//styles import 
import '../styles/net.css'

const Contact = () => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;

      setLastMousePos({ x: e.clientX, y: e.clientY });

      // Apply a fraction of the movement to the neon bg only
      setPosition((prev) => ({
        x: prev.x + deltaX * 0.1,
        y: prev.y + deltaY * 0.1,
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [lastMousePos]);

  return (
    <>
      {/* Neon BG Wrapper */}
      <div
        className='neon-net-div absolute top-0 left-0'
        ref={divRef}
        style={{
          transform: `translate(calc(-50% + ${position.x}px), calc(-50% + ${position.y}px))`,
          top: '50%',
          left: '50%',
          transition: 'transform 0.3s ease-out',
        }}
      />

      {/* Foreground Form Container */}
      <div className='relative z-10 h-100% w-100% flex items-center justify-center'>
        <motion.div
          initial={{ opacity: 0  }}
          whileInView={{ opacity: 1}}
          transition={{ duration: 1, ease: 'easeIn' }}
          viewport={{ once: true }}
          className='h-[80%] w-[80%] max-w-4xl bg-gradient-to-br from-white/10 to-white/20 backdrop-blur-xs border border-white/15 rounded-2xl flex flex-col items-center justify-center neon-border'
        >
          <h1 className='text-5xl text-white font-bold mt-5 md:mt-3'>Let's Connect</h1>

          <form className='w-4/5 h-fit py-5' action="URL" method='POST'>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-2xl bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none mt-5"
            />

            <div className="flex gap-4 mt-5">
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 px-5 py-3 rounded-2xl bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Phone"
                className="w-1/2 px-5 py-3 rounded-2xl bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none"
              />
            </div>

            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-5 py-3 rounded-2xl bg-transparent border border-gray-300 text-white placeholder-gray-400 focus:outline-none resize-none mt-7"
            />

            <button
              type="submit"
              className="bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white px-8 py-2 rounded-full shadow-md hover:scale-105 transition-transform mt-10"
            >
              Send
            </button>

            <div className='flex justify-center items-center gap-5 my-5'>
              <a href="https://www.linkedin.com/in/harsh-kumar-31391a31a/" target='blank'>
                <img src="./linkedin.svg" alt="linkedin" height={50} width={50} className='hover:invert duration-300' />
              </a>
              <a href="https://github.com/devlopharsh" target='blank'>
                <img src="./github.svg" alt="Github" height={50} width={50} className='hover:invert duration-300' />
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </>
  )
}

export default Contact;
