import { useEffect, useState } from "react";
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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

import { Root as DisplayProductInterface } from "./DisplayProductInterface";
import { Root as CategoriesInterface } from "./CategoriesInterface";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

function LeftCategoryMenu() {
  const [categories, setCategories] = useState<CategoriesInterface>();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const config = {
          headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
        };

        let response2 = await axios.get(`${baseURL}/api/v4/category`, config);

        if (response2.status == 200) {
          setCategories(response2.data);
        }
      } catch (e) {
        console.log("Something went wrong!: ", e);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="categories">
      <h2>Categories</h2>
      <ul className="cate">
        <li>
          {categories &&
            categories.data.map((category) => {
              return category.subcategories ? (
                <Link to={"/products/" + category.slug}>
                  <div>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                    &nbsp;{category.title}
                  </div>

                  {category.subcategories.data.map((sub) => (
                    <a href="#">
                      &nbsp;{" "}
                      <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                      &nbsp;{sub.title} <div></div>
                    </a>
                  ))}
                </Link>
              ) : (
                <Link
                  key={category.id}
                  className="nav-link"
                  to={"/" + category.title.toLowerCase()}
                >
                  {category.title}{" "}
                </Link>
              );
            })}
        </li>
      </ul>
    </div>
  );
}

export default LeftCategoryMenu;
