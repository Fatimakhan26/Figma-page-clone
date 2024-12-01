import React from 'react'
import Image from 'next/image'

const Client = () => {
  return (
    <div className="flex flex-col text-center justify-between p-5">
      {/* Heading Section */}
      <div>
        <h1 className="font-semibold text-gray-700 text-2xl">Our Clients</h1>
        <p className="text-gray-400 p-2">
          We have been working with some Fortune 500+ clients
        </p>
      </div>

      {/* Logos Section */}
      <div className="mt-5">
        <ul className="flex flex-wrap justify-center gap-8 p-3">
          <li>
            <Image
              src={require("../../../public/Logo.png")}
              alt="Client Logo"
              height={48}
              width={48}
            />
          </li>
          <li>
            <Image
              src={require("../../../public/Logo (1).png")}
              alt="Client Logo"
              height={48}
              width={48}
            />
          </li>
          <li>
            <Image
              src={require("../../../public/Logo (2).png")}
              alt="Client Logo"
              height={48}
              width={48}
            />
          </li>
          <li>
            <Image
              src={require("../../../public/Logo (3).png")}
              alt="Client Logo"
              height={48}
              width={48}
            />
          </li>
          <li>
            <Image
              src={require("../../../public/Logo (4).png")}
              alt="Client Logo"
              height={48}
              width={48}
            />
          </li>
          <li>
            <Image
              src={require("../../../public/Logo (5).png")}
              alt="Client Logo"
              height={48}
              width={48}
            />
          </li>
          <li>
            <Image
              src={require("../../../public/Logo (6).png")}
              alt="Client Logo"
              height={48}
              width={48}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Client;
