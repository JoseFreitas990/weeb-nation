import Card from "components/Card";
import Sidebar from "components/layout/Sidebar";
import MostPopular from "components/MostPopular";
import React from "react";
import {
  Grid,
  HeadContainer,
  HeadLink,
  HomeContainer,
  LeftContainer,
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
      <Sidebar />
    </HomeContainer>
  );
};

export default Home;
