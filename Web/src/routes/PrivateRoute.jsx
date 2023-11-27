import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { AuthState } from "../Atoms/AuthState";

export const PrivateRoute = ({children}) => {
    const authData = JSON.parse(localStorage.getItem("authUserToken")) || null;
  const location = useLocation();
  return (
    <div>
      {authData ? (
        children
      ) : (
        <Navigate to="/signIn" state={{ from: location }} replace />
      )}
    </div>
  );
};