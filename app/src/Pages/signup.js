import React from "react";
import { Container, Col } from "react-bootstrap";
import SignUpForm from "../components/Forms/signUpForm";


function SignUp() {
  return (
    <Container>
      <Col>
        <h3>LOGIN</h3>
        <SignUpForm />
      </Col>
    </Container>
  );
}

export default SignUp;
