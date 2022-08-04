import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.section`
  height: ${(props) => props.theme.navHeight};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  align-items: flex-start;
`;

export const CenterLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img``;

export const LogoTitle = styled.h3``;

export const SocialContainer = styled.div`
  width: 33%;
  display: flexbox;
  flex-direction: row;
  justify-content: center;
`;

export const SocialIcon = styled.img`
  width: 1.5rem;
  &:first-of-type {
    margin-right: 1rem;
  }
  &:last-of-type {
    margin-left: 1rem;
  }
`;

export const FunctionContainer = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const AuthContainer = styled.div``;

export const AuthLink = styled(Link)`
  &:first-of-type {
    margin-right: 0.25rem;
  }
  &:last-of-type {
    margin-left: 0.25rem;
  }
`;

export const SearchContainer = styled.div`
  width: 75%;
  height: 2rem;

  display: flex;
  background-color: ${(props) => props.theme.darkGrey};
  border: 1px solid white;
  justify-content: center;
`;

export const SearchInput = styled.input`
  padding-left: 1rem;
  background-color: transparent;
  color: ${(props) => props.theme.secondary};
  font-size: ${(props) => props.theme.fontsm};
  height: 100%;
  width: 85%;

  ::placeholder {
    opacity: 0.85;
  }
`;

export const SearchIconContainer = styled.div`
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchIcon = styled.img`
  cursor: pointer;
  height: 1.25rem;
  width: auto;
`;
