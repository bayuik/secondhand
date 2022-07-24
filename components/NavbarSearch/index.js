import { Col, Form, Navbar, Nav, Container, ListGroup, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogoImage, Notification } from "../../components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Link from "next/link";
import { faSearch, faUser, faList, faBell, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const ListIconButton = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <ListGroup horizontal>
        <Col className="ms-auto">
          <FontAwesomeIcon icon={faList} id="btnIcon" className="icons" />
          <FontAwesomeIcon icon={faBell} id="btnIcon" className="icons" onClick={() => setShow(true)} />
          <Link href="/profile">
            <a className="text-dark">
              <FontAwesomeIcon icon={faUser} id="btnIcon" className="icons" />
            </a>
          </Link>
        </Col>
      </ListGroup>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Notifikasi</Modal.Title>
        </Modal.Header>
        <Notification />
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const LoginButton = () => {
  const [login, setLogin] = useState(false);
  const checkLogin = () => {
    if (window.localStorage.getItem("token") != null) {
      setLogin(false);
    } else {
      setLogin(true);
    }
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <>
      {login && (
        <Button href="/login" style={{ backgroundColor: "#7126B5", borderRadius: "10px" }}>
          <FontAwesomeIcon icon={faArrowRightToBracket} id="btnIcon" className="" />
          &nbsp; Masuk
        </Button>
      )}
    </>
  );
};

const NavbarSearch = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <Col className="invisible-content">
      <Navbar expand="lg" variant="light" bg="body" fixed="top" className="shadow p-2 mb-5 rounded nav-bar">
        <Container>
          <Navbar.Brand href="/">
            <LogoImage />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Form className="d-flex">
              <Col className="search-box">
                <Form.Control type="search" placeholder="Cari di sini..." className=" sbox me-auto" aria-label="Search" />
                <FontAwesomeIcon icon={faSearch} id="btnIcon" />
              </Col>
            </Form>
          </Nav>
          {path == "/home" ? <LoginButton /> : <ListIconButton />}
        </Container>
      </Navbar>
    </Col>
  );
};

export default NavbarSearch;
