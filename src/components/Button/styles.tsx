import styled from "styled-components";

export const PrimaryButton = styled.button`
  width: calc(60% + 2rem);
  height: 2.5rem;
  border: none;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.white};
  font-size: ${(props) => props.theme.fontButton};
  margin-bottom: 0rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  &:hover {
    box-shadow: 1px 1px 1.5px black;
    background-color: rgba(${(props) => props.theme.primaryRgba}, 0.8);
  }
  &:active {
    background-color: rgba(${(props) => props.theme.primaryRgba}, 0.6);
  }
`;
