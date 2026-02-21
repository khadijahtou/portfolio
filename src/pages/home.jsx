import { div } from "framer-motion/client";
import React from "react";
import Hero from "../components/hero.jsx";
import About from "../components/about.jsx";
import Skills from "../components/skills.jsx";
import Process from "../components/process.jsx";
import Contact from "../components/contact.jsx";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Process />
      <Contact />
    </div>
  );
}

export default Home;
