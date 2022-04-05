import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../../images/11.jpg";
import image2 from "../../images/22.jpg";
import image3 from "../../images/44.jpg";
import axios from "axios";

import "./MainSlider.css";

const baseURL = "https://uat.ordering-dalle.ekbana.net/";
const apiKey = "q0eq7VRCxJBEW6n1EJkHy4qNLgaS86ztm8DYhGMqerV1eldXa6";
const warehouseId = 1;

function Slider(): JSX.Element {
  const [headline, setHeadline] = useState();
  // console.log(headline);
  useEffect(() => {
    const getData = async () => {
      try {
        const config = {
          headers: { "Api-Key": apiKey, "Warehouse-Id": warehouseId },
        };

        let description = await axios.get(`${baseURL}/api/v4/config`, config);

        if (description.status == 200) {
          setHeadline(description.data.meta.socialTags["og:description"]);
        }
      } catch (e) {
        console.log("Something went wrong!: ", e);
      }
    };
    getData();
  }, []);

  return (
    <Carousel fade controls={false} className="mainSlider">
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={image1} alt="First slide" />
        <Carousel.Caption>
          <h5>{headline}</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={image2} alt="Second slide" />
        <Carousel.Caption>
          <h5>{headline}</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img className="d-block w-100" src={image3} alt="Third slide" />
        <Carousel.Caption>
          <h5>{headline}</h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
