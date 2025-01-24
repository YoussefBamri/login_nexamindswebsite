import React from 'react';
import RightSide from '../right-side/right-side';

const LeftSide = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between p-[20px] lg:p-[46px] items-center">
      <div className="grid w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left  lg:gap-y-8">
          <h1 className="text-4xl font-medium  leading-tight">
            <span className="block text-[36px] font-medium text-4xl  font-poppins">Interested in Working with</span>
            <span className="block text-orange-600 text-[36px] font-medium text-4xl w-[460px] h-[40px] font-poppins">Leading Companies?</span>
          </h1>
          <p className="text-gray-500 max-w-lg leading-relaxed ">
            Nexaminds is actively recruiting top-tier talents dedicated to making an impact. 
            Join our global team for diverse projects, flexible work, competitive pay, and 
            strong work-life balance. Discover roles matching your skills and ambitions with our job openings.
          </p>
          <p className="text-gray-800 text-[16px]">Many have joined us. Your turn awaits!</p>
          <div className="flex justify-center lg:justify-start">
            <button className="mt-6 bg-orange-600 text-white py-4 px-8 rounded-full font-medium hover:bg-orange-700 transition">
              Explore Our New Positions
            </button>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto mt-10 lg:mt-0">
        <RightSide />
      </div>
    </div>
  );
};

export default LeftSide;
