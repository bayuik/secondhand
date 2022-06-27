import { Form, Navbar, Nav, Container, ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogoImage } from "../../components";
import { faSearch, faUser, faList, faBell } from "@fortawesome/free-solid-svg-icons";

const NavbarSearch = () => {
  return (
    <div className="invisible-content">
      <Navbar expand="lg" variant="light" bg="body" fixed="top" className="shadow p-2 mb-5 rounded nav-bar">
        <Container>
          <Navbar.Brand href="#">
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

          <ListGroup horizontal>
            <div className="ms-auto">
              <FontAwesomeIcon icon={faList} id="btnIcon" className="icons" />
              <FontAwesomeIcon icon={faBell} id="btnIcon" className="icons" />
              <FontAwesomeIcon icon={faUser} id="btnIcon" className="icons" />
            </div>
          </ListGroup>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarSearch;
