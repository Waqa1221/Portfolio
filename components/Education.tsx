"use client"; // Ensure this component is rendered on the client side

import { motion } from "framer-motion";
import React from "react";

interface EducationItem {
  startDate: string;
  endDate?: string;
  collegeName?: string;
  schoolName?: string;
  address?: string;
  courseName: string;
}

const EducationData: EducationItem[] = [
  {
    startDate: "August 2019",
    endDate: "March 2023",
    collegeName: "Arid University",
    courseName: "Bachelor of Sciences in Computer Science",
    address: "6th Road, Rawalpindi, Punjab",
  },
  {
    startDate: "2016",
    endDate: "2018",
    schoolName: "Govt Degree College",
    address: "Satellite Town, 6th road, Rawalpindi, Punjab",
    courseName: "ICS",
  },
];

const Education: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full -z-10">
      {/* Animated Heading using motion.h1 */}
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -50 }} // Start position: hidden and up
        animate={{ opacity: 1, y: 0 }} // Final position: fully visible, at normal position
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Education
      </motion.h1>

      {/* Wrapping the ordered list with motion for animation */}
      <motion.ol
        className="relative border-s border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {EducationData.map((item, index) => (
          <motion.li
            key={index}
            className={`mb-10 ms-4 ${
              index === EducationData.length - 1 ? "mb-0" : ""
            }`}
            initial={{ opacity: 0, y: 50 }} // Start with a slight vertical offset and hidden
            animate={{ opacity: 1, y: 0 }} // Animate to final position
            transition={{ duration: 0.7, ease: "easeOut", delay: index * 0.3 }} // Delay for staggered animation
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {item.startDate} - {item.endDate || "Present"}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {item.courseName} at {item.collegeName || item.schoolName}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {item.address}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
};

export default Education;
