import { useContext } from "react";
import { Post } from "interfaces";
import { UserContext } from "modules";
import { useComments } from "modules/comment";
import { Container, Title, Name, Comments } from "./PostItem.styles";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const { id, title, name } = post;
  const [comments] = useComments(id);

  return (
    <Container>
      <Title>
        Title: {title} #{id}
      </Title>
      <Name>User's name: {name}</Name>
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
