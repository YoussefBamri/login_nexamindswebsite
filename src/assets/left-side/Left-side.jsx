import React from 'react';
import RightSide from '../right-side/right-side';

const LeftSide = () => {
  return (
      <div className="grid w-full ">
        <div className=" flex flex-col justify-center gap-y-6 text-center lg:items-start lg:justify-start lg:text-left min-h-[500px]">
          <h1 className="text-4xl font-medium text-black">
            <span className="text-[36px] text-4xl">Interested in working with</span>
            <span className="block text-orange-600 text-[36px] font-bold">Leading companies?</span>
          </h1>
          <p className="text-gray-500 max-w-xl ">
            Nexaminds is actively recruiting top-tier talents dedicated to making an impact. Join our global team for diverse projects, flexible work, competitive pay, and strong work-life balance. Discover roles matching your skills and ambitions with our job openings.
          </p>
          <p className="text-gray-500 mt-4">Many have joined us. Your turn awaits!</p>
            <div className="flex justify-center">
                <button className=" bg-orange-600 text-white py-4 px-6 rounded-full font-medium transition transform hover:bg-orange-700 hover:scale-105">
                    Explore Our New Positions
                </button>
            </div>
        </div>
      </div>
  );
};

export default LeftSide;
