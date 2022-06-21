import { Col,Image } from "react-bootstrap";
const CardList = () => {
    return (
      <div id="cardlist" className="card border border-3">
        <div className="card-body">
          <p className="kategori card-text fw-bold">Kategori</p>
          <p className="semua-prod card-text">
            <a href="">
              Semua Produk <i className="icon-gt fw-bold float-end">&gt;</i>
            </a>
          </p>
          <hr />
          <p className="diminati card-text">
            <a href="">
              Diminati <i className="icon-gt fw-bold float-end">&gt;</i>
            </a>
          </p>
          <hr />
          <p className="terjual card-text">
            <a href="">
              Terjual <i className="icon-gt fw-bold float-end">&gt;</i>
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default CardList;