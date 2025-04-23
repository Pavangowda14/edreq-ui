// services/logout.js
import { client } from "../../../shared/client/client";

export const logout = async () => {
  const response = await client.post("/api/auth/logout");
  return response.data;
};
