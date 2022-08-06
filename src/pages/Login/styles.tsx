import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.section`
  width: 69%;
  height: 40%;
  border: 1px solid ${(props) => props.theme.lightGrey};
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeadContainer = styled.div`
  height: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1.25rem;
  padding-top: 0.15rem;
  background-color: ${(props) => props.theme.primary};
`;

export const Header = styled.span`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  margin-right: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  width: 50%;
  & > * {
    margin: 0.75rem 0;
  }
`;

export const MiniLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 35%;
  align-items: center;
  color: ${(props) => props.theme.secondary};
`;

export const MiniLink = styled(Link)`
  &::after {
    content: "";
    display: block;
    width: 0%;
    height: 1px;
    background: ${(props) => props.theme.secondary};
    transition: width 0.3s ease;
  }
  &:hover::after {
    width: 100%;
  }
`;
