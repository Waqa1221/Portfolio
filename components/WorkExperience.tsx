"use client"; // Make sure this component is rendered on the client side

import { motion } from "framer-motion";
import React from "react";

// Interface to define the structure of work experience data
interface WorkExperienceItem {
  startDate: string;
  endDate?: string;
  companyName: string;
  companyLogo?: string;
  jobTitle: string;
  description: string[];
  companyLink?: string;
}

// Data for work experience
const workExperienceData: WorkExperienceItem[] = [
  {
    startDate: "August 2024",
    endDate: "Present",
    companyName: "Developios",
    jobTitle: "Frontend Developer",
    description: [
      "Developing user-friendly and responsive web applications tailored to client requirements.",
      "Collaborating with designers and stakeholders to implement modern and visually appealing interfaces.",
      "Ensuring high performance and cross-browser compatibility for all projects.",
    ],
  },
  {
    startDate: "December 2023",
    endDate: "August 2024",
    companyName: "Artisan AI",
    jobTitle: "Frontend Developer",
    description: [
      "Designed and integrated seamless CRM interfaces for platforms like HubSpot and Salesforce, improving user workflows.",
      "Enhanced email-related UI, achieving streamlined communication and efficiency.",
      "Built interactive dashboards for real-time analytics of user activities.",
    ],
  },
  {
    startDate: "June 2023",
    endDate: "December 2023",
    companyName: "Own Store",
    jobTitle: "Shopify Developer",
    description: [
      "Customized Shopify themes to meet specific client requirements, improving store aesthetics and functionality.",
      "Developed and optimized Shopify apps to enhance store features and performance.",
      "Worked on integrating third-party tools and plugins ensuring seamless compatibility with Shopify platforms.",
      "Provided ongoing support and maintenance for Shopify stores and ensuring smooth operations.",
    ],
  },
];

// WorkExperience component to display the data
const WorkExperience: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 w-full -z-10">
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -50 }} // Start position: hidden and up
        animate={{ opacity: 1, y: 0 }} // Final position: fully visible, at normal position
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Work Experience
      </motion.h1>

      {/* Wrapping the ordered list with motion for animation */}
      <motion.ol
        className="relative border-s border-gray-200 dark:border-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Mapping over the workExperienceData array to render each experience */}
        {workExperienceData.map((item, index) => (
          <motion.li
            key={index}
            className={`mb-10 ms-4 ${
              index === workExperienceData.length - 1 ? "mb-0" : ""
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
              {item.jobTitle} at {item.companyName}
            </h3>
            <div className="mb-4 text-base font-normal text-gray-700 dark:text-gray-400">
              <ul>
                {/* Listing the job responsibilities */}
                {item.description.map((desc, index) => (
                  <li key={index}>{desc}</li>
                ))}
              </ul>
            </div>
            {/* Conditionally rendering a link to the company website */}
            {item.companyLink && (
              <a
                href={item.companyLink}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
              >
                Learn more
                <svg
                  className="w-3 h-3 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            )}
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
};

export default WorkExperience;
