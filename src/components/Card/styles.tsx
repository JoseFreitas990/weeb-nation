import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Image = styled.div`
  width: 142px;
  height: 202px;
  background-color: yellow;
`;
export const Title = styled.span`
  font-size: ${(props) => props.theme.fontmd};
`;

export const SubTitle = styled.span`
  font-size: ${(props) => props.theme.fontsm};
  color: ${(props) => props.theme.secondary};
`;
