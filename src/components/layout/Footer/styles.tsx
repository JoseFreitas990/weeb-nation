import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContainer = styled.section`
  margin-top: 2rem;
  padding: 1rem 0rem;
  min-height: 6rem;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;

export const DividerLiner = styled.div`
  width: 100%;
  height: 2px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  background-color: ${(props) => props.theme.grey};
  box-shadow: 0px 1px 5px black;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InformationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextLink = styled(Link)`
  margin-right: 1rem;
`;

export const ToTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ToTopText = styled.span`
  font-size: ${(props) => props.theme.fontlg};
  font-weight: 300;
  color: rgba(255, 255, 255, 0.3);
  margin-right: 0.5rem;
`;

export const ToTopImg = styled.img`
  width: 3rem;
`;
