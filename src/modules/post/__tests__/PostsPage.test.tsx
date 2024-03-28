import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { theme } from "constants/theme";
import { UserProvider } from "modules/user";
import { posts } from "modules/post/fixtures";
import Posts from "../pages/Posts/Posts";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

const handlers = [
  rest.get("https://demo.martian.services/api/posts", (req, res, ctx) => {
    return res(ctx.json(posts));
  }),
];

const server = setupServer(...handlers);

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Posts />
      </UserProvider>
    </ThemeProvider>
  );

describe("PostsPage", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("PostsPage renders correctly", () => {
    expect(renderComponent()).toMatchSnapshot();
  });

  it("PostsPage renders posts", async () => {
    renderComponent();

    await waitFor(() => {
      expect(
        screen.getByText(
          "Title: sunt aut facere repellat provident occaecati excepturi optio reprehenderit #1"
        )
      ).toBeInTheDocument();
    });
  });

  it("PostsPage search", async () => {
    renderComponent();

    const search = screen.getByLabelText("search-posts");
    const button = screen.getByText("Load more");

    fireEvent.click(button);
    fireEvent.change(search, { target: { value: "Ervin" } });

    await waitFor(() => {
      expect(search).toHaveValue("Ervin");

      expect(screen.getAllByText("User's name: Ervin Howell")).toHaveLength(10);
      expect(
        screen.queryByText("User's name: Leanne Graham")
      ).not.toBeInTheDocument();
    });
  });

  it("PostsPage load more", async () => {
    renderComponent();
    const button = screen.getByText("Load more");

    await waitFor(() => {
      expect(screen.getAllByText(/Comments/i)).toHaveLength(10);
      fireEvent.click(button);
      expect(screen.getAllByText(/Comments/i)).toHaveLength(20);
    });
  });
});
