import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="fixed top-5 right-[50%] translate-x-[50%] z-50 ">
        <Navbar />
      </div>
      <Home />
    </div>
  );
};

export default App;
