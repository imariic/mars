import React, { InputHTMLAttributes } from "react";
import { InputContainer } from "./Input.styles";
import withDisplayName from "hoc";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = (props) => {
  const { value, onChange, label, type } = props;

  return (
    <InputContainer
      placeholder={label}
      id={label}
      name={label}
      value={value}
      onChange={onChange}
      type={type}
      {...props}
    />
  );
};

Input.displayName = "Input";

export default withDisplayName(Input);
