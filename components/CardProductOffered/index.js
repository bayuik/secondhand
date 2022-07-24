import { Col, Row, Image, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Moment from "moment";
import { ToastContainer, toast } from "react-toastify";
import { Modal } from "../../components";

const CardProductOffered = ({ id, harga_tawar, products_id, updatedAt, user_id }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);

  const getProducts = async () => {
    try {
      let response = await axios.get(`https://api-secondhand-fsw.herokuapp.com/product`);
      setProducts(response.data.data.Products);
    } catch (err) {
      console.log(err);
    }
  };

  const getProfile = async () => {
    try {
      let response = await axios.get(`https://api-secondhand-fsw.herokuapp.com/profile/${user_id}`);
      setUser(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const confirm = async (status, id, harga_tawar, product_name, price, product_photo) => {
    const { name, city, phone } = user;
    let res = await axios
      .put(`https://api-secondhand-fsw.herokuapp.com/confirm/${id}`, {
        status,
      })
      .then(() => {
        toast(<Modal harga_tawar={harga_tawar} product_name={product_name} price={price} product_photo={product_photo} name={name} city={city} phone={phone} />, {
          position: "top-center",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        toast.success(`Penawaran Gagal ${status}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  useEffect(() => {
    getProducts();
    getProfile();
  }, []);
  return (
    <>
      {products
        .filter(({ id }) => id === products_id)
        .map(({ product_name, product_photo, price }) => {
          return (
            <Card className="card-product mx-auto card-offered" key={id}>
              <Card.Body>
                <Row>
                  <ToastContainer />
                  <Col className="d-inline-flex">
                    <Col md={2}>
                      <Image src={`https://api-secondhand-fsw.herokuapp.com/download/${product_photo}`} alt={product_name} className="seller_img rounded-3 me-2"></Image>
                    </Col>
                    <Col>
                      <Row>
                        <Col md={8}>
                          <Card.Subtitle className="mb-2 text-muted font-control ">Penawaran Produk</Card.Subtitle>
                        </Col>
                        <Col md={3}>
                          <Card.Subtitle className="mb-2 text-muted font-control text-end">{Moment(updatedAt).format("D MMM, h:mm")}</Card.Subtitle>
                        </Col>
                      </Row>
                      <Col className="font-14">{product_name}</Col>
                      <Col className="font-14"> Rp. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Col>
                      <Col className="font-14"> Ditawar Rp. {harga_tawar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Col>
                      <Col className="mt-3 btn-product-offered d-flex">
                        <Col className="ms-auto">
                          <Button style={{ width: "150px" }} className="purple-outline custom-rounded p-2 me-2" type="button" onClick={() => confirm("Ditolak", id, harga_tawar, product_name, price, product_photo)}>
                            Tolak
                          </Button>
                          <Button style={{ width: "150px" }} className="text-white purple-bg custom-rounded p-2 " type="button" onClick={() => confirm("Diterima", id, harga_tawar, product_name, price, product_photo)}>
                            Terima
                          </Button>
                        </Col>
                      </Col>
                    </Col>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          );
        })}
    </>
  );
};

export default CardProductOffered;
