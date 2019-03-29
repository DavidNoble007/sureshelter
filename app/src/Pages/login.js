import React from "react";
import { Container, Jumbotron, Col } from "react-bootstrap";
import LoginForm from "../components/Forms/loginForm";


function Login() {
  return (
    <div style={{
      backgroundImage:
        "url(" +
        "https://www.myjewishlearning.com/wp-content/uploads/2004/11/homeless.jpg" +
        ")",
      height: 600,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      margin: -24
    }}>
    <Container>
      <Col>
      <strong>
              <p style={{ fontStyle: "Stencil Std, fantasy", fontSize: 36, color: "#045148" }}>LOGIN TO YOUR ACCOUNT</p></strong>
        <LoginForm />
      </Col>
    </Container>
    </div>
  );
}

export default Login;
