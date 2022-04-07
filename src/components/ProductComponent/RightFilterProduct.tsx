import { useState, useEffect } from "react";
import ProductCard from "../Products/ProductCard";
import { Row } from "react-bootstrap";
import axios from "axios";
import ReactPaginate from "react-paginate";
// import { Meta, Daum} from "../Products/DisplayProductInterface";

// type DisplayProductInterface = {
//   meta: Meta;
//   data: Daum[];
// };

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

type Props = {
  category: number;
};

function RightFilterProduct(props: Props) {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  console.log(products);

  useEffect(() => {
    getProducts();
  }, [pageNumber]);

  const getProducts = async () => {
    try {
      let items: any = [];
      const config = {
        headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
      };

      let res = await axios.get(`${baseURL}/api/v4/product`, config);

      if (res.status == 200) {
        res.data.data.forEach((item: { categoryId: number }) => {
          if (item.categoryId === props.category) {
            items.push(item);
          }
        });
        setProducts(items);
      }
    } catch (e) {
      console.log("Something went wrong!: ", e);
    }
  };

  const handlePageClick = () => {};
  return (
    <Row>
      {products &&
        products.map((product: any) => (
          <ProductCard
            uniqueNumber={product.id}
            offer={product.unitPrice[0].hasOffer}
            image={product.images[0].imageName}
            title={product.title}
            sellPrice={product.unitPrice[0].sellingPrice}
            markedPrice={product.unitPrice[0].markedPrice}
          />
        ))}
      {/* {products && (
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
      )} */}
    </Row>
  );
}

export default RightFilterProduct;
