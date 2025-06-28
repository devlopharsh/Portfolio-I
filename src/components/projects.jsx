import React from 'react'
import { motion } from 'framer-motion'

//components
import D3Sphere from './animations/sphere.jsx'
import SlidingWindow from './slidingcomponent.jsx'

const Projects = () => {
    return (
        <div className='flex flex-col md:flex-row items-center justify-between px-10 h-[70vh] relative overflow-hidden'>

            <motion.section
                className="relative top-0 left-0 flex-col items-center justify-center z-10 overflow-hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                viewport={{ once: true, amount: 0.5 }}
            >

                <div className="w-[50vw]  h-[150vh] shadow-2xs shadow-pink-600">
                    <D3Sphere />
                </div>
            </motion.section>

            <motion.section
                className="w-full md:w-1/2 h-full relative flex-col items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <h1 className='text-5xl text-white font-bold'>Projects</h1>
                <SlidingWindow>
                    <div className="h-full rounded-xl flex  items-start justify-center text-white ">
                        <div className='flex-col items-center justify-center py-10 w-2/3'>
                            <div className='border-2 border-[#fb64b75e] my-2 rounded-3xl py-8 px-5 flex flex-col items-center justify-center '>
                                <img src="./passaver.svg" alt="Passaver" height={400} width={400} />
                                <h4>React JS , Tailwind CSS , Vercel , etc.</h4>
                                <p className='text-[#8892b0] text-sm mt-4 max-w-xl text-center'>Interactive Website Designed to Save your Password locally and manage them easily. Used a react js to build the UI , Use the help of local browser storage in order to save password and maintaining privacy of the user , Used a clean and simple UI so that it can be understandable by the user easily.  </p>
                                <button
                                onClick={()=> window.open('https://reactdemo-project.vercel.app/', '_blank')} 
                                className='mt-6 border border-pink-500 text-pink-500 px-6 py-2 hover:bg-pink-500 hover:text-white transition rounded-3xl'>visit</button>
                            </div>
                        </div>
                    </div>
                    <div className="h-full rounded-xl flex items-start justify-center text-white ">
                        <div className='flex-col items-center justify-center py-10 w-2/3'>
                            <div className='border-2 border-[#fb64b75e] my-2 rounded-3xl py-6 px-5 flex flex-col items-center justify-center '>
                                <img src="./PopX.svg" alt="Passaver" height={100} width={200} />
                                <h4>React JS , Tailwind CSS , Vercel , etc.</h4>
                                <p className='text-[#8892b0] text-sm mt-4 max-w-xl text-center'>Interactive Authantication Webpage Designed pixel perfect and to the point for better UI Experience . Used a react js to build the UI , Use the help of react library and Tailwind CSS to make a clean and better UI .  </p>
                                <button
                                onClick={()=> window.open('https://educase-project-one.vercel.app/', '_blank')} 
                                className='mt-6 border border-pink-500 text-pink-500 px-6 py-2 hover:bg-pink-500 hover:text-white transition rounded-3xl'>visit</button>
                            </div>
                        </div>
                    </div>
                    <div className="h-full rounded-xl flex items-start justify-center text-white ">
                        <div className='flex-col items-center justify-center py-10 w-2/3'>
                            <div className='border-2 border-[#fb64b75e] my-2 rounded-3xl py-8 px-5 flex flex-col items-center justify-center '>
                                <img src="./Sukoon.svg" alt="Passaver" height={300} width={300} />
                                <h4>Figma , Prototyping , UX , Product Designing ,etc.</h4>
                                <p className='text-[#8892b0] text-sm mt-4 max-w-xl text-center'>Interactive Authantication Webpage Designed pixel perfect and to the point for better UI Experience . Used a react js to build the UI , Use the help of react library and Tailwind CSS to make a clean and better UI .  </p>
                                <button
                                onClick={()=> window.open('https://www.figma.com/design/63YoRUCXMHQYNaJDUutWTZ/Sukoon?node-id=1-2&t=mpyLfiMZuUMEimUh-1', '_blank')} 
                                className='mt-6 border border-pink-500 text-pink-500 px-6 py-2 hover:bg-pink-500 hover:text-white transition rounded-3xl'>visit</button>
                            </div>
                        </div>
                    </div>

                    
                </SlidingWindow>
            </motion.section>
        </div>
    )
}

export default Projects
