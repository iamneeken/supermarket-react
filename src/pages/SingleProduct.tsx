import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Meta, Daum } from "../components/Products/DisplayProductInterface";

type DisplayProductInterface = {
  meta: Meta;
  data: Daum;
};

const baseURL = "https://uat.ordering-dalle.ekbana.net";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;
export const SingleProduct = () => {
  const { uniqueNumber } = useParams();
  if (uniqueNumber) {
    var query = uniqueNumber.toString();
    console.log(query);
  }

  const [product, setProduct] = useState<DisplayProductInterface>();
  console.log(product);

  useEffect(() => {
    async function getProducts() {
      const config = {
        headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
      };
      let res = await axios.get(`${baseURL}/api/v4/product/${query}`, config);

      if (res.status == 200) {
        console.log(res.data);
        setProduct(res.data);
      }
    }
    getProducts();
  }, []);

  return (
    <>
      <div className="products">
        <Container>
          <div className="agileinfo_single">
            <Row>
              <Col md={4} className="agileinfo_single_left">
                {product && (
                  <img
                    id="example"
                    src={product && product.data.images[0].imageName}
                    alt=" "
                    className="img-fluid"
                  />
                )}
              </Col>
              <Col md={8} className=" agileinfo_single_right">
                <h2>{product && product.data.title}</h2>
                <div className="rating1">
                  <span className="starRating">
                    <input id="rating5" type="radio" name="rating" value="5" />
                    <label htmlFor="rating5">5</label>
                    <input id="rating4" type="radio" name="rating" value="4" />
                    <label htmlFor="rating4">4</label>
                    <input id="rating3" type="radio" name="rating" value="3" />
                    <label htmlFor="rating3">3</label>
                    <input id="rating2" type="radio" name="rating" value="2" />
                    <label htmlFor="rating2">2</label>
                    <input id="rating1" type="radio" name="rating" value="1" />
                    <label htmlFor="rating1">1</label>
                  </span>
                </div>
                <div className="w3agile_description">
                  <h4>Description :</h4>
                  <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.Duis
                    aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur.
                  </p>
                </div>
                <div className="snipcart-item block">
                  <div className="snipcart-thumb agileinfo_single_right_snipcart">
                    <h4 className="m-sing">
                      Rs. {product && product.data.unitPrice[0].sellingPrice}
                      <span>
                        {" "}
                        Rs. {product && product.data.unitPrice[0].markedPrice}
                      </span>
                    </h4>
                  </div>
                  <div className="snipcart-details agileinfo_single_right_details">
                    <form>
                      <fieldset>
                        <input type="hidden" name="cmd" value="_cart" />
                        <input type="hidden" name="add" value="1" />
                        <input type="hidden" name="business" value=" " />
                        <input
                          type="hidden"
                          name="item_name"
                          value="pulao basmati rice"
                        />
                        <input type="hidden" name="amount" value="21.00" />
                        <input
                          type="hidden"
                          name="discount_amount"
                          value="1.00"
                        />
                        <input type="hidden" name="currency_code" value="USD" />
                        <input type="hidden" name="return" value=" " />
                        <input type="hidden" name="cancel_return" value=" " />
                        <input
                          type="submit"
                          name="submit"
                          value="Add to cart"
                          className="button"
                        />
                      </fieldset>
                    </form>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="clearfix"> </div>
          </div>
        </Container>
      </div>
    </>
  );
};
