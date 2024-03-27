import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <motion.div
      className="w-full max-w-4xl mx-auto p-6 shadow-lg  text-white rounded-lg text-center md:text-justify"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <h2 className="text-2xl lg:text-3xl font-bold mb-4">
        Hello, I'm <span>Avinash Yede</span>, a passionate{" "}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-purple-500">
          full-stack developer
        </span>{" "}
        deeply dedicated to crafting innovative web applications.
      </h2>
      <p className="text-lg lg:text-xl mb-4">
        With proficiency in the MERN stack, I possess extensive knowledge in{" "}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-green-400 to-blue-500 font-semibold">
          React
        </span>
        ,{" "}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-yellow-400 to-pink-500 font-semibold">
          JavaScript
        </span>
        ,{" "}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-indigo-500 font-semibold">
          Node.js
        </span>
        , and{" "}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-red-400 to-yellow-500 font-semibold">
          MongoDB
        </span>
        . Additionally, I am keenly interested in exploring cutting-edge web3
        technologies such as{" "}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-purple-400 to-purple-600 font-semibold">
          Solidity
        </span>{" "}
        and{" "}
        <span className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-purple-500 font-semibold">
          Ethereum
        </span>
        .
      </p>
      <p className="text-lg lg:text-xl">
        My goal is to continually expand my expertise and contribute to the
        ever-evolving landscape of web development.
      </p>
    </motion.div>
  );
};

export default Intro;
