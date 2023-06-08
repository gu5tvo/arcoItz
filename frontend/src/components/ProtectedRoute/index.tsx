import { useUser } from "../../hooks/contexts";
import React, { useEffect, useState } from "react";
import { Navigate, Route, useNavigate, RouteProps } from "react-router-dom";

interface ProtectedRouteProps extends Omit<RouteProps, 'component'> {
  isPrivate?: boolean;
  redirectTo?: string;
  component: React.ElementType;
}

export default function ProtectedRoute({ isPrivate, redirectTo, component: Component, ...rest }: ProtectedRouteProps): JSX.Element {
  const navigate = useNavigate();
  const { user } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (isPrivate && !user) {
      setIsAuthenticated(false);
      navigate(redirectTo || '/login');
    } else {
      setIsAuthenticated(true);
    }
  }, [user, navigate, isPrivate, redirectTo]);

  if (!isAuthenticated && isPrivate) return <Navigate to={redirectTo || '/login'} />;
  return <Route {...rest} element={<Component />} />;
}
