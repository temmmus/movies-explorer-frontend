import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ loggedIn, children }) => {
  return loggedIn ? <Outlet /> : <Navigate to='/' />;
};

export default ProtectedRoute;
