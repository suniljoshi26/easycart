import React from "react";
import { useContext } from "react";
import { AlertContext } from "../App";

const WithAlert = (IncomingComponent) => {
  const outgoingComponent = (props) => {
    const { alert, setAlert } = useContext(AlertContext);
    return <IncomingComponent {...props} alert={alert} setAlert={setAlert} />;
  };

  return outgoingComponent;
};
export default WithAlert;
