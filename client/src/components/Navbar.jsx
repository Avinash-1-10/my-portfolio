import React from "react";
import { NavLink } from "react-router-dom";
import { RiHome6Line } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-8 py-3 px-8 rounded-full text-3xl bg-gradient-to-b from-blue-300/50 to-blue-300/50 backdrop-blur-lg text-white">
      <NavLink
        exact
        to="/"
        className="transition-transform transform hover:scale-110 cursor-pointer"
      >
        <RiHome6Line />
      </NavLink>
      <NavLink
        to="/projects"
        className="transition-transform transform hover:rotate-90 cursor-pointer"
      >
        <GoProjectRoadmap />
      </NavLink>
      <NavLink
        to="/skills"
        className="transition-transform transform hover:-rotate-90 cursor-pointer"
      >
        <IoCodeSlash />
      </NavLink>
      <NavLink
        to="/connect"
        className="transition-transform transform hover:-rotate-90 cursor-pointer"
      >
        <CiGlobe />
      </NavLink>
      <NavLink
        exact
        activeClassName="active"
        to="/me"
        className="transition-transform transform hover:scale-110 cursor-pointer"
      >
        <FaRegUser />
      </NavLink>
    </div>
  );
};

export default Navbar;
