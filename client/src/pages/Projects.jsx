import React from "react";
import Hero from "../components/Hero";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectCards";
import Intro from "../components/Intro";
import BackgroundAnimation from "../components/BackgroundAnimation";

const Projects = () => {
  return (
    <div className="pt-20">
      <BackgroundAnimation />
      <ProjectSection />
    </div>
  );
};

export default Projects;
