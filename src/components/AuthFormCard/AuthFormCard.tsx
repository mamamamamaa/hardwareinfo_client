import { PropsWithChildren } from "react";
import { Stack, Typography } from "@mui/material";

type Props = PropsWithChildren & {
  title: string;
};

export const AuthFormCard = ({ children, title }: Props) => (
  <Stack
    spacing={5}
    sx={{
      maxWidth: 650,
      width: "100%",
      borderRadius: 6,
      px: 4,
      py: 6,
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      boxShadow: "10px 7px 29px -3px rgba(144,202,249,1)",
    }}>
    <Typography variant="h4">{title}</Typography>
    <Stack spacing={4}>{children}</Stack>
  </Stack>
);
