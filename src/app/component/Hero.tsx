import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-10 lg:mt-20 bg-[#F5F7FA]">
      <div className="lg:ml-28 lg:mt-20 flex-1 text-center lg:text-left px-4">
        <h1 className="text-4xl lg:text-6xl font-semibold text-gray-600">
          Lessons and insights
        </h1>
        <h2 className="text-4xl lg:text-6xl font-semibold text-primary">
          from 8 years
        </h2>
        <p className="text-gray-400 pt-4 pb-4">
          Where to grow your business as a photographer: site or social media?
        </p>
        <button className="text-white bg-primary px-6 py-2 rounded">
          Register
        </button>
      </div>
      <div className="flex justify-center lg:justify-end flex-1 px-4 mt-10 lg:mt-0">
        <Image
          src={require("../../../public/Illustration.png")}
          alt="hero image"
          height={407}
          width={391}
        />
      </div>
    </div>
  );
};

export default Hero;
