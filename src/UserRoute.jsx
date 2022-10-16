import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "./App";

export const UserRoute = ({ children }) => {
  const { user } = useContext(userContext);
  if (!user) {
    return <Navigate to="login" />;
  }
  return children;
};
