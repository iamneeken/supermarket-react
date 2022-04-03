import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/authService";

function Logout() {
  let navigate = useNavigate();
  let authData = useContext(AuthContext);
  useEffect(() => {
    if (authData.loggedIn) {
      authData.setToken();
    }

    navigate("/");
  }, []);
  return <div>Redirecting</div>;
}

export default Logout;
