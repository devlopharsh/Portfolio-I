import React from "react";
import { easeIn, motion } from "framer-motion";

//sectional components
import FlipCard from "./Subcomponents/Card";

const SkillsUpdated = () => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center scale-95 md:scale-100">
        <div className="w-full h-full md:w-11/12 md:h-10/12  backdrop-blur-sm border-2 border-white/5 rounded-2xl flex flex-col items-center justify-center shadow-md ">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeIn" }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-5xl text-white font-bold mt-5 md:mt-3.5 "
          >
            Skills & Experience
          </motion.h1>
          <div className="w-full h-full flex flex-col md:flex-row md:items-center md:justify-center justify-around items-center md:mt-0 mt-5 ">
            {/* skills container */}
            <div className="w-2/3 flex flex-col items-center justify-center gap-2.5 ">
              <motion.div
                className="flex flex-col md:flex-row gap-2.5 items-start "
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: "0.5", ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <div className="flex gap-2.5 items-start ">
                  <FlipCard
                    image={"./HTML.svg"}
                    heading={"HTML"}
                    Exp={"1+"}
                    Cert={
                      "Udemy. Structuring semantic web content with accessibility in mind."
                    }
                  />
                  <FlipCard
                    image={"./CSS.svg"}
                    heading={"CSS"}
                    Exp={"1+"}
                    Cert={
                      "Udemy. Styling layouts responsively with flex, grid, and animations."
                    }
                  />
                  <FlipCard
                    image={"./JS.svg"}
                    heading={"JavaScript"}
                    Exp={"1+"}
                    Cert={
                      "Udemy. Writing dynamic logic and interacting with the DOM."
                    }
                  />
                </div>
                <div className="flex gap-2.5 items-start ">
                  <FlipCard
                    image={"./TW.svg"}
                    heading={"Tailwind"}
                    Exp={"1+"}
                    Cert={
                      "Udemy. Building UI rapidly with utility-first CSS classes."
                    }
                  />
                  <FlipCard
                    image={"./Bootstrap.svg"}
                    heading={"Bootstrap"}
                    Exp={"1+"}
                    Cert={
                      "Udemy. Creating responsive grids and components quickly."
                    }
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col md:flex-row gap-2.5 items-start"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: "0.5", ease: "easeInOut", delay: 0.5 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <div className="flex gap-2.5 items-start ">
                  <FlipCard
                    image={"./React.svg"}
                    heading={"React JS"}
                    Exp={"1+"}
                    Cert={
                      "Udemy. Building components and managing state effectively."
                    }
                  />
                  <FlipCard
                    image={"./Next.svg"}
                    heading={"Next JS"}
                    Exp={"1+"}
                    Cert={
                      "Udemy. Implementing SSR, routing, and API routes efficiently."
                    }
                  />
                  <FlipCard
                    image={"./nodejs.svg"}
                    heading={"Node JS"}
                    Exp={"1+"}
                    Cert={
                      "Udemy. Creating backend APIs and handling server logic."
                    }
                  />
                  <FlipCard
                    image={"./mongo.svg"}
                    heading={"Mongo DB"}
                    Exp={"1+"}
                    Cert={"Udemy. Managing NoSQL data and designing schemas."}
                  />
                </div>
                <div className="flex gap-2.5 items-start ">
                  <FlipCard
                    image={"./mysql.svg"}
                    heading={"My SQL"}
                    Exp={"1+"}
                    Cert={
                      "Udemy. Writing queries and managing relational databases."
                    }
                  />
                </div>
              </motion.div>

              <motion.div
                className="flex gap-2.5 items-start "
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: "0.5", ease: "easeInOut", delay: 1 }}
                viewport={{ once: true, amount: 0.8 }}
              >
                <FlipCard
                  image={"./python.svg"}
                  heading={"Python"}
                  Exp={"1+"}
                  Cert={
                    "Udemy. Writing scripts and solving problems with clarity."
                  }
                />
                <FlipCard
                  image={"./Linux.svg"}
                  heading={"Linux"}
                  Exp={"1+"}
                  Cert={
                    "Udemy. Navigating terminal and configuring environments."
                  }
                />
                <FlipCard
                  image={"./Figma.svg"}
                  heading={"Figma"}
                  Exp={"2+"}
                  Cert={
                    "Udemy. Designed intuitive UI and wireframes with real-world UX practices."
                  }
                />
                <FlipCard
                  image={"./Canva.svg"}
                  heading={"Canva"}
                  Exp={"2+"}
                  Cert={
                    "Udemy. Created visually engaging designs maintaining brand consistency and clarity."
                  }
                />
                <FlipCard
                  image={"./Adobe.svg"}
                  heading={"Adobe"}
                  Exp={"1+"}
                  Cert={
                    "udemy. Profiecient skills in the Adobe suit and serving expressive designs. "
                  }
                />
              </motion.div>
            </div>
            {/* experience container */}
            <div className="relative w-4/5 md:w-2/3 mx-auto flex flex-col items-center justify-center gap-10 scale-80">
              {/* Row 1: Two Divs side by side */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="p-5 rounded-2xl text-center hover:scale-105 transition-transform"
                >
                  <div className="bg-white p-1 rounded">
                    <img src="./apptroid.png" alt="" height={100} width={300} />
                  </div>
                  <h2 className="text-xl font-bold mt-3">
                    Working as Full Stack Developer
                  </h2>
                  <p className="text-sm text-gray-400">
                    Duration: 8-2025 to currently working
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  viewport={{ once: true, amount: 0.8 }}
                  className="p-5 rounded-2xl text-center hover:scale-105 transition-transform"
                >
                  <img src="./GDG.svg" alt="" height={100} width={300} />
                  <h2 className="text-xl font-bold mt-3">
                    Working as a Web Developer
                  </h2>
                  <p className="text-sm text-gray-400">
                    Duration: 11-2024 to currently working
                  </p>
                </motion.div>
              </div>

              {/* Center "interesting" element */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute md:top-1/2 top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
              >
                {/* Glowing orb or logo — pick one */}
                <div className="w-20 h-20 bg-gradient-to-tr from-pink-950 to-pink-500 rounded-full shadow-[0_0_50px_rgba(56,189,248,0.8)] animate-pulse blur-md scale-70"></div>
              </motion.div>

              {/* Row 2: Single bottom div */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                viewport={{ once: true, amount: 0.8 }}
                className="p-5 rounded-2xl text-center hover:scale-105 transition-transform"
              >
                <img src="./Banao.png" alt="" height={150} width={300} />
                <h2 className="text-xl font-bold mt-3">
                  Worked as a Graphic Designer
                </h2>
                <p className="text-sm text-gray-400">
                  Duration: 01-2025 to 06-2025
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillsUpdated;
