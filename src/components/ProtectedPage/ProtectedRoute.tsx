import { Navigate } from "react-router-dom";

//This component has another component as a children, and only renders it if validation is completed through API token granted.
interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const token = localStorage.getItem("access_token");
  //Do not return the children if the current session is not granted a valid token from API request.
  if (!token) {
    return <Navigate to="/" replace />;
  } else return children;
};

export default ProtectedRoute;
