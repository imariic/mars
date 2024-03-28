import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { User } from "interfaces";
import { getUsers } from "modules";

export const UserContext = createContext<User[]>([]);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers()
      .then((users) => setUsers(users))
      .catch((e) => console.error("Error", e));
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};
