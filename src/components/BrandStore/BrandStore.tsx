import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCard from "../Products/ProductCard";
import "./BrandStore.css";
import { Meta, Daum } from "../Products/DisplayProductInterface";
import { Carousel } from "react-bootstrap";

import axios from "axios";

type DisplayProductInterface = {
  meta: Meta;
  data: Daum[];
};

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

function BrandsStore(): JSX.Element {
  const [brandStore, setBrandStore] = useState<DisplayProductInterface>();

  // console.log(brandStore);

  useEffect(() => {
    const getOfferedItems = async () => {
      try {
        const config = {
          headers: {
            "Api-Key": apiKey,
            "Warehouse-Id": warehouseId,
            // perPage: 4,
          },
        };

        let res = await axios.get(`${baseURL}/api/v4/product`, config);

        if (res.status == 200) {
          console.log(res.data);
          setBrandStore(res.data);
        }
      } catch (e) {
        console.log("Something went wrong! ", e);
      }
    };
    getOfferedItems();
  }, []);

  return (
    <div className="brands">
      <Container>
        <h3 id="brandStore">Brand Store</h3>
        <Row className="brands-agile">
          <Carousel>
            {console.log(brandStore)}
            {brandStore &&
              brandStore.data.map((item) => (
                <Carousel.Item interval={500} key={item.id}>
                  <Col md={2} className="w3layouts-brand">
                    <div className="brands-w3l">
                      <p>
                        <a href="#">{item.title}</a>
                        <img src={item.categoryIcon} alt="" />
                      </p>
                    </div>
                  </Col>
                </Carousel.Item>
              ))}
          </Carousel>

          {/* <Col md={2} className="w3layouts-brand">
            <div className="brands-w3l">
              <p>
                <a href="#">Lorem</a>
              </p>
            </div>
          </Col> */}
          <div className="clearfix"></div>
        </Row>
      </Container>
    </div>
  );
}

export default BrandsStore;
