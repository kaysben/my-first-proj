import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// function PrivateRoute({ children }) {
//   const auth = useSelector((state) => state.Reducer.auth);
//   return auth ? children : <Navigate to="/SignUp" />;
// }

function AdminRoute({ children }) {
  const token = localStorage.getItem("token");
  const user = useSelector((state) => state.Reducer.user);

  return token && user.role == "admin" ? (
    children
  ) : (
    <Navigate to="/signUp"></Navigate>
  );
}
export default AdminRoute;
