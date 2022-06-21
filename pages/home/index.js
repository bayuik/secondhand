import { Col, Row, Image, Form, Button, Nav } from "react-bootstrap";
import Head from "next/head";
import Container from 'react-bootstrap/Container';

const Home = () => {
    return <div>
    <Row>
        <Nav className="navbar navbar-expand-lg navbar-light  nvg">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <Form>
                <Form.Group className="form-inline my-2 my-lg-0" >
                <Form.Control  type="search" placeholder="Cari disini ..." aria-label="Search" className="form-control mr-sm-6 bg-"/>
                  <a href="#" className="search1">
                    </a>
                  <div className="search">
                      <a href=""> 
                      <button className="btn  my-2 my-sm-0" type="submit"> 
                      <div>
                      <Image src="/fi_search.png" alt="image1" className="product_img rounded-3"></Image>
                    </div>
                      </button></a>
                  </div>
                </Form.Group>
                </Form>
              </ul>
            
            </div>
          </Nav>
      </Row>
    </div>
  };


export default Home;