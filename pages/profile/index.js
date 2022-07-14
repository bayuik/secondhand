import { Col, Row, Form, Image } from "react-bootstrap";
import { NavbarStandard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import ImageUploading from 'react-images-uploading';

const Profile = () => {
  const [show, setShow] = useState(true);
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
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
                  {show &&
                  <label htmlFor="file-upload" onClick={() => setShow(!show)}>
                    <FontAwesomeIcon icon={faCamera} className="camera-icon" 
                    style={isDragging ? { color: 'red' } : undefined}  
                    onClick={onImageUpload}{...dragProps}/>
                  </label>}
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <Image src={image['data_url']} alt="" width={130} height={130} onClick={() => onImageUpdate(index)} {...register("photo")}/>
                      <input id="file-upload" type="file" className="custom-rounded p-2 image-file"/>
                      <div className="image-item__btn-wrapper" onClick={() => setShow(true)}>
                        <button onClick={() => onImageRemove(index)} className="btn text-white purple-bg custom-rounded py-2 px-4 mt-3 font-control">Remove</button>
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
                <Form.Control type="text" placeholder="Nama" className="custom-rounded p-2 font-control form-input" {...register("name" , {required:'name is required'})}/>
              </Form.Group>
              <Form.Group controlId="kota" className="form-spacing">
                <Form.Label className="fw-bold font-control">Kota</Form.Label>
                <Form.Control type="text" placeholder="Contoh: johndee@gmail.com" className="custom-rounded p-2 font-control form-input" {...register("city", {required:'city is required'})} />
              </Form.Group>
              <Form.Group controlId="alamat" className="form-spacing">
                <Form.Label className="fw-bold font-control">Alamat</Form.Label>
                <textarea className="form-control custom-rounded p-2 font-control " placeholder="Contoh: Jalan Ikan Hiu 33" {...register("address", {required:'address is required'})}></textarea>
              </Form.Group>
              <Form.Group controlId="hp" className="form-spacing">
                <Form.Label className="fw-bold font-control">No Handphone</Form.Label>
                <Form.Control type="text" placeholder="contoh: +628123456789" className="custom-rounded p-2 font-control form-input" {...register("phone", {required:'phone is required'})}/>
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
