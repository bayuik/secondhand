import { Col, Row, Form, Image } from "react-bootstrap";
import { NavbarStandard } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ImageUploading from "react-images-uploading";
import Router from "next/router";
import { ToastContainer, toast } from "react-toastify";
import FormData from "form-data";


const InfoProduct = () => {
  const [show, setShow] = useState(true);
  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList) => {
    setImages(imageList);
  };

  const { register, handleSubmit, errors} = useForm();
  const onSubmit = async (data) => {
    try {
      const { product_name, price, category, description, product_photo } = data;
      const formData = new FormData();
      formData.append("product_name", product_name);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("description", description);
      formData.append("product_photo", images[0].file);
      const res = await axios.post("https://api-secondhand-fsw.herokuapp.com/product",formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        toast.success("Add Product Success", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        Router.push("/product");
    } catch (err) {
        toast.error(`Add Product Failed`, {
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
      <NavbarStandard title="" />
      <ToastContainer />
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
            {/* <Col>{errors.category && <span className="text-sm text-red-500">{errors.category.message}</span>}</Col> */}
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
                      <label onClick={() => setShow(!show)}>
                        <FontAwesomeIcon icon={faPlus} className="plus-icon" style={isDragging ? { color: "red" } : undefined} onClick={onImageUpload} {...dragProps} />
                      </label>
                    )}
                    {imageList.map((image, index) => (
                      <Col key={index} className="image-item">
                        <Image src={image["data_url"]} alt="description of image" width={130} height={130} onClick={() => onImageUpdate(index)} />
                        <Form.Control type="file" className="custom-rounded p-2 image-file" {...register("product_photo")} />
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
