import React from "react";
import Nav from "../nav.jsx";
import { Link, Outlet } from "react-router-dom";
import Footer from "../footer.jsx";

function Mainlayout() {
  return (
    <div className="">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Mainlayout;
