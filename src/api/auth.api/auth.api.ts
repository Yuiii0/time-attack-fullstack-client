import { Response } from "@/types/Response.type";
import { coreClient } from "..";
import { LogInDto, SignUpDto } from "./auth.dto";

async function signUp(dto: SignUpDto) {
  await coreClient.post<Response>("/auth/sign-up", dto);
}

async function logIn(dto: LogInDto) {
  await coreClient.post<Response>(`/auth/log-in`, dto);
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
