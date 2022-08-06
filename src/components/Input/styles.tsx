import styled from "styled-components";

export const InputContainer = styled.div`
  background-color: ${(props) => props.theme.white};
  width: calc(60% + 2rem);
  height: 3rem;
  box-shadow: 0px 0.5px 2px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

export const InputText = styled.input`
  height: 100%;
  width: 100%;
  border-style: none;
  :focus {
    outline: none;
  }
`;
