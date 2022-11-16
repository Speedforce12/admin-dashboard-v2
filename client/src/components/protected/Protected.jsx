import React from "react";
import { Outlet } from "react-router-dom";
import { useValue } from "../../context/AuthContext";
import Login from "../Login";
// import AccessMessage from "./AccessMessage";



const Protected = () => {
  const {
    state: { currentUser },
  } = useValue();

  return currentUser ? <Outlet/> : <Login/>;
};

export default Protected;
