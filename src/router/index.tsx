import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "components";
import { AppRoutes } from "constants/enums";
import { LoginPage, PostDetailsPage, PostsPage } from "../modules";

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
  {
    path: AppRoutes.POST_DETAILS,
    element: (
      <ProtectedRoute>
        <PostDetailsPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
