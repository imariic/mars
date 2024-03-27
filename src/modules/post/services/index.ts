import instance from "api";
import { Post } from "interfaces";

export const getPosts = async (): Promise<Post[]> => {
  const postsResponse = await instance.get("/posts");

  return postsResponse.data;
};

export const getPostById = async (id: number): Promise<Post> => {
  const postResponse = await instance.get(`posts/${id}`);

  return postResponse.data;
};
