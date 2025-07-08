import { useState,useRef,useEffect } from 'react'
import { easeIn, motion } from 'framer-motion'


//background components
import HexGridBackground from './animations/gridtunnel'

//sectional components
import Frontend from './skills/frontend'
import Designer from './skills/design'

const Skills = () => {
    const [iscomplete, setIsComplete] = useState(false);

    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const container = scrollContainerRef.current;

        const onWheel = (e) => {
            // Only trigger when hovered
            if (container && container.matches(":hover")) {
                e.preventDefault();
                container.scrollLeft += e.deltaY;
            }
        };

        container.addEventListener("wheel", onWheel, { passive: false });

        return () => {
            container.removeEventListener("wheel", onWheel);
        };
    }, []);


    return (
        <>
            <motion.section
                className="relative top-0 left-0 flex-col items-center justify-center overflow-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 3, ease: 'easeIn' }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="relative top-0 left-0 w-screen h-screen z-0 ">
                    {/* <HexGridBackground /> */}
                </div>
            </motion.section>
            <div className='w-full h-full absolute flex-col items-start justify-center '>
                <div className='width-[500vw] h-full flex flex-col items-start justify-center'>
                    <motion.h1
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: 'easeIn' }}
                        viewport={{ once: true, amount: 0.5 }} className='text-5xl text-white font-bold absolute top-5 right-10'>Skills & Experience</motion.h1>
                    {/* Scroll Element */}
                    <div ref={scrollContainerRef} className="w-screen h-full overflow-x-scroll overflow-y-hidden no-scroll">
                        <div className="w-fit h-full flex gap-40 justify-start items-center relative">
                            {/* Animated horizontal pink line */}
                            <motion.div
                                initial={{ width: '0%' }}
                                whileInView={{ width: '100%' }}
                                transition={{ duration: 1, ease: 'easeIn' }}
                                viewport={{ once: true, amount: 0.5 }}
                                onAnimationComplete={() => {
                                    setTimeout(() => setIsComplete(true), 2000);
                                }}
                                className="h-[5px] bg-pink-600 w-full absolute top-1/2 left-0 shadow-lg shadow-white"
                            />
                            <Frontend iscomplete={iscomplete} />
                            <Designer />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Skills
