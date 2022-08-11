import styled from "styled-components";

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftContainer = styled.div`
  width: 69%;
  height: 40%;
  border: 1px solid ${(props) => props.theme.lightGrey};
  padding-bottom: 1rem;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 29%;
`;
