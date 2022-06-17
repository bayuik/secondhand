import { Col, Row, Image, Form, Button } from "react-bootstrap";
import Link from "next/link";
import { LoginImage } from "../../components";
import React from "react";
import { LoginUser } from '../../lib/auth';

<<<<<<< HEAD
class Login extends React.Component {
    state ={
        email: '',
        password: ''
    };

    handleChange = event =>{
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit = event => {
      const { email,password } = this.state;

      event.preventDefault();
      LoginUser(email,password);
    };
     
    render() {
      return(
        <Row>
        <LoginImage />
        <Col md={6} className="my-auto">
          <div className="mx-auto w-75">
            <h1 className="fw-bold">Masuk</h1>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="email" className="mt-3">
                <Form.Label>Email</Form.Label>
                <Form.Control onChange={this.handleChange} name="email" type="email" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2" />
              </Form.Group>
              <Form.Group controlId="password" className="mt-3">
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={this.handleChange} name="password" type="password" placeholder="Masukkan password" className="custom-rounded p-2" />
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
=======
const Login = () => {
  return (
    <Row>
      <LoginImage />
      <Col md={6} className="my-auto">
        <div className="mx-auto w-75">
          <h1 className="fw-bold">Masuk</h1>
          <Form>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2" />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password" className="custom-rounded p-2" />
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <button className="btn text-white purple-bg custom-rounded p-2" type="button">
                Masuk
              </button>
>>>>>>> 4fb06ca2ed5ff69c040bc9b31a62731639e0714a
            </div>
          </div>
        </Col>
      </Row> 
      )
    }
    
}
export default Login;