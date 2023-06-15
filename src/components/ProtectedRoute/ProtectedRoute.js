import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ProtectedRoute({ ...props }) {
  const { loggedIn } = React.useContext(CurrentUserContext);

  return loggedIn ? <Outlet /> : <Navigate to="/" replace/>;
}

export default ProtectedRoute;
