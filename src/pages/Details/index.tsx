import Sidebar from "components/layout/Sidebar";
import React from "react";
import { DetailsContainer, LeftContainer, RightContainer } from "./style";

const Details = () => {
  return (
    <DetailsContainer>
      <LeftContainer>Ola</LeftContainer>
      <Sidebar />
    </DetailsContainer>
  );
};

export default Details;
