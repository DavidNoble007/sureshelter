import React, { useState } from "react";
// import { connect } from "react-redux";
// import { signin } from "../state/auth/actions";
import { Container, Button, Form, Col, Row } from "react-bootstrap";

function Login(props) {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

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

// export default connect(
//     null,
//     null
//   )(Login);

// function Form({ children }) {
//   return (
//     <Form>

//     </Form>
//   );
// }

export default Login;
