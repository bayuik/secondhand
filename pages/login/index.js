import { Col, Row, Image, Form, Button } from "react-bootstrap";
import Link from "next/link";
import { LoginImage } from "../../components";

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
                Button
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
