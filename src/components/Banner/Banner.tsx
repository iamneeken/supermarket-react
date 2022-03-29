import React from 'react'

import image1 from '../../images/p2.jpg'
import image2 from '../../images/p3.jpg'
import image3 from '../../images/p4.jpg'
import image4 from '../../images/111.jpg'
import { Container, Image, Row, Col } from 'react-bootstrap';

function Banner():JSX.Element {
    return (
        <div className="ban-bottom-w3l">
            <Container>
                <Row>
                    <Col md={6} className="ban-bottom3">
                        <div className="ban-top">
                            <Image
                                fluid={true}
                                src={image1}
                                className="img-responsive"
                                alt=""
                            />
                        </div>
                        <div className="ban-img">
                            <div className=" ban-bottom1">
                                <div className="ban-top">
                                    <Image
                                        fluid={true}
                                        src={image2}
                                        className="img-responsive"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="ban-bottom2">
                                <div className="ban-top">
                                    <Image
                                        fluid={true}
                                        src={image3}
                                        className="img-responsive"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </Col>
                    <Col md={6} className="ban-bottom">
                        <div className="ban-top">
                            <Image
                                fluid={true}
                                src={image4}
                                className="img-responsive"
                                alt=""
                            />
                        </div>
                    </Col>
                </Row>

                <div className="clearfix"></div>
            </Container>
        </div>
    )
}

export default Banner