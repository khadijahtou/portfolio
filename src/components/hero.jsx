import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Hero() {
  // Container for staggered children animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Each item pops in from bottom
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 relative"
      id="home"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <div className="mt-11 flex flex-col gap-4 p-3">
        <motion.h1 className="text-[18px] text-gray-300" variants={item}>
          FULL STACK DEVELOPER
        </motion.h1>

        <motion.p className="font-bold text-2xl md:text-6xl" variants={item}>
          I build scalable, modern web applications with clean architecture and
          intentional design.
        </motion.p>

        <motion.p
          className="font-heading font-light text-foreground leading-tight text-[16px] md:text-[20px] max-w-2xl"
          variants={item}
        >
          With expertise in React, Node.js, and modern web technologies, I
          create elegant solutions that combine beautiful design with robust
          functionality.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-3" variants={item}>
          <Link to="/projects">
            <button className="bg-purple-300 rounded p-3 text-gray-200 w-40 hover:bg-white">
              View Projects
            </button>
          </Link>
          <a href="/Resume.pdf" download>
            <button className="bg-white rounded p-3 text-purple-200 border border-purple-100 w-40 hover:bg-purple-100">
              Download Resume
            </button>
          </a>
        </motion.div>
      </div>

      {/* Background Circle */}
      <div className="h-96 w-96 rounded-full bg-linear-to-br from-purple-400 via-purple-500 to-purple-600 absolute top-25 right-10 -z-10 blur-2xl opacity-50 hidden md:block"></div>
    </motion.div>
  );
}

export default Hero;
