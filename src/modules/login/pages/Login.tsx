import React, { useState } from "react";
import Input from "../../../components/Input/Input";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../constants";
import useLocalStorage from "../../../hooks";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [, login] = useLocalStorage("auth", false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = email === "ivan@gmail.com" && password === "ivan";
    setError(!isValid);

    if (!isValid) return;

    await login(true);
    navigate(ROUTES.POSTS);
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
      {error ? <p className={styles.error}>Wrong credentials</p> : null}
    </form>
  );
};

export default Login;
