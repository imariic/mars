import { createBrowserRouter } from "react-router-dom";
import { LoginPage, PostsPage } from "../modules";
import { AppRoutes } from "constants/enums";
import { ProtectedRoute } from "components";

const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <LoginPage />,
  },
  {
    path: AppRoutes.POSTS,
    element: (
      <ProtectedRoute>
        <PostsPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
