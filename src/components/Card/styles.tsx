import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 1rem;
`;

export const Image = styled.div`
  width: 10rem;
  height: 12.5rem;
  background-color: #92beff;
`;
export const Title = styled.span`
  margin-top: 0.25rem;
  font-size: ${(props) => props.theme.fontmd};
`;

export const SubTitle = styled.span`
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.secondary};
  margin-top: -0.25rem;
`;
