import { STORAGE_KEY } from "../../constants.ts";
import axiosInstance from "../../utils";

export const useStorage = () => ({
  getItem: (key: string, parse = true) => {
    const value = localStorage.getItem(key);

    return value !== null && parse ? JSON.parse(value) : value;
  },

  setItem: (key: string, value: any) => {
    if (typeof value === "object") {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  },

  removeItem: (key: string) => localStorage.removeItem(key),

  removeToken: () => {
    localStorage.removeItem(STORAGE_KEY.TOKEN);
    axiosInstance.defaults.headers.common["Authorization"] = "";
  },

  setUserToken: (token: string) => {
    localStorage.setItem(STORAGE_KEY.TOKEN, token);
    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  },

  getUserToken: () => {
    return localStorage.getItem(STORAGE_KEY.TOKEN);
  },
});
