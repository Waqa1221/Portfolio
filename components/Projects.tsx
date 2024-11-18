"use client"; // Ensure this component is rendered on the client side

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const projectsData = [
  {
    title: "Coffee Shop",
    description:
      "Just wrapped up my front-end development project—a beautiful coffee website! 🎉 I focused on creating a seamless user interface that highlights our premium blends.",
    link: "https://670f5af41ae605ede36382c8--waqars-dev.netlify.app/",
    code: "",
    previewVideo: "/videos/Coffee.mp4",
    technologies: [
      "Next.js",
      "React",
      "Tailwind.css",
      "TypeScript",
      "JavaScript",
    ],
  },
  {
    title: "Gtm Store",
    description:
      "Excited to share that I just completed a responsive website as a Front-End Developer! 🎉 It was a great experience to enhance my skills and create something user-friendly.",
    link: "https://670f4f5a7d547ce45740733e--waqars-dev.netlify.app/",
    code: "",
    previewVideo: "/videos/gym.mp4",
    technologies: [
      "Next.js",
      "React",
      "Tailwind.css",
      "TypeScript",
      "JavaScript",
      "Node.js",
    ],
  },
  {
    title: "Ecommerce Store",
    description:
      "I recently developed a fully functional eCommerce website using JavaScript, React, Tailwind CSS, and Vite. This project allowed me to combine my skills in web development with a focus on creating a seamless user experience.",
    link: "https://670f56123a6926ebce5da902--waqars-dev.netlify.app/",
    code: "",
    previewVideo: "/videos/1009(1).mp4",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Fanta Website",
    description:
      "Excited to share my latest project built with React.js and Tailwind CSS. I created a fully responsive web app featuring dynamic components, smooth animations with Framer Motion.",
    link: "https://waqarhub.netlify.app/",
    code: "",
    previewVideo: "/videos/Fanta.mp4",
    technologies: [
      "Next.js",
      "React",
      "Framer Motion",
      "Node.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
];

function Projects() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Animated Heading using motion.h1 */}
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -50 }} // Start hidden and above
        animate={{ opacity: 1, y: 0 }} // Animate to visible and normal position
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700"
            initial={{ opacity: 0, y: 50 }} // Start from bottom and hidden
            animate={{ opacity: 1, y: 0 }} // Animate to normal position
            transition={{
              duration: 0.5,
              delay: index * 0.1, // Staggered animation for each card
              ease: "easeOut",
            }}
          >
            <video
              src={project.previewVideo}
              autoPlay
              muted
              loop
              className="rounded-t-md"
            />
            <div className="flex flex-col gap-3 p-4 grow">
              {/* Animated Project Title */}
              <motion.h2
                className="text-xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {project.title}
              </motion.h2>

              {/* Animated Project Description */}
              <motion.p
                className="text-sm text-gray-500 dark:text-gray-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {project.description}
              </motion.p>

              {/* Animated Technology Tags */}
              <div className="flex flex-wrap gap-[4px]">
                {project.technologies.map((technology, index) => (
                  <motion.span
                    key={index}
                    className="bg-slate-100 text-gray-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>

              {/* Animated Action Buttons */}
              <div className="flex gap-2 mt-auto">
                <Link href={project.link}>
                  <Button variant="default">View</Button>
                </Link>
                <Link href={project.code}>
                  <Button variant="outline">Code</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
