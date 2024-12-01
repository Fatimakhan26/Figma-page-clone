import React from 'react'
import Image from 'next/image'

const Communityupdates = () => {
  return (
    <div className="p-6 lg:p-20">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-gray-600 font-semibold text-xl md:text-2xl p-2">
          Caring is the new marketing
        </h1>
        <p className="text-gray-400 text-sm md:text-base lg:text-lg px-6 md:px-20 lg:px-56">
          The Nexcent blog is the best place to read about the latest membership insights, 
          trends and more. See who's joining the community, read about how our community are increasing their 
          membership income and lots more.
        </p>
      </div>

      {/* Images Section */}
      <div className="mt-10">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <li>
            <Image
              src={require("../../../public/com (1).png")}
              alt="Community Update 1"
              width={368}
              height={286}
              className="w-full h-auto"
            />
          </li>
          <li>
            <Image
              src={require("../../../public/com (2).png")}
              alt="Community Update 2"
              width={368}
              height={286}
              className="w-full h-auto"
            />
          </li>
          <li>
            <Image
              src={require("../../../public/com (3).png")}
              alt="Community Update 3"
              width={368}
              height={286}
              className="w-full h-auto"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Communityupdates;
