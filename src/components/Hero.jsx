import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const roles = ["Software Engineer", "Web Developer", "Full Stack Developer"]; // List of roles

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500); // Change every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="Home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <div className="flex flex-col items-center justify-center gap-2">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileDrag={{ scale: 1.1 }}
            dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
            drag={true} // ✅ Enables dragging
          >
            <div
              className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] 
              bg-cover bg-center bg-no-repeat rounded-full shadow-xl shadow-indigo-900
              transition-all duration-300 hover:-translate-y-5 hover:scale-105 
              hover:shadow-2xl hover:shadow-indigo-600"
              style={{ backgroundImage: "url('/Hero.jpeg')" }}
            />
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
          >
            <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl">
              Muhammad Nahrul Hayat
            </h1>

            {/* Animated Role Text Sliding from Left to Right */}
            <div className="h-10 overflow-hidden relative w-80">
              <AnimatePresence mode="wait">
                <motion.h3
                  key={roles[index]} // Changes key to trigger animation
                  initial={{ x: "-100%", opacity: 0 }} // Start from the left
                  animate={{ x: "0%", opacity: 1 }} // Move to the center
                  exit={{ x: "100%", opacity: 0 }} // Move out to the right
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute w-full bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl"
                >
                  {roles[index]}
                </motion.h3>
              </AnimatePresence>
            </div>

            <p className="md:text-base text-pretty text-sm text-gray-400">
              I'm a software engineer with a passion for creating innovative
              solutions that make a difference. Skilled in JavaScript,
              TypeScript, React, Node.js, Express, Python, PHP, Laravel, REST
              API, C++, and Tailwind CSS. I focus on building clean, scalable,
              and user-friendly applications. Seamless database integration with
              PostgreSQL, MySQL, and MongoDB.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
