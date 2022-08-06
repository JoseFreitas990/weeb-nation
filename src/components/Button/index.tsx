import React from "react";
import { PrimaryButton } from "./styles";

type IButtonProps = {
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  target?: string;
  href?: string;
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  size?: "small";
};

const Button = (props: IButtonProps) => {
  const { children, onClick } = props;
  return (
    <>
      <PrimaryButton onClick={onClick}>{children}</PrimaryButton>
    </>
  );
};

export default Button;
