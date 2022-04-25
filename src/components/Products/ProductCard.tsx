import axios from "axios";
import React, { useContext } from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../images/offer.png";
import AuthContext from "../../context/authService";

type productProps = {
  uniqueNumber: number;
  offer: boolean;
  image: string;
  title: string;
  markedPrice: number;
  sellPrice: number;
  priceId: number;
  className?: string;
};

const baseURL = "https://uat.ordering-dalle.ekbana.net";
const auth = "api/v4";
const addCart = `${baseURL}/${auth}/cart-product`;
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

function ProductCard(props: productProps) {
  const addToCart = async (e: any) => {
    const accessToken = localStorage.getItem("token");
    const obj = JSON.parse(accessToken!);
    let token;
    //{{baseURL}}/api/v4/cart-product
    if (!obj) {
      console.log("Token not present");
    } else {
      token = obj.access_token;
    }

    try {
      const config = {
        headers: {
          "Api-Key": apiKey,
          "Warehouse-Id": warehouseId,
          Authorization: `Bearer ${token}`,
        },
      };

      let res = await axios.post(
        addCart,
        {
          productId: props.uniqueNumber,
          priceId: props.priceId,
          quantity: 1,
          note: "testing",
        },
        config
      );

      console.log(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Col md={4} className={"mb-4 top_brand_left " + props.className}>
        <div className="hover14 column">
          <div className="agile_top_brand_left_grid">
            <div className="agile_top_brand_left_grid_pos">
              {props.offer && (
                <img
                  src={img1}
                  alt=" "
                  className="img-responsive"
                  key={props.uniqueNumber}
                />
              )}
            </div>
            <div className="agile_top_brand_left_grid1">
              <figure>
                <div className="snipcart-item block">
                  <div className="snipcart-thumb">
                    {/* Change here */}
                    <Link to={`/products/${props.uniqueNumber}`}>
                      <img
                        src={props.image}
                        alt=" "
                        className="img-fluid"
                        style={{ height: "160px", width: "160px" }}
                      />
                    </Link>
                    <p>{props.title}</p>
                    <h4>
                      Rs. {props.sellPrice} <span>Rs.{props.markedPrice}</span>
                    </h4>
                  </div>
                  <div className="snipcart-details top_brand_home_details">
                    <fieldset>
                      <input type="hidden" name="cmd" value="_cart" />
                      <input type="hidden" name="add" value="1" />
                      <input type="hidden" name="business" value=" " />
                      <input
                        type="hidden"
                        name="item_name"
                        value="Pepsi soft drink"
                      />
                      <input type="hidden" name="amount" value="80.00" />
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
                        onClick={addToCart}
                        value="Add to cart"
                        className="button"
                      />
                    </fieldset>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </Col>
    </>
  );
}

export default ProductCard;
