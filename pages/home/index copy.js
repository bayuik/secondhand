import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Image, Form, Navbar, Nav, Card, Container, Button, ListGroup } from "react-bootstrap";
import { LogoImage } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faList, faBell, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function Home() {
  const [product, setProducts] = useState([]);
  const [login, setLogin] = useState(false);

  const getProducts = async () => {
    try {
      let response = await axios.get("http://localhost:8000/product");
      setProducts(response.data.data.Products);
    } catch (e) {
      console.log(e.message);
    }
  };

  const checkLogin = () => {
    if (window.localStorage.getItem("token") != null) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  useEffect(() => {
    getProducts();
    checkLogin();
  }, []);

  return (
    <Row>
      <Col className="invisible-content">
        <Navbar expand="lg" variant="light" bg="body" fixed="top" className="shadow p-2 mb-5 rounded nav-bar">
          <Container>
            <Navbar.Brand href="/">
              <LogoImage />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Form className="d-flex">
                <Col className="search-box">
                  <Form.Control type="search" placeholder="Cari di sini..." className=" sbox me-auto" aria-label="Search" />
                  <FontAwesomeIcon icon={faSearch} id="btnIcon" />
                </Col>
              </Form>
            </Nav>
            {login && (
              <Button href="/login" style={{ backgroundColor: "#7126B5", borderRadius: "10px" }}>
                <FontAwesomeIcon icon={faArrowRightToBracket} id="btnIcon" className="" />
                &nbsp; Masuk
              </Button>
            )}
          </Container>
        </Navbar>
      </Col>
            
      <Col className="mt-5 pt-5">
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
      </Col>
      <Row className="justify-content-md-left">
        {product &&
          product.map(({ id, product_photo, product_name, category, price }) => {
            return (
              <Col key={id} md={1} style={{ margin: "50px" }}>
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
}

export default Home;