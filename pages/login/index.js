import { Col, Row, Form } from "react-bootstrap";
import Link from "next/link";
import Router from "next/router";
import { LoginImage } from "../../components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    const { email, password } = data;
    const res = await axios
      .post("https://api-secondhand-fsw.herokuapp.com/login", {
        email,
        password,
      })
      .then((val) => {
        toast.success("Login Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.localStorage.setItem("token", val.data.data.token);
        window.localStorage.setItem("isLogin", true);
        window.localStorage.setItem("userId", val.data.data.id);
        Router.push("/");
      })
      .catch((err) => {
        toast.error("Invalid Email or Password", {
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
    <Row>
      <Col md={6}>
        <Col className="logo-invisible">
          <LoginImage className="logo-invisible" />
        </Col>
      </Col>
      <Col md={5} className="my-auto ">
        <Col className="mx-auto w-75 form-in-mobile">
          <h1 className="fw-bold">Masuk</h1>
          <ToastContainer />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control name="email" type="email" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2" {...register("email", { required: "email is required" })} />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Masukkan password" className="custom-rounded p-2" {...register("password", { required: "password is required" })} />
            </Form.Group>
            <Col className="d-grid gap-2 mt-4">
              <button className="btn text-white purple-bg custom-rounded p-2" type="submit">
                Masuk
              </button>
            </Col>
          </Form>
          <Col className="text-center mt-4">
            <p className="d-inline">Belum punya akun? </p>
            <Link href="/register">
              <a className="purple-text fw-bold text-decoration-none">Daftar di sini</a>
            </Link>
          </Col>
        </Col>
      </Col>
    </Row>
  );
};

export default Login;
