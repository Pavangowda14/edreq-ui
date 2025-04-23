import axios from "axios";

export const client = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000",
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Error handling function
const errorHandler = (error) => {
  const statusCode = error.response?.status;
  if (statusCode && statusCode !== 401 && statusCode !== 403) {
    console.error("API Error:", error);
  }

  if (statusCode === 403) {
    window.location.href = "/unauthorized";
  }

  if (statusCode === 401) {
    localStorage.removeItem("user");
    localStorage.removeItem("isAuth");
    window.location.href = "/login";
  }

  return Promise.reject(error);
};

client.interceptors.request.use(
  (config) => {
    config.withCredentials = true;
    return config;
  },
  (error) => Promise.reject(error)
);

client.interceptors.response.use(
  (response) => response,
  (error) => errorHandler(error)
);
