"use client"; // Ensure the component is rendered on the client-side

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="border rounded-md dark:border-gray-700 text-gray-200 py-8 mt-2">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Main Footer Wrapper */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slide from below
          animate={{ opacity: 1, y: 0 }} // Fade in and move up to normal position
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* First Div: Waqar Mehmood Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <motion.h3
              className="text-xl font-semibold text-gray-900 dark:text-gray-100"
              initial={{ opacity: 0, x: -20 }} // Slide in from left
              animate={{ opacity: 1, x: 0 }} // Move to normal position
              transition={{ duration: 0.6 }}
            >
              Waqar Mehmood
            </motion.h3>
            <motion.p
              className="text-sm text-gray-600 dark:text-gray-400 mt-2 text-justify"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I am a front-end developer specializing in React, Next.js, and
              Tailwind CSS. I create responsive, user-friendly websites with a
              focus on performance and accessibility.
            </motion.p>
          </div>

          {/* Second Div: Quick Links and Follow Me */}
          <div className="sm:col-span-2 lg:col-span-2 flex sm:flex-col lg:flex-row gap-8">
            {/* Quick Links Section */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Quick Links
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                <li>
                  <Link href="/" className="hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="hover:text-blue-400">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-blue-400">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-400">
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Follow Me Section */}
            <motion.div
              className="flex-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                Follow Me
              </h3>
              <div className="flex flex-col gap-1 mt-2 sm:mt-0">
                <Link
                  href="https://github.com/waqarhub"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </Link>
                <Link
                  href="https://linkedin.com/in/waqarhub"
                  target="_blank"
                  className="text-blue-400 hover:underline"
                >
                  LinkedIn
                </Link>
              </div>
            </motion.div>
          </div>
        </motion.div>
        {/* Footer Bottom Section */}
        <motion.div
          className="border-t border-gray-600 mt-4 pt-4 text-center text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Waqar's Portfolio. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
