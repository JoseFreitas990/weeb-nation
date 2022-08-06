import React from "react";
import { Outlet } from "react-router-dom";
import ContentContainer from "./layout/ContentContainer";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

const Layout = () => {
  return (
    <>
      <ContentContainer>
        <Navbar />
        <Outlet />
        <Footer />
      </ContentContainer>
    </>
  );
};

export default Layout;
