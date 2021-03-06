import BreadcrumbComponent from "../Breadcrumbs/BreadcrumbComponent";
import {
  Container,
  Col,
  Row,
  Pagination as BPagination,
} from "react-bootstrap";

import LeftCategoryMenu from "./LeftCategoryMenu";
import Filter from "./Filter";
import RightProduct from "./RightProduct";

function Product(): JSX.Element {
  return (
    <>
      <BreadcrumbComponent page="All Products" />

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
              <RightProduct />
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

export default Product;
