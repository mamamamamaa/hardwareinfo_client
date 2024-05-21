import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";
import { SavedUserType, UserType } from "../types.ts";
import { useNavigate } from "react-router-dom";
import { useStorage } from "../hooks";
import { STORAGE_KEY } from "../constants.tsx";
import axiosInstance from "../utils";

type AuthType = {
  user: SavedUserType | null;
  setUser: (user: SavedUserType | null) => void;
};

const AuthContext = createContext<AuthType>({
  user: null,
  setUser: async () => {},
});

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const { getItem, setItem, removeItem } = useStorage();
  const token = getItem(STORAGE_KEY.TOKEN, false);
  const [user, setUser] = useState<SavedUserType | null>(getItem(STORAGE_KEY.USER) || null);

  useEffect(() => {
    if (!user) navigate("/auth/sign-in", { replace: true });
    else if (token)
      axiosInstance.defaults.headers.common["Authorization"] =
        `Bearer ${getItem(STORAGE_KEY.TOKEN, false)}`;
  }, [user]);

  useEffect(() => {
    (async () => {
      if (token)
        axiosInstance.defaults.headers.common["Authorization"] =
          `Bearer ${getItem(STORAGE_KEY.TOKEN, false)}`;

      try {
        const { data } = await axiosInstance.get(`${import.meta.env.VITE_API_URL}/auth`);

        setUser(data);
        setItem(STORAGE_KEY.USER, data);
      } catch {
        console.log("");
      }
    })();
  }, []);

  const setUserStorage = (userData: UserType | null) => {
    if (userData) {
      setItem(STORAGE_KEY.USER, userData);
    } else {
      removeItem(STORAGE_KEY.USER);
    }

    setUser(userData);
  };

  const authContext: AuthType = useMemo(() => ({ user, setUser: setUserStorage }), [user]);

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};
