import React, { useContext } from "react";
import { usePosts } from "../hooks";
import { UserContext } from "../../user";
import PostItem from "../components/PostItem";

const Posts = () => {
  const users = useContext(UserContext);
  const [posts, setPosts, setPage] = usePosts(users);

  return (
    <div>
      {posts?.map((item) => (
        <PostItem post={item} />
      ))}
      <button onClick={() => setPage((page) => page + 1)}>Load more</button>
    </div>
  );
};

export default Posts;
