import axios from "axios";
import { useState, useEffect } from "react";
import { Col, Card, Button, Container } from "react-bootstrap";
import { Meta, Daum } from "../Products/DisplayProductInterface";
import image1 from "../../images/14.png";
import ProductCard from "../Products/ProductCard";

type DisplayProductInterface = {
  meta: Meta;
  data: Daum[];
};

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

function NewOffer(): JSX.Element {
  const [offeredItems, setOfferedItems] = useState<DisplayProductInterface>();

  console.log(offeredItems);
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
          setOfferedItems(res.data);
        }
      } catch (e) {
        console.log("Something went wrong! ", e);
      }
    };
    getOfferedItems();
  }, []);
  return (
    <div className="newproducts-w3agile">
      <Container>
        <h3>New Offer</h3>
        {/* Call this Data from API */}
        {/* <Col md={1} className="top_brand_left mb-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body className="text-center">
              <Card.Title>SunFlower</Card.Title>
              <Card.Text>Rs.120</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col> */}

        {offeredItems &&
          offeredItems.data.map((product) => {
            if (product.unitPrice[0].hasOffer) {
              return (
                <ProductCard
                  uniqueNumber={product.id}
                  offer={product.unitPrice[0].hasOffer}
                  image={product.images[0].imageName}
                  title={product.title}
                  sellPrice={product.unitPrice[0].sellingPrice}
                  markedPrice={product.unitPrice[0].markedPrice}
                />
              );
            }
          })}
      </Container>
    </div>
  );
}

export default NewOffer;
