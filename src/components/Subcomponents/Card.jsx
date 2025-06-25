import React, { useEffect, useRef, useState } from "react";
import VanillaTilt from "vanilla-tilt";
import {motion} from 'framer-motion'

const FlipCard = ({image , heading , Exp , Cert }) => {
  const tiltRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    }
  }, []);

  return (
    <motion.div
      ref={tiltRef}
      className="w-56 h-72 perspective rounded-xl mb-10"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: '0.5' , ease: 'easeInOut'}}
      viewport={{once:true ,amount: 0.8}}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d rounded-xl ${
          isFlipped ? "transform rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden backdrop-blur-sm bg-white/10 text-white rounded-xl flex flex-col items-center justify-center border-2 border-pink-600">
          <img src={image} alt="" height={150} width={150} />
          <p className='text-[#8892b0] mt-5 max-w-xl text-center'>Hover for more Info</p>
        </div>

        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-gray-800 text-white rounded-xl flex flex-col items-center justify-center  transform rotate-y-180">
          <h2 className="font-bold text-xl">{heading}</h2>
          <p>With Experience of {Exp} years <br /> certified by {Cert} </p>
        </div>
      </div>
    </motion.div>
  );
};

export default FlipCard;
