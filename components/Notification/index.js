import { Modal, Image, Col, Row } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";

const Notification = () => {
  const [notifProducts, setNotifProducts] = useState([]);
  const [transaction, setTransaction] = useState([]);
  const [products, setProducts] = useState([]);
  const [userId, setUserId] = useState(0);

  const getNotifProduct = async () => {
    try {
      let response = await axios.get("https://api-secondhand-fsw.herokuapp.com/notifProduct");
      setNotifProducts(response.data.data.NotificationsProducts);
    } catch (error) {
      console.log(error);
    }
  };

  const getTransaction = async () => {
    try {
      let response = await axios.get(`https://api-secondhand-fsw.herokuapp.com/transaction/${userId}`);
      setTransaction(response.data.data.Transactions);
      console.log(response.data.data.Transactions);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    try {
      let response = await axios.get(`https://api-secondhand-fsw.herokuapp.com/product`);
      setProducts(response.data.data.Products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    getNotifProduct();
    getTransaction();
    getProducts();
  }, []);

  return (
    <>
      {transaction
        .filter(({ product_owner }) => product_owner == userId)
        .map(({ id, harga_tawar, products_id }) => {
          return (
            <Modal.Body key={id}>
              {products
                .filter(({ id }) => id === products_id)
                .map(({ product_name, product_photo, price }) => {
                  return (
                    <Row key={product_name} style={{ maxHeight: "100px", borderBottom: "1px solid grey" }}>
                      <Col md={4}>
                        <Image style={{ height: "50px" }} src={`https://api-secondhand-fsw.herokuapp.com/download/${product_photo}`} alt={product_name} />
                      </Col>
                      <Col>
                        <p className="m-0">Penawaran produk</p>
                        <p className="m-0 fw-bold">{product_name}</p>
                        <p className="m-0 fw-bold">Rp. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                        <p className="m-0 fw-bold">Ditawar Rp. {harga_tawar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                      </Col>
                    </Row>
                  );
                })}
            </Modal.Body>
          );
        })}
    </>
  );
};

export default Notification;
