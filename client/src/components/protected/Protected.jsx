import React from "react";
import { Navigate } from "react-router-dom";
import { useValue } from "../../context/AuthContext";
// import AccessMessage from "./AccessMessage";

const Protected = ({ children }) => {
  const {
    state: { currentUser },
  } = useValue();

  if (!currentUser) {
    return <Navigate to='/login' />;
  } else {
    return children;
  }
};

export default Protected;
