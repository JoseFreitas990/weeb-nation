import React from "react";
import { useNavigate } from "react-router-dom";
import { CardContainer, Image, SubTitle, Title } from "./styles";

const Card = () => {
  const navigate = useNavigate();
  const toDetails = () => navigate("details/");
  return (
    <CardContainer>
      <Image onClick={toDetails} />
      <Title onClick={toDetails}>Just Latem</Title>
      <SubTitle>Episode 2</SubTitle>
    </CardContainer>
  );
};

export default Card;
