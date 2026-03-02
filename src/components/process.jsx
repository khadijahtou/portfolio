import { Code2, Lightbulb, Rocket } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

function Process() {
  // Variants for the heading
  const headingVariants = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Variants for the card container to stagger children
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  // Variants for individual cards
  const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 15px 25px rgba(0,0,0,0.2)",
      transition: { duration: 0.3 },
    },
  };

  return (
    <div className="bg-gray-50 p-6 md:p-12" id="process">
      {/* Heading */}
      <motion.h1
        className="text-3xl font-bold text-center mb-12"
        variants={headingVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        My Process
      </motion.h1>

      {/* Cards container */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Strategy Card */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
        >
          <Code2 className="text-purple-400 w-12 h-12 bg-gray-200 p-2 rounded text-[16px] mb-4" />
          <h2 className="text-xl font-semibold mb-4">Strategy</h2>
          <p className="text-gray-700">
            Understanding your vision, goals, and target audience to create a
            solid foundation for development.
          </p>
        </motion.div>

        {/* Development Card */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
        >
          <Lightbulb className="text-purple-400 w-12 h-12 bg-gray-200 p-2 rounded text-[16px] mb-4" />
          <h2 className="text-xl font-semibold mb-4">Development</h2>
          <p className="text-gray-700">
            Create wireframes and prototypes to visualize the UI and UX. This
            allows us to iterate before full development begins.
          </p>
        </motion.div>

        {/* Deployment Card */}
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md cursor-pointer"
          variants={cardVariants}
          whileHover="hover"
        >
          <Rocket className="text-purple-400 w-12 h-12 bg-gray-200 p-2 rounded text-[16px] mb-4" />
          <h2 className="text-xl font-semibold mb-4">Deployment</h2>
          <p className="text-gray-700">
            Ensuring smooth deployment with comprehensive testing, monitoring,
            and post-launch support.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Process;
