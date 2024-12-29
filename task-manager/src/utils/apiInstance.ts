import axios from "axios";
import config from "./config";

const apiInstance = axios.create({
  baseURL: `${config.server}/api/`,
  headers: {
    id: config.apiKey,
  },
});

apiInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiInstance;
