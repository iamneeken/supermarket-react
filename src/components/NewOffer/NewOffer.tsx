import { Col, Card, Button, Container } from "react-bootstrap";
import image1 from "../../images/14.png";

function NewOffer(): JSX.Element {
  return (
    <div className="newproducts-w3agile">
      <Container>
        <h3>New Offer</h3>
        {/* Call this Data from API */}
        <Col md={1} className="top_brand_left mb-5">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={image1} />
            <Card.Body className="text-center">
              <Card.Title>SunFlower</Card.Title>
              <Card.Text>Rs.120</Card.Text>
              <Button variant="primary">Add To Cart</Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </div>
  );
}

export default NewOffer;
