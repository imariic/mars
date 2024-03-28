import { Navigate } from "react-router-dom";
import withDisplayName from "hoc";
import { useLocalStorage } from "hooks";
import { LoginForm } from "modules/login/components";
import { AUTH_LOCAL_STORAGE_KEY } from "constants/strings";
import { AppRoutes } from "constants/enums";
import { Container } from "./Login.styles";

const Login: React.FC = () => {
  const [isLoggedIn] = useLocalStorage(AUTH_LOCAL_STORAGE_KEY, false);

  if (isLoggedIn) return <Navigate to={AppRoutes.POSTS} />;

  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

Login.displayName = "Login";

export default withDisplayName(Login);
