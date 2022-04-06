import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Col,
  Row,
  Form,
  Pagination as BPagination,
} from "react-bootstrap";
// import Pagination from "../Pagination/Pagination";

import ProductCard from "./ProductCard";
import { Root as DisplayProductInterface } from "./DisplayProductInterface";
import ReactPaginate from "react-paginate";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

function RightProduct() {
  const [products, setProducts] = useState<DisplayProductInterface>();
  const [pageNumber, setPageNumber] = useState(1);
  // console.log(products?.data);

  useEffect(() => {
    getProducts();
  }, [pageNumber]);

  const getProducts = async () => {
    try {
      const config = {
        headers: {
          "Api-Key": apiKey,
          "Warehouse-Id": warehouseId,
        },
      };

      let res = await axios.get(
        `${baseURL}/api/v4/product?page=${pageNumber}`,
        config
      );

      if (res.status == 200) {
        setProducts(res.data);
      }
      console.log(res.data);
      return res;
    } catch (e) {
      console.log("Something went wrong!: ", e);
    }
  };

  const handlePageClick = (data: any = 1) => {
    let currentPage = data.selected + 1;
    setPageNumber(currentPage);
  };

  return (
    <>
      <Row>
        {products &&
          products.data.map((product) => (
            <ProductCard
              key={product.id}
              offer={product.unitPrice[0].hasOffer}
              image={product.images[0].imageName}
              title={product.title}
              sellPrice={product.unitPrice[0].sellingPrice}
              markedPrice={product.unitPrice[0].markedPrice}
            />
          ))}

        {products && (
          <ReactPaginate
            previousLabel={"<<"}
            pageCount={products.meta.pagination.total_pages}
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
        )}

        {/* {products && <Pagination data={products} />} */}
      </Row>
    </>
  );
}

export default RightProduct;
