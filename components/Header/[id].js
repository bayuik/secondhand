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
const socket = io.connect("http://localhost:5000");
global.moment = require('moment-timezone')
export const getStaticPaths = async () => {
  let response = await axios.get("http://localhost:8000/product")
  console.log(response.data.data.products)
  const data = await response.data.data.products;

  

  const paths = data.map((products) => {
    return {
      params: { id: products.id.toString() },
    };
  });

  return{
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;

  let response = await axios.get("http://localhost:8000/product/" + id)
  console.log(response.data.data.products)
  const data = await response.data.data.products;
  console.log("asade", data.user_id)
  
  let responses = await axios.get("http://localhost:8000/profile/"+ data.user_id)
  console.log(responses.data.data)
  const datas = await responses.data.data;
  const socket = io("http://localhost:5000");
  await socket.emit('sendData',{string:"Barang Sudah Masuk Yaitu :",email:datas.id, file:datas.product_name, password:datas.price, time: moment().tz("Asia/Jakarta").format('hh:mm:ss A')})
  
  return {
    props : {products: data, users:datas}
  }


}


const Header = ({products, users}) => {
    const [dataDiterima, setDataDiterima] = useState([]);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(products.id)
    const handlepost = async (e) => {
      const socket = io("http://localhost:5000");
      let response = await axios.get("http://localhost:8000/product/" + products.id)
      console.log(response.data.data.products)
      const data = await response.data.data.products;
      await socket.emit('sendData',{string:"Barang Sudah Masuk Yaitu :",name:data.product_name, price:data.price, photo:data.product_photo, time: moment().tz("Asia/Jakarta").format('hh:mm:ss A')})
    }
    useEffect(() =>{
      const socket = io("http://localhost:5000");
      socket.on("notifDiterima", function (data) {
        setDataDiterima((list) => [...list, data]);
      });
    },[socket])
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
            {dataDiterima.length}
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
          {dataDiterima.map((datas) => (
          <Modal.Body>

              {datas.string} <br/>
              Nama :{datas.name} <br/>
              Harga : {datas.price.toLocaleString()}<br/>
              Time : {datas.time} <br/>
              <Image src={"http://localhost:8000/uploads/"+datas.photo} alt="penjual1"className="seller_img rounded-3"></Image>
                         
            
            </Modal.Body>
            ))}
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