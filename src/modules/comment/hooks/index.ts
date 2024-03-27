import { useEffect, useState } from "react";
import { Comment } from "../../../interfaces";
import { getComments } from "../services";

export const useComments = (postId: number) => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    getComments(postId).then((comments) => setComments(comments));
  }, [postId]);

  return [comments];
};