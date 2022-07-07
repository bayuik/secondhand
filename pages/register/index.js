import { Col, Row, Form } from "react-bootstrap";
import Link from "next/link";
import { LoginImage } from "../../components";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    const { name, email, password } = data;
    const res = await axios
      .post("https://api-secondhand-fsw.herokuapp.com/register", {
        name,
        email,
        password,
      })
      .then((val) => {
        toast.success("Register Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        window.location.href = "/login";
      })
      .catch((err) => {
        toast.error("Register Failed", {
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
      <div className="logo-invisible">
        <LoginImage className="logo-invisible"/>
      </div>
      </Col>
      <Col md={6} className="my-auto">
        <div className="mx-auto w-75 form-in-mobile">
          <h1 className="fw-bold">Daftar</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="name" className="mt-3">
              <Form.Label>Nama</Form.Label>
              <Form.Control type="text" placeholder="Nama Lengkap" className="custom-rounded p-2" {...register("name")} />
            </Form.Group>
            <Form.Group controlId="email" className="mt-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2" {...register("email")} />
            </Form.Group>
            <Form.Group controlId="password" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Masukkan password" className="custom-rounded p-2" {...register("password")} />
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <button className="btn text-white purple-bg custom-rounded p-2" type="submit">
                Daftar
              </button>
            </div>
          </Form>
          <div className="text-center mt-4">
            <p className="d-inline">Sudah punya akun? </p>
            <Link href="/login">
              <a className="purple-text fw-bold text-decoration-none">Masuk di sini</a>
            </Link>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Register;
