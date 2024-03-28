import { LoginForm } from "modules/login/components";
import { Container } from "./Login.styles";
import withDisplayName from "hoc";
import { AUTH_LOCAL_STORAGE_KEY } from "constants/strings";
import { useLocalStorage } from "hooks";
import { Navigate } from "react-router-dom";
import { AppRoutes } from "constants/enums";

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
