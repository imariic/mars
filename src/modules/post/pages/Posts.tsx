import { usePosts } from "../hooks";
import PostItem from "../components/PostItem";
import { PostsContainer, LoadMoreButton } from "./Posts.style";

const Posts = () => {
  const [posts, setPosts, setPage] = usePosts();

  return (
    <div>
      <PostsContainer>
        {posts?.map((item) => (
          <PostItem post={item} />
        ))}
      </PostsContainer>
      <LoadMoreButton onClick={() => setPage((page) => page + 1)}>
        Load more
      </LoadMoreButton>
    </div>
  );
};

export default Posts;
