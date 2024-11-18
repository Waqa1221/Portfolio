"use client"; // This ensures the component runs on the client side

import { motion } from "framer-motion";
import Image from "next/image";
import ProfilePic from "@/app/images/waqars.jpg";

export default function Intro() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row gap-14 justify-between items-center -z-10">
      {/* Left Section (Text) with Animation */}
      <motion.div
        className="flex flex-col gap-2 w-full lg:w-4/6"
        initial={{ opacity: 0, y: 50 }} // Initial state: hidden, slightly down
        animate={{ opacity: 1, y: 0 }} // Final state: visible, normal position
        transition={{ duration: 1, ease: "easeOut" }} // Transition settings
      >
        <h1 className="text-4xl font-bold mb-4 hover:scale-105 transition-all duration-500">
          Hi! I&apos;m Waqar Mehmood.
        </h1>
        <p className="text-base text-justify text-gray-800 dark:text-gray-300">
          Dedicated Frontend Developer with a proven track record of delivering
          production-ready applications. I specialize in creating responsive and
          modern web interfaces ensuring seamless user experiences and design
          consistency. With a strong focus on scalability and performance. I
          thrive in fast-paced startup environments.
        </p>
      </motion.div>

      {/* Right Section (Profile Image) with Animation */}
      <motion.div
        className="flex items-center pt-24 justify-center md:mb-0"
        initial={{ opacity: 0, x: 50 }} // Initial state: hidden, slightly to the right
        animate={{ opacity: 1, x: 0 }} // Final state: visible, in normal position
        transition={{ duration: 1, ease: "easeOut" }} // Transition settings
      >
        <Image
          src={ProfilePic}
          alt="Waqar Mehmood"
          width={160}
          height={160}
          className="border-2 border-gray-100 rounded-full object-cover transform transition-all duration-500 hover:scale-110"
        />
      </motion.div>
    </div>
  );
}
