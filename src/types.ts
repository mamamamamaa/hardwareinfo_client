import { To } from "react-router-dom";

export type NavLinkType = {
  title: string;
  to?: To;
  onClick?: () => void;
};
