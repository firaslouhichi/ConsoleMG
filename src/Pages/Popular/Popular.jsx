import React from "react";
import "./popular.scss";
import { Container } from "@mui/material";
import { Row } from "antd";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { PROD_DATA } from "../../Assets/data/data";
import Prodcard from "../ProdCard/Prodcard";
import Item from "antd/es/list/Item";

const Popular = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="product-top d-flex align-items-center justify-content-between">
              <h3>Available Products</h3>
              <span>
                <Link to="/home">Explore more</Link>
              </span>
            </div>
          </Col>

          {PROD_DATA.slice(0, 9).map((item) => (
            <Col lg="3" className=" d-flex mb-2 ">
              <Prodcard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Popular;
