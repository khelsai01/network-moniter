import React from "react";
import FilterTop from "./ui/FilterTop";
import FilterSection from "./ui/FilterSection";
import BoxSection from "./ui/BoxSection";






const Network = () => {
  return (
    <div className="w-full min-h-screen bg-[#242121]">
      <FilterTop />
      <FilterSection />
      <BoxSection />
      
      <div className='absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 
      '>
        <div className="flex  flex-col items-center text-lg text-center ">
              <p className='text-gray-500 text-center hover:scale-105 duration-1000'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <p className='text-gray-500 text- hover:scale-105 duration-1000'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, ab</p>
              <button className='text-blue-400 underline text-center hover:scale-105 duration-1000 '>Learn More</button>
              </div>
      </div>
    </div>
  );
};

export default Network;
