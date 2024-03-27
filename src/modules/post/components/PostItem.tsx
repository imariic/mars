import { useContext } from "react";
import { Post } from "../../../interfaces";
import { UserContext } from "../../user";
import { useComments } from "../../comment/hooks";
import styles from "./PostItem.module.css";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const users = useContext(UserContext);
  const [comments] = useComments(post.id);

  const user = users.find((user) => user.id === post.id);

  return (
    <div className={styles.container}>
      <h3>
        Title: {post.title} #{post.id}
      </h3>
      <h4>User's name:{user?.name}</h4>
      <h5>Comments:</h5>
      <ul>
        {comments.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostItem;