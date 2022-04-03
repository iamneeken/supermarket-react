import { Row, Col } from "react-bootstrap";
import CLeft from "./CLeft";
import CRight from "./CRight";

function ContactForm(): JSX.Element {
  return (
    <div className="about">
      <div className="w3_agileits_contact_grids">
        <Row>
          <CLeft />
          <CRight />
        </Row>
      </div>
    </div>
  );
}

export default ContactForm;
