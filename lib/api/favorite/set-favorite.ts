import { apiPostResponse } from "../api-helpers";

const setFavorite = async (id: number) => {
  return apiPostResponse(`/api/v1/markers/${id}/favorites`);
};

export default setFavorite;
