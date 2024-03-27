import React, { useContext } from "react";
import { usePosts } from "../hooks";
import { UserContext } from "../../user";
import PostItem from "../components/PostItem";

const Posts = () => {
  const users = useContext(UserContext);
  const [posts, setPosts] = usePosts(users);

  console.log(posts, "posts");
  return (
    <div>
      {posts?.map((item) => (
        <PostItem post={item} />
      ))}
    </div>
  );
};

export default Posts;
