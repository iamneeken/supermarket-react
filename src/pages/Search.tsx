import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Filter from "../components/Products/Filter";
import LeftCategoryMenu from "../components/Products/LeftCategoryMenu";
import ProductCard from "../components/Products/ProductCard";
import { Meta, Daum } from "../components/Products/DisplayProductInterface";

import BreadcrumbComponent from "../components/Breadcrumbs/BreadcrumbComponent";

type DisplayProductInterface = {
  meta: Meta;
  data: Daum[];
};
const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

export const Search = () => {
  const { key } = useParams();
  if (key) {
    var query = key.toString();
    console.log(query);
  }

  const [product, setProduct] = useState<DisplayProductInterface>();
  // console.log(product);

  useEffect(() => {
    async function getProducts() {
      const config = {
        headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
      };
      let res = await axios.get(
        `${baseURL}/api/v4/product?query=${query}`,
        config
      );

      if (res.status == 200) {
        console.log(res.data);
        setProduct(res.data);
      }
    }
    getProducts();
  }, [key]);

  // const handlePageClick = (data: any = 1) => {
  //   let currentPage = data.selected + 1;
  //   setPageNumber(currentPage);
  // };
  return (
    <>
      <BreadcrumbComponent page="Search" />
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
              <Row>
                {product &&
                  product.data.map((product) => (
                    <ProductCard
                      uniqueNumber={product.id}
                      priceId={product.unitPrice[0].id}
                      offer={product.unitPrice[0].hasOffer}
                      image={product.images[0].imageName}
                      title={product.title}
                      sellPrice={product.unitPrice[0].sellingPrice}
                      markedPrice={product.unitPrice[0].markedPrice}
                    />
                  ))}

                {/* {product && (
                  <ReactPaginate
                    previousLabel={"<<"}
                    pageCount={product.meta.pagination.total_pages}
                    breakLabel={"..."}
                    marginPagesDisplayed={4}
                    nextLabel={">>"}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination justify-content-center"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                    activeClassName={"active"}
                  />
                )} */}
              </Row>
              <div className="clearfix"> </div>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </Container>
        <div className="clearfix"> </div>
      </div>
    </>
  );
};
