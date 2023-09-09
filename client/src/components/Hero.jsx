import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { useSpring, animated } from "@react-spring/web";

const Hero = () => {
  const animationProps = useSpring({
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(-50px)" },
    config: { duration: 1000 },
  });

  return (
    <animated.div
      style={animationProps}
      className="flex flex-col justify-center items-center h-[80vh] gap-5"
    >
      <p className="text-3xl">Hey, I am</p>
      <h1 className="text-6xl">Avinash Yede</h1>
      <p className="text-3xl">I am</p>
      <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#3b82f6] via-[#7233f2] to-[#1d4ed8] text-center">
        Full Stack Web Developer
      </h1>
      <button className="text-white px-5 py-3 bg-black text-lg font-semibold rounded-md my-5 border-[2px] border-black  hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
        Hire me
      </button>
      <div className="flex justify-between gap-10 text-5xl">
        <AiFillGithub className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:text-purple-600" />
        <AiFillLinkedin className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:text-blue-700" />
        <AiFillTwitterCircle className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer hover:text-blue-400" />
      </div>
    </animated.div>
  );
};

export default Hero;
