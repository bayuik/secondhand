import { Col, Row, Image, Form, Button, Nav, Navbar, FormGroup } from "react-bootstrap";
import Link from "next/link";
import { LogoImage } from "../../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faSearch, faUser, faList, faBell,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function Product() {


  return (
    <Row>
      <Nav className="navbar navbar-expand-lg shadow p-2 mb-5 fixed-top bg-body">
        <div className="container-fluid">
          <div className="navbar-brand ">
            <Link href="/Home" ><LogoImage /></Link>
          </div>
          <ul className="list-inline search">
            <li className="list-inline-item">
            <Form.Control type="search" placeholder="Cari di sini..." className="form-control search-box"/>
            </li>
            <li className="list-inline-item"><FontAwesomeIcon icon={faSearch} id="btnIcon" className="" /></li>
          </ul>
          <div className="navbar-nav ms-auto ">
            <FontAwesomeIcon icon={faList} id="btnIcon" className="icons" />
            <FontAwesomeIcon icon={faBell} id="btnIcon" className="icons" />
            <FontAwesomeIcon icon={faUser} id="btnIcon" className="icons" />
          </div>      
        </div>
      </Nav>
      <Col md={9} className="my-auto mx-auto ">
        <div className="container spacing">
            <div className="row ">
              <div className="col-lg-8">
                <Carousel>
                    <div>
                      <Image src="/1.png" alt="image1" className="product_img rounded-3"></Image>
                    </div>
                    <div>
                      <Image src="/2.png" alt="image2" className="product_img rounded-3"></Image>
                    </div>
                    <div>
                      <Image src="/3.png" alt="image3" className="product_img rounded-3"></Image>
    
                    </div>
                    <div>
                      <Image src="/4.png" alt="image4" className="product_img rounded-3"></Image>
    
                    </div>
                    <div>
                      <Image src="/5.png" alt="image5" className="product_img rounded-3"></Image>
                    </div>
                </Carousel>

                <div class="card shadow mt-4">
                  <div class="card-body">
                    <h6 class="fw-bold card-title">Deskripsi</h6>
                    <p className="deskripsi">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="deskripsi">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ">
              <div class="card shadow">
                <div class="card-body">
                  <h5 class="card-title">Jam Tangan Casio</h5>
                  <p class="card-text">Aksesoris</p>
                  <p class="card-text">Rp. 250.000</p>
                  <div className="d-grid gap-2 mt-4">
                    <button className="btn text-white purple-bg custom-rounded p-2" type="button">
                      Terbitakan
                    </button>
                    <button className="btn purple-outline custom-rounded p-2" type="button">
                      Edit
                    </button>
                  </div>
                </div>
              </div>

              <div class="card shadow mt-4 card-size">
                <div class="card-body">
                  <div class="row">
                    <div class="col-3">
                      <Image src="/penjual1.png" alt="penjual1"className="seller_img rounded-3"></Image>
                    </div>
                    <div class="col">
                      <h6 class="fw-bold">Nama Penjual</h6>
                      <p class="kota">Kota</p>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
      </Col>
    </Row>
  );
};


export default Product;
