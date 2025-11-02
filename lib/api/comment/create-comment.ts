import { apiPostResponse } from "../api-helpers";

const createComment = async (body: {
  markerId: number;
  commentText: string;
}) => {
  return apiPostResponse(`/api/v1/comments`, body, {
    cache: "no-store",
  });
};

export default createComment;
