import React from "react";
import { InputContainer, InputText } from "./styles";

type IInputProps = {
  onChange?(e: React.FormEvent<HTMLInputElement>): void;
  placeholder?: string;
  type?: string;
  name: string;
  value: string | number | readonly string[] | undefined;
};

const Input = (props: IInputProps) => {
  const { onChange, placeholder, value, name, type } = props;

  return (
    <InputContainer>
      <InputText
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </InputContainer>
  );
};

export default Input;
