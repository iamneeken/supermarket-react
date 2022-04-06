import React from "react";
import { Col, Form } from "react-bootstrap";

const ContactRight = () => {
  return (
    <Col md={6} className="w3_agileits_contact_grid_right">
      <h2 className="w3_agile_header">
        Leave a<span> Message</span>
      </h2>

      <Form action="#" method="post">
        <span className="input input--ichiro">
          <Form.Control
            className="input__field input__field--ichiro"
            type="text"
            id="input-25"
            name="Name"
            placeholder=" "
            required
          />
          <Form.Label
            className="input__label input__label--ichiro"
            htmlFor="input-25"
          >
            <span className="input__label-content input__label-content--ichiro">
              Your Name
            </span>
          </Form.Label>
        </span>
        <span className="input input--ichiro">
          <Form.Control
            className="input__field input__field--ichiro"
            type="email"
            id="input-26"
            name="Email"
            placeholder=" "
            required
          />
          <Form.Label
            className="input__label input__label--ichiro"
            htmlFor="input-26"
          >
            <span className="input__label-content input__label-content--ichiro">
              Your Email
            </span>
          </Form.Label>
        </span>
        <Form.Control
          as="textarea"
          name="Message"
          placeholder="Your message here..."
          required
        ></Form.Control>
        <Form.Control type="button" value="Submit" />
      </Form>
    </Col>
  );
};

export default ContactRight;
