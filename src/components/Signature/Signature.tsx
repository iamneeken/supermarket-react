import { Row, Col, Container } from "react-bootstrap";
import LeftCategoryMenu from "../Products/LeftCategoryMenu";
import Filter from "../Products/Filter";

import RightFilerProduct from "../ProductComponent/RightFilterProduct";

function Signature() {
  return (
    <>
      <div className="products">
        <Container>
          <Row>
            <Col md={4} className="products-left">
              <LeftCategoryMenu />
            </Col>
            <Col md={8} className="products-right">
              <div className="products-right-grid">
                <div className="products-right-grids">
                  <Filter />
                  <div className="clearfix"> </div>
                </div>
              </div>
              <RightFilerProduct category="SIGNATURE" />

              <div className="clearfix"> </div>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </Container>
        <div className="clearfix"> </div>
      </div>
    </>
  );
}

export default Signature;
