import axios from "axios";
import { STORAGE_KEY } from "../constants.ts";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 403) {
      const token = localStorage.getItem(STORAGE_KEY.TOKEN);
      const user = localStorage.getItem(STORAGE_KEY.USER);

      if (token && user) {
        localStorage.removeItem(STORAGE_KEY.TOKEN);
        localStorage.removeItem(STORAGE_KEY.USER);
        window.location.href = "/auth/sign-in";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
