import { Col, Row, Form } from "react-bootstrap";
import { NavbarStandard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Axios from "axios";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const InfoProduct = () =>{
  const url = "http://localhost:8000/product"
  const [data, setData] = useState({
    product_name:"",
    price: "",
    category:"",
    description:"",
    product_photo:"",
    user_id:"",
  })

  function submit(e){
    e.preventDefault();
    Axios.post(url, {
      product_name: data.product_name,
      price: data.price,
      category: data.category,
      description: data.description,
      product_photo: data.product_photo,
      user_id: data.user_id

    })
        .then(res => {
        console.log(res.data)
      })
  }

  function handle(e){
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }


  return (
    <Row>
      <NavbarStandard title="" />
      <Col md={6} className="my-auto mx-auto">
        <div className="mx-auto w-75 spacing">
          <Form onSubmit={(e)=> submit(e)}>
            <Form.Group className="mt-3">
              <Form.Label className="fw-bold">Nama Produk</Form.Label>
              <Form.Control type="text" id="product_name" placeholder="Nama Produk" className="custom-rounded p-2" onChange={(e)=>handle(e)} />
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="fw-bold">Harga Produk</Form.Label>
              <Form.Control type="text" id="price" placeholder="Rp 0,00" className="custom-rounded p-2" onChange={(e)=>handle(e)}/>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="fw-bold">Kategori</Form.Label>
              <Form.Control type="text" id="category" placeholder="Rp 0,00" className="custom-rounded p-2" onChange={(e)=>handle(e)}/>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="fw-bold">Deskripsi</Form.Label>
              <textarea className="form-control custom-rounded p-2" id="description" placeholder="Contoh: Jalan Ikan Hiu 33" onChange={(e)=>handle(e)}></textarea>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label>Foto Produk</Form.Label>
              <Form.Control id="product_photo" type="file" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2" onChange={(e)=>handle(e)}/>
            </Form.Group>
            <Form.Group className="mt-3">
              <Form.Label className="fw-bold">User ID</Form.Label>
              <textarea id="user_id" className="form-control custom-rounded p-2" placeholder="123" onChange={(e)=>handle(e)}></textarea>
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <div className="btn-group" role="group">
                <button className="btn purple-outline custom-rounded p-2 me-2" type="submit">
                  Preview
                </button>
                <button className="btn text-white purple-bg custom-rounded p-2 ms-2" type="submit">
                  Terbitkan
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
}

export default InfoProduct;
