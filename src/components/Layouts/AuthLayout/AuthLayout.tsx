import { Box } from "@mui/material";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const AuthLayout = () => (
  <Box
    component="main"
    sx={{
      position: "relative",
    }}>
    <Suspense fallback={<>Loading...</>}>
      <Outlet />
    </Suspense>
  </Box>
);
