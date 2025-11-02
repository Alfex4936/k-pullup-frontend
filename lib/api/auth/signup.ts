import type { User } from "@/types/user";
import { apiPostResponse } from "../api-helpers";

export interface SigninReq {
  username: string;
  email: string;
  password: string;
}

export interface SigninRes extends Omit<User, "username"> {
  username?: string;
}

const signup = async (body: SigninReq) => {
  return apiPostResponse(`/api/v1/auth/signup`, body);
};

export default signup;
