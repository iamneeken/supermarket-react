import { Row, Col, Container } from "react-bootstrap";
import Filter from "../Products/Filter";
import LeftCategoryMenu from "../Products/LeftCategoryMenu";
import RightFilterProduct from "../ProductComponent/RightFilterProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../Products/ProductCard";
import ReactPaginate from "react-paginate";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;
let totalPage: number;

function MomoComponent() {
  let items: any = [];
  const [momos, setMomos] = useState([]);

  const [momoId, setMomoId] = useState(133);

  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    getMomos();
  }, [pageNumber]);

  const getMomos = async () => {
    const config = {
      headers: {
        "Api-Key": apiKey,
        "Warehouse-Id": warehouseId,
        perPage: 9,
      },
    };
    // let res = await axios.get(`${baseURL}/api/v4/product`, config);
    let res = await axios.get(
      `${baseURL}/api/v4/product?categoryId=${momoId}&page=${pageNumber}`,
      config
    );

    if (res.status == 200) {
      // setProducts(res2.data);

      res.data.data.forEach((item: { categoryTitle: string }) => {
        if (item.categoryTitle === "MOMO") {
          items.push(item);
        }
      });
      totalPage = res.data.meta.pagination.total_pages;
      setMomos(items);
    }
  };

  const handlePageClick = (data: any = 1) => {
    let currentPage = data.selected + 1;
    setPageNumber(currentPage);
  };

  return (
    <>
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
                {momos &&
                  momos.map((product: any) => (
                    <ProductCard
                      uniqueNumber={product.id}
                      offer={product.unitPrice[0].hasOffer}
                      image={product.images[0].imageName}
                      title={product.title}
                      sellPrice={product.unitPrice[0].sellingPrice}
                      markedPrice={product.unitPrice[0].markedPrice}
                    />
                  ))}

                {momos && (
                  <ReactPaginate
                    previousLabel={"<<"}
                    pageCount={totalPage}
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
              </Row>
              {/* <RightFilterProduct category={133} /> */}
              <div className="clearfix"> </div>
            </Col>
            <div className="clearfix"> </div>
          </Row>
        </Container>
        <div className="clearfix"> </div>
      </div>
    </>
  );
}

export default MomoComponent;
