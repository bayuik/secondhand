import { Col, Row, Form, Button } from "react-bootstrap";
import Link from "next/link";
import { LoginImage } from "../../components";
import React from "react";
import { LoginUser } from "../../lib/auth";
import axios from "axios";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    const res = await axios.post("https://api-secondhand-fsw.herokuapp.com/login", {
      email,
      password,
    });
    if (res.data.status == "success") {
      alert("Successfully Logged In");
    } else {
      alert(res.data.message);
    }
  };
  return (
    <Row>
      <LoginImage />
      <Col md={6} className="my-auto">
        <div className="mx-auto w-75">
          <h1 className="fw-bold">Masuk</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2" {...register("email")} />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Masukkan password" className="custom-rounded p-2" {...register("password")} />
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <button className="btn text-white purple-bg custom-rounded p-2" type="submit">
                Masuk
              </button>
            </div>
          </Form>
          <div className="text-center mt-4">
            <p className="d-inline">Belum punya akun? </p>
            <Link href="/register">
              <a className="purple-text fw-bold text-decoration-none">Daftar di sini</a>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
