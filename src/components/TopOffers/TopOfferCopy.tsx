import React, { useEffect, useState } from "react";
import { Col, Row, Tabs, Tab, Container } from "react-bootstrap";
import offer from "../../images/offer.png";
import img1 from "../../images/6.png";
import axios from "axios";
import styles from "./Top.module.css";
import ProductCard from "../Products/ProductCard";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

function TopOffer(): JSX.Element {
  const [offeredItems, setOfferedItems] = useState<any>();
  const [isCombo, setIsCombo] = useState(false);

  useEffect(() => {
    getOfferedItems();
  }, []);

  const getOfferedItems = async () => {
    try {
      const config = {
        headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
      };

      let res = await axios.get(`${baseURL}/api/v4/product`, config);

      if (res.status == 200) {
        console.log(res.data);
        setOfferedItems(res.data);
      }
    } catch (e) {
      console.log("Something went wrong! ", e);
    }
  };

  const getSuperSaverPack = () => {
    const idx = [12, 19, 39, 31, 30, 28];

    return idx.map((index) => {
      if (!offeredItems) {
        return;
      }
      let data = offeredItems.data[index];
      return (
        <ProductCard
          uniqueNumber={data.id}
          offer={data.unitPrice[0].hasOffer}
          image={data.images[0].imageName}
          title={data.title}
          markedPrice={data.unitPrice[0].markedPrice}
          sellPrice={data.unitPrice[0].sellingPrice}
          priceId={data.unitPrice[0].id}
        />
      );
    });
  };

  const comboPack = () => {
    const idx = [1, 12, 19, 38, 14, 10];

    return idx.map((index) => {
      if (!offeredItems) {
        return;
      }
      let data = offeredItems.data[index];
      return (
        <ProductCard
          uniqueNumber={data.id}
          offer={data.unitPrice[0].hasOffer}
          image={data.images[0].imageName}
          title={data.title}
          markedPrice={data.unitPrice[0].markedPrice}
          sellPrice={data.unitPrice[0].sellingPrice}
          priceId={data.unitPrice[0].id}
        />
      );
    });
  };
  return (
    <div className="top-brands">
      <h2>Top selling offers</h2>
      <Container>
        <div className={styles.border}>
          <div className={"d-flex w-100 "}>
            <span
              className={`btn ${
                isCombo ? "btn-secondary" : "btn-warning"
              } w-50 border rounded-0`}
              onClick={() => {
                setIsCombo(false);
              }}
            >
              Super Saver Pack
            </span>
            <span
              className={`btn ${
                isCombo ? "btn-warning" : "btn-secondary"
              } w-50 border rounded-0`}
              onClick={() => {
                setIsCombo(true);
              }}
            >
              Combo Pack
            </span>
          </div>
          <div className={styles.content}>
            <Row className={"m-3"}>
              {isCombo ? comboPack() : getSuperSaverPack()}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TopOffer;
