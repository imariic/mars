import { Post } from "interfaces";

export const filterPosts = (posts: Post[] | undefined, searchQuery: string) => {
  return posts?.filter((post) =>
    post.name?.toLowerCase().includes(searchQuery.toLowerCase())
  );
};
