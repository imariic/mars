import { useContext } from "react";
import { Post } from "../../../interfaces";
import { UserContext } from "../../user";
import { useComments } from "../../comment/hooks";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const users = useContext(UserContext);
  const [comments] = useComments(post.id);

  const user = users.find((user) => user.id === post.id);

  console.log(comments, "hah");

  return (
    <div>
      <div>Title: {post.title}</div>
      <div>User's name:{user?.name}</div>
      {comments.map((item) => (
        <div>{item.name}</div>
      ))}
    </div>
  );
};

export default PostItem;
