import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, ...props }) {
  return isLoggedIn ? <Outlet /> : <Navigate to="/signin" />;
}

export default ProtectedRoute;
