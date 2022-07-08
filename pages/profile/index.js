import { Col, Row, Form } from "react-bootstrap";
import { NavbarStandard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import ImageUploading from 'react-images-uploading';

const Profile = () => {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    const { name, city, address, phone, photo } = data;
    const res = await axios
      .put("https://api-secondhand-fsw.herokuapp.com/profile/", {
        name,
        city,
        address,
        phone,
        photo,
      })
      .then((val) => {
        alert("Add Profile Success");
        window.location.href = "/product";
      })
      .catch((err) => {
        alert("Add Profile Failed");
      });
  };

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
      <div className="logo-invisible">
      <NavbarStandard title='Lengkapi Info Akun' />
      </div>
      <Col md={6} className="my-auto mx-auto">
        <div className="spacing">
          <div className="center ">
            <p className="title-visible fw-bold"> Lengkapi Info Akun </p>
          </div>
          <div className="mx-auto my-auto CamIcon">
          <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
              {({imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps}) => (
              // write your building UI
                <div className="upload__image-wrapper">
                  <label htmlFor="file-upload">
                    <FontAwesomeIcon icon={faCamera} className="camera-icon" style={isDragging ? { color: 'red' } : undefined}  onClick={onImageUpload}{...dragProps} {...register("photo")}/>
                  </label>
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image['data_url']} alt="" width={130} height={130} />
                      <input id="file-upload" type="file" className="custom-rounded p-2 image-file"/>
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>Update</button>
                        <button onClick={() => onImageRemove(index)}>Remove</button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
          </div>
          <div className="mx-auto w-75">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group controlId="name" className="form-spacing">
                <Form.Label className="fw-bold font-control">Nama </Form.Label>
                <Form.Control type="text" placeholder="Nama" className="custom-rounded p-2 font-control form-input" {...register("name")}/>
              </Form.Group>
              <Form.Group controlId="kota" className="form-spacing">
                <Form.Label className="fw-bold font-control">Kota</Form.Label>
                <Form.Control type="text" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2 font-control form-input" {...register("city")} />
              </Form.Group>
              <Form.Group controlId="alamat" className="form-spacing">
                <Form.Label className="fw-bold font-control">Alamat</Form.Label>
                <textarea className="form-control custom-rounded p-2 font-control " placeholder="Contoh: Jalan Ikan Hiu 33" {...register("address")}></textarea>
              </Form.Group>
              <Form.Group controlId="hp" className="form-spacing">
                <Form.Label className="fw-bold font-control">No Handphone</Form.Label>
                <Form.Control type="text" placeholder="contoh: +628123456789" className="custom-rounded p-2 font-control form-input" {...register("phone")}/>
              </Form.Group>
              <div className="d-grid gap-2 mt-4 form-spacing">
                <button className="btn text-white purple-bg custom-rounded p-2 ms-2 font-control" type="submit">
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
