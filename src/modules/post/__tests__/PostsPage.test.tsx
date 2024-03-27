import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { posts } from "modules/post/fixtures";
import Posts from "../pages/Posts/Posts";
import { UserProvider } from "modules/user";

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
    <UserProvider>
      <Posts />
    </UserProvider>
  );

describe("PostsPage", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("PostsPage renders correctly", () => {
    renderComponent();

    const loadMore = screen.getByText("Load more");
    expect(loadMore).toBeInTheDocument();
  });

  it("PostsPage renders posts", async () => {
    renderComponent();

    await waitFor(() => {
      expect(
        screen.getByText("User's name: Leanne Graham")
      ).toBeInTheDocument();
    });
  });

  it("PostsPage search", async () => {
    renderComponent();

    const search = screen.getByLabelText("search-posts");

    fireEvent.change(search, { target: { value: "Ervin" } });

    await waitFor(() => {
      expect(search).toHaveValue("Ervin");

      expect(screen.getByText("User's name: Ervin Howell")).toBeInTheDocument();
      expect(
        screen.queryByText("User's name: Leanne Graham")
      ).not.toBeInTheDocument();
    });
  });
});
