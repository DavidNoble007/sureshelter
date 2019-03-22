import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardBody from '../components/Card/index';
import Col from 'react-bootstrap/Col'
// import Jumbotron from "../components/Jumbotron";

function Volunteer() {
  return (
    <div>
      {/* <Jumbotron fluid>
      <Container>
        <h1>Volunteer with us!</h1>
        <h3>
        Thank you for your interest in volunteering. With only a handful of programs around the valley, volunteers play a crucial role in delivering services every night to our cities homeless residents.

    </h3>
      </Container>
    </Jumbotron> */}

      <Container>
        <Row><Col>
          <CardBody />
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

export default Volunteer;
