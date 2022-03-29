import React from 'react'
import { Carousel } from "react-bootstrap"
import image1 from '../../images/11.jpg'
import image2 from '../../images/22.jpg'
import image3 from '../../images/44.jpg'

import './MainSlider.css'

function Slider():JSX.Element {
    return (
        <Carousel fade controls={false} className='mainSlider'>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>WHOLE SPICES PRODUCTS ARE NOW ON LINE WITH US</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>WHOLE SPICES PRODUCTS ARE NOW ON LINE WITH US</h3>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>BUY RICE PRODUCTS ARE NOW ON LINE WITH US</h3>

                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Slider