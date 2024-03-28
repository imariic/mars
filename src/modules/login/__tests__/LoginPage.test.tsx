import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { AppRoutes } from "constants/enums";
import { LoginPage } from "modules/login";
import { UserProvider } from "modules/user";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const renderComponent = () =>
  render(
    <UserProvider>
      <LoginPage />
    </UserProvider>
  );

describe("LoginPage", () => {
  it("LoginPage renders correctly", () => {
    renderComponent();

    const login = screen.getByText("Login");

    expect(login).toBeInTheDocument();
  });

  it("Checks login functionality with correct credentials", async () => {
    renderComponent();

    const email = screen.getByPlaceholderText("email");
    const password = screen.getByPlaceholderText("password");
    const button = screen.getByLabelText("submit-button");

    fireEvent.change(email, { target: { value: "ivan@gmail.com" } });
    fireEvent.change(password, { target: { value: "ivan" } });

    await waitFor(() => {
      fireEvent.click(button);
      expect(mockedUsedNavigate).toBeCalledWith(AppRoutes.POSTS);
    });
  });

  it("Checks login functionality with incorrect credentials", async () => {
    renderComponent();

    const email = screen.getByPlaceholderText("email");
    const password = screen.getByPlaceholderText("password");
    const button = screen.getByLabelText("submit-button");

    fireEvent.change(email, { target: { value: "wrong email" } });
    fireEvent.change(password, { target: { value: "wrong password" } });

    await waitFor(() => {
      fireEvent.click(button);
      expect(screen.getByText("Wrong credentials")).toBeInTheDocument();
    });
  });
});
