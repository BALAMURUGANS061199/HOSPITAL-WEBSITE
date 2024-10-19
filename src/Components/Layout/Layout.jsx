import React, { Fragment } from "react";
import Navbars from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home";

const Layout = () => {
  return (
    <Fragment>
      <Navbars />
      <main>
        <Outlet />
        <Home />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
