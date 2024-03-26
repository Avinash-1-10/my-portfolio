import React from "react";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaDatabase,
  FaGit,
  FaCode,
  FaEthereum,
} from "react-icons/fa";
import { SiExpress,SiNextdotjs,SiSolidity,SiTypescript } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { motion } from "framer-motion";

const SkillSection = () => {
  return (
    <div className=" flex flex-col justify-center items-center px-5 md:px-10 py-10 bg-[#191E34]">
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl text-center mb-10 font-bold"
        style={{ color: "#4FD1C5" }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        My Skills
      </motion.h1>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6 z-10">
        <SkillIcon icon={<FaReact />} title="React" color="#61DBFB" />
        <SkillIcon icon={<SiNextdotjs />} title="Next.js" color="#CACACA" />
        <SkillIcon icon={<FaJs />} title="JavaScript" color="#F0DB4F" />
        <SkillIcon icon={<FaNodeJs />} title="Node.js" color="#68A063" />
        <SkillIcon icon={<FaHtml5 />} title="HTML" color="#E34F26" />
        <SkillIcon icon={<FaCss3Alt />} title="CSS" color="#1572B6" />
        <SkillIcon icon={<FaDatabase />} title="MongoDB" color="#4DB33D" />
        <SkillIcon icon={<DiMysql />} title="mySql" color="#F29111" />
        <SkillIcon icon={<SiExpress />} title="Express" color="#239DFF" />
        <SkillIcon icon={<SiTypescript />} title="Typescript" color="#3077C6" />
        <SkillIcon icon={<FaCode />} title="Tailwind CSS" color="#38B2AC" />
        <SkillIcon icon={<SiSolidity />} title="Solidity" color="#2B247C" />
        <SkillIcon icon={<FaEthereum />} title="Ethereum" color="#627EEA" />
        <SkillIcon icon={<FaGit />} title="Git" color="#F05032" />
        <SkillIcon icon={<FaCode />} title="VSCode" color="#007ACC" />
        
        
      </div>
    </div>
  );
};

const SkillIcon = ({ icon, title, color }) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center bg-gray-800 text-white p-4 rounded-md cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      {icon}
      <span className="mt-2 text-lg">{title}</span>
      <div
        className="w-full h-1 bg-transparent mt-2 rounded-full transition duration-300 ease-in-out transform hover:bg-white"
        style={{ backgroundColor: color }}
      ></div>
    </motion.div>
  );
};

export default SkillSection;
