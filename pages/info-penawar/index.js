import { Col, Row, Image, Card, Navbar, Container,Button } from "react-bootstrap";
import { LogoImage } from "../../components";

function InfoPenawar() {

  return (
    <Row>
        <Navbar expand="lg" variant="light" bg="body" fixed="top" className="shadow p-2 mb-5 rounded ">
            <Container>
            <Navbar.Brand href="#" className="invisible-content"><LogoImage /></Navbar.Brand>
            <div className="mx-auto ">
                    <h5 className="fw-bold ">Info Penawar</h5>
            </div>
            </Container>
        </Navbar>
        <div className="mx-auto spacing">
        <Container>
            <Row className="justify-content-md-center ">
                <Col md={{ span: 6 }}>
                    <Card className="mt-3 card-size card-product">
                        <Card.Body>
                        <div class="row">
                            <div class="col-2">
                            <Image src="/penjual2.png" alt="penjual1"className="seller_img rounded-3"></Image>
                            </div>
                            <div class="col">
                                <h6 className="fw-bold ">Nama Penjual</h6>
                                <Card.Subtitle className="mb-2 text-muted font-control">Kota</Card.Subtitle>
                            </div>
                        </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-3">
                <Col md={{ span: 6 }}>
                <p>Daftar produkmu yang di tawar</p>
                <Card className="card-product">
                    <Card.Body>
                        <div class="row">
                            <div class="col-2">
                                <Image src="/1.png" alt="penjual1" className="seller_img rounded-3"></Image>
                            </div>
                            <div class="col">
                                <div className="row">
                                    <div className="col-8"> 
                                        <Card.Subtitle className="mb-2 text-muted font-control ">Penawaran Produk</Card.Subtitle>
                                    </div>
                                    <div className="col-3">
                                        <Card.Subtitle className="mb-2 text-muted font-control text-end">20 Apr, 14.04</Card.Subtitle>
                                    </div>
                                </div>
                                <div className="font-14">Jam Tangan Casio</div>
                                <div className="font-14"> Rp. 250.000</div>
                                <div className="font-14"> Ditawar Rp. 200.000</div>
                                <div style={{ marginLeft: "100px"}} className= 'mt-3'>
                                    <Button style={{ width: '150px' }} className="purple-outline custom-rounded p-2 me-2" type="button">Tolak</Button>
                                    <Button style={{ width: '150px' }} className="text-white purple-bg custom-rounded p-2 " type="button">Terima</Button>
                                </div>
                            </div>
                        </div>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        </div>
    </Row>
  );
};


export default InfoPenawar;
