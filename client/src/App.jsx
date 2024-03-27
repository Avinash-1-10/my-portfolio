import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Connect from "./pages/Connect";
import AboutMe from "./pages/AboutMe";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      <Router>
        <div className="fixed top-5 right-[50%] translate-x-[50%] z-50 ">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/me" element={<AboutMe />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
