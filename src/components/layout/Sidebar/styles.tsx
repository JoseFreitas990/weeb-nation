import styled from "styled-components";

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 29%;
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

export const RightPartialContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  border: 1px solid ${(props) => props.theme.lightGrey};
`;

export const HeadTitle = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  margin-right: 1rem;
`;
