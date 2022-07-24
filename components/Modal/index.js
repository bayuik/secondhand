import { Col, Card, Row, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Modal = ({ id, harga_tawar, product_name, price, product_photo, name, city, phone }) => {
  return (
    <Col md={4} className="me-3">
      <Card style={{ width: "18rem" }} className="modal-card">
        <Row>
          <Col>
            <FontAwesomeIcon icon={faX} className="px-3 pt-3 pb-1 faX" />
          </Col>
        </Row>
        <Card.Body>
          <p className="font-14 fw-bold">Yeay kamu berhasil mendapatkan harga yang sesuai</p>
          <p className="mb-2 pb-2 text-muted font-14">Segera hubungi pembeli melalui whatsapp untuk transaksi selanjutnya</p>
          <Card className="modal-card">
            <Card.Title className="font-14 text-center pt-3 fw-bold">Jam Tangan Casio</Card.Title>
            <Card.Body>
              <Row>
                <Col md={3}>
                  <Image src="/penjual2.png" alt="penjual1" className="seller_img rounded-3"></Image>
                </Col>
                <Col>
                  <h6 className="fw-bold font-14">{name}</h6>
                  <Card.Subtitle className="mb-2 text-muted font-control">{city}</Card.Subtitle>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={3}>
                  <Image src={`https://api-secondhand-fsw.herokuapp.com/download/${product_photo}`} alt={product_name} className="seller_img rounded-3"></Image>
                </Col>
                <Col>
                  <div className="font-14">{product_name}</div>
                  <div className="font-14"> Rp. {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                  <div className="font-14"> Ditawar Rp. {harga_tawar.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Col className="d-grid gap-2 mt-3">
            <Col className="btn-group text-center" role="group">
              <Link href={`https://wa.me/${phone}`}>
                <a target="_blank" className="mx-auto">
                  <Button className="purple-bg custom-rounded p-2 me-2 font-14 text-center" type="button">
                    Hubungi via Whatsapp
                  </Button>
                </a>
              </Link>
            </Col>
          </Col>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Modal;
