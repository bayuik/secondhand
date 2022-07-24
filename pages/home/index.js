import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Banner, NavbarSearch, ButtonSell } from "../../components";
import Router from "next/router";

const Home = () => {
  const [product, setProducts] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const checkLogin = () => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const getProducts = async () => {
    try {
      let response = await axios.get("https://api-secondhand-fsw.herokuapp.com/product");
      setProducts(response.data.data.Products);
    } catch (error) {
      console.log(error);
    }
  };

  const checkProfile = async () => {
    const userId = localStorage.getItem("userId");
    try {
      let res = await axios.get(`https://api-secondhand-fsw.herokuapp.com/profile/${userId}`);
      const { city, address, phone } = res.data.data;
      if (city == null && address == null && phone == null) {
        Router.push("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    checkProfile();
    checkLogin();
  }, []);

  return (
    <Row>
      <NavbarSearch />
      <Banner />
      <Row className="justify-content-md-left">
        {product &&
          product.map(({ id, product_photo, product_name, category, price }) => {
            return (
              <Col key={id} md={1} style={{ margin: "50px" }}>
                <Card style={{ width: "200px" }}>
                  <Card.Link href={`/product-info/${id}`} className="text-decoration-none text-dark">
                    <Card.Img variant="top" src={`https://api-secondhand-fsw.herokuapp.com/download/${product_photo}`} style={{ height: "150px" }} />
                    <Card.Body>
                      <Card.Title>{product_name}</Card.Title>
                      <Card.Text style={{ fontSize: "13px", color: "#8A8A8A" }}>{category}</Card.Text>
                      <Card.Text>Rp. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Card.Text>
                    </Card.Body>
                  </Card.Link>
                </Card>
              </Col>
            );
          })}
        ;{isLogin && <ButtonSell />}
      </Row>
    </Row>
  );
};

export default Home;
