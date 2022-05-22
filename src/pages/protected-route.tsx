import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";
import { TRootState } from "../services/types/redux";

export function ProtectedRoute({ children, ...rest }: { children: React.ReactNode }) {
  const location = useLocation();
  const dispatch = useDispatch();

  const auth = useSelector((store: TRootState) => store.loginData);
  const [isUserLoaded, setUserLoaded] = useState(false);

  const init = () => {
    if (Object.keys(auth.data).length === 0) setUserLoaded(true);
  };

  useEffect(() => {
    init();
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={() =>
        Object.keys(auth.data).length !== 0 ? (
          children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}
