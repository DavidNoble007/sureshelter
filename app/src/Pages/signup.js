import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import SignUpForm from "../components/Forms/signUpForm";
import CardBodyTwo from "../components/Card/CardTwo";


function SignUp() {
  return (
    <Container>
      <Row>
      <Col>
        <h3 style={{padding: 20, color: "#ffffff"}}>SUBSCRIBE TO RECEIVE OUR NEWSLETTER</h3>
        <SignUpForm />
      </Col>
      <Col>
      <CardBodyTwo />
      </Col>
      </Row>
    </Container>
  );
}

export default SignUp;
