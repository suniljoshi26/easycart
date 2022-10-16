import React from "react";
import { useContext } from "react";
import { userContext } from "../App";

const WithUser = (IncomingComponent) => {
  const outgoingComponent = (props) => {
    const { user, setUser } = useContext(userContext);
    return <IncomingComponent {...props} user={user} setUser={setUser} />;
  };

  return outgoingComponent;
};
export default WithUser;
