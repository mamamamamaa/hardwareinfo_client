import { To } from "react-router-dom";
import { UserRoleEnum } from "./enums.ts";

export type NavLinkType = {
  title: string;
  to?: To;
  onClick?: () => void;
};

export type SignInFormType = {
  email: string;
  password: string;
};

export type SignUpFormType = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
};

export type UserType = {
  avatarUrl: string | null;
  email: string;
  role: UserRoleEnum;
  username: string;
};

export type SavedUserType = UserType | null;
