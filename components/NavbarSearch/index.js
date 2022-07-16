import { Col, Form, Navbar, Nav, Container, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogoImage } from "../../components";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { faSearch, faUser, faList, faBell, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

const ListIconButton = () => {
  return (
    <ListGroup horizontal>
      <div className="ms-auto">
        <FontAwesomeIcon icon={faList} id="btnIcon" className="icons" />
        <FontAwesomeIcon icon={faBell} id="btnIcon" className="icons" />
        <FontAwesomeIcon icon={faUser} id="btnIcon" className="icons" />
      </div>
    </ListGroup>
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
    <Col>
      {login && (
        <Button href="/login" style={{ backgroundColor: "#7126B5", borderRadius: "10px" }}>
          <FontAwesomeIcon icon={faArrowRightToBracket} id="btnIcon" className="" />
          &nbsp; Masuk
        </Button>
      )}
    </Col>
  );
};

const NavbarSearch = () => {
  const router = useRouter();
  const path = router.pathname;

  return (
    <div className="invisible-content">
      <Navbar expand="lg" variant="light" bg="body" fixed="top" className="shadow p-2 mb-5 rounded nav-bar">
        <Container>
          <Navbar.Brand href="/">
            <LogoImage />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Form className="d-flex">
              <div className="search-box">
                <Form.Control type="search" placeholder="Cari di sini..." className=" sbox me-auto" aria-label="Search" />
                <FontAwesomeIcon icon={faSearch} id="btnIcon" />
              </div>
            </Form>
          </Nav>
          {path == "/home" ? <LoginButton /> : <ListIconButton />}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSearch;
