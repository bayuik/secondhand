import { Col, Row, Image, Form, Navbar, Nav, Card, Container, Button, ListGroup } from "react-bootstrap";
import { LogoImage } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch, faUser, faList, faBell,faArrowRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from "react";
import{io} from 'socket.io-client';
// const socket = io.connect("http://localhost:5000");
global.moment = require('moment-timezone');

const Header = ()=> {
  const [product, setProducts] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const getProducts = async () => {
    try {
      let response = await axios.get("http://localhost:8000/notifProduct");
      setProducts(response.data.data.NotificationsProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const getTransaction = async () => {
    try {
      let response = await axios.get("http://localhost:8000/notifTransaction");
      setTransaction(response.data.data.NotificationsTransactions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    getTransaction();
  }, []);
    return(
        <div className="invisible-content">
        <Navbar expand="lg" variant="light" bg="body" fixed="top" className="shadow p-2 mb-5 rounded nav-bar">
            <Container>
            <Navbar.Brand href="#"><LogoImage /></Navbar.Brand>
            <Nav className="me-auto">
                <Form className="d-flex">
                <Form.Control type="search" placeholder="Cari di sini..." className="search-box me-auto" aria-label="Search"/>
                <FontAwesomeIcon icon={faSearch} id="btnIcon" className="" style={{marginTop:"13px", marginLeft:"10px"}}/>
                </Form>
            </Nav>
            <FontAwesomeIcon icon={faBell} id="btnIcon" onClick={handleShow} />
            
            &nbsp;
            <Button style={{backgroundColor:"#7126B5", borderRadius:'10px'}}>
                <FontAwesomeIcon icon={faArrowRightToBracket} id="btnIcon" className="" />
                &nbsp;
                Masuk
            </Button>
            </Container>
        </Navbar>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notifikasi</Modal.Title>
          </Modal.Header>
          <br/>
          <Modal.Title>
            <Modal.Body>Notifikasi Product Masuk: </Modal.Body>
          </Modal.Title>
          {product.map(({product_name, product_photo, price,category, user_id}) => {
          return (
            <Modal.Body>
              Barang Sudah Masuk Yaitu <br/>
              Nama : {product_name} <br/>
              Harga : Rp.{price}<br/>
              Category : {category}<br/>
              <Image src={`http://localhost:8000/uploads/${product_photo}`} alt="penjual1"className="seller_img rounded-3"></Image>
          </Modal.Body>
          );
        })}
          <Modal.Title>
            <Modal.Body>Notifikasi Tawaran: </Modal.Body>
          </Modal.Title>
          {transaction.map(({harga_tawar}) => {
          return (
            <Modal.Body>
              Tawaran Sudah Dikirimkan <br/>
              Harga Tawar : {harga_tawar} <br/>
          </Modal.Body>
          );
        })}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
          </Modal>
        </div>
        
    )
}
export default Header;