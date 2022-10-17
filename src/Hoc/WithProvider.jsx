import React from "react";
import { useContext } from "react";
import { AlertContext } from "../context/context";
const WithProvider = (provider) => {
  const myHoc = (IncomingComponent) => {
    const outgoingComponent = (props) => {
      const contexData = useContext(provider);
      return <IncomingComponent {...props} {...contexData} />;
    };

    return outgoingComponent;
  };
  return myHoc;
};
export default WithProvider;

export const WithAlert = WithProvider(AlertContext);
export const WithUser = WithProvider(useContext);
