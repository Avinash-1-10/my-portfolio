import React from "react";
import Hero from "../components/Hero";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectCards";
import Intro from "../components/Intro";
import ContactMe from "../components/ContactMe";

const Home = () => {
  return (
    <div>
      <Hero />
      <Intro/>
      <SkillSection/>
      <ProjectSection/>
    </div>
  );
};

export default Home;
