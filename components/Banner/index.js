import { Col, Image } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Col className="mt-5 pt-5">
      <Carousel className="product-img">
        <div>
          <Image src="/banner.png" alt="image1" className="product_img rounded-3" style={{ width: "700px", height: "200px" }}></Image>
        </div>
        <div>
          <Image src="/banner.png" alt="image2" className="product_img rounded-3" style={{ width: "700px", height: "200px" }}></Image>
        </div>
        <div>
          <Image src="/banner.png" alt="image3" className="product_img rounded-3" style={{ width: "700px", height: "200px" }}></Image>
        </div>
      </Carousel>
    </Col>
  );
};

export default Banner;
