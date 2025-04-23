// services/login.js

import { client } from "../../../shared/client/client";

export const login = async (data) => {
  const response = await client.post("/api/auth/login", data);
  return response.data;
};
