import { useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const Middleware = () => {
  const location = useLocation();
  const path = location.pathname;

  const isLoginPage = path === "/login";
  const isDashboardPage = path === "/dashboard";

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (isAuthenticated && isLoginPage) {
    return <Navigate to="/dashboard" />;
  }

  if (!isAuthenticated && isDashboardPage) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Middleware;
