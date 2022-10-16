import React from "react";
import { useContext } from "react";
import { AlertContext } from "../App";
const WithProvider = (Provider) => {
  const myHoc = (IncomingComponent) => {
    const outgoingComponent = (props) => {
      const contexData = useContext(Provider);
      return <IncomingComponent {...props} {...contexData} />;
    };

    return outgoingComponent;
  };
  return myHoc;
};
export default WithProvider;
