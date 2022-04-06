import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const auth = "api/v4/auth";
const forgotPasswordURL = `${baseURL}/${auth}/forgot-password`;

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const updateState = (value: any, setState: Function) => {
    setState(value);
  };

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      let res = await axios.post(forgotPasswordURL, {
        email: email,
      });

      console.log(res);
      alert("Your request has been made.");
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };
  return (
    <div className="login">
      <div className="container">
        <h2>Forgot password?</h2>

        <div
          className="login-form-grids animated wow slideInUp"
          data-wow-delay=".5s"
        >
          <form>
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                updateState(e.target.value, setEmail);
              }}
              required
            />

            <input type="submit" value="Submit" onClick={submitHandler} />
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
};
