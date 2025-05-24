import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import axiosInstance from "../config/axios.config";
import { useSocketStore } from "../stores/socketStore";

const Middleware = () => {
  const location = useLocation();
  const path = location.pathname;

  const isLoginPage = path === "/login";
  const isDashboardPage = path === "/dashboard";
  const isGameplayPage = path === "/gameplay";

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  const { connect } = useSocketStore();

  useEffect(() => {
    const fetchAuthStatus = async () => {
      try {
        const response = await axiosInstance.get("/auth/me");
        setIsAuthenticated(response.status !== 401);
      } catch (error) {
        setIsAuthenticated(false);
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthStatus();
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      connect();
    }
  }, [isAuthenticated, connect]);

  if (loading) return <div>Loading...</div>;

  if (isAuthenticated && isLoginPage) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!isAuthenticated && (isDashboardPage || isGameplayPage) && !isLoginPage) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default Middleware;
