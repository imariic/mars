import { useContext } from "react";
import { Post } from "interfaces";
import { UserContext } from "modules";
import { useComments } from "modules/comment";
import { Container, Title, Name, Comments } from "./PostItem.styles";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const users = useContext(UserContext);
  const [comments] = useComments(post.id);

  const user = users.find((user) => user.id === post.id);

  return (
    <Container>
      <Title>
        Title: {post.title} #{post.id}
      </Title>
      <Name>User's name: {user?.name}</Name>
      <Comments>Comments:</Comments>
      <ul>
        {comments.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
    </Container>
  );
};

export default PostItem;
