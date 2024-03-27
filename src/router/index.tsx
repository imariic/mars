import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoginPage, PostsPage } from "../modules";
import { ROUTES } from "../constants";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <LoginPage />,
  },
  {
    path: ROUTES.POSTS,
    element: (
      <ProtectedRoute>
        <PostsPage />
      </ProtectedRoute>
    ),
  },
]);

export default router;
