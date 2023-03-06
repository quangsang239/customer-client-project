import axiosClient from "./axios-client";

import { LoginPayload, LoginResponse } from "@/types";

export const authApi = {
  async login(payload: LoginPayload) {
    const data: LoginResponse = await axiosClient.post<
      LoginPayload,
      LoginResponse,
      LoginPayload
    >("/account/client-login", payload);

    if (data && data.data && "token" in data.data) {
      localStorage.setItem("token", JSON.stringify(data.data.token));
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: data.data.username,
          fullName: data.data.fullName,
          id: data.data.id,
          customerId: data.data.customerId,
          kind: data.data.kind,
        })
      );
      return { result: data.result, message: data.message };
    } else {
      return { result: data.result, message: data.message };
    }
  },
};
export const productApi = {
  getAllProduct() {
    return axiosClient.get("/product/client-list");
  },
};
