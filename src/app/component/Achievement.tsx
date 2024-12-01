import React from 'react'
import Image from 'next/image'

const Achievement = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 bg-[#F5F7FA] items-center px-6 lg:pl-44 py-10">
      {/* Text Section */}
      <div className="text-center lg:text-left mt-6 lg:mt-20">
        <h1 className="text-gray-700 text-2xl md:text-5xl">Helping a local</h1>
        <h1 className="text-primary text-2xl md:text-5xl">business reinvent itself</h1>
        <p className="text-gray-500 mt-4">We reached here with our hard work and dedication</p>
      </div>

      {/* Statistics Section */}
      <div className="flex flex-wrap justify-center gap-10 mt-6 lg:mt-0">
        {/* First Row */}
        <ul className="flex flex-wrap justify-center gap-10">
          <li className="flex items-center gap-4">
            <Image
              src={require("../../../public/I-1.png")}
              alt="Members"
              width={48}
              height={48}
            />
            <div>
              <h1 className="text-gray-700 font-semibold text-xl md:text-2xl">2,245,341</h1>
              <p className="text-gray-400">Members</p>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <Image
              src={require("../../../public/I-2.png")}
              alt="Clubs"
              width={48}
              height={48}
            />
            <div>
              <h1 className="text-gray-700 font-semibold text-xl md:text-2xl">46,328</h1>
              <p className="text-gray-400">Clubs</p>
            </div>
          </li>
        </ul>

        {/* Second Row */}
        <ul className="flex flex-wrap justify-center gap-10">
          <li className="flex items-center gap-4">
            <Image
              src={require("../../../public/I-3.png")}
              alt="Event Bookings"
              width={48}
              height={48}
            />
            <div>
              <h1 className="text-gray-700 font-semibold text-xl md:text-2xl">828,867</h1>
              <p className="text-gray-400">Event Bookings</p>
            </div>
          </li>

          <li className="flex items-center gap-4">
            <Image
              src={require("../../../public/I-4.png")}
              alt="Payments"
              width={48}
              height={48}
            />
            <div>
              <h1 className="text-gray-700 font-semibold text-xl md:text-2xl">1,926,436</h1>
              <p className="text-gray-400">Payments</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Achievement;
