import { Col, Row, Form, Image } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavbarStandard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import Link from "next/link";
import { LoginImage } from "../../components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import{io} from 'socket.io-client';
const socket = io.connect("http://localhost:5000");
global.moment = require('moment-timezone')
const InputProduct = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState("");
    const [file, setFile] = useState("");
    const [password, setPassword] = useState("");
    const [time, setTime] = useState("");
    const [dataDiterima, setDataDiterima] = useState([]);
    const handlepost = async (e) => {
      const socket = io("http://localhost:5000");
      let response = await axios.get("http://localhost:8000/product/4")
      console.log(response.data.data.products)
      const data = await response.data.data.products;
      await socket.emit('sendData',{string:"Barang Sudah Masuk Yaitu :",email:data.id, file:data.product_name, password:data.price, time: moment().tz("Asia/Jakarta").format('hh:mm:ss A')})
    }
    useEffect(() =>{
        const socket = io("http://localhost:5000");
        socket.on("notifDiterima", function (data) {
          setDataDiterima((list) => [...list, data]);
        });
    },[socket])
    

  return (
    // <div>
    // Test
    // <br/>
    // <input type="text" onChange={(e)=>setEmail(e.target.value)} />
    // <input type="text" onChange={(e)=>setPassword(e.target.value)} />
    // <button onClick={handlepost}>Masukan</button>
    // </div>
    <Row>
      <Col md={6}>
      <div className="logo-invisible">
        <LoginImage className="logo-invisible"/>
      </div>
      </Col>
      <Col md={5} className="my-auto ">
        <div className="mx-auto w-75 form-in-mobile">
          <h1 className="fw-bold">Masuk</h1>
          <ToastContainer />
          <Form >
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2" onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Masukkan password" className="custom-rounded p-2" onChange={(e)=>setPassword(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>File</Form.Label>
              <Form.Control name="file" type="file" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2" onChange={(e)=>setFile(e.target.value)}/>
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <Link href="">
                <button className="btn text-white purple-bg custom-rounded p-2" type="submit"  onClick={handlepost}>
                  Masuk
                </button>
              </Link>
            </div>
          </Form>
          <br/>
          <FontAwesomeIcon icon={faBell} id="btnIcon" onClick={handleShow} />
          {dataDiterima.length}
          <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Notifikasi</Modal.Title>
          {dataDiterima.length}
          </Modal.Header>
          {dataDiterima.map((datas) => (
          <Modal.Body>

              {datas.string} <br/>
              Email :{datas.email} <br/>
              Password : {datas.password}<br/>
              Time : {datas.time} <br/>
              foto: {datas.file} 
                         
            
            </Modal.Body>
            ))}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
          </Modal>
        </div>
      </Col>
    </Row>
  );
};

export default InputProduct;
