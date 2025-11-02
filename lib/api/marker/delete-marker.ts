import { apiDelete } from "../api-helpers";

const deleteMarker = async (id: number) => {
  return apiDelete(`/api/v1/markers/${id}`);
};

export default deleteMarker;
