// services/register.js

import { client } from "../../../shared/client/client";

export const register = async (data) => {
  const response = await client.post("/api/auth/register", data);
  return response.data;
};
