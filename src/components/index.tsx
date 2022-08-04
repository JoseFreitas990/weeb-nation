import React from "react";
import { Outlet } from "react-router-dom";
import ContentContainer from "./layout/ContentContainer";
import Navbar from "./layout/Navbar";

const Layout = () => {
  return (
    <>
      <ContentContainer>
        <Navbar />
        <Outlet />
      </ContentContainer>
    </>
  );
};

export default Layout;
