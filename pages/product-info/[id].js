import { Col, Row, Image, Form, Navbar, Nav, Card, Container, Button, ListGroup } from "react-bootstrap";
import { LogoImage } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch, faUser, faList, faBell,faArrowRightToBracket, faX
} from "@fortawesome/free-solid-svg-icons";
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { useState, useEffect } from "react";
import{io} from 'socket.io-client';
import Header from '../../components/Header'
import ModalTawar from '../../components/ModalTawar'
import { useForm } from "react-hook-form";
export const getStaticPaths = async () => {
  let response = await axios.get("http://localhost:8000/product")
  console.log(response.data.data.Products)
  const data = await response.data.data.Products;

  

  const paths = data.map((Products) => {
    return {
      params: { id: Products.id.toString() },
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
  console.log(response.data.data.Products)
  const data = await response.data.data.Products;
  console.log("asade", data.user_id)
  
  let responses = await axios.get("http://localhost:8000/profile/"+ data.user_id)
  console.log(responses.data.data)
  const datas = await responses.data.data;
  return {
    props : {products: data, users:datas}
  }


}

const Product = ({products, users}) => {
  const [dataDiterima, setDataDiterima] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const { harga_tawar, products_id, user_id} = data;
    const ress = await axios
      .post("http://localhost:8000/notifTransaction", {
        harga_tawar, products_id, user_id,
      })
      .then((val) => {
        window.location.href = "/home";
      })
      .catch((err) => {
        alert(JSON.stringify(data));
      });
    const res = await axios
      .post("http://localhost:8000/transaction", {
        harga_tawar, products_id, user_id,
      })
      .then((val) => {
        window.location.href = "/home";
      })
      .catch((err) => {
        alert(JSON.stringify(data));
      });
  };
  return (
    <Row>
      <Header/>

      <div className="spacing mx-auto">
      <Container >
          <Row className="justify-content-md-center">
            <Col sm={6}>
            <Carousel className="product-img">
                    <div>
                      <Image src="/1.png" alt="image1" className="product_img rounded-3"></Image>
                    </div>
                    <div>
                      <Image src={"https://api-secondhand-fsw.herokuapp.com/uploads/"+products.product_photo} alt="image2" className="product_img rounded-3"></Image>
                    </div>
                    <div>
                      <Image src={"https://api-secondhand-fsw.herokuapp.com/uploads/"+products.product_photo} alt="image3" className="product_img rounded-3"></Image>
                    </div>
                </Carousel>
            </Col>
            <Col sm={4}>
              <Card className="card-product">
                <Card.Body>
                  <Card.Title>{ products.product_name }</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{ products.category }</Card.Subtitle>
                  <Card.Text>
                  Rp. { products.price.toLocaleString() }
                  </Card.Text>
                  <div className="d-grid gap-2 mt-4">
                  <Button className="text-white purple-bg custom-rounded p-2" type="button" onClick={handleShow} >Saya tertarik dan ingin nego</Button>
                  </div>
                </Card.Body>
              </Card>

              <Card className="mt-3 card-size card-product">
                <Card.Body>
                  <div className="row">
                    <div className="col-3">
                      <Image src="/penjual1.png" alt="penjual1"className="seller_img rounded-3"></Image>
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
                  <Card.Text className="deskripsi">
                    {products.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
      </div>
      <Col md={4} className="me-3">
      <Card style={{ width: "18rem" }} className="modal-card">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Card.Body>
              <p className="font-14 fw-bold">Masukkan Harga Tawarmu</p>
              <p className="mb-2 pb-2 text-muted font-14">Harga tawaranmu akan diketahui penjual,jika penjual cocok kamu akan segera dihubungi penjual</p>

              <Card className="modal-card">
                <Card.Title className="font-14 text-center pt-3 fw-bold">Jam Tangan Casio</Card.Title>
                <Card.Body>
                  <Row className="mt-0">
                    <Col md={3}>
                      <Image src="/1.png" alt="...." className="seller_img rounded-3"></Image>
                    </Col>
                    <Col>
                      <div className="font-14">{ products.product_name }</div>
                      <div className="font-14"> { products.price.toLocaleString()}</div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
              <Row className="align-center mt-3">
              <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Id Barang</Form.Label>
                  <Form.Control type="text" value={products.id} readOnly {...register("products_id")}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Harga Tawar</Form.Label>
                  <Form.Control type="text" placeholder="Rp 0,00" {...register("harga_tawar")}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>User Id</Form.Label>
                  <Form.Control type="text" placeholder="1 2 3" {...register("user_id")}/>
                </Form.Group>
                <div className="d-grid gap-2 mt-9">
                  <div className="btn-group" role="group">
                    <Button className="purple-bg custom-rounded p-2 me-2 font-14 text-center" type="submit">
                      Kirim
                    </Button>
                  </div>
                </div>
              </Form>
              </Row>
            </Card.Body>
          </Modal.Body>
        </Modal>
      </Card>
    </Col>

    </Row>
  );
};

export default Product;
