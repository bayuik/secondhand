import { Col,Image } from "react-bootstrap";
const Card = () => {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <Image src="/rectengle-23.png" className="card-img-top" alt=""></Image>
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the cards content. </p>
        </div>
      </div>
    );
  };
  
  export default Card;