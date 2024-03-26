import React from "react";
import Hero from "../components/Hero";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectCards";

const Home = () => {
  return (
    <div>
      <Hero />
      <SkillSection/>
      <ProjectSection/>
    </div>
  );
};

export default Home;
