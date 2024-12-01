"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from "react";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-[#F5F7FA]">
      <div className="flex justify-between items-center px-6 lg:px-32 py-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <Image
            src={require("../../../public/Icon.png")}
            alt="logo"
            height={35}
            width={24}
          />
          <h2 className="text-xl font-bold">Nexcent</h2>
        </div>

        {/* Hamburger Icon for Small Screens */}
        <div
          className="lg:hidden flex items-center cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-12">
          <li>Home</li>
          <li>Service</li>
          <li>Feature</li>
          <li>Product</li>
          <li>Testimonial</li>
          <li>FAQ</li>
        </ul>

        {/* Login & Signup */}
        <div className="hidden lg:flex gap-6 items-center">
          <li className="list-none">Login</li>
          <li className="list-none">
            <button className="bg-primary text-white rounded px-4 py-2">
              Sign up
            </button>
          </li>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li>Home</li>
            <li>Service</li>
            <li>Feature</li>
            <li>Product</li>
            <li>Testimonial</li>
            <li>FAQ</li>
          </ul>
          <div className="flex flex-col gap-4">
            <button className="text-gray-600">Login</button>
            <button className="bg-primary text-white rounded px-4 py-2">
              Sign up
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;