import { usePosts } from "../hooks";
import PostItem from "../components/PostItem";
import {
  PostsContainer,
  LoadMoreButton,
  Container,
  Search,
} from "./Posts.style";
import { useState } from "react";
import { useDebounce } from "hooks";
import { filterPosts } from "modules/post/helpers";

const Posts = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPage] = usePosts();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const debouncedSearchQuery = useDebounce(searchQuery);

  const filteredPosts = filterPosts(posts, debouncedSearchQuery);

  return (
    <Container>
      <Search
        label="Search posts"
        onChange={handleSearch}
        value={searchQuery}
      />
      <PostsContainer>
        {filteredPosts?.map((item) => (
          <PostItem post={item} />
        ))}
      </PostsContainer>
      <LoadMoreButton onClick={() => setPage((page) => page + 1)}>
        Load more
      </LoadMoreButton>
    </Container>
  );
};

export default Posts;
