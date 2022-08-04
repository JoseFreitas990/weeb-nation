import React from "react";
import { Container } from "./styles";

interface IContentProps {
  children?: React.ReactNode;
}

const ContentContainer = (props: IContentProps) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default ContentContainer;
