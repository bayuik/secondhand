import { useState, useEffect } from "react";
import axios from "axios";
import { Col, Row, Card} from "react-bootstrap";
import { Banner, NavbarSearch } from "../../components";
import Header from "../../components/Header";

const Home = () => {
  const [product, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let response = await axios.get("http://localhost:8000/product");
      setProducts(response.data.data.Products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Row>
      <NavbarSearch />
      <Banner />
      <Header/>
      <Row className="justify-content-md-left">
        {product &&
          product.map(({ id, product_photo, product_name, category, price }) => {
            return (
              <Col key={id} md={1} style={{ margin: "50px" }}>
                <Card style={{ width: "200px" }}>
                  <Card.Link href={`/product-info/${id}`} className='text-decoration-none text-dark'>
                    <Card.Img variant="top" src={`https://api-secondhand-fsw.herokuapp.com/download/${product_photo}`} style={{ height: "150px" }} />
                    <Card.Body>
                      <Card.Title>{product_name}</Card.Title>
                      <Card.Text style={{ fontSize: "13px", color: "#8A8A8A" }}>{category}</Card.Text>
                      <Card.Text>Rp. {price.toLocaleString()}</Card.Text>
                    </Card.Body>
                  </Card.Link>
                </Card>
              </Col>
            );
          })}
      </Row>
    </Row>
  );
}

export default Home;
