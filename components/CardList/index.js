import { Col,Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCube, faHeart, faDollar,faAngleRight} from "@fortawesome/free-solid-svg-icons";

const CardList = () => {
    return (
      <div id="cardlist" className="card border border-2 shadow bg-body rounded">
        <div className="card-body">
          <p className="kategori card-text fw-bold">Kategori</p>
          <p className="semua-prod card-text">
            <a href="">
              <FontAwesomeIcon icon={faCube} id="btnIcon" className="me-2" />
              Semua Produk 
              <FontAwesomeIcon icon={faAngleRight} id="btnIcon" className="float-end" />
            </a>
          </p>
          <hr />
          <p className="diminati card-text">
            <a href="">
              <FontAwesomeIcon icon={faHeart} id="btnIcon" className="me-2" />
                Diminati 
              <FontAwesomeIcon icon={faAngleRight} id="btnIcon" className="float-end" />
            </a>
          </p>
          <hr />
          <p className="terjual card-text">
            <a href="">
              <FontAwesomeIcon icon={faDollar} id="btnIcon" className="me-2" />
                Terjual 
              <FontAwesomeIcon icon={faAngleRight} id="btnIcon" className="float-end" />
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default CardList;
  