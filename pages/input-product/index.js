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
const InputProduct = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    const { product_photo, product_name, price, category, user_id, description} = data;
    const res = await axios
      .post("http://localhost:8000/product", {
        product_photo, product_name, price, category, user_id, description
      })
      .then((val) => {
        toast.success("Input Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.href = "/home";
      })
      .catch((err) => {
        toast.error("Input Failed", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };
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
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="product_name" className="mt-3">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control name="product_name" type="email" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2" {...register("product_name")}/>
            </Form.Group>
            <Form.Group controlId="price" className="mt-3">
              <Form.Label>Harga Barang</Form.Label>
              <Form.Control name="price" type="text" placeholder="Masukkan password" className="custom-rounded p-2" {...register("price")}/>
            </Form.Group>
            <Form.Group controlId="category" className="mt-3">
              <Form.Label>Kategori Barang</Form.Label>
              <Form.Control name="category" type="text" placeholder="Masukkan password" className="custom-rounded p-2" {...register("category")}/>
            </Form.Group>
            <Form.Group controlId="user_id" className="mt-3">
              <Form.Label>User ID</Form.Label>
              <Form.Control name="user_id" type="text" placeholder="Masukkan password" className="custom-rounded p-2" {...register("user_id")}/>
            </Form.Group>
            <Form.Group controlId="description" className="mt-3">
              <Form.Label>Deskripsi Product</Form.Label>
              <Form.Control name="description" type="text" placeholder="Masukkan password" className="custom-rounded p-2" {...register("description")}/>
            </Form.Group>
            <Form.Group controlId="product_photo" className="mt-3">
              <Form.Label>Foto Produk</Form.Label>
              <Form.Control name="product_photo" type="file" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2" {...register("product_photo")}/>
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <Link href="">
                <button className="btn text-white purple-bg custom-rounded p-2" type="submit">
                  Masuk
                </button>
              </Link>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};

export default InputProduct;
