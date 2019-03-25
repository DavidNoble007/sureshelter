import React, { Component } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CardBody from '../components/Card/index';
import Col from 'react-bootstrap/Col'
import CardBodyTwo from "../components/Card/CardTwo";

function Volunteer() {
  return (
   
    <div style={{backgroundColor: "#3BFBFF", height:960}}>
<Container>
        <Row>
          <Col>
            <CardBody />
          </Col>
          
          <Col>       
           <CardBodyTwo />
          </Col>    
          </Row>

      </Container>
    </div>
    

  );
}

export default Volunteer;
