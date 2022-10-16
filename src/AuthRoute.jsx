import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "./App";

export const AuthRoute = ({ children }) => {
  const { user } = useContext(userContext);

  if (user) {
    return <Navigate to="/" />;
  }

  return children;
};
