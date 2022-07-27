import { Col, Row, Image, Card } from "react-bootstrap";
import { NavbarSearch } from "../../components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardProduct from "../../components/CardProduct";
import CardList from "../../components/CardList";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Product() {
  const [product, setProducts] = useState([]);
  const [user, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  
  const checkLogin = () => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  const getUsers = async () => {
    const userId = localStorage.getItem("userId");
    try {
      let response = await axios.get(`https://api-secondhand-fsw.herokuapp.com/profile/${userId}`);
      setUsers(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getProducts = async () => {
    const userId = localStorage.getItem("userId");
    try {
      let response = await axios.get(`https://api-secondhand-fsw.herokuapp.com/my-products/${userId}`);
      setProducts(response.data.data.Products);
    } catch (error) {
      console.log(error);
    }
  };
  //memanggil func getproducts
  useEffect(() => {
    getUsers();
    getProducts();
    checkLogin();
  }, []);


  return (
    <Row>
      <NavbarSearch />
      <div className="spacing mx-auto">
      <NavbarSearch />
      <div id="daftarjual" className="container content position-relative">
        <Row>
          <Col md={12} className="d-flex mb-3 ">
            <p className="mt-2 h2 fw-bold">Daftar Jual Saya</p>
          </Col>
          <div className="container mb-4 ">
            <div className="card-body p-0">
              <div className="profile-card border border-1 shadow bg-body rounded">
                <div className="profile-img d-inline">
                  <Image
                    src={`https://api-secondhand-fsw.herokuapp.com/download/${user.photo}`} 
                    width="50"
                    height="50"
                    className="rounded"
                    alt="..."
                  ></Image>
                </div>
                <div className="profile-name d-inline">
                  {user.name}
                  <br />
                  <font className="profile-kota ">{user.city}</font>
                </div>
                <div className="profile-button d-inline float-end mt-2">
                  <Link href="/profile">
                    <button type="button" className="btn btn-outline-dark">
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <div className="hidden-button">
          <Link href="/profile/">
            <button type="button" className="btn btn-primary">
              Produk
            </button>
          </Link>
          <Link href="/daftarjual/diminati">
            <button type="button" className="btn btn-primary">
              Diminati
            </button>
          </Link>
          <Link href="/daftarjual/terjual">
            <button type="button" className="btn btn-primary">
              Terjual
            </button>
          </Link>
        </div>
        <div className="card-position d-flex">
          <div className="card-list-seller">
            <CardList />
          </div>
          <div className="card-seller ">
            <div className="card-item me-4">
              <Link href="/add-product">
                <button type="button" className="button-card btn btn-outline-dark" style={{ width: "14rem" }}>
                  <p className="icon-plus m-0">
                    <FontAwesomeIcon icon={faPlus} id="btnIcon" className="me-2" />
                  </p>
                  Tambah Produk
                </button>
              </Link>
            </div>
            {/* {products.map((product, index) => (
              <div className="card-item">
                <Card />
              </div>
            ))} */}
          {product &&
          product.map(({ id, product_photo, product_name, category, price }) => {
          return(
          <Row>
            <Col key={id} md={2} className="me-4 mb-4">
              <Card style={{ width: "14rem" }}>
                <div>
                  <Card.Img variant="top" src={`https://api-secondhand-fsw.herokuapp.com/download/${product_photo}`} className="p-2" height="140px" />
                </div>
                <Card.Body>
                  <Card.Title>{product_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted font-control ">{category}</Card.Subtitle>
                  <Card.Text>{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          );
          })}
          </div>
        </div>
      </div>
      </div>
    </Row>
  );
};

export default Product;
