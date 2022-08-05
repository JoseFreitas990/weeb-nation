import React from "react";
import { data } from "./data";
import {
  Episode,
  InfoContainer,
  ItemContainer,
  MostPopularContainer,
  Placement,
  Title,
} from "./styles";

const MostPopular = () => {
  return (
    <MostPopularContainer>
      {data.map((item, index) => {
        return (
          <ItemContainer>
            <Placement>{index + 1}.</Placement>
            <InfoContainer>
              <Title>{item.name}</Title>
              <Episode>Episode: {item.episode}</Episode>
            </InfoContainer>
          </ItemContainer>
        );
      })}
    </MostPopularContainer>
  );
};

export default MostPopular;
