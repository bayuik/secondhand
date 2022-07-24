import { Col, Row, Image } from "react-bootstrap";
import { NavbarSearch } from "../../components";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CardList from "../../components/CardList";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Product() {

  return (
    <Row>
      <NavbarSearch />
      <div className="spacing mx-auto">
      <NavbarSearch/>
      <div id="daftarjual" className="container content position-relative">
        <Row>
          <Col md={12} className="d-flex mb-3 ">
            <p className="mt-2 h2 fw-bold">Daftar Jual Saya</p>
          </Col>
          <div className="container mb-4 ">
            <div className="card-body p-0">
              <div className="profile-card border border-1 shadow bg-body rounded">
                <div className="profile-img d-inline">
                  <Image
                    src="/penjual1.png"
                    width="50"
                    height="50"
                    className="rounded"
                    alt="..."
                  ></Image>
                </div>
                <div className="profile-name d-inline">
                  Nama Penjual
                  <br />
                  <font className="profile-kota ">Kota</font>
                </div>
                <div className="profile-button d-inline float-end mt-2">
                    <button type="button" className="btn btn-outline-dark">
                      Edit
                    </button>
                </div>
              </div>
            </div>
          </div>
        </Row>
        <div className="hidden-button">
          <Link href="/profile/">
            <button type="button" className="btn btn-primary">
              Produk
            </button>
          </Link>
          <Link href="/daftarjual/diminati">
            <button type="button" className="btn btn-primary">
              Diminati
            </button>
          </Link>
          <Link href="/daftarjual/terjual">
            <button type="button" className="btn btn-primary">
              Terjual
            </button>
          </Link>
        </div>
        <div className="card-position d-flex">
          <div className="card-list-seller me-5">
            <CardList />
          </div>
          <div className="">
            <div>
              <Image src="/diminati.png"  alt="..."/>
              Belum ada produkmu yang diminati nih, sabar ya rejeki nggak kemana kok
            </div>
          </div>
        </div>
      </div>
      </div>
    </Row>
  );
};

export default Product;
