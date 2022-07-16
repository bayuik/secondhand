import { Col, Row, Image, Card, Container, Button } from "react-bootstrap";
import { NavbarSearch } from "../../components";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";

export const getStaticPaths = async () => {
  let response = await axios.get("https://api-secondhand-fsw.herokuapp.com/product/");
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
  const { product_name, product_photo, category, price, description } = products;
  const { name, photo, city } = users;
  return (
    <Row>
      <NavbarSearch />
      <Container className="spacing mx-auto">
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={6}>
              <Carousel className="product-img">
                <Col>
                  <Image src={`https://api-secondhand-fsw.herokuapp.com/download/${product_photo}`} alt={product_name} className="product_img rounded-3"></Image>
                </Col>
                <Col>
                  <Image src={`https://api-secondhand-fsw.herokuapp.com/download/${product_photo}`} alt={product_name} className="product_img rounded-3"></Image>
                </Col>
                <Col>
                  <Image src={`https://api-secondhand-fsw.herokuapp.com/download/${product_photo}`} alt={product_name} className="product_img rounded-3"></Image>
                </Col>
              </Carousel>
            </Col>
            <Col sm={4}>
              <Card className="card-product">
                <Card.Body>
                  <Card.Title>{product_name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                  <Card.Text>Rp. {price.toLocaleString()}</Card.Text>
                  <Col className="d-grid gap-2 mt-4">
                    <Button className="text-white purple-bg custom-rounded p-2" type="button">
                      Saya tertarik dan ingin nego
                    </Button>
                  </Col>
                </Card.Body>
              </Card>
              <Card className="mt-3 card-size card-product">
                <Card.Body>
                  <Row>
                    <Col md={3}>
                      <Image src={`https://api-secondhand-fsw.herokuapp.com/download/${photo}`} alt={name.slice(0, 14)} className="seller_img rounded-3"></Image>
                    </Col>
                    <Col>
                      <Card.Title>{name}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted kota">{city}</Card.Subtitle>
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
                  <Card.Text className="deskripsi">{description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={4}></Col>
          </Row>
        </Container>
      </Container>
    </Row>
  );
};

export default Product;
