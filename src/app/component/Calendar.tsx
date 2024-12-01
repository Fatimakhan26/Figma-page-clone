import React from 'react'
import Image from 'next/image'

const Calendar = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 p-6 lg:p-20">
      {/* Image Section */}
      <div className="flex justify-center lg:mt-10">
        <Image
          src={require("../../../public/mobile.png")}
          alt="Calendar Illustration"
          width={2200}
          height={800}
          className="max-w-full h-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h1 className="text-gray-700 text-2xl md:text-4xl lg:text-5xl mt-6 lg:mt-14 p-2">
          How to design your site footer like we did
        </h1>
        <p className="text-gray-400 text-sm md:text-lg lg:text-xl mt-4 lg:pr-20 p-2 pb-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi quod eos rerum nostrum nesciunt vero quidem suscipit illum animi iure
          fuga in officia praesentium quaerat consectetur tenetur, sed sint? Atque!
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ex soluta earum, eos expedita tenetur blanditiis hic alias recusandae.
        </p>
        <button className="bg-primary md:mr-[500px] text-white p-3 md:p-4 md:pr-8 md:pl-8 rounded mt-6">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Calendar;
