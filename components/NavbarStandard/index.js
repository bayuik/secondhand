import { Navbar, Container } from "react-bootstrap";
import { LogoImage } from "..";

const NavbarStandard = ({ title }) => {
  return (
    <Navbar expand="lg" variant="light" bg="body" fixed="top" className="shadow p-2 mb-5 rounded ">
      <Container>
        <Navbar.Brand href="#" className="invisible-content">
          <LogoImage />
        </Navbar.Brand>
        <div className="mx-auto ">
          <h5 className="fw-bold ">{title}</h5>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarStandard;
