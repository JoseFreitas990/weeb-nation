import styled from "styled-components";

export const Container = styled.main`
  width: 1080px;
  height: 100vh; /* height:width ratio = 9/16 = .5625  */
  background: ${(props) => props.theme.background};
  max-height: 177.8vw;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0; /* vertical center */
  left: 0;
  right: 0; /* horizontal center */
  padding: 0 1rem;

  @media (max-width: 1080px) {
    width: 100%;
  }
`;
