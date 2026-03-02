import React from "react";
import { motion } from "framer-motion";
import image from "../assets/image.png";

function About() {
  // Variants for text content
  const textContainer = {
    hidden: {},
    show: { transition: { staggerChildren: 0.2 } },
  };

  const textItem = {
    hidden: { x: -50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Variants for the image
  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  // Variants for list items
  const listItemVariants = {
    hidden: { x: -30, opacity: 0 },
    show: { x: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-3 md:p-6 bg-gray-50"
      id="about"
    >
      {/* Image slides in from right */}
      <motion.div
        className="aspect-square w-full rounded-lg overflow-hidden"
        variants={imageVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <img
          src={image}
          alt="About Me"
          className="object-cover w-full h-full"
        />
      </motion.div>

      {/* Text content slides in from left */}
      <motion.div
        className="flex flex-col gap-4"
        variants={textContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h2
          className="font-bold text-2xl lg:text-4xl"
          variants={textItem}
        >
          About Me
        </motion.h2>

        <motion.p className="text-sm lg:text-[24px]" variants={textItem}>
          I'm a passionate full stack developer dedicated to creating digital
          experiences that are both beautiful and functional. With 2+ years of
          experience in web development, I specialize in building scalable
          applications using modern technologies.
        </motion.p>

        <motion.p className="text-sm lg:text-[24px]" variants={textItem}>
          My journey in tech started with a curiosity about how things work.
          I've since worked with startups and established companies, helping
          them bring their visions to life through code. I believe in writing
          clean, maintainable code and continuously learning new technologies.
        </motion.p>

        <motion.div variants={textItem}>
          <h3 className="font-bold text-2xl">Core Expertise</h3>
          <motion.ol className="list-disc pl-5 marker:text-purple-300 marker:text-2xl text-[18px] leading-tight text-gray-400">
            {[
              "Full Stack Web Development",
              "React & Next.js Expertise",
              "Node.js & Express Backend",
              "Database Design & Optimization",
              "Responsive Design",
              "API Development & Integration",
            ].map((item, index) => (
              <motion.li key={index} variants={listItemVariants}>
                {item}
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default About;
