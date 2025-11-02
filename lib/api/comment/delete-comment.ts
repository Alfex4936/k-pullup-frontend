import { apiDelete } from "../api-helpers";

const deleteComment = async (id: number) => {
  return apiDelete(`/api/v1/comments/${id}`, {
    cache: "no-store",
  });
};

export default deleteComment;
