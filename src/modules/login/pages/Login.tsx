import withDisplayName from "hoc";
import { LoginForm } from "modules/login/components";
import { Container } from "./Login.styles";

const Login: React.FC = () => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

Login.displayName = "Login";

export default withDisplayName(Login);
