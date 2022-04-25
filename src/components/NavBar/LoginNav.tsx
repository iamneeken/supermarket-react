import React, { useEffect, useContext } from "react";
import AuthContext from "../../context/authService";

import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const LoginNav: React.FC = () => {
  const authData = useContext(AuthContext);

  useEffect(() => {
    authData.checkLogIn();
  }, []);

  return (
    <div className="agileits_header">
      <div className="container">
        <div className="w3l_offers">
          <p>
            SALE UP TO 70% OFF. USE CODE "SALE70%" .{" "}
            <Link to="/products">SHOP NOW</Link>
          </p>
        </div>
        <div className="agile-login">
          <ul>
            <li>
              {authData.loggedIn || (
                <Link to="/createAccount"> Create Account </Link>
              )}
            </li>
            <li>
              {authData.loggedIn ? (
                <Link to="/logout">logout</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
            <li>
              <Link to="/contact">Help</Link>
            </li>
          </ul>
        </div>
        <div className="product_list_header">
          <Link to="/cart" className="last">
            <input type="hidden" name="cmd" value="_cart" />
            <input type="hidden" name="display" value="1" />
            <Button
              className="w3view-cart"
              type="submit"
              name="submit"
              value=""
            >
              <FontAwesomeIcon
                icon={faCartArrowDown}
                size="lg"
                aria-hidden="true"
                color="white"
                className="cartArrowDown"
              ></FontAwesomeIcon>
            </Button>
          </Link>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  );
};

export default LoginNav;
