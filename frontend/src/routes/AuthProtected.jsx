import React, { useEffect } from "react";
import {
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { useAuth } from "../stores";

export const AuthProtected = (props) => {
  const user = useAuth((state) => state.user);
  const accessToken = useAuth((state) => state.accessToken);
  const isLoading = useAuth((state) => state.isLoading);
  const verifyRefreshToken = useAuth(
    (state) => state.verifyRefreshAuthenticity
  );
  let location = useLocation();
  let navigate = useNavigate();
  let params = useParams();
  let router = { location, navigate, params };

  useEffect(() => {
    const verifyRefreshTokenAuthenticity = async () => {
      //verfiy refresh token
      verifyRefreshToken(router);

      //verify durability of the access token
      //if the access is mayat we generate a new one using the refreshtoken
    };
    if (!isLoading) {
      verifyRefreshTokenAuthenticity();
    }
  }, [isLoading]);
  if (!user || !accessToken) {
    return <Navigate to={"/logout"} />;
  }

  return <React.Fragment>{props.children}</React.Fragment>;
};

export const RoleProtected = ({ children, role }) => {
  const user = useAuth((state) => state.user);
  console.log(role, user.role);
  if (user.role === role) {
    return children;
  }

  return <Navigate to="/dashboard" />; // Redirect to the dashboard if the role does not match
};
