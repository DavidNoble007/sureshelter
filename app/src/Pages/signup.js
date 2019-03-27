import React from "react";
import { Container, Col } from "react-bootstrap";
import SignUpForm from "../components/Forms/signUpForm";


function SignUp() {
  return (
    <Container>
      <Col>
        <h3 style={{padding: 20, color: "#ffffff"}}>SUBSCRIBE TO RECEIVE OUR NEWSLETTER</h3>
        <SignUpForm />
      </Col>
    </Container>
  );
}

export default SignUp;
