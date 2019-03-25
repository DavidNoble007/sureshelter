import React from "react";
import { Form, Col, Row } from 'react-bootstrap';

function DonateForm({ children }) {
  return (
    <Form>
  <Row>
    <Col>
      <Form.Control placeholder="First name" />
    </Col>
    <Col>
      <Form.Control placeholder="Last name" />
    </Col>
  </Row>
</Form>
  );
}

export default DonateForm;