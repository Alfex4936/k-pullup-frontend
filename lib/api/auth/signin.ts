import { User } from "@/types/user";
import { apiPost } from "../api-helpers";

export interface LoginReq {
  email: string;
  password: string;
}

export interface LoginRes {
  token: string;
  user: User;
  error?: string;
}

const signin = async (body: LoginReq): Promise<LoginRes> => {
  return apiPost("/api/v1/auth/login", body);
};

export default signin;
