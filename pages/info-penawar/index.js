import { Col, Row, Image, Card, Container } from "react-bootstrap";
import { NavbarStandard, CardProductOffered, Modal } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";

const InfoPenawar = () => {
  const [transaction, setTransaction] = useState([]);
  const [userId, setUserId] = useState(0);

  const getTransaction = async () => {
    try {
      let response = await axios.get(`https://api-secondhand-fsw.herokuapp.com/transaction/${userId}`);
      setTransaction(response.data.data.Transactions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setUserId(localStorage.getItem("userId"));
    getTransaction();
  }, []);

  return (
    <Row>
      <div className="logo-invisible">
        <NavbarStandard title="Info Penawar" />
      </div>
      <Col className="mx-auto spacing">
        <Col className="center ">
          <p className="title-visible fw-bold"> Info-Penawar </p>
        </Col>
        <Container>
          <Row className="justify-content-md-center mt-3">
            <Col md={{ span: 6 }}>
              <Col className="d-flex">
                <Col className="me-auto">
                  <p className="product-offered-title fw-bold">Daftar produkmu yang di tawar</p>
                </Col>
              </Col>
              {
                transaction.filter(({product_owner}) => product_owner == userId).map(({id, harga_tawar, products_id, updatedAt, user_id}) => {
                  return (
                    <CardProductOffered key={id} id={id} harga_tawar={harga_tawar} products_id={products_id} updatedAt={updatedAt} user_id={user_id} />
                  )
                })
              }
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default InfoPenawar;
