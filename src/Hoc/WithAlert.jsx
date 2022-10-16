import React from "react";
import { useContext } from "react";
import { AlertContext } from "../App";

const WithAlert = (IncomingComponent) => {
  const outgoingComponent = (props) => {
    const { alert, setAlert, removeAlert } = useContext(AlertContext);
    return (
      <IncomingComponent
        {...props}
        alert={alert}
        setAlert={setAlert}
        removeAlert={removeAlert}
      />
    );
  };

  return outgoingComponent;
};
export default WithAlert;
