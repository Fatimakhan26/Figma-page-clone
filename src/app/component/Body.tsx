import React from 'react'
import Image from 'next/image'

const Body = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-6 lg:p-20">
      {/* Image Section */}
      <div className="p-4 flex justify-center">
        <Image
          src={require("../../../public/Frame 35.png")}
          alt="Pixelgrade Experience"
          width={1000}
          height={500}
          className="max-w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h1 className="text-2xl md:text-4xl lg:text-5xl mt-6 lg:mt-14 p-2">
          The unseen of spending three years at Pixelgrade
        </h1>
        <p className="text-sm md:text-lg lg:text-xl text-gray-600 mt-4 lg:pr-32 p-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias iure sint animi explicabo doloribus libero dolor ullam atque,
          corporis, officia culpa ab odit minus laborum consequuntur qui pariatur provident quia!
        </p>
        <button className="bg-primary md:mr-[500px] text-white p-3 md:p-4 md:pr-8 md:pl-8 rounded mt-6">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Body;
