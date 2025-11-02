import { apiPost } from "../api-helpers";

const signout = async () => {
  return apiPost("/api/v1/auth/logout");
};
export default signout;
