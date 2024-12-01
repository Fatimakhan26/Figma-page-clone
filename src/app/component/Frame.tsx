import React from 'react'
import { FaLongArrowAltRight } from "react-icons/fa";

const Frame = () => {
  return (
    <div className="bg-[#F5F7FA] p-6">
      <h1 className="text-black font-bold text-3xl sm:text-4xl lg:text-5xl text-center p-6">
        Pellentesque suscipit fringilla libero eu.
      </h1>
      <div className="flex justify-center mt-4">
        <button className="bg-primary text-white p-2 px-6 flex items-center gap-2">
          <span>Get a Demo</span>
          <FaLongArrowAltRight />
        </button>
      </div>
    </div>
  );
};

export default Frame;
