import axiosClient from "./axios-client";

import { LoginPayload } from "@/types";

export const authApi = {
  login(payload: LoginPayload) {
    return axiosClient.post("/login", payload);
  },
};
