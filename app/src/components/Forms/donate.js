import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Container } from "react-bootstrap";
import "./style.css"

function DonateForm(props) {
  return (
    <Container style={{height:400, padding:20}} className="d-Form" {...props}>
    <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
  <Form.Group controlId="formGroupEmail">
    <Form.Label></Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label></Form.Label>
    <Form.Control as="textarea" rows="3" />
  </Form.Group>
</Form>
</Container>

  );
}

export default DonateForm;