import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const auth = "api/v4/auth";
const signupURL = `${baseURL}/${auth}/signup`;

// const config = {
//   headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
// };

function CreateAccountForm(): JSX.Element {
  const fName = useRef<HTMLInputElement>(null);
  const lName = useRef<HTMLInputElement>(null);
  const agree = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const mobileNumber = useRef<HTMLInputElement>(null);

  const [error, setError] = useState("");

  const submitHandler = async (e: any) => {
    e.preventDefault();

    try {
      console.log(agree);

      if (!fName.current?.value) {
        setError("First Name is empty");
        return;
      }

      if (!agree.current?.checked) {
        return;
      }

      let res = await axios.post(signupURL, {
        last_name: lName.current?.value,
        email: email.current?.value,
        password: password.current?.value,
        mobile_number: mobileNumber.current?.value,
        first_name: fName.current?.value,
      });

      console.log(res);
    } catch (error: any) {
      console.log(error);
      console.log(error.response);
    }
  };
  return (
    <div className="register">
      <div className="container">
        <h2>Register Here</h2>
        <div className="login-form-grids">
          {error && <p className="alert-danger">{error}</p>}

          <h5>profile information</h5>
          <form>
            <input type="text" placeholder="First Name..." ref={fName} />
            <input
              type="text"
              placeholder="Last Name..."
              required
              ref={lName}
            />
          </form>

          <h6>Login information</h6>
          <form>
            <input
              type="email"
              placeholder="Email Address"
              required
              ref={email}
            />
            <input
              type="password"
              placeholder="Password"
              required
              ref={password}
            />
            <input
              type="text"
              placeholder="Enter Mobile Number"
              required
              className="mt-2"
              ref={mobileNumber}
            />
            <div className="register-check-box">
              <div className="check">
                <label className="checkbox">
                  <input type="checkbox" name="checkbox" ref={agree} />
                  <i> </i>I accept the terms and conditions
                </label>
              </div>
            </div>
            <input type="submit" value="Register" onClick={submitHandler} />
          </form>
        </div>
        <div className="register-home">
          <Link to="/">Home</Link>
        </div>
      </div>
    </div>
  );
}

export default CreateAccountForm;
