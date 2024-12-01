import React from 'react'
import Image from 'next/image'

const Community = () => {
  return (
    <div className="flex flex-col text-center p-4">
      {/* Heading Section */}
      <div>
        <h1 className="text-2xl md:text-4xl text-gray-700 pt-6">
          Manage your entire community
        </h1>
        <h1 className="text-2xl md:text-4xl text-gray-700">in a single system</h1>
        <p className="text-gray-400 p-1">Who is Nextcent suitable for?</p>
      </div>

      {/* Cards Section */}
      <div className="mt-6">
        <ul className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 p-4">
          {/* Card 1 */}
          <li className="flex flex-col items-center text-center max-w-sm">
            <Image
              src={require("../../../public/Icon3.png")}
              alt="Membership Organisations"
              height={56}
              width={65}
            />
            <h1 className="text-lg md:text-2xl font-semibold mt-4">
              Membership Organisations
            </h1>
            <p className="p-2 text-gray-400 text-sm md:text-base">
              Our membership management software provides full automation of
              memberships renewals and payments.
            </p>
          </li>

          {/* Card 2 */}
          <li className="flex flex-col items-center text-center max-w-sm">
            <Image
              src={require("../../../public/Icon (1).png")}
              alt="National Associations"
              height={56}
              width={65}
            />
            <h1 className="text-lg md:text-2xl font-semibold mt-4">
              National Associations
            </h1>
            <p className="p-2 text-gray-400 text-sm md:text-base">
              Our membership management software provides full automation of
              memberships renewals and payments.
            </p>
          </li>

          {/* Card 3 */}
          <li className="flex flex-col items-center text-center max-w-sm">
            <Image
              src={require("../../../public/Icon (2).png")}
              alt="Clubs And Groups"
              height={56}
              width={65}
            />
            <h1 className="text-lg md:text-2xl font-semibold mt-4">
              Clubs And Groups
            </h1>
            <p className="p-2 text-gray-400 text-sm md:text-base">
              Our membership management software provides full automation of
              memberships renewals and payments.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Community;
