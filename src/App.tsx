import { Route, Routes } from "react-router-dom";
import { AdminLayout, AuthLayout, MainLayout } from "./components";
import {
  CardDetailsPage,
  DashboardPage,
  DevelopersPage,
  GraphicCards,
  HomePage,
  ProfilePage,
  SignInPage,
  SignUpPage,
} from "./pages";

export const App = () => {
  return (
    <Routes>
      <Route path="auth" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>

      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="cards" element={<GraphicCards />} />
        <Route path=":id/card" element={<CardDetailsPage />} />
        <Route path="developers" element={<DevelopersPage />} />
        <Route path="profile" element={<ProfilePage />} />

        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="users" element={<div>Users</div>} />
        </Route>
      </Route>
    </Routes>
  );
};
