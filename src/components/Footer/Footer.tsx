import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faEnvelope, faPhone, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faDribbble, faFacebook, faVimeo, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'
import image1 from "../../images/card.png"


function Footer():JSX.Element {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Col md={3} className="w3_footer_grid">
                        <h3>Contact</h3>

                        <ul className="address">
                            <li><FontAwesomeIcon className="glyphicon glyphicon-map-marker" icon={faLocationDot} style={{ color: "#FE9A38" }} /> 1234k Avenue, 4th block, <span>New York City.</span></li>
                            <li><FontAwesomeIcon className="glyphicon glyphicon-envelope" icon={faEnvelope} style={{ color: "#FE9A38" }} /><a href="mailto:info@example.com"> info@example.com</a></li>
                            <li><FontAwesomeIcon icon={faPhone} className="glyphicon glyphicon-earphone" style={{ color: "#FE9A38" }} /> +1234 567 567</li>
                        </ul>
                    </Col>
                    <Col md={3} className="w3_footer_grid">
                        <h3>Information</h3>
                        <ul className="info">
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} />
                                <Link to="/aboutus"> About Us</Link></li>
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} />
                                <Link to="/contact"> Contact Us</Link></li>
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} />
                                <a href="short-codes.html"> Short Codes</a></li>
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} />
                                <Link to="/faq"> FAQ's</Link></li>
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} />
                                <Link to="/products"> Special Products</Link></li>
                        </ul>
                    </Col>
                    <Col md={3} className="w3_footer_grid">
                        <h3>Category</h3>
                        <ul className="info">
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} />
                                <a href="groceries.html"> Groceries</a></li>
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} />
                                <a href="household.html"> Household</a></li>
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} />
                                <a href="personalcare.html"> Personal Care</a></li>
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} />
                                <a href="packagedfoods.html"> Packaged Foods</a></li>
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} />
                                <a href="beverages.html"> Beverages</a></li>
                        </ul>
                    </Col>
                    <Col md={3} className="w3_footer_grid">
                        <h3>Profile</h3>
                        <ul className="info">
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} /><a href="products.html"> Store</a></li>
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} /><a href="checkout.html"> My Cart</a></li>
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} /><a href="login.html"> Login</a></li>
                            <li><FontAwesomeIcon icon={faArrowRight} style={{ color: "#FE9A38" }} /><a href="registered.html"> Create Account</a></li>
                        </ul>
                    </Col>
                    <div className="clearfix"> </div>
                </Row>
            </Container>

            <div className="footer-copy">
                <div className="container">
                    <p>© 2017 Super Market. All rights reserved | Design by <a href="http://w3layouts.com/">W3layouts</a></p>
                </div>
            </div>

            <div className="footer-botm">
                <div className="container">
                    <div className="w3layouts-foot">
                        <ul>
                            <li><a href="#" className="w3_agile_facebook"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                            <li><a href="#" className="agile_twitter"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></a></li>
                            <li><a href="#" className="w3_agile_dribble"><FontAwesomeIcon icon={faDribbble}></FontAwesomeIcon></a></li>
                            <li><a href="#" className="w3_agile_vimeo"><FontAwesomeIcon icon={faVimeo}></FontAwesomeIcon></a></li>
                        </ul>
                    </div>
                    <div className="payment-w3ls">
                        <img src={image1} alt=" " className="img-responsive" />
                    </div>
                    <div className="clearfix"> </div>
                </div>
            </div>
        </div >
    )
}

export default Footer