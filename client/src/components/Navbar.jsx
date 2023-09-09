import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between md:px-20 px-5 py-5 items-center border-b ">
      <NavLink className="text-2xl" activClassname="active">{`< Avinash Yede />`}</NavLink>
      <div className="md:flex hidden gap-10 items-center justify-between">
        <NavLink to="/" activClassname="active">Home</NavLink>
        <NavLink to="/projects" activClassname="active">Projects</NavLink>
        <NavLink to="/aboutme" activClassname="active">About Me</NavLink>
        <NavLink to="/contact" activClassname="active">Contact</NavLink>
      </div>
    </div>
  );
};

export default Navbar;
