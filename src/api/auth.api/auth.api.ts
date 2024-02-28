import { Response } from "@/types/Response.type";
import { coreClient } from "..";
import {
  LogInDto,
  LogInResponseData,
  SignUpDto,
  SignUpResponseData,
} from "./auth.dto";

async function signUp(dto: SignUpDto) {
  const response = await coreClient.post<Response<SignUpResponseData>>(
    "/auth/sign-up",
    dto
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const result = data.result;
  const accessToken = result?.accessToken;

  if (!accessToken) throw new Error("로그인에 실패하였습니다.");
  coreClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
}

async function logIn(dto: LogInDto) {
  const response = await coreClient.post<Response<LogInResponseData>>(
    `/auth/log-in`,
    dto
  );
  const data = response.data;
  if (!data.success) throw new Error(data.error.message);
  const result = data.result;
  const accessToken = result?.accessToken;

  if (!accessToken) throw new Error("로그인에 실패하였습니다.");

  coreClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

  return accessToken;
}

async function logOut() {
  await coreClient.delete<Response>(`/auth/log-out`);
}

const authAPI = {
  signUp,
  logIn,
  logOut,
};

export default authAPI;
