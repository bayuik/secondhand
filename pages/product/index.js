import { Col, Row, Image, Form, Navbar, Nav, Card, Container, Button, ListGroup } from "react-bootstrap";
import { NavbarSearch } from "../../components";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Product = () => {
  return (
    <Row>
      <NavbarSearch />
      <div className="spacing mx-auto">
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={6}>
              <Carousel className="product-img">
                <div>
                  <Image src="/1.png" alt="image1" className="product_img rounded-3"></Image>
                </div>
                <div>
                  <Image src="/1.png" alt="image2" className="product_img rounded-3"></Image>
                </div>
                <div>
                  <Image src="/1.png" alt="image3" className="product_img rounded-3"></Image>
                </div>
              </Carousel>
            </Col>
            <Col sm={4}>
              <Card className="card-product">
                <Card.Body>
                  <Card.Title className="font-14">Jam Tangan Casio</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted font-control">Aksesoris</Card.Subtitle>
                  <Card.Text className="font-14">Rp. 250.000</Card.Text>
                  <div className="d-grid gap-2 mt-4">
                    <Button className="text-white purple-bg custom-rounded p-2 font-14" type="button">
                      Terbitkan
                    </Button>
                    <Button className="purple-outline custom-rounded p-2 font-14" type="button">
                      Edit
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              <Card className="mt-3 card-size card-product">
                <Card.Body>
                  <Row>
                    <Col md={3}>
                      <Image src="/penjual1.png" alt="penjual1" className="seller_img rounded-3"></Image>
                    </Col>
                    <Col>
                      <Card.Title className="font-14">Nama Penjual</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted kota font-control">Kota</Card.Subtitle>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-3">
            <Col sm={6}>
              <Card className="card-description">
                <Card.Body>
                  <Card.Title>Deskripsi</Card.Title>
                  <Card.Text className="deskripsi">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </Card.Text>
                  <Card.Text className="deskripsi">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
      </div>
    </Row>
  );
};

export default Product;
