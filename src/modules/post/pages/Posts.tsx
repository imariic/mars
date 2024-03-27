import React from "react";
import { usePosts } from "../hooks";

const Posts = () => {
  const [posts] = usePosts();
  return <div>Posts page</div>;
};

export default Posts;
