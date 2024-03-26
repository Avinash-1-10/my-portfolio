import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
const ProjectCard = ({ title, image, demoLink, sourceLink }) => {
  return (
    <motion.div
      className="max-w-xs mx-auto mb-8 overflow-hidden rounded-lg shadow-lg bg-gray-800 z-10"
      whileHover={{ scale: 1.05 }}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover object-center"
      />
      <div className="px-4 py-4">
        <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
        <div className="flex justify-between items-center">
          <div className="flex space-x-2">
            <TechnologyIcon icon={<FaReact />} title="React" />
            <TechnologyIcon icon={<FaNodeJs />} title="Node.js" />
            <TechnologyIcon icon={<FaHtml5 />} title="HTML5" />
            <TechnologyIcon icon={<FaCss3Alt />} title="CSS3" />
          </div>
          <div className="flex space-x-3 text-white text-lg">
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-blue-600 flex flex-col justify-center items-center"
            >
              <FaExternalLinkAlt className="mr-1" />
            </a>
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#4FD1C5] flex flex-col justify-center items-center"
            >
              <FaGithub className="mr-1" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TechnologyIcon = ({ icon, title }) => {
  return (
    <div className="text-gray-600 hover:text-gray-800" title={title}>
      {icon}
    </div>
  );
};

const ProjectSection = () => {
  const projects = [
    {
      title: "Project 1",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      title: "Project 2",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      title: "Project 3",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      title: "Project 3",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      title: "Project 3",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      title: "Project 3",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      title: "Project 3",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      title: "Project 3",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      sourceLink: "#",
    },
    {
      title: "Project 3",
      image:
        "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
      demoLink: "#",
      sourceLink: "#",
    },
    // Add more projects as needed
  ];

  return (
    <div className="min-h-screen bg-slate-900 py-12 px-4 md:px-0">
      <div className="max-w-screen-xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl text-center mb-10 font-bold text-blue-500"
          // style={{ color: "#4FD1C5" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          My Projects
        </motion.h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
