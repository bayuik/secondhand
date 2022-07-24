import { Col, Row, Image, Card, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import Moment from "moment";
import { ToastContainer, toast } from "react-toastify";

const CardProductOffered = ({ id, harga_tawar, products_id, updatedAt }) => {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    try {
      let response = await axios.get(`http://localhost:8000/product`);
      setProducts(response.data.data.Products);
    } catch (err) {
      console.log(err);
    }
  };

  const confirm = async (status, id) => {
    let res = await axios
      .put(`http://localhost:8000/confirm/${id}`, {
        status,
      })
      .then(() => {
        toast.success(`Penawaran Berhasil ${status}`, {
          position: "top-center",
          autoClose: 5000,
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
                      <Image src={`http://localhost:8000/download/${product_photo}`} alt={product_name} className="seller_img rounded-3 me-2"></Image>
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
                          <Button style={{ width: "150px" }} className="purple-outline custom-rounded p-2 me-2" type="button" onClick={() => confirm("Ditolak", id)}>
                            Tolak
                          </Button>
                          <Button style={{ width: "150px" }} className="text-white purple-bg custom-rounded p-2 " type="button" onClick={() => confirm("Diterima", id)}>
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
