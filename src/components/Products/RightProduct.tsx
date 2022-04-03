import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Col,
  Row,
  Form,
  Pagination as BPagination,
} from "react-bootstrap";

import Pagination from "../Pagination/Pagination";

import ProductCard from "./ProductCard";

import axios from "axios";

import { Root as DisplayProductInterface } from "./DisplayProductInterface";
import { Root as CategoriesInterface } from "./CategoriesInterface";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

function RightProduct() {
  const [products, setProducts] = useState<DisplayProductInterface>();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const config = {
          headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
        };

        let response = await axios.get(`${baseURL}/api/v4/product`, config);

        if (response.status == 200) {
          setProducts(response.data);
        }
      } catch (e) {
        console.log("Something went wrong!: ", e);
      }
    };
    getProducts();
  }, []);

  return (
    <>
      <Row>
        {products &&
          products.data.map((product) => (
            <ProductCard
              offer={product.unitPrice[0].hasOffer}
              image={product.images[0].imageName}
              title={product.title}
              sellPrice={product.unitPrice[0].sellingPrice}
              markedPrice={product.unitPrice[0].markedPrice}
            />
          ))}
        {products && <Pagination data={products} />}
      </Row>
    </>
  );
}

export default RightProduct;
