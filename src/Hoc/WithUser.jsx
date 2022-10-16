import React from "react";
import { useContext } from "react";
import { userContext } from "../App";

const WithUser = (IncomingComponent) => {
  const outgoingComponent = (props) => {
    const contexData = useContext(userContext);
    return <IncomingComponent {...props} {...contexData} />;
  };

  return outgoingComponent;
};
export default WithUser;
