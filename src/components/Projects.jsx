import React from "react";
import image1 from "../assets/myteraskopi.jpeg";
import image2 from "../assets/teraskopi54.jpeg";
import image3 from "../assets/trashify.jpeg";
import image4 from "../assets/seblaktasti.jpeg";
import image5 from "../assets/sipskbtsumsel.jpeg";
import image6 from "../assets/CMS-culture.jpeg";

import { motion } from "framer-motion";

const ProjectsData = [
  {
    image: image1,
    title: "MyTeraskopi POS Application Web Based",
    description:
      "A Full-Stack Web Application designed to help coffee shop owners efficiently manage their business operations. This platform offers features such as inventory tracking, order management, sales reporting, and customer engagement tools, ensuring a seamless workflow and enhanced profitability for coffee shop businesses.",
    technologies: [
      "React",
      "Nodejs",
      "Express",
      "MySQL",
      "TailwindCSS",
      "JWT",
      "cPanel",
    ],
    Link: "https://myteraskopi54.my.id/",
  },
  {
    image: image2,
    title: "TerasKopi54 Landing Page",
    description:
      "A modern and engaging landing page for TerasKopi54 Coffee Shop, designed to help business owners showcase their services, menu, and special offers. This platform enhances customer engagement by providing an intuitive user experience, seamless online ordering, and essential business information, ensuring a strong digital presence for the coffee shop.",
    technologies: ["React", "Vercel"],
    Link: "https://teraskopi54.my.id/",
  },
  {
    image: image3,
    title: "Trashify Deep Learning",
    description:
      "A Machine Learning project designed to help people recognize and classify trash types, such as organic and inorganic waste. By leveraging image recognition and AI-powered classification, this system promotes better waste management practices, encouraging recycling and sustainability to create a cleaner and healthier environment.",
    technologies: [
      "React",
      "Nodejs",
      "Express",
      "MySQL",
      "TailwindCSS",
      "JWT",
      "cPanel",
      "TensorFlow",
    ],
    Link: "https://trashifyml.com/",
  },
  {
    image: image4,
    title: "Seblaktasti POS Application Web Based",
    description:
      "A Full-Stack Web Application designed to help business owners efficiently manage their food and beverage operations. This platform provides tools for inventory management, order processing, sales tracking, and customer engagement, ensuring a seamless and optimized workflow for businesses in the F&B industry.",
    technologies: ["PHP", "MySQL", "TailwindCSS", "cPanel"],
  },
  {
    image: image5,
    title: "Finding-Free Letter Submission System",
    description:
      "A digital platform designed to manage and streamline appointment scheduling for government employees in the South Sumatra Province, Indonesia. This system ensures efficient coordination, transparent scheduling, and seamless access to appointment management, enhancing productivity and administrative effectiveness.",
    technologies: [
      "React",
      "Nodejs",
      "Express",
      "Supabase",
      "TailwindCSS",
      "JWT",
      "cPanel",
    ],
    Link: "https://sipskbt-sumsel.my.id/",
  },
  {
    image: image6,
    title:
      "Content Management System App for Archiving Cultural and Ethnic Records",
    description:
      "A Content Management System (CMS) designed to manage and preserve cultural and ethnic records. This platform enables efficient data organization, archival, and retrieval of historical and cultural information, ensuring the protection and accessibility of valuable heritage for research, education, and public awareness.",
    technologies: [
      "React",
      "Nodejs",
      "Express",
      "Supabase",
      "TailwindCSS",
      "cPanel",
    ],
    Link: "https://mern-cms-fe.vercel.app/",
  },
];

const ProjectsCard = ({ Project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
        <img
          src={Project.image}
          alt={Project.title}
          className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]"
        />
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <div className="text-xl font-semibold">{Project.title}</div>
            <p className="text-gray-400">{Project.description}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            {Project.technologies.map((tech, index) => (
              <span key={index} className="rounded-lg bg-black p-3">
                {tech}
              </span>
            ))}
          </div>
          {Project.Link && (
            <a
              href={Project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              Visit Project
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
};

const ScrollReveal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.div>
  );
};

const Projects = () => {
  return (
    <div
      id="Projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>
      <ScrollReveal>
        <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
          {ProjectsData.map((Project, index) => (
            <ProjectsCard key={index} Project={Project} />
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default Projects;
