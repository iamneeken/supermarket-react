import { Carousel } from "react-bootstrap"
import image1 from '../../images/b1.jpg'
import image2 from '../../images/b3.jpg'
import image3 from '../../images/b1.jpg'

import './AdSlider.css'


function AdSlider():JSX.Element {
    return (
        <Carousel className="adSlider">
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={image1}
                    alt="First slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={image2}
                    alt="Second slide"
                />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src={image3}
                    alt="Third slide"
                />

            </Carousel.Item>
        </Carousel>
    )
}

export default AdSlider