import { Col, Row, Image, Card, Container, Button } from "react-bootstrap";
import { NavbarSearch } from "../../components";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";

const Product = () => {
  return (
    <Row>
      <NavbarSearch />
      <Container className="spacing mx-auto">
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={6} className="product-carousel">
              <Carousel className="product-img">
                <Col>
                  <Image src="/1.png" alt="image1" className="product_img rounded-3"></Image>
                </Col>
                <Col>
                  <Image src="/1.png" alt="image2" className="product_img rounded-3"></Image>
                </Col>
                <Col>
                  <Image src="/1.png" alt="image3" className="product_img rounded-3"></Image>
                </Col>
              </Carousel>
            </Col>
            <Col sm={4}>
              <Col className="justify-center">
                <Card className="card-product d-flex">
                  <Card.Body>
                    <Card.Title className="font-14">Jam Tangan Casio</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted font-control">Aksesoris</Card.Subtitle>
                    <Card.Text className="font-14">Rp. 250.000</Card.Text>
                    <Col className="d-grid gap-2 mt-4">
                      <Link href="/home">
                        <Button className="text-white purple-bg custom-rounded p-2 font-14 logo-invisible" type="submit">
                          Terbitkan
                        </Button>
                      </Link>
                      <Link href="/info-product">
                        <Button className="purple-outline custom-rounded p-2 font-14 logo-invisible" type="submit">
                          Edit
                        </Button>
                      </Link>
                    </Col>
                  </Card.Body>
                </Card>
              </Col>

              <Col className="justify-center">
                <Card className="mt-3 card-size card-product mx-auto d-flex">
                  <Card.Body>
                    <Row className="d-flex">
                      <Col className="d-inline-flex">
                        <Col md={2}>
                          <Image src="/penjual1.png" alt="penjual1" className="seller_img rounded-3 me-2"></Image>
                        </Col>
                        <Col>
                          <h6 className="fw-bold ">Nama Penjual</h6>
                          <Card.Subtitle className="mb-2 text-muted font-control">Kota</Card.Subtitle>
                        </Col>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-3">
            <Col sm={6}>
              <Col className="justify-center">
                <Card className="card-description d-flex">
                  <Card.Body>
                    <Card.Title>Deskripsi</Card.Title>
                    <Card.Text className="deskripsi">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </Card.Text>
                    <Card.Text className="deskripsi">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                      id est laborum.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>

        <Row>
          <Col lg={10} className="text-center btn-terbitakan">
            <Button style={{ width: "400px" }} className="text-white purple-bg custom-rounded p-2 ms-3 font-14" type="submit">
              Terbitkan
            </Button>
          </Col>
        </Row>
      </Container>
    </Row>
  );
};

export default Product;
