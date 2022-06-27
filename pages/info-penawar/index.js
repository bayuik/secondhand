import { Col, Row, Image, Card, Container } from "react-bootstrap";
import { NavbarStandard, CardProductOffered } from "../../components";

const InfoPenawar = () => {
  return (
    <Row>
      <NavbarStandard title="Info Penawar" />
      <div className="mx-auto spacing">
        <Container>
          <Row className="justify-content-md-center ">
            <Col md={{ span: 6 }}>
              <Card className="mt-3 card-size card-product">
                <Card.Body>
                  <Row>
                    <Col md={2}>
                      <Image src="/penjual2.png" alt="penjual1" className="seller_img rounded-3"></Image>
                    </Col>
                    <Col>
                      <h6 className="fw-bold ">Nama Penjual</h6>
                      <Card.Subtitle className="mb-2 text-muted font-control">Kota</Card.Subtitle>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-3">
            <Col md={{ span: 6 }}>
              <p>Daftar produkmu yang di tawar</p>
              <CardProductOffered />
            </Col>
          </Row>
        </Container>
      </div>
    </Row>
  );
};

export default InfoPenawar;
