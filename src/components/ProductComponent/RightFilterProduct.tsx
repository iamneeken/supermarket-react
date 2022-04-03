import { useState, useEffect } from "react";
import ProductCard from "../Products/ProductCard";
import { Row } from "react-bootstrap";
import axios from "axios";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

type Props = {
  category: string;
};

function RightFilterProduct(props: Props) {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const getProducts = async () => {
      try {
        let items: any = [];
        const config = {
          headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
        };

        let response = await axios.get(`${baseURL}/api/v4/product`, config);

        if (response.status == 200) {
          response.data.data.forEach((item: { categoryTitle: string }) => {
            if (item.categoryTitle === props.category) {
              items.push(item);
            }
          });
          setProducts(items);
        }
      } catch (e) {
        console.log("Something went wrong!: ", e);
      }
    };
    getProducts();
  }, []);

  return (
    <Row>
      {products &&
        products.map((product: any) => (
          <ProductCard
            offer={product.unitPrice[0].hasOffer}
            image={product.images[0].imageName}
            title={product.title}
            sellPrice={product.unitPrice[0].sellingPrice}
            markedPrice={product.unitPrice[0].markedPrice}
          />
        ))}
      {/* {products && <Pagination data={products} />} */}
    </Row>
  );
}

export default RightFilterProduct;
