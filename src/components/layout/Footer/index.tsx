import { scrollUp } from "assets/images";
import React from "react";
import {
  ContentContainer,
  DividerLiner,
  FooterContainer,
  InformationContainer,
  TextLink,
  ToTopContainer,
  ToTopImg,
  ToTopText,
} from "./styles";

const Footer = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer>
      <DividerLiner />
      <ContentContainer>
        <InformationContainer>
          <TextLink to=''>About us</TextLink>
          <TextLink to=''>Contact us</TextLink>
          <TextLink to=''>Privacy</TextLink>
        </InformationContainer>
        <ToTopContainer onClick={goToTop}>
          <ToTopText>Back To Top</ToTopText>
          <ToTopImg src={scrollUp} />
        </ToTopContainer>
      </ContentContainer>
    </FooterContainer>
  );
};

export default Footer;
