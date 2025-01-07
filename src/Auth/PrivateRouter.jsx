import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import Spinner from "../components/Spinner";

function PrivateRouter({ children }) {
  let { loading, user } = useContext(AuthContext);
  let location = useLocation();
  if (loading) {
    return <Spinner />;
  }

  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
}

export default PrivateRouter;
