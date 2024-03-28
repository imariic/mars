import { useLocation } from "react-router-dom";
import withDisplayName from "hoc";
import PostItem from "modules/post/components/PostItem";

const PostDetails: React.FC = () => {
  const location = useLocation();

  const post = location.state;

  return (
    <main>
      <PostItem post={post} />
    </main>
  );
};

PostDetails.displayName = "PostDetails";

export default withDisplayName(PostDetails);
