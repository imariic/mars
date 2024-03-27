import React, { InputHTMLAttributes } from "react";
import { InputContainer } from "./Input.styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, label, type }) => {
  return (
    <InputContainer
      placeholder={label}
      id={label}
      name={label}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
