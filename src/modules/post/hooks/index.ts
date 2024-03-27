import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { getPosts } from "../services";
import { Post, User } from "../../../interfaces";

const limit = 10;

export const usePosts = (
  users: User[]
): [
  Post[] | undefined,
  Dispatch<SetStateAction<Post[] | undefined>>,
  Dispatch<SetStateAction<number>>
] => {
  const [posts, setPosts] = useState<Post[]>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPosts().then((posts) => setPosts(posts));
  }, []);

  const slicedPosts = posts?.slice(0, limit * page);

  return [slicedPosts, setPosts, setPage];
};
