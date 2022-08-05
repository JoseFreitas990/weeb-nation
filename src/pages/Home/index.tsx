import Card from "components/Card";
import React from "react";
import {
  Grid,
  HeadContainer,
  HeadLink,
  HeadTitle,
  HomeContainer,
  LeftContainer,
  RightContainer,
  RightPartialContainer,
} from "./styles";
const data = [11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
const Home = () => {
  return (
    <HomeContainer>
      <LeftContainer>
        <HeadContainer>
          <HeadLink to=''>Recent Release</HeadLink>
          <HeadLink to=''>Series</HeadLink>
          <HeadLink to=''>Movies</HeadLink>
          <HeadLink to=''>Anime</HeadLink>
          <HeadLink to=''>Favorite</HeadLink>
        </HeadContainer>
        <Grid>
          {data.map((item, index) => {
            return (
              <>
                <Card key={index} />
              </>
            );
          })}
        </Grid>
      </LeftContainer>
      <RightContainer>
        <RightPartialContainer>
          <HeadContainer>
            <HeadTitle>Most Popular</HeadTitle>
          </HeadContainer>
        </RightPartialContainer>
        <RightPartialContainer>
          <HeadContainer>
            <HeadTitle>Genres</HeadTitle>
          </HeadContainer>
        </RightPartialContainer>
      </RightContainer>
    </HomeContainer>
  );
};

export default Home;
