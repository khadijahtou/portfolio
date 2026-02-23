import React from "react";
import { Link } from "react-router-dom";
import Projects from "./project.jsx";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 " id="home">
      <div className=" relative  mt-11 flex flex-col gap-4 p-3">
        <h1 className="text-[18px] text-gray-300">FULL STACK EVELOPER</h1>
        <p className="font-bold text-2xl md:text-6xl">
          I build scalable, modern web applications with clean architecture and
          intentional design.
        </p>
        <p className="font-heading font-light text-foreground leading-tight text-[16px] md:text-[20px] max-w-2xl">
          With expertise in React, Node.js, and modern web technologies, I
          create elegant solutions that combine beautiful design with robust
          functionality.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/projects">
            <button className="bg-purple-300 rounded p-3 text-gray-200 w-40 hover:bg-white">
              View Projects
            </button>
          </Link>
          <a href="/Resume.pdf" download>
            <button className=" bg-white rounded p-3 text-purple-200 border border-purple-100 w-40 hover:bg-purple-100">
              Download Resume
            </button>
          </a>
        </div>
      </div>
      <div className="h-96 w-96 rounded-full   bg-linear-to-br from-purple-400 via-purple-500 to-purple-600 absolute top-25 right-10 -z-10 blur-2xl opacity-50 hidden md:block"></div>
    </div>
  );
}

export default Hero;
