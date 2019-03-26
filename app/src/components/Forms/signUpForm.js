import React from "react";
import { Container, Button, Form, Col } from "react-bootstrap";

function SignUp(props) {

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
        <Col>
          <Form.Control placeholder="Password x2" />
        </Col>
      </Form>
      <Button variant="primary" type="submit">
        Sign Up!
      </Button>
    </Container>
  );
}

export default SignUp;
