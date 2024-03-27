import { usePosts } from "../hooks";
import PostItem from "../components/PostItem";

const Posts = () => {
  const [posts, setPosts, setPage] = usePosts();

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
