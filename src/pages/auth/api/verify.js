// services/verifyEmail.js
import { client } from "../../../shared/client/client";

export const verifyEmail = async (code) => {
  const response = await client.post("/api/auth/verify-email", { code });
  return response.data;
};
