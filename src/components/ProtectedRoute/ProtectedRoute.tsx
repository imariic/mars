import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants";
import useLocalStorage from "../../hooks";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn] = useLocalStorage("auth", false);

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
