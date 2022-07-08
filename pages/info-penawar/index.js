import { Col, Row, Image, Card, Container } from "react-bootstrap";
import { NavbarStandard, CardProductOffered } from "../../components";

const InfoPenawar = () => {
  return (
    <Row>
      <div className="logo-invisible">
        <NavbarStandard title="Info Penawar" />
      </div>
      <div className="mx-auto spacing">
        <div className="center ">
          <p className="title-visible fw-bold"> Info-Penawar </p>
        </div>
        <Container>
          <Row className="justify-content-md-center ">
            <Col md={{ span: 6 }}>
              <Card className="mt-3 card-size card-product mx-auto">
                <Card.Body>
                  <Row className="d-flex">
                    <div className="d-inline-flex">
                      <Col md={2}>
                        <Image src="/penjual2.png" alt="penjual1" className="seller_img rounded-3 me-2"></Image>
                      </Col>
                      <Col>
                        <h6 className="fw-bold ">Nama Penjual</h6>
                        <Card.Subtitle className="mb-2 text-muted font-control">Kota</Card.Subtitle>
                      </Col>
                    </div>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-3">
            <Col md={{ span: 6 }}>
              <div className="d-flex">
                <div className="me-auto">
                  <p className="product-offered-title fw-bold">Daftar produkmu yang di tawar</p>
                </div>
              </div>
              <CardProductOffered />
            </Col>
          </Row>
        </Container>
      </div>
    </Row>
  );
};

export default InfoPenawar;
