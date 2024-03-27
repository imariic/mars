import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { getUsers } from "../services";
import { User } from "../../../interfaces";

export const UserContext = createContext<User[]>([]);

export const UserProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((users) => setUsers(users));
  }, []);

  return <UserContext.Provider value={users}>{children}</UserContext.Provider>;
};
