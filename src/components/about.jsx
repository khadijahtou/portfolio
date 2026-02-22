import React from "react";
import image from "../assets/image.png";

function About() {
  return (
    <div
      className=" grid grid-cols-1 md:grid-cols-2 gap-4 items-center p-3 md:p-6 bg-gray-50 "
      id="about"
    >
      <div className="aspect-square w-full rounded-lg overflow-hidden">
        <img
          src={image}
          alt="About Me"
          srcset=""
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-2xl lg:text-4xl">About Me</h2>
        <p className=" text-sm lg:text-[24px] ">
          I'm a passionate full stack developer dedicated to creating digital
          experiences that are both beautiful and functional. With 2+ years of
          experience in web development, I specialize in building scalable
          applications using modern technologies.
        </p>
        <p className="text-sm lg:text-[24px] ">
          My journey in tech started with a curiosity about how things work.
          I've since worked with startups and established companies, helping
          them bring their visions to life through code. I believe in writing
          clean, maintainable code and continuously learning new technologies.
        </p>
        <div>
          <h3 className="font-bold text-2xl">Core Expertise</h3>
          <ol className="list-disc pl-5 marker:text-purple-300 marker:text-2xl text-[18px] leading-tight text-gray-400">
            <li>Full Stack Web Development</li>
            <li>React & Next.js Expertise</li>
            <li>Node.js & Express Backend</li>
            <li>Database Design & Optimization</li>
            <li>Responsive Design</li>
            <li>API Development & Integration</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default About;
