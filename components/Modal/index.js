import { Col, Card, Row, Image, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const CardProduct = () => {
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
                  <h6 className="fw-bold font-14">Nama Pembeli</h6>
                  <Card.Subtitle className="mb-2 text-muted font-control">Kota</Card.Subtitle>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col md={3}>
                  <Image src="/1.png" alt="penjual1" className="seller_img rounded-3"></Image>
                </Col>
                <Col>
                  <div className="font-14">Jam Tangan Casio</div>
                  <div className="font-14"> Rp. 250.000</div>
                  <div className="font-14"> Ditawar Rp. 200.000</div>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="d-grid gap-2 mt-3">
            <div className="btn-group" role="group">
              <Button className="purple-bg custom-rounded p-2 me-2 font-14 text-center" type="button">
                Hubungi via Whatsapp
                <Image className="whatsapp ms-2" src="/whatsapp.svg"></Image>
              </Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProduct;
