import React, { PropsWithChildren, ReactNode } from "react";
import { isLoggedIn } from "../../utils";
import { Navigate } from "react-router-dom";
import { ROUTES } from "../../constants";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  if (!isLoggedIn) {
    return <Navigate to={ROUTES.HOME} />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
