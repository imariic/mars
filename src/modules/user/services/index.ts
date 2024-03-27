import instance from "../../../api";
import { User } from "../../../interfaces";

export const getUsers = async (): Promise<User> => {
  const usersResponse = await instance.get("users");

  return usersResponse.data;
};
