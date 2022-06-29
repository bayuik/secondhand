import { Col, Row, Image, Form, Navbar, Nav, Card, Container, Button, ListGroup } from "react-bootstrap";
import { LogoImage } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch, faUser, faList, faBell,faCube, faHeart, faDollarSign, faPlus
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Product() {

  return (
    <Row>
      <div className="invisible-content">
      <Navbar expand="lg" variant="light" bg="body" fixed="top" className="shadow p-2 mb-5 rounded nav-bar">
        <Container>
          <Navbar.Brand href="#"><LogoImage /></Navbar.Brand>
          <Nav className="me-auto">
            <Form className="d-flex">
              <Form.Control type="search" placeholder="Cari di sini..." className="search-box me-auto" aria-label="Search"/>
              <FontAwesomeIcon icon={faSearch} id="btnIcon" className="" />
            </Form>
          </Nav>
          
          <ListGroup horizontal>
          <div className="ms-auto">
            <FontAwesomeIcon icon={faList} id="btnIcon" className="icons" />
            <FontAwesomeIcon icon={faBell} id="btnIcon" className="icons" />
            <FontAwesomeIcon icon={faUser} id="btnIcon" className="icons" />
          </div>
          </ListGroup>
        </Container>
      </Navbar>
      </div>

      <div className="spacing mx-auto">
        
        <Container >
          <Card className="mt-3 card-size card-product">
                <Card.Body>
                  <div class="row">
                    <div class="col-1">
                      <Image src="/penjual1.png" alt="penjual1"className="seller_img rounded-3"></Image>
                    </div>
                    <div class="col">
                      <Card.Title>Nama Penjual</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted kota">Kota</Card.Subtitle>
                    </div>
                  </div>
                </Card.Body>
            </Card>
            <br/><br/>
          <Row className="justify-content-md-left">
          <Col sm={3}>
              <Card className="card-product">
                <Card.Body>
                  <Card.Title>Kategori</Card.Title>
                  <Card.Text>
                  <FontAwesomeIcon icon={faCube} id="btnIcon" className="" /> Semua Produk
                  </Card.Text>
                  <Card.Text>
                  <FontAwesomeIcon icon={faHeart} id="btnIcon" className="" /> Diminati
                  </Card.Text>
                  <Card.Text>
                  <FontAwesomeIcon icon={faDollarSign} id="btnIcon" className="" /> Terjual
                  </Card.Text>
                </Card.Body>
              </Card>
              

              
            </Col>
            <Col md={9}>
            <Card style={{ width: '950px' }}>
              <Row className="justify-content-md-left">
              
              <Col md={4}>
                <Card>
                <Card.Link href="#">
                <Card.Body>
                <FontAwesomeIcon icon={faPlus} id="btnIcon" className="plus-icon" style={{width:"190px", height:"150px"}}/>
                
                </Card.Body>
                </Card.Link>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                <Card.Img variant="top" src="/2.png" style={{height:"150px"}}/>
                <Card.Body>
                    <Card.Title>Jam Tangan Casio</Card.Title>
                    <Card.Text style={{fontSize:"13px", color:"#8A8A8A"}}>
                    Aksesoris
                    </Card.Text>
                    <Card.Text>
                    Rp.250.000
                    </Card.Text>
                </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                <Card.Img variant="top" src="/2.png" style={{height:"150px"}}/>
                <Card.Body>
                    <Card.Title>Jam Tangan Casio</Card.Title>
                    <Card.Text style={{fontSize:"13px", color:"#8A8A8A"}}>
                    Aksesoris
                    </Card.Text>
                    <Card.Text>
                    Rp.250.000
                    </Card.Text>
                </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card>
                <Card.Img variant="top" src="/2.png" style={{height:"150px"}}/>
                <Card.Body>
                    <Card.Title>Jam Tangan Casio</Card.Title>
                    <Card.Text style={{fontSize:"13px", color:"#8A8A8A"}}>
                    Aksesoris
                    </Card.Text>
                    <Card.Text>
                    Rp.250.000
                    </Card.Text>
                </Card.Body>
                </Card>
              </Col>
              <Col sm={4}>
                <Card>
                <Card.Img variant="top" src="/2.png" style={{height:"150px"}}/>
                <Card.Body>
                    <Card.Title>Jam Tangan Casio</Card.Title>
                    <Card.Text style={{fontSize:"13px", color:"#8A8A8A"}}>
                    Aksesoris
                    </Card.Text>
                    <Card.Text>
                    Rp.250.000
                    </Card.Text>
                </Card.Body>
                </Card>
              </Col>
              </Row>
            </Card>
            </Col>
            
            
            
          </Row>
          <Row className="justify-content-md-center mt-3">

          </Row>
        </Container>
      </div>

    </Row>
  );
};

export default Product;
