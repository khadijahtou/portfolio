import React from "react";
import Recipe from "../assets/Recipe.jpeg";
import Flower from "../assets/flower.jpeg";
import { ExternalLink, Github, ShapesIcon, Share2 } from "lucide-react";

function Project() {
  return (
    <div className="p-3 lg:p-6 bg-gray-200">
      <h2 className="font-bold text-2xl md:text-4xl text-center  text-purple-400">
        Selected Projects
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mt-8 ">
        <div className="rounded-lg shadow-md bg-white p-2 flex flex-col gap-2">
          <img
            src={Recipe}
            alt="Ocean Of Recipes"
            className="w-full object-cover "
          />
          <h3 className="font-bold text-xl mt-2 text-purple-400 hover:text-black">
            Ocean of Recipes
          </h3>
          <p className="text-gray-600">
            Brief description of the project goes here.
          </p>
          <ul className="flex flex-row gap-4">
            <li className="bg-gray-400 rounded-full p-1">HTML5</li>
            <li className="bg-gray-400 rounded-full p-1">CSS3</li>
            <li className="bg-gray-400 rounded-full p-1">API</li>
          </ul>
          <div className="flex flex-row gap-4 my-3 ">
            <a href="http://ocean-of-recipes.onrender.com">
              <button className="bg-purple-400 flex flex-row gap-3 p-3 justify-center rounded text-white md:w-58 ">
                <ExternalLink />{" "}
                <span className="font-semibold">Live Demo</span>
              </button>
            </a>
            <a href="https://github.com/khadijahtou/Recipe-Website-/pulls">
              <button className="border-purple-300 border rounded p-3 text-purple-400 flex flex-row gap-3 justify-center md:w-58 ">
                <Github className="font-normal" />{" "}
                <span className="font-semibold">GitHub </span>
              </button>
            </a>
          </div>
        </div>
        <div className="rounded-lg shadow-md bg-purple-200  flex flex-col gap-2">
          <img
            src={Flower}
            alt="Flower Delivery Website"
            className="w-full object-cover  "
          />
          <h3 className="font-bold text-xl mt-2 text-black hover:text-purple-400">
            Flower Delivery Website
          </h3>

          <p className="text-gray-600 text-[18px]">
            A full-stack e-commerce platform for flower delivery with real-time
            order tracking and payment integration
          </p>
          <ul className="flex flex-row gap-4">
            <li className="bg-gray-400 rounded-full p-1">React</li>
            <li className="bg-gray-400 rounded-full p-1">Node.js</li>
            <li className="bg-gray-400 rounded-full p-1">MongoDb</li>
            <li className="bg-gray-400 rounded-full p-1">Express</li>
            <li className="bg-gray-400 rounded-full p-1">JWT Auth</li>
            <li className="bg-gray-400 rounded-full p-1">Pay Stack</li>
          </ul>
          <div className="flex flex-row gap-4 my-3 ">
            <a href=" https://flower-delivery-website-omega.vercel.app">
              <button className="bg-purple-400 flex flex-row gap-3 p-3 justify-center rounded text-white md:w-58 ">
                <ExternalLink />{" "}
                <span className="font-semibold">Live Demo</span>
              </button>
            </a>
            <a href="https://github.com/khadijahtou/Flower-Delivery-Website/pulls">
              <button className="border-purple-300 border rounded p-3 text-purple-400 flex flex-row gap-3 justify-center md:w-58 ">
                <Github className="font-normal" />{" "}
                <span className="font-semibold">GitHub </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
