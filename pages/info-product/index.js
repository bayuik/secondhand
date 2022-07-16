import { Col, Row, Form, Image } from "react-bootstrap";
import { NavbarStandard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import ImageUploading from "react-images-uploading";
import Router from "next/router";

const InfoProduct = () => {
  const [show, setShow] = useState(true);
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { product_name, price, category, description, product_photo } = data;
    const res = await axios
      .post("https://api-secondhand-fsw.herokuapp.com/product", {
        product_name,
        price,
        category,
        description,
        product_photo,
      })
      .then((val) => {
        Router.push("/product");
      })
      .catch((err) => {
        alert(JSON.stringify(data));
      });
  };

  return (
    <Row>
      <NavbarStandard title="" />
      <Col md={6} className="my-auto mx-auto">
        <Col className="mx-auto w-75 spacing">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="produk" className="mt-3">
              <Form.Label className="fw-bold">Nama Produk</Form.Label>
              <Form.Control type="text" placeholder="Nama Produk" className="custom-rounded p-2" {...register("product_name", { required: "product name is required" })} />
            </Form.Group>
            <Form.Group controlId="harga" className="mt-3">
              <Form.Label className="fw-bold">Harga Produk</Form.Label>
              <Form.Control type="text" placeholder="Rp 0,00" className="custom-rounded p-2" {...register("price", { required: "price is required" })} />
            </Form.Group>
            <Form.Group controlId="kategori" className="mt-3">
              <Form.Label className="fw-bold">Kategori</Form.Label>
              <Form.Select aria-label="Default select example" className="custom-rounded p-2" {...register("category", { required: "category is required" })}>
                <option value="">Pilih Ketegori</option>
                <option value="Hobi">Hobi</option>
                <option value="kendaraan">Kendaran</option>
                <option value="baju">Baju</option>
                <option value="elektronik">Elektronik</option>
                <option value="kesehatan">Kesehatan</option>
              </Form.Select>
            </Form.Group>
            <Col>{errors.category && <span className="text-sm text-red-500">{errors.category.message}</span>}</Col>
            <Form.Group controlId="deskripsi" className="mt-3">
              <Form.Label className="fw-bold">Deskripsi</Form.Label>
              <textarea className="form-control custom-rounded p-2" placeholder="Contoh: Jalan Ikan Hiu 33" {...register("description", { required: "description is required" })}></textarea>
            </Form.Group>
            <Form.Group controlId="image-product" className="mt-3">
              <Form.Label className="fw-bold">Foto Produk</Form.Label>
              <br></br>
              <ImageUploading multiple value={images} onChange={onChange} maxNumber={maxNumber} dataURLKey="data_url">
                {({ imageList, onImageUpload, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
                  // write your building UI
                  <Col className="upload__image-wrapper">
                    {show && (
                      <label htmlFor="file-upload" onClick={() => setShow(!show)}>
                        <FontAwesomeIcon icon={faPlus} id="btnIcon" className="plus-icon" style={isDragging ? { color: "red" } : undefined} onClick={onImageUpload} {...dragProps} />
                      </label>
                    )}
                    {imageList.map((image, index) => (
                      <Col key={index} className="image-item">
                        <Image src={image["data_url"]} alt="" width={130} height={130} onClick={() => onImageUpdate(index)} {...register("product_photo", { required: "image is required" })} />
                        <input id="file-upload" type="file" className="custom-rounded p-2 image-file" />
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
            </Form.Group>
            <Col className="d-grid gap-2 mt-4">
              <Col className="btn-group" role="group">
                <button className="btn purple-outline custom-rounded p-2 me-2" type="submit">
                  Preview
                </button>
                <button className="btn text-white purple-bg custom-rounded p-2 ms-2" type="submit">
                  Terbitkan
                </button>
              </Col>
            </Col>
          </Form>
        </Col>
      </Col>
    </Row>
  );
};

export default InfoProduct;
