import { Col, Row, Image, Form, Navbar, Nav, Card, Container, Button, ListGroup } from "react-bootstrap";
import { LogoImage } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faList, faBell, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";

export const getStaticPaths = async () => {
  let response = await axios.get("https://api-secondhand-fsw.herokuapp.com/product/")
  console.log(response.data.data.Products)
  const data = await response.data.data.Products;

  

  const paths = data.map((Products) => {
    return {
      params: { id: Products.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  let response = await axios.get("https://api-secondhand-fsw.herokuapp.com/product/" + id);
  console.log(response.data.data.Products);
  const data = await response.data.data.Products;
  console.log("asade", data.user_id);

  let responses = await axios.get("https://api-secondhand-fsw.herokuapp.com/profile/" + data.user_id);
  console.log(responses.data.data);
  const datas = await responses.data.data;
  return {
    props: { products: data, users: datas },
  };
};

const Product = ({ products, users }) => {
  return (
    <Row>
      <div className="invisible-content">
        <Navbar expand="lg" variant="light" bg="body" fixed="top" className="shadow p-2 mb-5 rounded nav-bar">
          <Container>
            <Navbar.Brand href="#">
              <LogoImage />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Form className="d-flex">
                <Form.Control type="search" placeholder="Cari di sini..." className="search-box me-auto" aria-label="Search" />
                <FontAwesomeIcon icon={faSearch} id="btnIcon" className="" style={{ marginTop: "13px", marginLeft: "10px" }} />
              </Form>
            </Nav>

            <Button style={{ backgroundColor: "#7126B5", borderRadius: "10px" }}>
              <FontAwesomeIcon icon={faArrowRightToBracket} id="btnIcon" className="" />
              &nbsp; Masuk
            </Button>
          </Container>
        </Navbar>
      </div>

      <div className="spacing mx-auto">
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={6}>
              <Carousel className="product-img">
                <div>
                  <Image src="/1.png" alt="image1" className="product_img rounded-3"></Image>
                </div>
                <div>
                  <Image src={"https://api-secondhand-fsw.herokuapp.com/uploads/" + products.product_photo} alt={products.product_name} className="product_img rounded-3"></Image>
                </div>
                <div>
                  <Image src={"https://api-secondhand-fsw.herokuapp.com/uploads/" + products.product_photo} alt="image3" className="product_img rounded-3"></Image>
                </div>
              </Carousel>
            </Col>
            <Col sm={4}>
              <Card className="card-product">
                <Card.Body>
                  <Card.Title>{products.product_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{products.category}</Card.Subtitle>
                  <Card.Text>Rp. {products.price.toLocaleString()}</Card.Text>
                  <div className="d-grid gap-2 mt-4">
                    <Button className="text-white purple-bg custom-rounded p-2" type="button">
                      Saya tertarik dan ingin nego
                    </Button>
                  </div>
                </Card.Body>
              </Card>

              <Card className="mt-3 card-size card-product">
                <Card.Body>
                  <div className="row">
                    <div className="col-3">
                      <Image src="/penjual1.png" alt="penjual1" className="seller_img rounded-3"></Image>
                    </div>
                    <div className="col">
                      <Card.Title>{users.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted kota">{users.city}</Card.Subtitle>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="justify-content-md-center mt-3">
            <Col sm={6}>
              <Card className="card-description">
                <Card.Body>
                  <Card.Title>Deskripsi</Card.Title>
                  <Card.Text className="deskripsi">{products.description}</Card.Text>
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
