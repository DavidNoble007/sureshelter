import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardBody from '../components/Card/index';
import Col from 'react-bootstrap/Col';
import DonateForm from '../components/Forms/donate';

function Donate() {
  return (
    <div>
      <Container>
        <Row><Col>
          <h3>DONATIONS</h3>
        <DonateForm />
        </Col>
          <Col>
            <CardBody />
          </Col>
          <Col>
            <CardBody />
          </Col>
        </Row>

      </Container>
    </div>

  );
}

export default Donate;
