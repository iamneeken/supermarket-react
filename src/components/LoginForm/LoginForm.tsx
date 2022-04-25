import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/authService";
import { useNavigate } from "react-router-dom";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const auth = "api/v4/auth";
const loginURL = `${baseURL}/${auth}/login`;

function LoginForm(): JSX.Element {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authData = useContext(AuthContext);
  let navigate = useNavigate();

  const updateState = (value: any, setState: Function) => {
    setState(value);
  };

  useEffect(() => {
    if (authData.loggedIn) {
      navigate("/");
    }
  }, [authData.loggedIn]);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      let res = await axios.post(loginURL, {
        client_id: process.env.REACT_APP_client_id,
        client_secret: process.env.REACT_APP_client_secret,
        grant_type: "password",
        username: email,
        password: password,
      });

      console.log(res);
      authData.setToken(res.data);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  return (
    <div className="login">
      <div className="container">
        <h2>Login Form</h2>

        <div
          className="login-form-grids animated wow slideInUp"
          data-wow-delay=".5s"
        >
          <form>
            <input
              type="email"
              placeholder="Email Address"
              required
              onChange={(e) => {
                updateState(e.target.value, setEmail);
              }}
              value={email}
            />
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => {
                updateState(e.target.value, setPassword);
              }}
              value={password}
            />
            <div className="forgot">
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
            <input type="submit" value="Login" onClick={submitHandler} />
          </form>
        </div>
        <h4>For New People</h4>
        <p>
          <Link to="/createAccount">Register Here</Link> (Or) go back to{" "}
          <Link to="/">
            Home
            <FontAwesomeIcon
              icon={faHomeAlt}
              aria-hidden="true"
            ></FontAwesomeIcon>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
