import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { Post } from "interfaces";
import { UserContext } from "modules/user";
import { getPosts } from "../services";

const limit = 10;

export const usePosts = (): [
  Post[] | undefined,
  Dispatch<SetStateAction<number>>
] => {
  const [posts, setPosts] = useState<Post[]>();
  const users = useContext(UserContext);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPosts()
      .then((posts) => {
        const postsWithUser = posts?.map((post) => {
          const user = users.find((user) => user.id === post.userId);

          return {
            ...post,
            name: user?.name,
          };
        });
        setPosts(postsWithUser);
      })
      .catch((e) => console.error("Error", e));
  }, [users]);

  const slicedPosts = posts?.slice(0, limit * page);

  return [slicedPosts, setPage];
};
