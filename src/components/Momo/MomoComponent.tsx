import { Row, Col, Container } from "react-bootstrap";
import Filter from "../Products/Filter";
import LeftCategoryMenu from "../Products/LeftCategoryMenu";
import RightFilterProduct from "../ProductComponent/RightFilterProduct";

function MomoComponent() {
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

              <RightFilterProduct category="MOMO" />
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

export default MomoComponent;
