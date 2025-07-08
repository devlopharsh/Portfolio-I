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
    <div
      ref={tiltRef}
      className="w-30 h-35 perspective rounded-xl "
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 preserve-3d rounded-xl ${
          isFlipped ? "transform rotate-y-180" : ""
        }`}
      >
        {/* Front Side */}
        <div className="absolute w-full h-full backface-hidden backdrop-blur-sm bg-white/5 text-white rounded-xl flex flex-col items-center justify-center border-2 border-white/5">
          <img src={image} alt="" height={70} width={70} />
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full backface-hidden bg-gray-800 text-white rounded-xl flex flex-col items-center justify-center  transform rotate-y-180">
          <h2 className="font-bold text-md">{heading}</h2>
          <p className="mt-1 text-xs w-11/12">With Experience of {Exp} years certified by {Cert} </p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
