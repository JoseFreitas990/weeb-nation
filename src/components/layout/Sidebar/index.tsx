import MostPopular from "components/MostPopular";
import React from "react";
import {
  HeadContainer,
  HeadTitle,
  RightContainer,
  RightPartialContainer,
} from "./styles";

const Sidebar = () => {
  return (
    <RightContainer>
      <RightPartialContainer>
        <HeadContainer>
          <HeadTitle>Most Popular</HeadTitle>
        </HeadContainer>
        <MostPopular />
      </RightPartialContainer>
      <RightPartialContainer>
        <HeadContainer>
          <HeadTitle>Genres</HeadTitle>
        </HeadContainer>
      </RightPartialContainer>
    </RightContainer>
  );
};

export default Sidebar;
