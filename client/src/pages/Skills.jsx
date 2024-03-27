import React from "react";
import Hero from "../components/Hero";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectCards";
import Intro from "../components/Intro";
import BackgroundAnimation from "../components/BackgroundAnimation";

const Skills = () => {
  return (
    <div className="pt-20 h-screen bg-[#191E34]">
      <BackgroundAnimation />
      <SkillSection />
    </div>
  );
};

export default Skills;
