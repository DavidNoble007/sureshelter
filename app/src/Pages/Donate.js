import React, { Component } from "react";
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import CardBody from '../components/Card/index';
import DonateForm from '../components/Forms/donateForm';
import DonateCard from '../components/Card/DonateCard'
function Donate() {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          "https://media.npr.org/assets/img/2018/01/09/gettyimages-901547744_wide-5be547c0dc69471823fd6808f0f83115a9db22e5-s800-c85.jpg" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: 960
      }}>;
 <div>
        <Container>

          <Jumbotron />
          <Row>
            <h2 style={{ fontStyle: "Stencil Std, fantasy" }}>
              BUILDING A MOVEMENT TO END HOMELESSNESS
            </h2>
          </Row>
          <Row>
            <Col>
              <h3>DONATIONS</h3>
              <DonateForm />
            </Col>
          </Row>
        </Container>
      </div>
    </div>

  );
}

export default Donate;
