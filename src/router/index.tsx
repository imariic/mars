import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { LoginPage, PostsPage } from "../modules";
import { ROUTES } from "../constants";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <LoginPage />,
  },
  {
    path: ROUTES.POSTS,
    element: <PostsPage />,
  },
]);

export default router;
