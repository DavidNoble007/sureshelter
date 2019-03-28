import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import SignUpForm from "../components/Forms/signUpForm";
import CardBodyTwo from "../components/Card/CardTwo";


function SignUp() {
  return (
    <Container>
      <Row>
      <Col>
        <p style={{padding: 20, textAlign: "center"}}>SUBSCRIBE TO RECEIVE OUR NEWSLETTER</p>
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
