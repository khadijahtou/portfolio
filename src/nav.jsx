import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Nav() {
  const navContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const navItem = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };
  const [open, setOpen] = useState(false);
  return (
    //   {open && (
    //     <div className="absolute top-16 right-0 left-0 w-full h-screen bg-gray-900 flex flex-col items-center gap-4 justify-center text-white md:hidden">
    //       <ul>
    //         <button onClick={() => setOpen(false)}>
    //           {" "}
    //           <IoMdClose className="text-[28px]" />{" "}
    //         </button>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/projects">Projects</Link>
    //         </li>
    //         <li>
    //           <Link to="/about">About</Link>
    //         </li>
    //         <li>
    //           <Link to="/skills">Skills</Link>
    //         </li>
    //         <li>
    //           <Link to="/contact">Contact</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   )}
    <div className=" fixed border-gray-200 border-b top-0 z-20 right-0 left-0 w-full h-14  text-black flex items-center gap-4 justify-between p-3 ">
      <motion.div
        variants={navContainer}
        initial="hidden"
        animate="show"
        // transition={{ duration: 1.5 }}
        className="  flex gap-3  "
      >
        <motion.ul
          variants={navItem}
          className="text-[16px] text-gray-300 flex gap-3"
        >
          {" "}
          <Link to="/" variants={navItem}>
            Home
          </Link>
          <Link to="/projects" variants={navItem}>
            Projects
          </Link>
          <Link to="/about" variants={navItem}>
            About
          </Link>
          <Link to="/skills" variants={navItem}>
            Skills
          </Link>
          <Link to="/contact" variants={navItem}>
            Contact
          </Link>
        </motion.ul>
      </motion.div>

      <motion.button
        className=" rounded p-3  "
        initial={false}
        onClick={() => setOpen(!open)}
        animate={{
          backgroundColor: open ? "#E6D6FF" : "#A78BFA",
          color: open ? "#6A00F4" : "#ffffff",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Resume
      </motion.button>
    </div>
  );
}

export default Nav;
