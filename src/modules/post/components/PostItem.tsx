import { Post } from "interfaces";
import { useComments } from "modules/comment";
import { Container, Title, Name, Comments } from "./PostItem.styles";
import withDisplayName from "hoc";
import { useNavigate } from "react-router-dom";

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  const { id, title, name } = post;
  const [comments] = useComments(id);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/post/${id}`, {
      state: {
        ...post,
        comments,
      },
    });
  };

  return (
    <Container onClick={handleNavigate}>
      <Title>
        Title: {title} #{id}
      </Title>
      <Name>User's name: {name}</Name>
      <Comments>Comments:</Comments>
      <ul>
        {comments.map((item) => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </Container>
  );
};

PostItem.displayName = "PostItem";

export default withDisplayName(PostItem);
