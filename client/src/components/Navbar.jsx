import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-8 py-3 px-8 rounded-full text-3xl bg-gradient-to-b from-blue-300/50 to-blue-300/50 backdrop-blur-lg text-white">
      <span className="transition-transform transform hover:scale-110 cursor-pointer">
        <RiHome6Line />
      </span>
      <span className="transition-transform transform hover:rotate-90 cursor-pointer">
        <GoProjectRoadmap />
      </span>
      <span className="transition-transform transform hover:translate-x-2 cursor-pointer">
        <IoCodeSlash />
      </span>
      <span className="transition-transform transform hover:-rotate-45 cursor-pointer">
        <CiGlobe />
      </span>
      <span className="transition-transform transform hover:scale-110 cursor-pointer">
        <FaRegUser />
      </span>
    </div>
  );
};

export default Navbar;
