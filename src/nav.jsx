import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", name: "Home" },
    { path: "/projects", name: "Projects" },
    { path: "/about", name: "About" },
    { path: "/skills", name: "Skills" },
    { path: "/process", name: "Process" },
    { path: "/contact", name: "Contact" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="max-w-6xl mx-auto h-16 px-6 flex items-center">
          {/* MOBILE VIEW */}
          <div className="flex justify-between items-center w-full md:hidden">
            {/* LEFT: MENU ICON */}
            <button className="text-purple-600" onClick={() => setOpen(!open)}>
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* RIGHT: RESUME BUTTON */}
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-purple-600 transition">
                Resume
              </button>
            </a>
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden md:flex justify-between items-center w-full">
            {/* Logo */}
            <NavLink to="/" className="text-xl font-bold text-purple-500">
              Portfolio
            </NavLink>

            <ul className="flex items-center gap-8 font-medium">
              {links.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative pb-1 transition ${
                        isActive
                          ? "text-purple-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-purple-600"
                          : "text-gray-700 hover:text-purple-500"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              <li>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition">
                    Resume
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-16 left-0 w-1/2 bg-white shadow-lg border-b z-40 md:hidden"
          >
            <ul className="flex flex-col py-6 px-6 space-y-6 font-medium">
              {links.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block transition ${
                        isActive
                          ? "text-purple-600 border-l-4 border-purple-600 pl-3"
                          : "text-gray-700 hover:text-purple-500"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
