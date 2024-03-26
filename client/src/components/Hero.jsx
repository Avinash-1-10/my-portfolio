import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import BackgroundAnimation from "./BackgroundAnimation";
import profile from "../assets/profile.jpeg";
import { MdOutlineFileDownload } from "react-icons/md";

const Hero = () => {
  return (
    <div className="relative h-screen  flex flex-col md:flex-row justify-center items-center md:gap-10 gap-5 px-3 md:px-10 ">
      <BackgroundAnimation />
      <div className="md:w-[40%] flex items-center justify-center z-10">
        <img
          src={profile}
          alt=""
          className=" w-[75%] md:w-[100%] rounded-full object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:w-[60%] flex text-white flex-col gap-5 items-center justify-center text-center relative z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600">
          Hello, I'm Avinash.
        </h1>
        <h2 className="text-3xl md:text-5xl font-semibold">
          I am a full-stack developer.
        </h2>
        <motion.div className="flex justify-center items-center rounded-full px-8 py-2 gap-10 text-2xl  w-fit">
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="text-blue-300 transition duration-300 ease-in-out transform hover:text-blue-400"
          >
            <FaTwitter />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="text-blue-300 transition duration-300 ease-in-out transform hover:text-blue-400"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            className="text-blue-300 transition duration-300 ease-in-out transform hover:text-blue-400"
          >
            <FaGithub />
          </motion.a>
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className=" text-[#131A29] uppercase bg-[#4FD1C5] text-lg font-semibold px-3 py-1 rounded-lg  transition duration-300 ease-in-out"
        >
          <MdOutlineFileDownload className="inline text-2xl m-auto mr-1" />{" "}
          Resume
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
