import React from "react";
import { motion } from "framer-motion";

function Skills() {
  // Container variants to stagger categories
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.3 } },
  };

  // Category card variants
  const categoryVariants = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Skill pill variants
  const skillVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const frontendSkills = [
    "React",
    "Next.js",
    "HTML",
    "CSS",
    "JavaScript",
    "Framer Motion",
    "Tailwind CSS",
  ];
  const backendSkills = [
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "RESTful APIs",
  ];
  const toolsSkills = ["Git", "GitHub", "VS Code", "Figma", "Vercel"];

  return (
    <div className="p-6 bg-gray-50" id="skills">
      {/* Heading */}
      <motion.h2
        className="font-bold text-4xl text-center"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 0.7, ease: "easeOut" },
        }}
        viewport={{ once: true, amount: 0.5 }}
      >
        Skills & Expertise
      </motion.h2>

      {/* Categories */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Frontend */}
        <motion.div className="p-4 rounded-lg" variants={categoryVariants}>
          <h3 className="font-bold text-xl text-center mb-3">Frontend</h3>
          <motion.ul className="grid grid-cols-2 grid-rows-4 gap-3 text-center">
            {frontendSkills.map((skill, i) => (
              <motion.li
                key={i}
                className="bg-gray-400 rounded-full p-3 cursor-pointer text-white font-medium shadow-sm"
                variants={skillVariants}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#A78BFA",
                  boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Backend */}
        <motion.div className="p-4 rounded-lg" variants={categoryVariants}>
          <h3 className="font-bold text-xl text-center mb-3">Backend</h3>
          <motion.ul className="grid grid-cols-2 grid-rows-3 gap-3 text-center">
            {backendSkills.map((skill, i) => (
              <motion.li
                key={i}
                className="bg-gray-400 rounded-full p-3 cursor-pointer text-white font-medium shadow-sm"
                variants={skillVariants}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#A78BFA",
                  boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Tools */}
        <motion.div className="p-4 rounded-lg" variants={categoryVariants}>
          <h3 className="font-bold text-xl text-center mb-3">Tools</h3>
          <motion.ul className="grid grid-cols-2 grid-rows-3 gap-3 text-center">
            {toolsSkills.map((skill, i) => (
              <motion.li
                key={i}
                className="bg-gray-400 rounded-full p-3 cursor-pointer text-white font-medium shadow-sm"
                variants={skillVariants}
                whileHover={{
                  scale: 1.2,
                  backgroundColor: "#A78BFA",
                  boxShadow: "0px 8px 15px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Skills;
