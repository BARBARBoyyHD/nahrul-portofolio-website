import React from "react";
import { motion } from "framer-motion";

const Experiences = () => {
  const timelineData = [
    {
      year: "August 2024 - October 2024",
      title: "Fullstack Developer At Teras Kopi 54 coffee shop (internship)",
      description:
        "Full-Stack Developer Intern at Teras Kopi 54 Coffee Shop, responsible for developing and optimizing both frontend and backend systems, improving operational efficiency by 90%, and contributing to increased sales and a seamless customer experience.",
    },
    {
      year: "2022 - Present",
      title: "Freelance Fullstack Developer",
      description:
        "Freelance Full-Stack Developer, managing and developing client projects with a 90% efficiency rate, optimizing performance, and driving increased sales through tailored web solutions.",
    },
  ];
  return (
    <motion.div
      id="Experiences"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="min-h-[70vh] w-full flex flex-col items-center justify-center p-8 md:px-14 md:py-24"
    >
      <motion.h1
        className="text-4xl text-center font-semibold text-white md:text-6xl mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        My Experiences
      </motion.h1>

      <div className="relative w-full max-w-4xl">
        {/* Vertical Line */}
        <div className="absolute left-1/2 w-1 bg-indigo-600 h-full transform -translate-x-1/2"></div>

        {/* Timeline Items */}
        <ul className="space-y-12">
          {timelineData.map((item, index) => (
            <motion.li
              key={index}
              className={`relative flex items-center justify-between w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.3,
                ease: "easeOut",
              }}
            >
              {/* Year & Title */}
              <div className="w-1/2 text-right pr-6">
                <h2 className="text-xl font-bold text-indigo-400">
                  {item.year}
                </h2>
                <p className="text-white">{item.title}</p>
              </div>

              {/* Indicator */}
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <motion.div
                  className="w-4 h-4 bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.3 }}
                />
              </div>

              {/* Description */}
              <div className="w-1/2 pl-6">
                <p className="text-gray-300">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Experiences;
