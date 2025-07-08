import React, { useRef, useState } from 'react';

const SlidingWindow = ({ children }) => {
  const totalItems = React.Children.count(children);
  const [activeIndex, setActiveIndex] = useState(0);

  const scroll = (direction) => {
    setActiveIndex((prev) => {
      const nextIndex =
        direction === 'left'
          ? Math.max(prev - 1, 0)
          : Math.min(prev + 1, totalItems - 1);
      return nextIndex;
    });
  };

  return (
    <div className="relative w-full h-fit mx-auto overflow-hidden">
      {/* Left arrow */}
      

      {/* Slider container */}
      <div className="relative w-full h-10/12 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4 text-white">
              {child}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-4 space-x-2">
        <button
          onClick={() => scroll('left')}
          className="transform-translate-y-1/2 rotate-z-270  text-pink-500 hover:text-pink-300 text-5xl z-10 transition rounded-full p-1"
        >
          <img src="./arrow.svg" alt="" height={20} width={20}/>
        </button>

        {Array.from({ length: totalItems }).map((_, index) => (
          <span
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${activeIndex === index
                ? 'bg-pink-500 w-6'
                : 'bg-gray-700 w-2'
              }`}
          ></span>
        ))}
        <button
          onClick={() => scroll('right')}
          className="transform-translate-y-1/2 rotate-z-90  text-pink-500 hover:text-pink-300 text-5xl z-10 transition rounded-full pb-3.5 "
        >
          <img src="./arrow.svg" alt="" height={20} width={20}/>
        </button>

      </div>
    </div>
  );
};

export default SlidingWindow;
