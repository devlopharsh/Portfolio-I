import {React , useEffect , useState } from 'react'
import { motion } from 'framer-motion'


const About = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handler = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);
    const initialAnimation = isMobile
        ? { opacity: 0, y: 50 } // Mobile: from bottom to top
        : { opacity: 0, x: 0 }; // Desktop: from left to right

    const whileInViewAnimation = isMobile
        ? { opacity: 1, y: 0 }
        : { opacity: 1, x: 50 };
    return (
        <div className="flex flex-col px-10 md:flex-row items-center justify-between  h-[70vh] relative overflow-hidden">
            <motion.section
                className="flex flex-col z-20 p-3 items-center text-center relative top-[55%] 
             md:top-0 md:left-0 md:items-start md:text-left justify-center 
             w-full md:w-1/2 
             backdrop-blur-lg border-[2px] border-[#e6007645] rounded-xl
             md:backdrop-blur-none md:border-0 "
                initial={initialAnimation}
                whileInView={whileInViewAnimation}
                transition={{ duration: 1 , delay: 1}}
                viewport={{ once: true, amount: 0.5 }}
            >
                <p className="text-pink-500 text-sm md:text-md">Hi, my name is</p>
                <h1 className="text-5xl md:text-5xl font-bold md:mt-1 text-[#ffffff]">Harsh Kumar.</h1>
                <h2 className="text-xl md:text-xl font-semibold md:mt-0.5 text-[#8892b0]">Front End Developer | UI/UX Designer</h2>
                <p className="text-[#d0d2d5] md:mt-2 max-w-xl text-sm md:text-md">
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
                className="w-full  relative top-[-45%] md:top-0 md:left-0 md:w-1/2 h-full flex items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.5 }}
            >

                <div className="relative z-10">
                    <img
                        src="/Image.png"
                        alt="Profile"
                        className=" h-full md:h-[87vh] w-full md:w-[23vw]  object-cover shadow-lg"
                    />

                </div>
            </motion.section>

        </div>
    )
}

export default About

