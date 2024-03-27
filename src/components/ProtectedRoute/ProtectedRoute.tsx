import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { AUTH_LOCAL_STORAGE_KEY, ROUTES } from "../../constants";
import useLocalStorage from "../../hooks";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn] = useLocalStorage(AUTH_LOCAL_STORAGE_KEY, false);

  if (!isLoggedIn) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
