"use client"; // Ensure this component is rendered on the client side

import { motion } from "framer-motion";
import React from "react";

const skillsData = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
  "GitHub",
  "Node.js",

  "MongoDB",
  "PostgreSQL",
  "SQL Server",

  "AWS",

  "FastAPI",
  "RESTful APIs",
];

function Skills() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Animated Heading using motion.h1 */}
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -50 }} // Start hidden and above
        animate={{ opacity: 1, y: 0 }} // Animate to visible and normal position
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Skills
      </motion.h1>

      {/* Animated skills container */}
      <div className="flex flex-wrap gap-2">
        {skillsData.map((skill, index) => (
          <motion.span
            key={index}
            className="bg-gray-500 text-gray-100 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, scale: 0.8 }} // Initial state: hidden and slightly scaled down
            animate={{ opacity: 1, scale: 1 }} // Animate to fully visible and normal size
            transition={{
              duration: 0.5, // Duration of animation
              delay: index * 0.05, // Stagger animation based on index
              ease: "easeOut", // Smooth easing for the transition
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default Skills;
