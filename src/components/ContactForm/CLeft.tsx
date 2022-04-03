import React from "react";
import ContactInfo from "./ContactInfo";
import Map from "../Map/Map";
import { Col } from "react-bootstrap";

const CLeft = () => {
  return (
    <Col md={6} className="w3_agileits_contact_grid_left">
      <div className="agile_map">
        <Map />
      </div>
      <ContactInfo />
    </Col>
  );
};

export default CLeft;
