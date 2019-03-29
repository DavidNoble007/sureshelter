import React from "react";
import { Container, Col } from "react-bootstrap";
import LoginForm from "../components/Forms/loginForm";


function Login() {
  return (
    
    <Container>
      <Col>
        <LoginForm />
      </Col>
    </Container>
  );
}

export default Login;
