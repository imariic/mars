import instance from "api";
import { Comment } from "interfaces";

export const getComments = async (id: number): Promise<Comment[]> => {
  const commentsResponse = await instance.get(`posts/${id}/comments`);

  return commentsResponse.data;
};
