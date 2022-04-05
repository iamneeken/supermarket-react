import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

const MainNav: React.FC = () => {
  const [siteData, setSiteData] = useState();

  console.log(siteData);

  useEffect(() => {
    const getData = async () => {
      try {
        const config = {
          headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
        };

        let response2 = await axios.get(`${baseURL}/api/v4/config`, config);

        if (response2.status == 200) {
          setSiteData(response2.data.meta.socialTags["og:title"]);
        }
      } catch (e) {
        console.log("Something went wrong!: ", e);
      }
    };
    getData();
  }, []);

  return (
    <div className="logo_products">
      <div className="container">
        <div className="w3ls_logo_products_left1">
          <ul className="phone_email">
            <li>
              <FontAwesomeIcon
                icon={faPhone}
                aria-hidden="true"
              ></FontAwesomeIcon>
              &nbsp; Order online or call us : (+0123) 234 567
            </li>
          </ul>
        </div>
        <div className="w3ls_logo_products_left">
          <h1>
            <Link to="/">{siteData}</Link>
          </h1>
        </div>
        <div className="w3l_search">
          <form action="#" method="post">
            <input
              type="search"
              name="Search"
              placeholder="Search for a Product..."
              required
            />
            <button
              type="submit"
              className="btn btn-default search"
              aria-label="Left Align"
            >
              <FontAwesomeIcon
                icon={faSearch}
                aria-hidden="true"
              ></FontAwesomeIcon>
            </button>
            <div className="clearfix"></div>
          </form>
        </div>
        <div className="clearfix"> </div>
      </div>
    </div>
  );
};

export default MainNav;
