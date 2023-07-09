import { useUser } from "../../hooks/contexts";
import React, { useEffect, useState } from "react";
import { Navigate, RouteProps } from "react-router-dom";

interface ProtectedRouteProps extends Omit<RouteProps, 'component'> {
  isPrivate?: boolean;
  redirectTo?: string;
  element?: React.ElementType;
}

export default function ProtectedRoute({ isPrivate, redirectTo, element: Component, ...rest }: ProtectedRouteProps): JSX.Element {

  const { profile, isAuthenticated } = useUser();

  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      await profile({ userData: true });
      if (isMounted) {
        setLoaded(true);
      }
    };    

    fetchData() 

    return () => {
      isMounted = false;
    };
  }, [isAuthenticated]);

  if (!loaded) return (<></>);

  if (isPrivate && !isAuthenticated) { return <Navigate to={redirectTo || '/login'} /> }
  
  return <Component />;
}
