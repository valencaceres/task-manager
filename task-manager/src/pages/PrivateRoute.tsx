import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Loading from "../components/ui/Loading/Loading";
import { useUser } from "../store/hooks";

const PrivateRoute = () => {
  const { user, isLoading } = useUser();
  const location = useLocation();

  useEffect(() => {

    if (user && location.state?.from) {
    }
  }, [user, location]);

  return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;