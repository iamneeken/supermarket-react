import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faPhone,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faAppStore,
} from "@fortawesome/free-brands-svg-icons";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";
import image1 from "../../images/card.png";
import { Root as CategoriesInterface } from "../Products/CategoriesInterface";
import axios from "axios";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

function Footer(): JSX.Element {
  const [categories, setCategories] = useState<CategoriesInterface>();
  useEffect(() => {
    const getCategory = async () => {
      try {
        const config = {
          headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
        };
        const response = await axios.get(`${baseURL}/api/v4/category`, config);

        if (response.status == 200) {
          setCategories(response.data);
        }
      } catch (e) {
        console.log("Something went wrong, ", e);
      }
    };
    getCategory();
  }, []);
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md={3} className="w3_footer_grid">
            <h3>Contact</h3>
            <ul className="address">
              <li>
                <FontAwesomeIcon
                  className="glyphicon glyphicon-map-marker"
                  icon={faLocationDot}
                  style={{ color: "#FE9A38" }}
                />{" "}
                1234k Avenue, 4th block, <span>New York City.</span>
              </li>
              <li>
                <FontAwesomeIcon
                  className="glyphicon glyphicon-envelope"
                  icon={faEnvelope}
                  style={{ color: "#FE9A38" }}
                />
                <a href="mailto:info@example.com"> info@example.com</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faPhone}
                  className="glyphicon glyphicon-earphone"
                  style={{ color: "#FE9A38" }}
                />{" "}
                +1234 567 567
              </li>
            </ul>
          </Col>
          <Col md={3} className="w3_footer_grid">
            <h3>Information</h3>
            <ul className="info">
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <Link to="/aboutus"> About Us</Link>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <Link to="/contact"> Contact Us</Link>
              </li>

              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <Link to="/faq"> FAQ's</Link>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <Link to="/products"> Special Products</Link>
              </li>
            </ul>
          </Col>
          <Col md={3} className="w3_footer_grid">
            <h3>Category</h3>
            <ul className="info">
              {categories &&
                categories.data.map((category) => {
                  <li>
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      style={{ color: "#FE9A38" }}
                    />
                    <Link to={`products/${category.slug}`}>
                      {" "}
                      {category.title}
                    </Link>
                  </li>;
                })}

              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <a href="household.html"> Household</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <a href="personalcare.html"> Personal Care</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <a href="packagedfoods.html"> Packaged Foods</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <a href="beverages.html"> Beverages</a>
              </li>
            </ul>
          </Col>
          <Col md={3} className="w3_footer_grid">
            <h3>Profile</h3>
            <ul className="info">
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <a href="products.html"> Store</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <a href="checkout.html"> My Cart</a>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <Link to="/login"> Login</Link>
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  style={{ color: "#FE9A38" }}
                />
                <Link to="./createAccount"> Create Account</Link>
              </li>
            </ul>
          </Col>
          <div className="clearfix"> </div>
        </Row>
      </Container>

      <div className="footer-copy">
        <div className="container">
          <p>
            © 2017 Super Market. All rights reserved | Design by{" "}
            <a href="http://w3layouts.com/">W3layouts</a>
          </p>
        </div>
      </div>

      <div className="footer-botm">
        <div className="container">
          <div className="w3layouts-foot">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/Dalle.ktm"
                  className="w3_agile_facebook"
                >
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/dalle.ktm/?hl=en"
                  className="agile_twitter"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=CDLZblD79Wg"
                  className="w3_agile_dribble"
                >
                  <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/us/app/dalle/id1560777520"
                  className="w3_agile_vimeo"
                >
                  <FontAwesomeIcon icon={faAppStore}></FontAwesomeIcon>
                </a>
              </li>
            </ul>
          </div>
          <div className="payment-w3ls">
            <img src={image1} alt=" " className="img-responsive" />
          </div>
          <div className="clearfix"> </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
