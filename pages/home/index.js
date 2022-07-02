import { useState, useEffect } from "react";
import axios from 'axios';
import { Col, Row, Image, Form, Navbar, Nav, Card, Container, Button, ListGroup } from "react-bootstrap";
import { LogoImage } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch, faUser, faList, faBell,faArrowRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Home() {

    const [product, setProducts] = useState([])

    const getProducts = async () => {
        try{
            let response = await axios.get("https://api-secondhand-fsw.herokuapp.com/product")
            console.log(response.data.data.products)
            setProducts(response.data.data.products)
        }catch(e) {
            console.log(e.message)
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return(
        <Row>
        <div className="invisible-content">
        <Navbar expand="lg" variant="light" bg="body" fixed="top" className="shadow p-2 mb-5 rounded nav-bar">
            <Container>
            <Navbar.Brand href="#"><LogoImage /></Navbar.Brand>
            <Nav className="me-auto">
                <Form className="d-flex">
                <Form.Control type="search" placeholder="Cari di sini..." className="search-box me-auto" aria-label="Search"/>
                <FontAwesomeIcon icon={faSearch} id="btnIcon" className="" style={{marginTop:"13px", marginLeft:"10px"}}/>
                </Form>
            </Nav>
            
            <Button style={{backgroundColor:"#7126B5", borderRadius:'10px'}}>
                <FontAwesomeIcon icon={faArrowRightToBracket} id="btnIcon" className="" />
                &nbsp;
                Masuk
            </Button>
            </Container>
        </Navbar>
        </div>
        <br/>
        <br/>
        <br/>
        <div>
            <Carousel className="product-img">
                <div>
                  <Image src="/banner.png" alt="image1" className="product_img rounded-3" style={{width:"700px", height:"200px"}}></Image>
                </div>
                <div>
                  <Image src="/banner.png" alt="image2" className="product_img rounded-3" style={{width:"700px", height:"200px"}}></Image>
                </div>
                <div>
                  <Image src="/banner.png" alt="image3" className="product_img rounded-3" style={{width:"700px", height:"200px"}}></Image>
                </div>
            </Carousel>
        </div>
        <Row className="justify-content-md-left">
        {
                product.map(products => {
                    return (
                        <Col md={1} style={{margin:"50px"}}>
                        <Card style={{ width: '200px' }}>
                        <Card.Link href={'/ProductInfo/'+products.id}>
                        <Card.Img variant="top" src={"https://api-secondhand-fsw.herokuapp.com/uploads/"+products.product_photo} style={{height:"150px"}}/>
                        <Card.Body>
                            <Card.Title>{products.product_name}</Card.Title>
                            <Card.Text style={{fontSize:"13px", color:"#8A8A8A"}}>
                            {products.category}
                            </Card.Text>
                            <Card.Text>
                            Rp.{products.price.toLocaleString()}
                            </Card.Text>
                        </Card.Body>
                        </Card.Link>
                        </Card>
                        </Col>
                    )
                })
            }
        </Row>
            
        
        </Row>
    )
    
}

export default Home