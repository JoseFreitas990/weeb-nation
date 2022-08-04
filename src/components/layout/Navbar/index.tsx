import { github, linkedin, logo, search, send } from "assets/images";
import React from "react";
import {
  AuthContainer,
  AuthLink,
  CenterLogo,
  Container,
  FunctionContainer,
  Logo,
  LogoContainer,
  LogoTitle,
  SearchContainer,
  SearchIcon,
  SearchIconContainer,
  SearchInput,
  SocialContainer,
  SocialIcon,
} from "./styles";

const Navbar = () => {
  return (
    <Container>
      <LogoContainer>
        <CenterLogo>
          <Logo src={logo} />
          <LogoTitle>Weeb Nation</LogoTitle>
        </CenterLogo>
      </LogoContainer>
      <SocialContainer>
        <SocialIcon src={send} />
        <SocialIcon src={linkedin} />
        <SocialIcon src={github} />
      </SocialContainer>
      <FunctionContainer>
        <AuthContainer>
          <AuthLink to=''>Login</AuthLink> | <AuthLink to=''>Signup</AuthLink>
        </AuthContainer>
        <SearchContainer>
          <SearchInput placeholder='Search...' />
          <SearchIconContainer>
            <SearchIcon src={search} />
          </SearchIconContainer>
        </SearchContainer>
      </FunctionContainer>
    </Container>
  );
};

export default Navbar;
