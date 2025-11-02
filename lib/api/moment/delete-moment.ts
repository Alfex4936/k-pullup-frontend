import { apiDelete } from "../api-helpers";

const deleteMoment = async (markerId: number, momentId: number) => {
  return apiDelete(`/api/v1/markers/${markerId}/stories/${momentId}`, {
    cache: "no-store",
  });
};

export default deleteMoment;
