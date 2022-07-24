import { Col, Card, Row } from "react-bootstrap";
const CardProduct = () => {
  return (
    <Row>
      <Col md={2} className="me-4 mb-4">
        <Card style={{ width: "14rem" }}>
          <div>
            <Card.Img variant="top" src="/1.png" className="p-2" height="140px" />
          </div>
          <Card.Body>
            <Card.Title>Jam Tangan</Card.Title>
            <Card.Subtitle className="mb-2 text-muted font-control ">Aksesoris</Card.Subtitle>
            <Card.Text>Rp. 250.000</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default CardProduct;
