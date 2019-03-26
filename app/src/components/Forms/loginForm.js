import React from "react";
import { Container, Button, Form, Col } from "react-bootstrap";

function Login(props) {

  return (
    <Container
      style={{ height: 400, padding: 20 }}
      className="d-Form"
      {...props}
    >
      <Form>
        <Col>
          <Form.Group controlId="formGroupEmail">
            <Form.Label />
            <Form.Control type="email" placeholder="Email" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Control placeholder="Password" />
        </Col>
      </Form>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Container>
  );
}

export default Login;
