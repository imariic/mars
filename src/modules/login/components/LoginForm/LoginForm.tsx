import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  ErrorMessage,
  SubmitButton,
  Title,
} from "./LoginForm.styles";
import { useLocalStorage } from "hooks";
import { Input } from "components";
import { AUTH_LOCAL_STORAGE_KEY } from "constants/strings";
import { AppRoutes } from "constants/enums";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [, login] = useLocalStorage(AUTH_LOCAL_STORAGE_KEY, false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = email === "ivan@gmail.com" && password === "ivan";
    setError(!isValid);

    if (!isValid) return;

    await login(true);
    navigate(AppRoutes.POSTS);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <Container method="POST" onSubmit={handleLogin}>
      <Title>Login</Title>
      <Input label="email" type="email" onChange={handleEmailChange} />
      <Input label="password" type="password" onChange={handlePasswordChange} />
      <SubmitButton type="submit" />
      <ErrorMessage>{error ? "Wrong credentials" : ""}</ErrorMessage>
    </Container>
  );
};

export default LoginForm;
