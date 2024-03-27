import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, label, type }) => {
  return (
    <input
      placeholder={label}
      className={styles.input}
      id={label}
      name={label}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

export default Input;
