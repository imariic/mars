import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import styles from "./Login.module.css";
import { login } from "../../../utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = email === "ivan@gmail.com" && password === "ivan";

    if (!isValid) return;

    login();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <form method="POST" onSubmit={handleLogin}>
      <h1>Login</h1>
      <Input label="email" type="email" onChange={handleEmailChange} />
      <Input label="password" type="password" onChange={handlePasswordChange} />
      <input className={styles.submitButton} type="submit" />
    </form>
  );
};

export default Login;
