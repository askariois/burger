import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

export function ProtectedRoute({ children, ...rest }) {
  const auth = useSelector((store) => store.loginData);
  const [isUserLoaded, setUserLoaded] = useState(false);
  const init = () => {
    if (Object.keys(auth.data).length === 0) setUserLoaded(true);
  };

  console.log(auth);

  useEffect(() => {
    init();
  }, []);

  return (
    <Route
      {...rest}
      render={() =>
        Object.keys(auth.data).length !== 0 ? (
          children
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}
