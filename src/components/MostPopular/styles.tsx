import styled from "styled-components";

export const MostPopularContainer = styled.div`
  padding: 0.5rem 0;
  padding-left: 1rem;
  display: flex;
  flex-direction: column;
`;

export const ItemContainer = styled.div`
  display: flex;
  margin: 0.25rem 0;
`;

export const Placement = styled.span`
  color: ${(props) => props.theme.secondary};

  font-size: ${(props) => props.theme.fontsm};
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.secondary};
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
`;

export const Episode = styled.span`
  margin-top: -0.2rem;
  font-size: ${(props) => props.theme.fontsm};
  font-weight: 300;
`;
