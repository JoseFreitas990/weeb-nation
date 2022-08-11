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
  padding-bottom: 1rem;
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

export const Grid = styled.div`
  padding: 0 1rem;
  height: 50vh;
  display: grid;
  grid-column-gap: 0.5rem;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  flex-direction: column;
  height: 100%;
`;
