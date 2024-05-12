import { Container } from "@mui/material";
import { Footer, Header } from "./views";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

export const MainLayout = () => (
  <>
    <Header />
    <Container component="main">
      <Suspense fallback={<>Loading...</>}>
        <Outlet />
      </Suspense>
    </Container>
    <Footer />
  </>
);
