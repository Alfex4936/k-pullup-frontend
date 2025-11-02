import { apiDelete } from "../api-helpers";

const deleteFavorite = async (id: number) => {
  return apiDelete(`/api/v1/markers/${id}/favorites`);
};

export default deleteFavorite;
