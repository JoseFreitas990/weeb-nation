import { github, linkedin, logo, search, send } from "assets/images";
import React from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const logged = true;
  return (
    <Container>
      <LogoContainer>
        <CenterLogo onClick={() => navigate("")}>
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
          {logged ? (
            <>
              <AuthLink to='login'>My Profile</AuthLink>
              <AuthLink to=''>Logout</AuthLink>
            </>
          ) : (
            <>
              <AuthLink to='login'>Login</AuthLink>
              <AuthLink to='signup'>Signup</AuthLink>
            </>
          )}
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
