import { isAuthenticated } from "../../services/auth/authService";
import { Navigate } from "react-router-dom";

const RedirectIfAuth = ({ children }) => {
  return isAuthenticated() ? <Navigate to="/" replace /> : children;
};

export default RedirectIfAuth;
