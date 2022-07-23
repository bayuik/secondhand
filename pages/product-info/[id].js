import { Col, Row, Image, Form, Card, Container, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import Router, { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";

export const getStaticPaths = async () => {
  let response = await axios.get("https://api-secondhand-fsw.herokuapp.com/product");
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
  const data = await response.data.data.Products;

  let responses = await axios.get("https://api-secondhand-fsw.herokuapp.com/profile/" + data.user_id);
  const datas = await responses.data.data;
  return {
    props: { products: data, users: datas },
  };
};

const Product = ({ products, users }) => {
  const [dataDiterima, setDataDiterima] = useState([]);
  const [show, setShow] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    const { harga_tawar } = data;
    const user_id = localStorage.getItem("userId");
    const products_id = router.query.id;
    const ress = await axios
      .post("https://api-secondhand-fsw.herokuapp.com/notifTransaction", {
        harga_tawar,
        products_id,
        user_id,
      })
      .then((val) => {
        toast.success("Penawaran Berhasil Dikirim", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        Router.push("/home");
      })
      .catch((err) => {
        toast.error("Penawaran Gagal", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });

    const res = await axios
      .post("https://api-secondhand-fsw.herokuapp.com/transaction", {
        harga_tawar,
        products_id,
        user_id,
      })
      .then((val) => {
        Router.push("/home");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <Row>
      <Header />
      <Row className="spacing mx-auto">
        <Container>
          <ToastContainer />
          <Row className="justify-content-md-center">
            <Col sm={6}>
              <Carousel className="product-img">
                <Col>
                  <Image src={`https://api-secondhand-fsw.herokuapp.com/download/${products.product_photo}`} alt={products.product_name} className="product_img rounded-3"></Image>
                </Col>
                <Col>
                  <Image src={`https://api-secondhand-fsw.herokuapp.com/download/${products.product_photo}`} alt={products.product_name} className="product_img rounded-3"></Image>
                </Col>
                <Col>
                  <Image src={`https://api-secondhand-fsw.herokuapp.com/download/${products.product_photo}`} alt={products.product_name} className="product_img rounded-3"></Image>
                </Col>
              </Carousel>
            </Col>
            <Col sm={4}>
              <Card className="card-product">
                <Card.Body>
                  <Card.Title>{products.product_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{products.category}</Card.Subtitle>
                  <Card.Text>Rp. {products.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Card.Text>
                  <Col className="d-grid gap-2 mt-4">
                    <Button className="text-white purple-bg custom-rounded p-2" type="button" onClick={() => setShow(true)}>
                      Saya tertarik dan ingin nego
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
              <Card className="mt-3 card-size card-product">
                <Card.Body>
                  <Row>
                    <Col md={3}>
                      <Image src={`https://api-secondhand-fsw.herokuapp.com/download/${users.photo}`} alt="penjual1" className="seller_img rounded-3"></Image>
                    </Col>
                    <Col>
                      <Card.Title>{users.name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted kota">{users.city}</Card.Subtitle>
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
                  <Card.Text className="deskripsi">{products.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
      </Row>
      <Col md={4} className="me-3">
        <Card style={{ width: "18rem" }} className="modal-card">
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card.Body>
                <p className="font-14 fw-bold">Masukkan Harga Tawarmu</p>
                <p className="mb-2 pb-2 text-muted font-14">Harga tawaranmu akan diketahui penjual,jika penjual cocok kamu akan segera dihubungi penjual</p>
                <Card className="modal-card">
                  <Card.Body>
                    <Row className="mt-0">
                      <Col md={3}>
                        <Image src={`https://api-secondhand-fsw.herokuapp.com/download/${products.product_photo}`} alt="...." className="seller_img rounded-3"></Image>
                      </Col>
                      <Col>
                        <p className="font-14 pt-3 fw-bold">{products.product_name}</p>
                        <p className="font-14"> Rp.{products.price.toLocaleString()}</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <Row className="align-center mt-3">
                  <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                      <Form.Label>Harga Tawar</Form.Label>
                      <Form.Control type="text" placeholder="Rp 0,00" {...register("harga_tawar")} />
                    </Form.Group>
                    <Col className="d-grid gap-2 mt-9">
                      <Col className="btn-group" role="group">
                        <Button className="purple-bg custom-rounded p-2 me-2 font-14 text-center" type="submit">
                          Kirim
                        </Button>
                      </Col>
                    </Col>
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
