import React from 'react'
import Image from 'next/image'
import { TiSocialDribbble } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="bg-[#263238] p-6 lg:p-10">
      <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-16">

        {/* Logo and Social Media */}
        <div className="flex flex-col items-center lg:items-start">
          <ul className="flex items-center gap-2">
            <Image
              src={require("../../../public/Icon.png")}
              alt=""
              width={25.27}
              height={29.67}
            />
            <h1 className="text-white text-3xl font-bold">Nexcent</h1>
          </ul>
          <p className="text-white mt-2 text-center lg:text-left">Copyright © 2020 Nexcent Ltd. All rights reserved.</p>
          <ul className="flex justify-center lg:justify-start gap-3 mt-4">
            <SlSocialInstagram className="text-white" />
            <TiSocialDribbble className="text-white" />
            <TiSocialTwitter className="text-white" />
            <TiSocialYoutube className="text-white" />
          </ul>
        </div>

        {/* Company Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="font-medium text-xl text-white mb-3">Company</h1>
          <ul className="text-white space-y-2">
            <li>About us</li>
            <li>Blog</li>
            <li>Contact us</li>
            <li>Pricing</li>
            <li>Testimonials</li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="font-medium text-xl text-white mb-3">Support</h1>
          <ul className="text-white space-y-2">
            <li>Help center</li>
            <li>Terms of service</li>
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>Status</li>
          </ul>
        </div>

        {/* Stay up to date */}
        <div className="flex flex-col items-center lg:items-start">
          <h1 className="font-medium text-xl text-white mb-3">Stay up to date</h1>
          <input
            className="rounded p-2 bg-[#D9DBE1] text-[#263238] focus:outline-none"
            type="email"
            id="email"
            placeholder="Your email address"
          />
        </div>

      </div>
    </div>
  );
};

export default Footer;
