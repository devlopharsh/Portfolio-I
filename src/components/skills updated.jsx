import React from 'react'
import { easeIn, motion } from 'framer-motion'

//sectional components
import FlipCard from './Subcomponents/Card'

const SkillsUpdated = () => {
    return (
        <>
            <div className='w-screen h-screen flex items-center justify-center scale-95 md:scale-100'>
                <div className='w-full h-full md:w-11/12 md:h-10/12  backdrop-blur-sm border-2 border-white/5 rounded-2xl flex flex-col items-center justify-center shadow-md '>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeIn' }}
                        viewport={{ once: true, amount: 0.5 }} className='text-5xl text-white font-bold mt-5 md:mt-3.5 '>Skills & Experience</motion.h1>
                    <div className='w-full h-full flex flex-col md:flex-row md:items-center md:justify-center justify-around items-center md:mt-0 mt-5 '>
                        {/* skills container */}
                        <div className='w-2/3 flex flex-col items-center justify-center gap-2.5 '>
                            <motion.div
                                className='flex flex-col md:flex-row gap-2.5 items-start '
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: '0.5', ease: 'easeInOut' }}
                                viewport={{ once: true, amount: 0.8 }}>
                                <div className='flex gap-2.5 items-start '>
                                    <FlipCard image={'./HTML.svg'} heading={'HTML'} Exp={'1+'} Cert={'Udemy. Structuring semantic web content with accessibility in mind.'} />
                                    <FlipCard image={'./CSS.svg'} heading={'CSS'} Exp={'1+'} Cert={'Udemy. Styling layouts responsively with flex, grid, and animations.'} />
                                    <FlipCard image={'./JS.svg'} heading={'JavaScript'} Exp={'1+'} Cert={'Udemy. Writing dynamic logic and interacting with the DOM.'} />
                                </div>
                                <div className='flex gap-2.5 items-start '>
                                    <FlipCard image={'./TW.svg'} heading={'Tailwind'} Exp={'1+'} Cert={'Udemy. Building UI rapidly with utility-first CSS classes.'} />
                                    <FlipCard image={'./Bootstrap.svg'} heading={'Bootstrap'} Exp={'1+'} Cert={'Udemy. Creating responsive grids and components quickly.'} />
                                    <FlipCard image={'./React.svg'} heading={'React JS'} Exp={'1+'} Cert={'Udemy. Building components and managing state effectively.'} />
                                </div>
                            </motion.div>

                            <motion.div
                                className='flex flex-col md:flex-row gap-2.5 items-start'
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: '0.5', ease: 'easeInOut', delay: 0.5 }}
                                viewport={{ once: true, amount: 0.8 }}>
                                <div className='flex gap-2.5 items-start '>
                                    <FlipCard image={'./Next.svg'} heading={'Next JS'} Exp={'1+'} Cert={'Udemy. Implementing SSR, routing, and API routes efficiently.'} />
                                    <FlipCard image={'./nodejs.svg'} heading={'Node JS'} Exp={'1+'} Cert={'Udemy. Creating backend APIs and handling server logic.'} />
                                    <FlipCard image={'./mongo.svg'} heading={'Mongo DB'} Exp={'1+'} Cert={'Udemy. Managing NoSQL data and designing schemas.'} />
                                </div>
                                <div className='flex gap-2.5 items-start '>
                                    <FlipCard image={'./mysql.svg'} heading={'My SQL'} Exp={'1+'} Cert={'Udemy. Writing queries and managing relational databases.'} />
                                    <FlipCard image={'./python.svg'} heading={'Python'} Exp={'1+'} Cert={'Udemy. Writing scripts and solving problems with clarity.'} />
                                    <FlipCard image={'./Linux.svg'} heading={'Linux'} Exp={'1+'} Cert={'Udemy. Navigating terminal and configuring environments.'} />
                                </div>
                            </motion.div>

                            <motion.div
                                className='flex gap-2.5 items-start '
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: '0.5', ease: 'easeInOut', delay: 1 }}
                                viewport={{ once: true, amount: 0.8 }}>
                                <FlipCard image={'./Figma.svg'} heading={'Figma'} Exp={'2+'} Cert={'Udemy. Designed intuitive UI and wireframes with real-world UX practices.'} />
                                <FlipCard image={'./Canva.svg'} heading={'Canva'} Exp={'2+'} Cert={'Udemy. Created visually engaging designs maintaining brand consistency and clarity.'} />
                                <FlipCard image={'./Adobe.svg'} heading={'Adobe'} Exp={'1+'} Cert={'udemy. Profiecient skills in the Adobe suit and serving expressive designs. '} />
                            </motion.div>

                        </div>
                        {/* experience container */}
                        <div className='w-4/5 md:w-1/3 flex  md:flex-col items-center justify-center gap-10'>
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: '0.5', ease: 'easeInOut' }}
                                viewport={{ once: true, amount: 0.8 }}>
                                <img src="./GDG.svg" alt="" height={100} width={300} />
                                <h2 className='text-xl font-bold'>Working as a Web Developer</h2>
                                <p className='text-sm text-gray-400'>Duration: 11-2024 to currently working</p>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: '0.5', ease: 'easeInOut', delay: 0.5 }}
                                viewport={{ once: true, amount: 0.8 }}>
                                <img src="./Banao.png" alt="" height={150} width={300} />
                                <h2 className='text-xl font-bold'>Worked as a Graphic Designer</h2>
                                <p className='text-sm text-gray-400'>Duration: 01-2025 to 06-2025</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SkillsUpdated
