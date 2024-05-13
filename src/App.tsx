import { Route, Routes } from "react-router-dom";
import { AuthLayout, MainLayout } from "./components";
import { DevelopersPage, HomePage, SignInPage, SignUpPage } from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cards" element={<>Cards</>} />
        <Route path=":id/card" element={<>Card details</>} />
        <Route path="developers" element={<DevelopersPage />} />
        <Route path="profile" element={<>Profile</>} />
      </Route>
    </Routes>
  );
};
