import React from "react";

function Skills() {
  return (
    <div className="p-3 bg-gray-50" id="skills">
      <h2 className="font-bold text-4xl text-center ">Skills & Expertise</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
        <div className="">
          <h3 className="font-bold text-xl text-center">Frontend</h3>
          <ul className="grid grid-cols-2 grid-rows-3 gap-2 text-center mt-2">
            <li className="bg-gray-400 rounded-full p-2">React </li>
            <li className="bg-gray-400 rounded-full p-2">Next.js</li>
            <li className="bg-gray-400 rounded-full p-2">HTML</li>
            <li className="bg-gray-400 rounded-full p-2">CSS</li>
            <li className="bg-gray-400 rounded-full p-2">JavaScript</li>
            <li className="bg-gray-400 rounded-full p-2">Framer Motion</li>
            <li className="bg-gray-400 rounded-full p-2">Tailwind CSS</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold text-xl text-center">Backend</h3>
          <ul className="grid grid-cols-2 grid-rows-3 gap-2 text-center mt-3 ">
            <li className="bg-gray-400 rounded-full p-2">Node.js </li>
            <li className="bg-gray-400 rounded-full p-2">Express</li>
            <li className="bg-gray-400 rounded-full p-2">MongoDB </li>
            <li className="bg-gray-400 rounded-full p-2">PostgreSQL</li>
            <li className="bg-gray-400 rounded-full p-2">RESTful APIs</li>
            {/* <li className="bg-gray-400 rounded-full p-2">
              Authentication & Authorization
            </li> */}
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold text-xl text-center">Tools</h3>
          <ul className="grid grid-cols-2  grid-rows-3 gap-2 text-center mt-2">
            <li className="bg-gray-400 rounded-full p-2">Git </li>
            <li className="bg-gray-400 rounded-full p-2">GitHub</li>
            <li className="bg-gray-400 rounded-full p-2">VS Code</li>
            <li className="bg-gray-400 rounded-full p-2">Figma</li>
            <li className="bg-gray-400 rounded-full p-2">Vercel</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
