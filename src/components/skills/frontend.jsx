import { React, useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

//sectional components
import FlipCard from '../Subcomponents/Card'

const Frontend = () => {
    return (
        <>
            <div class="arrow-shape-open w-96 h-48 bg-pink-600 flex items-center ">
                {/* {iscomplete && (<h1 className='text-5xl font-bold pl-10'>Front End <br /> Engineer</h1>)} */}
                <motion.h1 initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                    viewport={{ once: true, amount: 0.5 }} className='text-5xl font-bold pl-5'>Front End <br /> Engineer</motion.h1>
            </div>
            <div className='relative top-4 h-4/5 flex flex-col items-start justify-between '>
                <div className='flex gap-96 items-start '>
                    <FlipCard image={'./JS.svg'} heading={'Java Script'} Exp={'1+'} Cert={'udemy. Implementing DOM manipulation, API integration, and custom logic to solve real-world UI challenges.'}/>    
                    <FlipCard image={'./React.svg'} heading={'React JS'} Exp={'1+'} Cert={'udemy.  Building scalable and component-based frontends with effective state management, optimized renders, and seamless user interactions.'}/>
                    <FlipCard image={'./Linux.svg'} heading={'Linux'} Exp={'1+'} Cert={'udemy. Proficient with terminal commands, process management, file systems, and configuring servers for Node.js applications.'}/>
                    
                </div>
                <div className='flex gap-96 items-baseline ml-80'>  
                    <FlipCard image={'./TW.svg'} heading={'Tail Wind'} Exp={'1+'} Cert={'udemy. Applying utility-first classes to rapidly prototype and scale modern web interfaces with consistency and design precision.'}/>
                    <FlipCard image={'./Bootstrap.svg'} heading={'BootStrap'} Exp={'1+'} Cert={'udemy . Well-versed in using Bootstrap to quickly develop responsive layouts and components '}/>
                    <FlipCard image={'./Next.svg'} heading={'Next JS'} Exp={'1+'} Cert={'udemy. Utilizing server-side rendering, API routes, and dynamic routing to deliver lightning-fast, production-grade solutions.'}/>
                </div>

            </div>
            <div class="w-fit h-fit bg-pink-600 flex flex-col items-center z-10 rounded-xl py-10">
                <img src="./GDG.svg" alt="" height={100} width={300}/>
                {/* {iscomplete && (<h1 className='text-5xl font-bold pl-10'>Front End <br /> Engineer</h1>)} */}
                <motion.h1 initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: 'easeIn' }}
                    viewport={{ once: true, amount: 0.5 }} className='text-5xl px-10 mt-5 transform rotate-z-0'><b>Working at</b><br /> GDG on Campus AKGEC</motion.h1>
            </div>

        </>
    )
}

export default Frontend
