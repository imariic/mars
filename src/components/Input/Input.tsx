import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, label, type }) => {
  return (
    <div>
      <label className={styles.label} htmlFor={label}>
        {label}
      </label>
      <input
        className={styles.input}
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        type={type}
      />
    </div>
  );
};

export default Input;
