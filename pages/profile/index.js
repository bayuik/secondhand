import { Col, Row, Form, Button } from "react-bootstrap";
import { NavbarStandard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Profile = () => {
  const [image, setImage] = useState("faPlus");
  const [saveImage, setSaveImage] = useState(null);

  function handleUploadChange(e) {
    console.log(e.target.files[0]);
    let Uploaded = e.target.files[0];
    setImage(URL.createObjectURL(Uploaded));
    setSaveImage(Uploaded);
  }
  return (
    <Row>
      <NavbarStandard title='Lengkapi Info Akun' />
      <Col md={6} className="my-auto mx-auto">
        <div className="spacing">
          <div className="mx-auto my-auto CamIcon">
            <label htmlFor="file-upload">
              <FontAwesomeIcon icon={faCamera} id="btnIcon" className="camera-icon" />
            </label>
            <input id="file-upload" onChange={handleUploadChange} type="file" className="custom-rounded p-2 image-file" />
          </div>
          <div className="mx-auto w-75">
            <Form>
              <Form.Group controlId="name" className="mt-3">
                <Form.Label className="fw-bold">Nama </Form.Label>
                <Form.Control type="text" placeholder="Nama" className="custom-rounded p-2" />
              </Form.Group>
              <Form.Group controlId="kota" className="mt-3">
                <Form.Label className="fw-bold">Kota</Form.Label>
                <Form.Control type="text" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2" />
              </Form.Group>
              <Form.Group controlId="alamat" className="mt-3">
                <Form.Label className="fw-bold">Alamat</Form.Label>
                <textarea className="form-control custom-rounded p-2" placeholder="Contoh: Jalan Ikan Hiu 33"></textarea>
              </Form.Group>
              <Form.Group controlId="hp" className="mt-3">
                <Form.Label className="fw-bold">No Handphone</Form.Label>
                <Form.Control type="text" placeholder="contoh: +628123456789" className="custom-rounded p-2" />
              </Form.Group>
              <div className="d-grid gap-2 mt-4">
                <button className="btn text-white purple-bg custom-rounded p-2 ms-2" type="button">
                  Simpan
                </button>
              </div>
            </Form>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Profile;
