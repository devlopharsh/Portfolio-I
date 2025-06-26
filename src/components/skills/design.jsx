import React from 'react'
import { motion, useMotionValue } from 'framer-motion'

//sectional components
import FlipCard from '../Subcomponents/Card'

const Designer = () => {
    return (
        <>
            <div class="arrow-shape-open w-96 h-48 bg-pink-600 flex items-center ">
                {/* {iscomplete && (<h1 className='text-5xl font-bold pl-10'>Front End <br /> Engineer</h1>)} */}
                <motion.h1 initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                    viewport={{ once: true, amount: 0.5 }} className='text-5xl font-bold pl-10'>UI/UX <br /> Designer</motion.h1>
            </div>
            <div className='relative top-4 h-4/5 flex flex-col items-start justify-between '>
                <div className='flex gap-96 items-start '>
                    <FlipCard image={'./Figma.svg'} heading={'Figma'} Exp={'2+'} Cert={'udemy. Have created Seamless UX research over real world issues '} />
                    <FlipCard image={'./Canva.svg'} heading={'Canva'} Exp={'2+'} Cert={'udemy. Combining design principles with brand consistency to effectively communicate ideas and elevate user engagement.'} />
                         </div>
                <div className='flex gap-96 items-baseline ml-80'>
                    <FlipCard image={'./Adobe.svg'} heading={'Adobe'} Exp={'1+'} Cert={'udemy. Have profiecient skills in the Adobe suit and serving expressive designs and Logos. '} />
                </div>

            </div>
            <div class="w-fit h-fit bg-pink-600 flex flex-col items-center z-10 rounded-xl py-10">
                <img src="./Banao.png" alt="" height={150} width={300} />
                {/* {iscomplete && (<h1 className='text-5xl font-bold pl-10'>Front End <br /> Engineer</h1>)} */}
                <motion.h1 initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                    viewport={{ once: true, amount: 0.5 }} className='text-5xl px-10  transform rotate-z-0'><b>Worked at</b><br /> Banao Technologies</motion.h1>
                    <p className='text-shadow-emerald-50 text-white/70 '>Internship</p>
            </div>
        </>
    )
}

export default Designer
