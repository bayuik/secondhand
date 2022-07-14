import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Image, Form, Navbar, Nav, Card, Container, Button, ListGroup } from "react-bootstrap";
import { LogoImage } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const getStaticProps = async () => {
  let response = await axios.get("https://api-secondhand-fsw.herokuapp.com/product");
  console.log(response.data.data.Products);
  const data = await response.data.data.Products;
  return {
    props: { product: data },
  };
};

const Home = ({ product }) => {
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
                <div className="search-box">
                  <Form.Control type="search" placeholder="Cari di sini..." className=" sbox me-auto" aria-label="Search" />
                  <FontAwesomeIcon icon={faSearch} id="btnIcon" />
                </div>
              </Form>
            </Nav>

            <Button style={{ backgroundColor: "#7126B5", borderRadius: "10px" }}>
              <FontAwesomeIcon icon={faArrowRightToBracket} id="btnIcon" className="" />
              &nbsp; Masuk
            </Button>
          </Container>
        </Navbar>
      </div>
      <br />
      <br />
      <br />
      <div>
        <Carousel className="product-img">
          <div>
            <Image src="/banner.png" alt="image1" className="product_img rounded-3" style={{ width: "700px", height: "200px" }}></Image>
          </div>
          <div>
            <Image src="/banner.png" alt="image2" className="product_img rounded-3" style={{ width: "700px", height: "200px" }}></Image>
          </div>
          <div>
            <Image src="/banner.png" alt="image3" className="product_img rounded-3" style={{ width: "700px", height: "200px" }}></Image>
          </div>
        </Carousel>
      </div>
      <Row className="justify-content-md-left">
        {product.map(({id, product_name, product_photo, category, price}) => {
          return (
            <Col md={1} style={{ margin: "50px" }} key={id}>
              <Card style={{ width: "200px" }}>
                <Card.Link href={`/ProductInfo/${id}`}>
                  <Card.Img variant="top" src={`https://api-secondhand-fsw.herokuapp.com/uploads/${product_photo}`} style={{ height: "150px" }} />
                  <Card.Body>
                    <Card.Title>{product_name}</Card.Title>
                    <Card.Text style={{ fontSize: "13px", color: "#8A8A8A" }}>{category}</Card.Text>
                    <Card.Text>Rp.{price.toLocaleString()}</Card.Text>
                  </Card.Body>
                </Card.Link>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Row>
  );
};

export default Home;
