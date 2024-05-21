import { Suspense, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Loader } from "../../Loader";
import { useAuth } from "../../../providers";
import { UserRoleEnum } from "../../../enums.ts";

export const AdminLayout = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === UserRoleEnum.USER) navigate("/");
  }, [navigate, user]);

  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};
