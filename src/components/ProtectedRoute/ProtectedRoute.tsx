import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "hooks";
import { AUTH_LOCAL_STORAGE_KEY } from "constants/strings";
import { AppRoutes } from "constants/enums";
import withDisplayName from "hoc";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const [isLoggedIn] = useLocalStorage(AUTH_LOCAL_STORAGE_KEY, false);

  if (!isLoggedIn) {
    return <Navigate to={AppRoutes.HOME} />;
  }

  return <>{children}</>;
};

ProtectedRoute.displayName = "ProtectedRoute";

export default withDisplayName(ProtectedRoute);
