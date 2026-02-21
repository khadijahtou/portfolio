import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.jsx";
import Mainlayout from "./layout/mainlayout.jsx";
import { div } from "framer-motion/client";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index: true,
        element: <Home />,
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
