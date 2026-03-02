import React from "react";
import Recipe from "../assets/Recipe.jpeg";
import Flower from "../assets/flower.jpeg";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

function Project() {
  // Variants for staggered heading + line
  const headingContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const headingVariants = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 1, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const lineVariants = {
    hidden: { scaleX: 0, originX: 0, opacity: 0 },
    show: {
      scaleX: 1,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    hover: { scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" },
  };

  const tagVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="p-6 lg:p-12 bg-gray-200">
      {/* Heading + line container */}

      <motion.div
        className="flex items-center mb-12"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.2 } }, // line first, then heading
        }}
      >
        {/* Line slides in first from left */}
        <motion.div
          className="h-1 bg-purple-400 flex-1 mr-4"
          variants={{
            hidden: { scaleX: 0, originX: 0, opacity: 0 },
            show: {
              scaleX: 1,
              opacity: 1,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        />

        {/* Heading slides in from left */}
        <motion.h2
          className="font-bold text-2xl md:text-4xl text-purple-400 whitespace-nowrap"
          variants={{
            hidden: { x: -100, opacity: 0 },
            show: {
              x: 0,
              opacity: 1,
              transition: { duration: 0.7, ease: "easeOut" },
            },
          }}
        >
          Selected Projects
        </motion.h2>
      </motion.div>
      {/* Project Cards */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Ocean of Recipes Card */}
        <motion.div
          className="rounded-lg shadow-md bg-white p-4 flex flex-col gap-3 flex-1"
          variants={cardVariants}
          initial="hidden"
          animate="show"
          whileHover="hover"
        >
          <img
            src={Recipe}
            alt="Ocean Of Recipes"
            className="w-full object-cover rounded-lg"
          />
          <h3 className="font-bold text-xl mt-2 text-purple-400 hover:text-black">
            Ocean of Recipes
          </h3>
          <p className="text-gray-600 text-[18px]">
            A dynamic recipe web app fetching recipes from an API, with
            interactive search, filtering, and favorite management.
          </p>

          <motion.ul
            className="flex flex-wrap gap-3"
            variants={tagVariants}
            initial="hidden"
            animate="show"
          >
            <motion.li className="bg-gray-400 rounded-full px-2 py-1">
              HTML5
            </motion.li>
            <motion.li className="bg-gray-400 rounded-full px-2 py-1">
              CSS3
            </motion.li>
            <motion.li className="bg-gray-400 rounded-full px-2 py-1">
              API
            </motion.li>
          </motion.ul>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="http://ocean-of-recipes.onrender.com">
              <button className="bg-purple-400 flex flex-row gap-3 p-3 justify-center rounded text-white w-full md:w-48">
                <ExternalLink />
                <span className="font-semibold">Live Demo</span>
              </button>
            </a>
            <a href="https://github.com/khadijahtou/Recipe-Website-/pulls">
              <button className="border-purple-300 border rounded p-3 text-purple-400 flex flex-row gap-3 justify-center w-full md:w-48">
                <Github />
                <span className="font-semibold">GitHub</span>
              </button>
            </a>
          </div>
        </motion.div>

        {/* Flower Delivery Website Card */}
        <motion.div
          className="rounded-lg shadow-md bg-white p-4 flex flex-col gap-3 flex-1"
          variants={cardVariants}
          initial="hidden"
          animate="show"
          whileHover="hover"
        >
          <img
            src={Flower}
            alt="Flower Delivery Website"
            className="w-full object-cover rounded-lg"
          />
          <h3 className="font-bold text-xl mt-2 text-black hover:text-purple-400">
            Flower Delivery Website
          </h3>
          <p className="text-gray-600 text-[18px]">
            A full-stack e-commerce platform for flower delivery with real-time
            order tracking and payment integration.
          </p>

          <motion.ul
            className="flex flex-wrap gap-3"
            variants={tagVariants}
            initial="hidden"
            animate="show"
          >
            <motion.li className="bg-gray-400 rounded-full px-2 py-1">
              React
            </motion.li>
            <motion.li className="bg-gray-400 rounded-full px-2 py-1">
              Node.js
            </motion.li>
            <motion.li className="bg-gray-400 rounded-full px-2 py-1">
              MongoDb
            </motion.li>
            <motion.li className="bg-gray-400 rounded-full px-2 py-1">
              Express
            </motion.li>
            <motion.li className="bg-gray-400 rounded-full px-2 py-1">
              JWT Auth
            </motion.li>
            <motion.li className="bg-gray-400 rounded-full px-2 py-1">
              Pay Stack
            </motion.li>
          </motion.ul>

          <div className="flex flex-wrap gap-4 mt-4">
            <a href="https://flower-delivery-website-omega.vercel.app">
              <button className="bg-purple-400 flex flex-row gap-3 p-3 justify-center rounded text-white w-full md:w-48">
                <ExternalLink />
                <span className="font-semibold">Live Demo</span>
              </button>
            </a>
            <a href="https://github.com/khadijahtou/Flower-Delivery-Website/pulls">
              <button className="border-purple-300 border rounded p-3 text-purple-400 flex flex-row gap-3 justify-center w-full md:w-48">
                <Github />
                <span className="font-semibold">GitHub</span>
              </button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Project;
