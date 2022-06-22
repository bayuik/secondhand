import { Col, Row, Image, Form, Button, Nav, Navbar, Container } from "react-bootstrap";
import Link from "next/link";
import { LogoImage } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function InfoProduct() {

  const [image, setImage] = useState({faPlus});
  const [saveImage, setSaveImage] = useState(null);

  function handleUploadChange(e){
    console.log(e.target.files[0]);
    let Uploaded = e.target.files[0];
    setImage(URL.createObjectURL(Uploaded));
    setSaveImage(Uploaded);
  }


  return (
    <Row>
      <Navbar expand="lg" variant="light" bg="body" fixed="top" className="shadow p-2 mb-5 rounded ">
        <Container>
          <Navbar.Brand href="#" className="invisible-content"><LogoImage /></Navbar.Brand>
          <div className="mx-auto ">
                <h5 className="fw-bold title-visible">Lengkapi Detail Product</h5>
          </div>
        </Container>
      </Navbar>
      <Col md={6} className="my-auto mx-auto">
        <div className="mx-auto w-75 spacing">
          <Form>
            <Form.Group controlId="produk" className="mt-3">
              <Form.Label className="fw-bold">Nama Produk</Form.Label>
              <Form.Control type="text" placeholder="Nama Produk" className="custom-rounded p-2" />
            </Form.Group>
            <Form.Group controlId="harga" className="mt-3">
              <Form.Label className="fw-bold">Harga Produk</Form.Label>
              <Form.Control type="text" placeholder="Rp 0,00" className="custom-rounded p-2" />
            </Form.Group>
            <Form.Group controlId="kategori" className="mt-3">
              <Form.Label className="fw-bold">Kategori</Form.Label>
              <Form.Control type="text" placeholder="Pilih Ketegori" className="custom-rounded p-2" />
            </Form.Group>
            <Form.Group controlId="deskripsi" className="mt-3">
              <Form.Label className="fw-bold">Deskripsi</Form.Label>
              <textarea className="form-control custom-rounded p-2" placeholder="Contoh: Jalan Ikan Hiu 33"></textarea>
            </Form.Group>
            <Form.Group controlId="image-product" className="mt-3">
              <Form.Label className="fw-bold">Foto Produk</Form.Label>
              <br></br>
              <label htmlFor="file-upload">
              <FontAwesomeIcon icon={faPlus} id="btnIcon" className="plus-icon" />
              </label>
              <input id="file-upload" onChange={handleUploadChange} type="file" className="custom-rounded p-2 image-file"/>
            </Form.Group>
            <div className="d-grid gap-2 mt-4">
              <div className="btn-group" role="group">
                <button className="btn purple-outline custom-rounded p-2 me-2" type="button">
                  Preview
                </button>
                <button className="btn text-white purple-bg custom-rounded p-2 ms-2" type="button">
                  Terbitakan
                </button>
              </div>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  );
};


export default InfoProduct;
