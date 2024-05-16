import { useAuth } from "../../providers";
import { useStorage } from "../common";
import { STORAGE_KEY } from "../../constants.ts";
import axiosInstance from "../../utils";

export const useLogout = () => {
  const { setUser } = useAuth();
  const { removeToken, removeItem } = useStorage();

  const handleLogout = async () => {
    try {
      await axiosInstance.post(`${import.meta.env.VITE_API_URL}/sign_out`);

      setUser(null);
      removeToken();
      removeItem(STORAGE_KEY.USER);
      axiosInstance.defaults.headers.common["Authorization"] = "";
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return { handleLogout };
};
