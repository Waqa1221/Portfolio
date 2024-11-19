"use client"; // Ensure the component runs on the client-side

import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const testimonialsData = [
  {
    name: "John Doe",
    position: "Software Engineer at TechCorp",
    feedback:
      "Waqar development skills are incredible. The eCommerce site he built was not only functional but also easy to use. He really understands user experience and front-end development.",
  },
  {
    name: "Jane Smith",
    position: "Product Manager at DevStudio",
    feedback:
      "I worked with Waqar on several projects, and his attention to detail and problem-solving skills are second to none. He delivers high-quality, responsive websites with great performance.",
  },
  {
    name: "Alice Johnson",
    position: "Lead Designer at CreativeWorks",
    feedback:
      "Waqar is a great collaborator. He took my designs and brought them to life in a way that exceeded my expectations. His proficiency in React and Tailwind CSS made the project flow smoothly.",
  },
  {
    name: "Bob Lee",
    position: "Tech Lead at Innovators Inc.",
    feedback:
      "Working with Waqar was an absolute pleasure. His deep knowledge of both front-end and back-end technologies made the project a smooth and successful experience. I highly recommend his work!",
  },
];

function Testimonials() {
  return (
    <div className="flex flex-col gap-4 w-full">
      {/* Animated Heading using motion.h1 */}
      <motion.h1
        className="text-2xl font-bold"
        initial={{ opacity: 0, y: -50 }} // Start hidden and above
        animate={{ opacity: 1, y: 0 }} // Animate to visible and normal position
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Testimonials
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className="flex flex-col border rounded-md dark:border-gray-700 p-4"
            initial={{ opacity: 0, y: 50 }} // Start from bottom and hidden
            animate={{ opacity: 1, y: 0 }} // Animate to normal position
            transition={{
              duration: 0.5,
              delay: index * 0.1, // Staggered animation for each card
              ease: "easeOut",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              {/* Placeholder or Icon Instead of Image */}
              <div className="w-14 h-12 bg-gray-600 text-white rounded-full flex items-center justify-center font-bold text-md">
                {/* Initials or Placeholder Text */}
                {testimonial.name
                  .split(" ")
                  .map((word) => word[0])
                  .join("")}
              </div>

              <div>
                {/* Animated Name using motion.h2 */}
                <motion.h2
                  className="text-lg font-semibold"
                  initial={{ opacity: 0, x: -20 }} // Slide in from the left
                  animate={{ opacity: 1, x: 0 }} // Slide to normal position
                  transition={{ duration: 0.5 }}
                >
                  {testimonial.name}
                </motion.h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {`"${testimonial.position}"`}
                </p>
              </div>
            </div>

            {/* Animated Feedback */}
            <motion.p
              className="text-sm text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0, x: 20 }} // Start from the right
              animate={{ opacity: 1, x: 0 }} // Animate to normal position
              transition={{ duration: 0.5 }}
            >
              {testimonial.feedback}
            </motion.p>

            <div className="flex gap-2 mt-4">
              {/* Animated Contact Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0.2,
                  ease: "easeOut",
                }}
              >
                <Link href="/contact">
                  <Button variant="outline">Contact</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
