export interface LoginPayload {
  usernameOrEmail: string;
  password: string;
}

export type LoginResponseFail = {
  result: boolean;
  data: [{ field: string; message: string }];
  message: string;
};
export type LoginResponseSuccess = {
  result: boolean;
  data: {
    username: string;
    token: string;
    fullName: string;
    id: number;
    kind: number;
    customerId: number;
  };
  message: string;
};
export type LoginResponse = LoginResponseFail | LoginResponseSuccess;
