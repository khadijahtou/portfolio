import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Nav() {
  const [open, setOpen] = useState(false);

  const navLinkStyles = ({ isActive }) =>
    `relative pb-1 transition duration-300 ${
      isActive ? "text-purple-600" : "text-gray-700"
    }`;

  const underline = ({ isActive }) =>
    isActive
      ? "after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-purple-600"
      : "";

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto flex justify-between items-center h-16 px-6">
          {/* LOGO */}
          <NavLink
            to="/"
            className="text-xl font-bold text-purple-300 hidden md:block"
          >
            Portfolio
          </NavLink>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex items-center gap-8 font-medium">
            {[
              { path: "/", name: "Home" },
              { path: "/projects", name: "Projects" },
              { path: "/about", name: "About" },
              { path: "/skills", name: "Skills" },
              { path: "/process", name: "Process" },
              { path: "/contact", name: "Contact" },
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={(props) =>
                    `${navLinkStyles(props)} ${underline(props)}`
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

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-purple-600"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 w-full bg-white shadow-md md:hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8 font-medium">
              {[
                { path: "/", name: "Home" },
                { path: "/projects", name: "Projects" },
                { path: "/about", name: "About" },
                { path: "/skills", name: "Skills" },
                { path: "/process", name: "Process" },
                { path: "/contact", name: "Contact" },
              ].map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `relative pb-1 ${
                        isActive
                          ? "text-purple-600 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-purple-600"
                          : "text-gray-700"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              <li>
                <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <button className="bg-purple-500 text-white px-5 py-2 rounded-lg">
                    Resume
                  </button>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Nav;
