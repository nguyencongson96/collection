import axios from "axios";

// Set up default config for http requests here
const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "content-type": "application/json",
  },
  timeout: 20000,
});
axiosClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 403 &&
      !originalRequest._retry &&
      (error.response?.data.message === "invalid token" || error.response?.data.message === "outdated token")
    ) {
      originalRequest._retry = true;
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosClient;
