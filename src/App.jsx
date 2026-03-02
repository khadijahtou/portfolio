import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import Mainlayout from "./layout/mainlayout.jsx";
import { div } from "framer-motion/client";
import Contact from "./components/contact.jsx";
import Skills from "./components/skills.jsx";
import About from "./components/about.jsx";
import Project from "./components/project.jsx";
import Process from "./components/process.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/process",
        element: <Process />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
}

export default App;
