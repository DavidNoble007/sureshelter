import React from "react";
import { Container, Jumbotron, Col } from "react-bootstrap";
import SignUpForm from "../components/Forms/signUpForm";



function SignUp() {
  return (
    <div style={{
      backgroundImage:
        "url(" +
        "http://thehomelesscharity.org/wp-content/uploads/2018/09/homeless-american.jpg" +
        ")",
      height: 600,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      margin: -24
    }}>
      <Container>
        <br></br>
        <Jumbotron style={{
          backgroundImage:
            "url(" +
            "http://www.tents4homeless.org/wp-content/uploads/2014/12/Homeless-002.jpg" +
            ")"
        }} >
          <Col>
            <strong>
              <p style={{ fontStyle: "Stencil Std, fantasy", fontSize: 36, color: "red" }}>SIGNUP AND SUBSCRIBE TO RECEIVE OUR NEWSLETTER</p></strong>
            <SignUpForm />
          </Col>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default SignUp;
