import { Col, Row, Form, Image } from "react-bootstrap";
import { NavbarStandard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ImageUploading from "react-images-uploading";
import Router from "next/router";
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import FormData from "form-data";

const Profile = () => {
  const [show, setShow] = useState(true);
  const [images, setImages] = useState([]);
  const [userId, setUserId] = useState(null);
  const maxNumber = 69;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const checkLogin = () => {
    if (window.localStorage.getItem("token") === null) {
      Router.push("/login");
    }
    setUserId(window.localStorage.getItem("userId"));
  };

  useEffect(() => {
    checkLogin();
  }, []);

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    try {
      const { name, city, address, phone, photo } = data;
      const formData = new FormData();
      formData.append("name", name);
      formData.append("city", city);
      formData.append("address", address);
      formData.append("phone", phone);
      formData.append("photo", images[0].file);
      const res = await axios.put(`https://api-secondhand-fsw.herokuapp.com/profile/${userId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      toast.success("Update Profile Success", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      Router.push("/");
    } catch (err) {
      toast.error(`Update Profile Failed`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <Row>
      <Col className="logo-invisible">
        <NavbarStandard title="Lengkapi Info Akun" />
      </Col>
      <ToastContainer />
      <Col md={6} className="my-auto mx-auto">
        <Col className="spacing">
          <Col className="center ">
            <p className="title-visible fw-bold"> Lengkapi Info Akun </p>
          </Col>
          <Col className="mx-auto w-75">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Col className="mx-auto my-auto CamIcon">
                <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
                  {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                    // write your building UI
                    <Col className="upload__image-wrapper">
                      {show && (
                        <label htmlFor="file-upload" onClick={() => setShow(!show)}>
                          <FontAwesomeIcon icon={faCamera} className="camera-icon" style={isDragging ? { color: "red" } : undefined} onClick={onImageUpload} {...dragProps} />
                        </label>
                      )}
                      {imageList.map((image, index) => (
                        <Col key={index} className="image-item">
                          <Image src={image["data_url"]} alt="image profile" width={130} height={130} onClick={() => onImageUpdate(index)} />
                          {/* <Form.Control id="file-upload" type="file" {...register("photo")} /> */}
                          <Form.Control id="file-upload" type="file" className="custom-rounded p-2 image-file" {...register("photo")} />
                          <Col className="image-item__btn-wrapper" onClick={() => setShow(true)}>
                            <button onClick={() => onImageRemove(index)} className="btn text-white purple-bg custom-rounded py-2 px-4 mt-3 font-control">
                              Remove
                            </button>
                          </Col>
                        </Col>
                      ))}
                    </Col>
                  )}
                </ImageUploading>
              </Col>
              <Form.Group controlId="name" className="form-spacing">
                <Form.Label className="fw-bold font-control">Nama </Form.Label>
                <Form.Control type="text" placeholder="Nama" className="custom-rounded p-2 font-control form-input" {...register("name", { required: "name is required" })} />
              </Form.Group>
              <Form.Group controlId="kota" className="form-spacing">
                <Form.Label className="fw-bold font-control">Kota</Form.Label>
                <Form.Control type="text" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2 font-control form-input" {...register("city", { required: "city is required" })} />
              </Form.Group>
              <Form.Group controlId="alamat" className="form-spacing">
                <Form.Label className="fw-bold font-control">Alamat</Form.Label>
                <textarea className="form-control custom-rounded p-2 font-control " placeholder="Contoh: Jalan Ikan Hiu 33" {...register("address", { required: "address is required" })}></textarea>
              </Form.Group>
              <Form.Group controlId="hp" className="form-spacing">
                <Form.Label className="fw-bold font-control">No Handphone</Form.Label>
                <Form.Control type="text" placeholder="contoh: +628123456789" className="custom-rounded p-2 font-control form-input" {...register("phone")} />
              </Form.Group>
              <Col className="d-grid gap-2 mt-4 form-spacing">
                <button className="btn text-white purple-bg custom-rounded p-2 ms-2 font-control" type="submit">
                  Simpan
                </button>
              </Col>
            </Form>
          </Col>
        </Col>
      </Col>
    </Row>
  );
};

export default Profile;
