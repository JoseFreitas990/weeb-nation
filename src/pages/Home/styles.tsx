import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  width: 69%;
  height: 40%;
  border: 1px solid ${(props) => props.theme.lightGrey};
`;

export const HeadContainer = styled.div`
  height: 2.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  background-color: ${(props) => props.theme.primary};
`;

export const HeadLink = styled(Link)`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  margin-right: 1rem;

  &:first-of-type {
    color: black;

    text-decoration: underline;
  }
  :hover {
    color: black;
    text-decoration: underline;
  }
`;
export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 29%;
`;

export const RightPartialContainer = styled.div`
  height: 5rem;
  margin-bottom: 2rem;
  border: 1px solid ${(props) => props.theme.lightGrey};
`;

export const HeadTitle = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  margin-right: 1rem;
`;

export const Grid = styled.div`
  display: grid;
`;
