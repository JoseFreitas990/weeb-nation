import styled from "styled-components";

export const Container = styled.main`
  width: 1080px;
  background: ${(props) => props.theme.background};
  max-height: 177.8vw;
  min-height: 100vh;
  margin: auto;
  position: relative;
  top: 0;
  bottom: 0; /* vertical center */
  left: 0;
  right: 0; /* horizontal center */
  padding: 0 1rem;

  @media (max-width: 1080px) {
    width: 100%;
    padding: 0 0rem;
  }
`;
