import { useAdmin } from "../../hooks/contexts";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";


export default function AdminProtectedRoute({ isPrivate, redirectTo, element: Component }: any): JSX.Element {

  const { adminSelf, isAuthenticated} = useAdmin()

  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      await adminSelf();
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

  if (isPrivate && !isAuthenticated) { return <Navigate to={redirectTo || '/admin/login'} /> }
  
  return <Component />;
}
