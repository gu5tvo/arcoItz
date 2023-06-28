import { useUser } from "../../hooks/contexts";
import React, { useEffect, useState } from "react";
import { Navigate, Route, useNavigate, RouteProps, Routes } from "react-router-dom";

interface ProtectedRouteProps extends Omit<RouteProps, 'component'> {
  isPrivate?: boolean;
  redirectTo?: string;
  element?: React.ElementType;
}

export default function ProtectedRoute({ isPrivate, redirectTo, element: Component, ...rest }: ProtectedRouteProps): JSX.Element {
  const navigate = useNavigate();
  const { user } = useUser();

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    let updatedIsAuthenticated = false;

    if (isPrivate && !user) {
      updatedIsAuthenticated = false;
      navigate(redirectTo || '/login');
    } else {
      updatedIsAuthenticated = true;
    }

    setIsAuthenticated(updatedIsAuthenticated);
    setRedirect(isAuthenticated)

  }, [user, navigate, isPrivate, redirectTo, redirect]);

  if (isPrivate && !user) {
    navigate(redirectTo || '/login')
  }

  if (redirect) { return <Navigate to={redirectTo || '/login'} /> }
  
  return <Component />
}
