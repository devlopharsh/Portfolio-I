import React from 'react'
import { motion } from 'framer-motion'

// Components
import ParticleField from './animations/particlefield'

const About = () => {
    return (
        <div className="flex flex-col md:flex-row items-start justify-between px-10 h-[70vh] relative overflow-hidden">
            <motion.section
                className="flex flex-col items-center text-center md:items-start md:text-left justify-center w-full md:w-1/2 z-10"
                initial={{ opacity: 0, x: 0 }}
                whileInView={{ opacity: 1, x: 50 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <p className="text-pink-500 text-md">Hi, my name is</p>
                <h1 className="text-3xl md:text-5xl font-bold mt-2 text-[#ccd6f6]">Harsh Kumar.</h1>
                <h2 className="text-3xl md:text-2xl font-semibold mt-1 text-[#8892b0]">Front End Developer | UI/UX Designer</h2>
                <p className="text-[#8892b0] mt-2 max-w-xl">
                    I’m a frontend developer specializing in building (and occasionally designing)
                    exceptional digital experiences. Currently, I’m focused on building responsive
                    web applications.
                </p>
                <a href="./resume.pdf" target="_blank">
                    <button className="mt-3 border border-pink-500 text-pink-500 px-4 py-1 hover:bg-pink-500 hover:text-white transition">
                        View Resume
                    </button>
                </a>
            </motion.section>


            {/* Right Section: Particle + Image */}
            <motion.section
                className="w-full md:w-1/2 h-full relative flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
            >

                <div className="relative z-10">
                    <img
                        src="/Image.png"
                        alt="Profile"
                        className="h-[87vh] w-[23vw] object-cover shadow-lg"
                    />

                </div>
            </motion.section>

        </div>
    )
}

export default About

