import React from "react";
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: "2px",
              height: "2px",
            }}
            animate={{
              x: [-50, 50],
              y: [-50, 50],
              rotate: [0, 360],
              transition: {
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                repeatType: "reverse",
                delay: Math.random() * 5,
              },
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default BackgroundAnimation;
