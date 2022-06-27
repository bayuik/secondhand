import { Col, Row, Image, Card, Button } from "react-bootstrap";

const CardProductOffered = () => {
  return (
    <Card className="card-product">
      <Card.Body>
        <Row>
          <Col md={2}>
            <Image src="/1.png" alt="penjual1" className="seller_img rounded-3"></Image>
          </Col>
          <Col>
            <Row>
              <Col md={8}>
                <Card.Subtitle className="mb-2 text-muted font-control ">Penawaran Produk</Card.Subtitle>
              </Col>
              <Col md={3}>
                <Card.Subtitle className="mb-2 text-muted font-control text-end">20 Apr, 14.04</Card.Subtitle>
              </Col>
            </Row>
            <div className="font-14">Jam Tangan Casio</div>
            <div className="font-14"> Rp. 250.000</div>
            <div className="font-14"> Ditawar Rp. 200.000</div>
            <div style={{ marginLeft: "100px" }} className="mt-3">
              <Button style={{ width: "150px" }} className="purple-outline custom-rounded p-2 me-2" type="button">
                Tolak
              </Button>
              <Button style={{ width: "150px" }} className="text-white purple-bg custom-rounded p-2 " type="button">
                Terima
              </Button>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardProductOffered;
