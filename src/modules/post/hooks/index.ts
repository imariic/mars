import { useEffect, useState } from "react";
import { getPosts } from "../services";
import { Post } from "../../../interfaces";

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>();

  useEffect(() => {
    getPosts().then((res) => setPosts(res));
  }, []);

  return [posts, setPosts];
};
