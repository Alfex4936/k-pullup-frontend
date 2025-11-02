import { apiDelete } from "../api-helpers";

const deleteUser = async () => {
  return apiDelete("/api/v1/users/me");
};

export default deleteUser;
