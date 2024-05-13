import { Container } from "@mui/material";
import { Footer, Header } from "./views";
import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../../providers";
import { Loader } from "../../Loader";

export const MainLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/auth/sign-in", { replace: true });
  }, [navigate, user]);

  return (
    <>
      <Header />
      <Container component="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
      <Footer />
    </>
  );
};
