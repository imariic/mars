import { useEffect, useState } from "react";
import { Comment } from "interfaces";
import { getComments } from "modules/comment";

export const useComments = (postId: number) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments(postId)
      .then((comments) => setComments(comments))
      .catch((e) => console.error("Error", e));
  }, [postId]);

  return [comments];
};
