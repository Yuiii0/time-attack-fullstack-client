export type SignUpDto = {
  email: string;
  password: string;
};
export type LogInDto = SignUpDto;

export type LogInResponseData = {
  accessToken: string;
};
export type SignUpResponseData = LogInResponseData;
