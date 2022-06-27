import { Col, Image } from "react-bootstrap";
const LogoImage = () => {
  return (
    <Col md={2}>
      <Image src="/logo-image.png" alt="Logo Image" className="logo-image" />
    </Col>
  );
};

export default LogoImage;
