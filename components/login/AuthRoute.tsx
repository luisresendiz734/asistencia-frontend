import { FC } from "react";
import { useAuth } from "../../context/auth";
import Login from ".";

const AuthRoute: FC = ({ children }) => {
  const { user } = useAuth();
  return <div>{user ? children : <Login />}</div>;
};

export default AuthRoute;
